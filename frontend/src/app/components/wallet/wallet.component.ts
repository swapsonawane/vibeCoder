import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { WalletService } from '../../services/wallet.service';
import { AccountService } from '../../services/account.service';
import { 
  DigitalWallet, 
  WalletTransaction, 
  WalletSummary,
  CryptoHolding,
  QRPayment,
  TopUpRequest,
  WithdrawRequest,
  PaymentRequest
} from '../../models/wallet.model';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit, OnDestroy {
  wallet: DigitalWallet | null = null;
  walletSummary: WalletSummary | null = null;
  recentTransactions: WalletTransaction[] = [];
  cryptoHoldings: CryptoHolding[] = [];
  myQRCodes: QRPayment[] = [];
  accounts: Account[] = [];
  
  // UI State
  activeTab: string = 'overview';
  showTopUpModal = false;
  showWithdrawModal = false;
  showSendModal = false;
  showQRModal = false;
  showCryptoModal = false;
  isLoading = false;
  
  // Form data
  topUpForm = {
    amount: 0,
    sourceAccountId: '',
    pin: ''
  };
  
  withdrawForm = {
    amount: 0,
    destinationAccountId: '',
    pin: ''
  };
  
  sendForm = {
    recipientWallet: '',
    amount: 0,
    description: '',
    pin: ''
  };
  
  qrForm = {
    amount: 0,
    description: ''
  };
  
  cryptoForm = {
    symbol: '',
    amount: 0,
    action: 'buy',
    pin: ''
  };
  
  // QR generation state
  generatedQR: any = null;
  isGeneratingQR = false;
  qrCodeDataURL: string = '';
  
  availableCryptos: any[] = [];
  
  private subscriptions = new Subscription();

  constructor(
    private walletService: WalletService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.loadWalletData();
    this.loadAccounts();
    this.loadAvailableCryptos();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  loadWalletData(): void {
    this.isLoading = true;
    
    // Load wallet info
    this.subscriptions.add(
      this.walletService.getWallet().subscribe({
        next: (wallet) => {
          this.wallet = wallet;
          this.loadWalletSummary();
          this.loadRecentTransactions();
          this.loadCryptoHoldings();
          this.loadMyQRCodes();
        },
        error: (error) => {
          if (error.message.includes('not found')) {
            // Wallet doesn't exist, offer to create one
            this.createWallet();
          }
          this.isLoading = false;
        }
      })
    );
  }

  createWallet(): void {
    this.subscriptions.add(
      this.walletService.createWallet().subscribe({
        next: (wallet) => {
          this.wallet = wallet;
          this.loadWalletData();
        },
        error: () => this.isLoading = false
      })
    );
  }

  loadWalletSummary(): void {
    this.subscriptions.add(
      this.walletService.getWalletSummary().subscribe({
        next: (summary) => {
          this.walletSummary = summary;
          this.isLoading = false;
        }
      })
    );
  }

  loadRecentTransactions(): void {
    this.subscriptions.add(
      this.walletService.getTransactions(0, 5).subscribe({
        next: (response) => {
          this.recentTransactions = response.transactions;
        }
      })
    );
  }

  loadCryptoHoldings(): void {
    this.subscriptions.add(
      this.walletService.getCryptoHoldings().subscribe({
        next: (holdings) => {
          this.cryptoHoldings = holdings;
        }
      })
    );
  }

  loadMyQRCodes(): void {
    console.log('Loading QR codes...');
    this.subscriptions.add(
      this.walletService.getMyQRCodes().subscribe({
        next: (qrCodes) => {
          console.log('QR codes loaded:', qrCodes);
          this.myQRCodes = qrCodes;
        },
        error: (error) => {
          console.error('Error loading QR codes:', error);
        }
      })
    );
  }

  loadAccounts(): void {
    this.subscriptions.add(
      this.accountService.getAccounts().subscribe({
        next: (accounts) => {
          this.accounts = accounts;
        }
      })
    );
  }

  loadAvailableCryptos(): void {
    this.subscriptions.add(
      this.walletService.getAvailableCryptos().subscribe({
        next: (cryptos) => {
          this.availableCryptos = cryptos;
        }
      })
    );
  }

  // Tab Management
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  // Top Up Wallet
  openTopUpModal(): void {
    this.showTopUpModal = true;
    this.topUpForm = { amount: 0, sourceAccountId: '', pin: '' };
  }

  closeTopUpModal(): void {
    this.showTopUpModal = false;
  }

  topUpWallet(): void {
    if (this.topUpForm.amount <= 0 || !this.topUpForm.sourceAccountId) {
      return;
    }

    const request: TopUpRequest = {
      walletId: this.wallet!.id,
      amount: this.topUpForm.amount,
      sourceAccountId: this.topUpForm.sourceAccountId,
      currency: 'USD',
      pin: this.topUpForm.pin
    };

    this.subscriptions.add(
      this.walletService.topUpWallet(request).subscribe({
        next: () => {
          this.closeTopUpModal();
          this.loadWalletData();
        }
      })
    );
  }

  // Withdraw from Wallet
  openWithdrawModal(): void {
    this.showWithdrawModal = true;
    this.withdrawForm = { amount: 0, destinationAccountId: '', pin: '' };
  }

  closeWithdrawModal(): void {
    this.showWithdrawModal = false;
  }

  withdrawFromWallet(): void {
    if (this.withdrawForm.amount <= 0 || !this.withdrawForm.destinationAccountId) {
      return;
    }

    const request: WithdrawRequest = {
      walletId: this.wallet!.id,
      amount: this.withdrawForm.amount,
      destinationAccountId: this.withdrawForm.destinationAccountId,
      currency: 'USD',
      pin: this.withdrawForm.pin
    };

    this.subscriptions.add(
      this.walletService.withdrawFromWallet(request).subscribe({
        next: () => {
          this.closeWithdrawModal();
          this.loadWalletData();
        }
      })
    );
  }

  // Send Payment
  openSendModal(): void {
    this.showSendModal = true;
    this.sendForm = { recipientWallet: '', amount: 0, description: '', pin: '' };
  }

  closeSendModal(): void {
    this.showSendModal = false;
  }

  sendPayment(): void {
    if (this.sendForm.amount <= 0 || !this.sendForm.recipientWallet) {
      return;
    }

    const request: PaymentRequest = {
      recipientWallet: this.sendForm.recipientWallet,
      amount: this.sendForm.amount,
      currency: 'USD',
      description: this.sendForm.description,
      paymentType: 'INSTANT',
      pin: this.sendForm.pin
    };

    this.subscriptions.add(
      this.walletService.sendPayment(request).subscribe({
        next: () => {
          this.closeSendModal();
          this.loadWalletData();
        }
      })
    );
  }

  // QR Code Management
  openQRModal(): void {
    console.log('Opening QR Modal - button clicked!');
    this.showQRModal = true;
    this.qrForm = { amount: 0, description: '' };
    this.generatedQR = null; // Reset any previously generated QR
    this.isGeneratingQR = false;
    console.log('showQRModal is now:', this.showQRModal);
  }

  closeQRModal(): void {
    this.showQRModal = false;
    this.generatedQR = null;
    this.isGeneratingQR = false;
  }

  generateQRCode(): void {
    console.log('Generating QR with form data:', this.qrForm);
    this.isGeneratingQR = true;
    
    this.subscriptions.add(
      this.walletService.generateQRCode(
        this.qrForm.amount || undefined,
        this.qrForm.description || undefined
      ).subscribe({
        next: (qrPayment) => {
          console.log('QR Code generated:', qrPayment);
          this.generatedQR = qrPayment;
          this.generateQRCodeImage(qrPayment);
          this.isGeneratingQR = false;
          this.loadMyQRCodes();
          // Don't close modal immediately - let user see the QR code
        },
        error: (error) => {
          console.error('QR generation error:', error);
          this.isGeneratingQR = false;
        }
      })
    );
  }

  generateNewQR(): void {
    this.generatedQR = null;
    this.qrCodeDataURL = '';
    this.qrForm = { amount: 0, description: '' };
  }

  downloadQRCode(): void {
    if (this.qrCodeDataURL && this.generatedQR) {
      const link = document.createElement('a');
      link.download = `QR_${this.generatedQR.qrCode}.png`;
      link.href = this.qrCodeDataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  generateQRCodeImage(qrPayment: any): void {
    // Create QR code data in a format similar to payment apps
    // This could be a URL that payment apps recognize
    const paymentUrl = `bankgenie://pay?wallet=${qrPayment.qrCode}&amount=${qrPayment.amount || ''}&currency=${qrPayment.currency}&desc=${encodeURIComponent(qrPayment.description || '')}&merchant=${encodeURIComponent(qrPayment.merchantName)}`;
    
    // Alternative: Use a more standard format
    const qrData = qrPayment.amount 
      ? `BANKGENIE:${qrPayment.qrCode}:${qrPayment.amount}:${qrPayment.currency}:${qrPayment.description}`
      : `BANKGENIE:${qrPayment.qrCode}:::${qrPayment.description}`;

    // Generate QR code using the real QR library
    this.createQRCodeCanvas(qrData);
  }

  createQRCodeCanvas(data: string): void {
    try {
      // Use the real QR code library
      const qr = (window as any).qrcode(0, 'M'); // Type 0 (auto), Error correction level M
      qr.addData(data);
      qr.make();
      
      // Create canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const moduleCount = qr.getModuleCount();
      const cellSize = 8; // Size of each QR module
      const margin = 4; // Margin around QR code
      const size = moduleCount * cellSize + (margin * 2);
      
      canvas.width = size;
      canvas.height = size;
      
      if (ctx) {
        // White background
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, size, size);
        
        // Draw QR modules
        ctx.fillStyle = '#000000';
        for (let row = 0; row < moduleCount; row++) {
          for (let col = 0; col < moduleCount; col++) {
            if (qr.isDark(row, col)) {
              ctx.fillRect(
                margin + col * cellSize,
                margin + row * cellSize,
                cellSize,
                cellSize
              );
            }
          }
        }
        
        this.qrCodeDataURL = canvas.toDataURL();
      }
    } catch (error) {
      console.error('QR Code generation failed:', error);
      // Fallback to a simple pattern if QR library fails
      this.createFallbackQR(data);
    }
  }

  private createFallbackQR(data: string): void {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const size = 200;
    
    canvas.width = size;
    canvas.height = size;
    
    if (ctx) {
      // White background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, size, size);
      
      // Simple fallback pattern
      ctx.fillStyle = '#000000';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('QR Code', size/2, size/2 - 20);
      ctx.fillText('Generation', size/2, size/2);
      ctx.fillText('Error', size/2, size/2 + 20);
      
      // Draw a simple border
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.strokeRect(10, 10, size-20, size-20);
      
      this.qrCodeDataURL = canvas.toDataURL();
    }
  }



  // Crypto Trading
  openCryptoModal(action: 'buy' | 'sell' = 'buy'): void {
    this.showCryptoModal = true;
    this.cryptoForm = { symbol: '', amount: 0, action, pin: '' };
  }

  closeCryptoModal(): void {
    this.showCryptoModal = false;
  }

  executeCryptoTrade(): void {
    if (!this.cryptoForm.symbol || this.cryptoForm.amount <= 0) {
      console.error('Invalid crypto form data:', this.cryptoForm);
      return;
    }

    console.log('Executing crypto trade:', this.cryptoForm);

    if (this.cryptoForm.action === 'buy') {
      this.subscriptions.add(
        this.walletService.buyCrypto(
          this.cryptoForm.symbol,
          this.cryptoForm.amount,
          this.cryptoForm.pin
        ).subscribe({
          next: (result) => {
            console.log('Crypto buy result:', result);
            this.closeCryptoModal();
            this.loadWalletData();
          },
          error: (error) => {
            console.error('Crypto buy error:', error);
          }
        })
      );
    } else {
      this.subscriptions.add(
        this.walletService.sellCrypto(
          this.cryptoForm.symbol,
          this.cryptoForm.amount,
          this.cryptoForm.pin
        ).subscribe({
          next: (result) => {
            console.log('Crypto sell result:', result);
            this.closeCryptoModal();
            this.loadWalletData();
          },
          error: (error) => {
            console.error('Crypto sell error:', error);
          }
        })
      );
    }
  }

  // Utility Methods
  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getTransactionIcon(type: string): string {
    switch (type) {
      case 'CREDIT': return 'fas fa-arrow-down text-success';
      case 'DEBIT': return 'fas fa-arrow-up text-danger';
      case 'TRANSFER': return 'fas fa-exchange-alt text-info';
      case 'QR_PAYMENT': return 'fas fa-qrcode text-primary';
      case 'CRYPTO_BUY': return 'fab fa-bitcoin text-warning';
      case 'CRYPTO_SELL': return 'fab fa-bitcoin text-secondary';
      default: return 'fas fa-circle text-muted';
    }
  }

  getCryptoIcon(symbol: string): string {
    switch (symbol.toLowerCase()) {
      case 'btc': return 'fab fa-bitcoin';
      case 'eth': return 'fab fa-ethereum';
      default: return 'fas fa-coins';
    }
  }
}
