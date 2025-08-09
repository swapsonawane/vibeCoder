import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { Subscription } from 'rxjs';
import { AiChatService, ChatMessage } from '../../services/ai-chat.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  @ViewChild('messageInput') private messageInput!: ElementRef;

  messages: ChatMessage[] = [];
  newMessage = '';
  isTyping = false;
  isChatOpen = false;
  unreadCount = 0;
  
  // Magical Features
  magicActivated = false;
  isListening = false;
  showMagicSuggestions = false;
  magicPlaceholder = 'Cast your banking spell here...';
  
  // Voice Recognition Properties
  private recognition: any;
  isVoiceSupported = false;
  voiceError = '';
  voiceStatus = '';
  private listeningTimeout: any;
  private maxListeningTime = 10000; // 10 seconds max listening
  
  private magicPlaceholders = [
    'Cast your banking spell here...',
    'Whisper your financial wish...',
    'What magic shall I perform?',
    'Your wish is my command...',
    'Tell me your banking desire...'
  ];

  private messagesSubscription: Subscription = new Subscription();
  private typingSubscription: Subscription = new Subscription();

  constructor(private aiChatService: AiChatService) {}

  ngOnInit(): void {
    this.subscribeToMessages();
    this.subscribeToTyping();
    this.initializeVoiceRecognition();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  private subscribeToMessages(): void {
    this.messagesSubscription = this.aiChatService.messages$.subscribe(messages => {
      const previousLength = this.messages.length;
      this.messages = messages;
      
      // Update unread count if chat is closed
      if (!this.isChatOpen && messages.length > previousLength) {
        const newMessages = messages.slice(previousLength);
        const unreadMessages = newMessages.filter(msg => !msg.isFromUser);
        this.unreadCount += unreadMessages.length;
      }
    });
  }

  private subscribeToTyping(): void {
    this.typingSubscription = this.aiChatService.isTyping$.subscribe(isTyping => {
      this.isTyping = isTyping;
    });
  }

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
    if (this.isChatOpen) {
      this.unreadCount = 0;
      // Focus input when chat opens
      setTimeout(() => {
        if (this.messageInput) {
          this.messageInput.nativeElement.focus();
        }
      }, 100);
    }
  }



  sendQuickReply(reply: string): void {
    // Add magical effect for quick replies
    this.addMagicalQuickReplyEffect();
    this.aiChatService.sendMessage(reply).subscribe();
  }

  private addMagicalQuickReplyEffect(): void {
    // Visual feedback for quick reply magic
    const chatContainer = this.chatContainer?.nativeElement;
    if (chatContainer) {
      chatContainer.classList.add('quick-reply-magic');
      setTimeout(() => {
        chatContainer.classList.remove('quick-reply-magic');
      }, 800);
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private scrollToBottom(): void {
    if (this.chatContainer) {
      try {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      } catch (err) {
        console.warn('Could not scroll to bottom:', err);
      }
    }
  }

  formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date));
  }

  getMessageTime(timestamp: Date): string {
    const now = new Date();
    const messageDate = new Date(timestamp);
    const diffMinutes = Math.floor((now.getTime() - messageDate.getTime()) / (1000 * 60));

    if (diffMinutes < 1) return 'now';
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    if (diffMinutes < 1440) return `${Math.floor(diffMinutes / 60)}h ago`;
    return messageDate.toLocaleDateString();
  }

  getAbsoluteValue(value: number): number {
    return Math.abs(value);
  }

  downloadStatement(statementType: string, period: string): void {
    // Add immediate user feedback
    const processingMessage = `🧞‍♂️ Conjuring your ${statementType} statement for ${period}... Please wait while I work my magic! ✨`;
    this.sendMessage(processingMessage);
    
    try {
      // Call the AI service to handle the download
      this.aiChatService.handleStatementDownload(statementType, period);
      
      // Add success feedback after a delay
      setTimeout(() => {
        const successMessage = `🎉 Statement magic completed! Your ${statementType} statement for ${period} should now be downloaded. 
        
        📁 Check your Downloads folder for the file. 
        
        💡 If the file doesn't open automatically, try right-clicking and selecting "Open with" your preferred PDF viewer, or open it as a text document if PDF generation wasn't available.`;
        
        this.sendMessage(successMessage);
      }, 3500); // Allow time for PDF generation
      
    } catch (error) {
      console.error('Error downloading statement:', error);
      
      // Add error feedback
      setTimeout(() => {
        const errorMessage = `🔮 Oops! The statement magic encountered an issue. Here are some things to try:
        
        • Check your browser's download settings
        • Ensure pop-ups are not blocked
        • Try refreshing the page and attempting again
        • Contact support if the issue persists
        
        Error details: ${error}`;
        
        this.sendMessage(errorMessage);
      }, 2000);
    }
  }

  clearChat(): void {
    this.aiChatService.clearChat();
  }

  closeChat(): void {
    this.isChatOpen = false;
  }

  // Magical Feature Methods
  activateMagic(): void {
    this.magicActivated = true;
    this.rotateMagicPlaceholder();
  }

  deactivateMagic(): void {
    this.magicActivated = false;
  }

  private initializeVoiceRecognition(): void {
    // Check if we're running on HTTPS (required for Web Speech API)
    const isSecure = location.protocol === 'https:' || location.hostname === 'localhost';
    
    if (!isSecure) {
      this.isVoiceSupported = false;
      this.voiceError = '🔒 Voice magic requires HTTPS connection. Please use a secure connection.';
      console.warn('Web Speech API requires HTTPS connection');
      return;
    }

    // Check if Web Speech API is supported
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      this.isVoiceSupported = true;
      this.recognition = new SpeechRecognition();
      
      // Configure speech recognition
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';
      this.recognition.maxAlternatives = 1;
      
      // Set up event handlers
      this.recognition.onstart = () => {
        console.log('🎤 Voice recognition started');
        this.isListening = true;
        this.voiceStatus = 'Listening for your magical command...';
        this.voiceError = '';
        this.setListeningTimeout();
      };
      
      this.recognition.onresult = (event: any) => {
        let finalTranscript = '';
        let interimTranscript = '';
        
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          const confidence = event.results[i][0].confidence;
          
          console.log(`Voice recognition result: "${transcript}" (confidence: ${confidence})`);
          
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }
        
        if (finalTranscript) {
          this.processVoiceCommand(finalTranscript.trim());
        } else if (interimTranscript) {
          this.voiceStatus = `Hearing: "${interimTranscript}"...`;
        }
      };
      
      this.recognition.onerror = (event: any) => {
        console.error('Voice recognition error:', event.error);
        this.handleVoiceError(event.error);
      };
      
      this.recognition.onend = () => {
        console.log('🎤 Voice recognition ended');
        this.isListening = false;
        this.voiceStatus = '';
        this.clearListeningTimeout();
      };
      
    } else {
      this.isVoiceSupported = false;
      this.voiceError = 'Voice recognition not supported in this browser. Please use Chrome, Edge, or Safari.';
      console.warn('Web Speech API not supported in this browser');
    }
  }

  toggleVoiceRecognition(): void {
    if (!this.isVoiceSupported) {
      this.voiceError = '🎤 Voice magic requires a compatible browser (Chrome, Edge, Safari) with HTTPS connection';
      return;
    }

    if (this.isListening) {
      this.stopVoiceListening();
    } else {
      this.startVoiceListening();
    }
  }

  private async startVoiceListening(): Promise<void> {
    if (!this.recognition || this.isListening) return;
    
    try {
      // Check microphone permissions first
      if (navigator.permissions) {
        const permissionStatus = await navigator.permissions.query({ name: 'microphone' as PermissionName });
        
        if (permissionStatus.state === 'denied') {
          this.voiceError = '🚫 Microphone access denied. Please enable microphone permissions in your browser settings.';
          return;
        }
      }
      
      this.voiceError = '';
      console.log('🎤 Starting voice recognition...');
      this.recognition.start();
    } catch (error) {
      console.error('Failed to start voice recognition:', error);
      this.handleVoiceError('failed_to_start');
    }
  }

  private stopVoiceListening(): void {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
    this.isListening = false;
    this.voiceStatus = '';
    this.clearListeningTimeout();
  }

  private processVoiceCommand(command: string): void {
    this.voiceStatus = `🧞‍♂️ Processing: "${command}"`;
    
    // Add magical voice processing effect
    setTimeout(() => {
      this.newMessage = command;
      this.sendMessage();
      this.voiceStatus = '✨ Voice command cast successfully!';
      
      // Clear status after a short delay
      setTimeout(() => {
        this.voiceStatus = '';
      }, 2000);
    }, 500);
  }

  private handleVoiceError(error: string): void {
    this.isListening = false;
    this.clearListeningTimeout();
    
    switch (error) {
      case 'no-speech':
        this.voiceError = '🤫 No speech detected. Please speak clearly and try again.';
        break;
      case 'audio-capture':
        this.voiceError = '🎤 Microphone not found. Please check your microphone connection.';
        break;
      case 'not-allowed':
        this.voiceError = '🚫 Microphone access denied. Please click the microphone icon in your browser\'s address bar to allow access.';
        break;
      case 'network':
        this.voiceError = '🌐 Network error occurred. Please check your internet connection and try again.';
        break;
      case 'service-not-allowed':
        this.voiceError = '🔒 Voice service not allowed. Please check your browser settings and ensure you\'re using HTTPS.';
        break;
      case 'bad-grammar':
        this.voiceError = '📝 Speech recognition grammar error. Please try speaking more clearly.';
        break;
      case 'language-not-supported':
        this.voiceError = '🗣️ Language not supported. Voice magic currently works in English only.';
        break;
      case 'aborted':
        this.voiceError = '⏹️ Voice recognition was interrupted. Click the microphone to try again.';
        break;
      default:
        this.voiceError = `🔮 Voice magic encountered an issue: ${error}. Please try again.`;
    }
    
    console.warn('Voice recognition error:', error);
    
    // Clear error after 8 seconds
    setTimeout(() => {
      this.voiceError = '';
    }, 8000);
  }

  private setListeningTimeout(): void {
    this.listeningTimeout = setTimeout(() => {
      if (this.isListening) {
        this.stopVoiceListening();
        this.voiceStatus = '⏱️ Listening timeout. Click the microphone to try again.';
        setTimeout(() => {
          this.voiceStatus = '';
        }, 3000);
      }
    }, this.maxListeningTime);
  }

  private clearListeningTimeout(): void {
    if (this.listeningTimeout) {
      clearTimeout(this.listeningTimeout);
      this.listeningTimeout = null;
    }
  }

  castSpell(spellType: string): void {
    const spells = {
      'balance': 'Show me my account balance',
      'transfer': 'Transfer money between accounts',
      'bills': 'Show me my bill payments',
      'wallet': 'Show me my digital wallet',
      'qr': 'Show me qr payments',
      'crypto': 'Show me my cryptocurrency portfolio',
      'loyalty': 'Show me my loyalty points',
      'social': 'Show me social payments',
      'contactless': 'Show me contactless payments',
      'statement': 'Download account statement',
      'tax': 'Download tax statement',
      'download': 'Download statement'
    };
    
    this.newMessage = spells[spellType as keyof typeof spells] || 'Help me with banking';
    this.sendMessage();
    this.showMagicSuggestions = false;
  }

  onInputFocus(): void {
    this.showMagicSuggestions = true;
  }

  onInputBlur(): void {
    // Delay hiding to allow button clicks
    setTimeout(() => {
      this.showMagicSuggestions = false;
    }, 200);
  }

  private rotateMagicPlaceholder(): void {
    const randomIndex = Math.floor(Math.random() * this.magicPlaceholders.length);
    this.magicPlaceholder = this.magicPlaceholders[randomIndex];
  }

  sendMessage(message?: string): void {
    const messageToSend = message || this.newMessage.trim();
    if (messageToSend) {
      // Add magical sending effect
      this.addMagicalSendEffect();
      this.aiChatService.sendMessage(messageToSend).subscribe();
      if (!message) {
        this.newMessage = '';
      }
      this.showMagicSuggestions = false;
    }
  }

  private addMagicalSendEffect(): void {
    // Create temporary magical effect (visual feedback)
    const messageElement = this.messageInput?.nativeElement;
    if (messageElement) {
      messageElement.classList.add('magic-cast');
      setTimeout(() => {
        messageElement.classList.remove('magic-cast');
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    this.messagesSubscription.unsubscribe();
    this.typingSubscription.unsubscribe();
  }
} 