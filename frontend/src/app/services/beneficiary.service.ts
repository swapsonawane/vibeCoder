import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Beneficiary {
  id: string;
  name: string;
  accountNumber: string;
  bankName: string;
  routingNumber?: string;
  type: 'INTERNAL' | 'EXTERNAL';
  category: 'PERSONAL' | 'BUSINESS' | 'UTILITY';
  isActive: boolean;
  createdAt: Date;
  lastUsed?: Date;
  email?: string;
  phone?: string;
  nickname?: string;
}

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {
  private beneficiaries: Beneficiary[] = [
    {
      id: '1',
      name: 'John Smith',
      accountNumber: 'ACC2001234567',
      bankName: 'First National Bank',
      routingNumber: '123456789',
      type: 'EXTERNAL',
      category: 'PERSONAL',
      isActive: true,
      createdAt: new Date('2024-01-15'),
      lastUsed: new Date('2024-01-20'),
      email: 'john.smith@email.com',
      phone: '+1-555-0234',
      nickname: 'John - Rent'
    },
    {
      id: '2',
      name: 'Electric Company',
      accountNumber: 'UTIL123456',
      bankName: 'City Electric Co.',
      type: 'EXTERNAL',
      category: 'UTILITY',
      isActive: true,
      createdAt: new Date('2024-01-10'),
      lastUsed: new Date('2024-01-30'),
      nickname: 'Electric Bill'
    },
    {
      id: '3',
      name: 'Mom\'s Account',
      accountNumber: 'ACC1001234569',
      bankName: 'NetBanking',
      type: 'INTERNAL',
      category: 'PERSONAL',
      isActive: true,
      createdAt: new Date('2024-01-05'),
      lastUsed: new Date('2024-01-25'),
      nickname: 'Mom'
    }
  ];

  constructor() { }

  getBeneficiaries(): Observable<Beneficiary[]> {
    return of(this.beneficiaries);
  }

  getBeneficiary(id: string): Observable<Beneficiary | undefined> {
    const beneficiary = this.beneficiaries.find(b => b.id === id);
    return of(beneficiary);
  }

  addBeneficiary(beneficiary: Omit<Beneficiary, 'id' | 'createdAt'>): Observable<Beneficiary> {
    const newBeneficiary: Beneficiary = {
      ...beneficiary,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    this.beneficiaries.push(newBeneficiary);
    return of(newBeneficiary);
  }

  updateBeneficiary(id: string, updates: Partial<Beneficiary>): Observable<Beneficiary | null> {
    const index = this.beneficiaries.findIndex(b => b.id === id);
    if (index !== -1) {
      this.beneficiaries[index] = { ...this.beneficiaries[index], ...updates };
      return of(this.beneficiaries[index]);
    }
    return of(null);
  }

  deleteBeneficiary(id: string): Observable<boolean> {
    const index = this.beneficiaries.findIndex(b => b.id === id);
    if (index !== -1) {
      this.beneficiaries.splice(index, 1);
      return of(true);
    }
    return of(false);
  }

  getRecentPayees(limit: number = 5): Observable<Beneficiary[]> {
    const recent = this.beneficiaries
      .filter(b => b.lastUsed)
      .sort((a, b) => (b.lastUsed?.getTime() || 0) - (a.lastUsed?.getTime() || 0))
      .slice(0, limit);
    return of(recent);
  }

  searchBeneficiaries(query: string): Observable<Beneficiary[]> {
    const filtered = this.beneficiaries.filter(b => 
      b.name.toLowerCase().includes(query.toLowerCase()) ||
      b.accountNumber.includes(query) ||
      b.bankName.toLowerCase().includes(query.toLowerCase()) ||
      (b.nickname && b.nickname.toLowerCase().includes(query.toLowerCase()))
    );
    return of(filtered);
  }
} 