import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  loading = false;
  submitted = false;
  error = '';
  message = '';
  returnUrl = '/dashboard';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['demo', Validators.required],
      password: ['password', Validators.required]
    });

    // Get return url from route parameters or default to '/dashboard'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    
    // Get message from route parameters
    this.message = this.route.snapshot.queryParams['message'] || '';

    // Request notification permission
    if ('Notification' in window) {
      Notification.requestPermission();
    }

    console.log('🔑 Login page initialized. Return URL:', this.returnUrl);
    if (this.message) {
      console.log('📝 Login message:', this.message);
    }
  }

  get f() { return this.loginForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    this.error = '';

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    console.log('🔐 Attempting login...');

    this.authService.login(this.loginForm.value).subscribe({
      next: (response: any) => {
        console.log('✅ Login successful, navigating to:', this.returnUrl);
        this.router.navigateByUrl(this.returnUrl);
      },
      error: (error: any) => {
        console.error('❌ Login failed:', error);
        this.error = 'Invalid username or password. Use "demo" and "password" for the demo.';
        this.loading = false;
      }
    });
  }
} 