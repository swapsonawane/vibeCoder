import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  notificationForm: FormGroup;
  securityForm: FormGroup;
  preferencesForm: FormGroup;
  activeTab = 'notifications';
  loading = false;
  updating = false;

  constructor(private fb: FormBuilder) {
    this.notificationForm = this.fb.group({
      emailNotifications: [true],
      smsNotifications: [false],
      pushNotifications: [true],
      transactionAlerts: [true],
      marketingEmails: [false],
      securityAlerts: [true],
      billReminders: [true],
      lowBalanceAlerts: [true]
    });

    this.securityForm = this.fb.group({
      twoFactorAuth: [false],
      biometricLogin: [false],
      sessionTimeout: [30],
      loginAlerts: [true],
      deviceTracking: [true]
    });

    this.preferencesForm = this.fb.group({
      language: ['en'],
      currency: ['USD'],
      dateFormat: ['MM/DD/YYYY'],
      timeFormat: ['12'],
      theme: ['light'],
      transactionsPerPage: [10],
      defaultAccount: ['']
    });
  }

  ngOnInit(): void {
    this.loadSettings();
  }

  private loadSettings(): void {
    this.loading = true;
    
    // Simulate loading settings from API
    setTimeout(() => {
      // Load saved settings or use defaults
      this.loading = false;
    }, 500);
  }

  onNotificationSubmit(): void {
    if (this.notificationForm.valid) {
      this.updating = true;
      const formData = this.notificationForm.value;
      
      setTimeout(() => {
        console.log('Notification settings updated:', formData);
        this.showSuccessMessage('Notification settings updated successfully!');
        this.updating = false;
      }, 1000);
    }
  }

  onSecuritySubmit(): void {
    if (this.securityForm.valid) {
      this.updating = true;
      const formData = this.securityForm.value;
      
      setTimeout(() => {
        console.log('Security settings updated:', formData);
        this.showSuccessMessage('Security settings updated successfully!');
        this.updating = false;
      }, 1000);
    }
  }

  onPreferencesSubmit(): void {
    if (this.preferencesForm.valid) {
      this.updating = true;
      const formData = this.preferencesForm.value;
      
      setTimeout(() => {
        console.log('Preferences updated:', formData);
        this.showSuccessMessage('Preferences updated successfully!');
        this.updating = false;
      }, 1000);
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  resetToDefaults(): void {
    if (confirm('Are you sure you want to reset all settings to defaults? This action cannot be undone.')) {
      this.notificationForm.reset({
        emailNotifications: true,
        smsNotifications: false,
        pushNotifications: true,
        transactionAlerts: true,
        marketingEmails: false,
        securityAlerts: true,
        billReminders: true,
        lowBalanceAlerts: true
      });

      this.securityForm.reset({
        twoFactorAuth: false,
        biometricLogin: false,
        sessionTimeout: 30,
        loginAlerts: true,
        deviceTracking: true
      });

      this.preferencesForm.reset({
        language: 'en',
        currency: 'USD',
        dateFormat: 'MM/DD/YYYY',
        timeFormat: '12',
        theme: 'light',
        transactionsPerPage: 10,
        defaultAccount: ''
      });

      this.showSuccessMessage('Settings reset to defaults!');
    }
  }

  private showSuccessMessage(message: string): void {
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.innerHTML = `<i class="fas fa-check-circle me-2"></i>${message}`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 3000);
  }
} 