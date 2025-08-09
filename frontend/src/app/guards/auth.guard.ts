import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> | boolean {
    // First, do a synchronous check
    const token = this.authService.getToken();
    const user = this.authService.getCurrentUser();

    // If we have both token and user, allow immediately
    if (token && user) {
      return true;
    }

    // Fallback to Observable check
    return this.authService.isAuthenticated$.pipe(
      take(1),
      map((isAuthenticated: boolean) => {
        if (isAuthenticated) {
          return true;
        } else {
          this.router.navigate(['/login'], { 
            queryParams: { 
              message: 'Please log in to access this page',
              returnUrl: this.router.url 
            }
          });
          return false;
        }
      })
    );
  }
} 