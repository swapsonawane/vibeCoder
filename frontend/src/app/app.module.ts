import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// NgBootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
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
import { ChatbotComponent } from './components/chatbot/chatbot.component';
// Pipes
import { Nl2brPipe } from './pipes/nl2br.pipe';

// Services
import { AuthService } from './services/auth.service';
import { AccountService } from './services/account.service';
import { TransferService } from './services/transfer.service';
import { BillPaymentService } from './services/bill-payment.service';
import { NotificationService } from './services/notification.service';
import { BeneficiaryService } from './services/beneficiary.service';
import { AiChatService } from './services/ai-chat.service';
import { PdfStatementService } from './services/pdf-statement.service';
import { FinancialAdviceComponent } from './components/financial-advice/financial-advice.component';
import { FinancialAdviceService } from './services/financial-advice.service';
import { FinancialAnalysisComponent } from './components/financial-analysis/financial-analysis.component';
import { FinancialAnalysisService } from './services/financial-analysis.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AccountsComponent,
    TransfersComponent,
    BillPaymentComponent,
    ProfileComponent,
    SettingsComponent,
    AddBeneficiaryComponent,
    ViewBeneficiariesComponent,
    MyPayeesComponent,
    ChatbotComponent,
    Nl2brPipe,
    FinancialAdviceComponent,
    FinancialAnalysisComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    AuthService,
    AccountService,
    TransferService,
    BillPaymentService,
    NotificationService,
    BeneficiaryService,
    AiChatService,
    PdfStatementService,
    FinancialAdviceService,
    FinancialAnalysisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { } 