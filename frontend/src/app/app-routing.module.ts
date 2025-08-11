import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { TransfersComponent } from './components/transfers/transfers.component';
import { BillPaymentComponent } from './components/bill-payment/bill-payment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AddBeneficiaryComponent } from './components/beneficiaries/add-beneficiary/add-beneficiary.component';
import { ViewBeneficiariesComponent } from './components/beneficiaries/view-beneficiaries/view-beneficiaries.component';
import { MyPayeesComponent } from './components/payees/my-payees.component';
import { WalletComponent } from './components/wallet/wallet.component';

// Guards
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'accounts', 
    component: AccountsComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'transfers', 
    component: TransfersComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'bills', 
    component: BillPaymentComponent,
    canActivate: [AuthGuard] 
  },
  { 
    path: 'wallet', 
    component: WalletComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'profile', 
    component: ProfileComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'settings', 
    component: SettingsComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'beneficiaries', 
    component: ViewBeneficiariesComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'beneficiaries/add', 
    component: AddBeneficiaryComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'beneficiaries/edit/:id', 
    component: AddBeneficiaryComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'payees', 
    component: MyPayeesComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'payees/add', 
    component: AddBeneficiaryComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'payees/edit/:id', 
    component: AddBeneficiaryComponent, 
    canActivate: [AuthGuard] 
  },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 