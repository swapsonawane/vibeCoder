"use strict";
(self["webpackChunknetbanking_frontend"] = self["webpackChunknetbanking_frontend"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 4441);
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/auth/login/login.component */ 4860);
/* harmony import */ var _components_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accounts/accounts.component */ 5523);
/* harmony import */ var _components_transfers_transfers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/transfers/transfers.component */ 5513);
/* harmony import */ var _components_bill_payment_bill_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/bill-payment/bill-payment.component */ 4911);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile.component */ 1245);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/settings/settings.component */ 2205);
/* harmony import */ var _components_beneficiaries_add_beneficiary_add_beneficiary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/beneficiaries/add-beneficiary/add-beneficiary.component */ 5147);
/* harmony import */ var _components_beneficiaries_view_beneficiaries_view_beneficiaries_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/beneficiaries/view-beneficiaries/view-beneficiaries.component */ 5111);
/* harmony import */ var _components_payees_my_payees_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/payees/my-payees.component */ 7180);
/* harmony import */ var _components_financial_advice_financial_advice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/financial-advice/financial-advice.component */ 4176);
/* harmony import */ var _components_financial_analysis_financial_analysis_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/financial-analysis/financial-analysis.component */ 6075);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);

// Components












// Guards



const routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'dashboard',
  component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
}, {
  path: 'accounts',
  component: _components_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_2__.AccountsComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
}, {
  path: 'transfers',
  component: _components_transfers_transfers_component__WEBPACK_IMPORTED_MODULE_3__.TransfersComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
}, {
  path: 'bills',
  component: _components_bill_payment_bill_payment_component__WEBPACK_IMPORTED_MODULE_4__.BillPaymentComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
}, {
  path: 'profile',
  component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
}, {
  path: 'settings',
  component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__.SettingsComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
}, {
  path: 'beneficiaries',
  component: _components_beneficiaries_view_beneficiaries_view_beneficiaries_component__WEBPACK_IMPORTED_MODULE_8__.ViewBeneficiariesComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
}, {
  path: 'beneficiaries/add',
  component: _components_beneficiaries_add_beneficiary_add_beneficiary_component__WEBPACK_IMPORTED_MODULE_7__.AddBeneficiaryComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
}, {
  path: 'beneficiaries/edit/:id',
  component: _components_beneficiaries_add_beneficiary_add_beneficiary_component__WEBPACK_IMPORTED_MODULE_7__.AddBeneficiaryComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
}, {
  path: 'payees',
  component: _components_payees_my_payees_component__WEBPACK_IMPORTED_MODULE_9__.MyPayeesComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
}, {
  path: 'payees/add',
  component: _components_beneficiaries_add_beneficiary_add_beneficiary_component__WEBPACK_IMPORTED_MODULE_7__.AddBeneficiaryComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
}, {
  path: 'payees/edit/:id',
  component: _components_beneficiaries_add_beneficiary_add_beneficiary_component__WEBPACK_IMPORTED_MODULE_7__.AddBeneficiaryComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
}, {
  path: 'financial-advice',
  component: _components_financial_advice_financial_advice_component__WEBPACK_IMPORTED_MODULE_10__.FinancialAdviceComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
}, {
  path: 'financial-analysis',
  component: _components_financial_analysis_financial_analysis_component__WEBPACK_IMPORTED_MODULE_11__.FinancialAnalysisComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__.AuthGuard]
}, {
  path: '**',
  redirectTo: '/dashboard'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/auth.service */ 4796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _components_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/chatbot/chatbot.component */ 2289);






function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "nav", 4)(2, "div", 5)(3, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " NetBanking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 10)(9, "ul", 11)(10, "li", 12)(11, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Dashboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 12)(15, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Accounts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 12)(19, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Transfers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 12)(23, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Bills ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li", 12)(27, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Digital Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li", 23)(31, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Financial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ul", 26)(35, "li")(36, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Analysis & Insights ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li")(40, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Financial Advice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "li", 23)(44, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Beneficiaries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "ul", 26)(48, "li")(49, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "My Payees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "li")(53, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "View All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "li")(57, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Add Beneficiary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "ul", 39)(61, "li", 23)(62, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "ul", 26)(66, "li")(67, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "li")(71, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "hr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "li")(77, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_div_2_Template_a_click_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "main", 49)(81, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "app-chatbot");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r1.currentUser == null ? null : ctx_r1.currentUser.firstName, " ", ctx_r1.currentUser == null ? null : ctx_r1.currentUser.lastName, " ");
  }
}
class AppComponent {
  constructor(authService) {
    this.authService = authService;
    this.title = 'NetBanking';
    this.isAuthenticated = false;
    this.currentUser = null;
    this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  }
  ngOnInit() {
    // Subscribe to authentication status
    this.subscriptions.add(this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    }));
    // Subscribe to current user changes
    this.subscriptions.add(this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    }));
  }
  logout() {
    this.authService.logout();
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 2,
      consts: [[1, "app-container"], ["class", "login-container", 4, "ngIf"], [4, "ngIf"], [1, "login-container"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary", "fixed-top"], [1, "container-fluid"], ["routerLink", "/dashboard", 1, "navbar-brand"], [1, "fas", "fa-university", "me-2"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNav", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNav", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto"], [1, "nav-item"], ["routerLink", "/dashboard", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-tachometer-alt", "me-1"], ["routerLink", "/accounts", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-wallet", "me-1"], ["routerLink", "/transfers", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-exchange-alt", "me-1"], ["routerLink", "/bills", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-file-invoice", "me-1"], ["routerLink", "/wallet", "routerLinkActive", "active", 1, "nav-link"], [1, "fas", "fa-digital-tachograph", "me-1"], [1, "nav-item", "dropdown"], ["href", "#", "id", "financialDropdown", "role", "button", "data-bs-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-chart-line", "me-1"], [1, "dropdown-menu"], ["routerLink", "/financial-analysis", 1, "dropdown-item"], [1, "fas", "fa-chart-area", "me-2"], ["routerLink", "/financial-advice", 1, "dropdown-item"], [1, "fas", "fa-lightbulb", "me-2"], ["href", "#", "id", "beneficiariesDropdown", "role", "button", "data-bs-toggle", "dropdown", 1, "nav-link", "dropdown-toggle"], [1, "fas", "fa-users", "me-1"], ["routerLink", "/payees", 1, "dropdown-item"], [1, "fas", "fa-heart", "me-2"], ["routerLink", "/beneficiaries", 1, "dropdown-item"], [1, "fas", "fa-list", "me-2"], ["routerLink", "/beneficiaries/add", 1, "dropdown-item"], [1, "fas", "fa-plus", "me-2"], [1, "navbar-nav"], ["href", "#", "id", "userDropdown", "role", "button", "data-bs-toggle", "dropdown", 1, "nav-link", "dropdown-toggle", "text-white"], [1, "fas", "fa-user-circle", "me-1"], ["routerLink", "/profile", 1, "dropdown-item"], [1, "fas", "fa-user", "me-2"], ["routerLink", "/settings", 1, "dropdown-item"], [1, "fas", "fa-cog", "me-2"], [1, "dropdown-divider"], [1, "dropdown-item", 3, "click"], [1, "fas", "fa-sign-out-alt", "me-2"], [1, "main-content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AppComponent_div_2_Template, 84, 2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _components_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_1__.ChatbotComponent],
      styles: ["\n\n.app-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-color: #f8f9fa;\n}\n\n.login-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n\n.main-content[_ngcontent-%COMP%] {\n  padding-top: 76px; \n\n  min-height: 100vh;\n  background-color: #f8f9fa;\n}\n\n.main-content[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n\n\n.navbar[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  z-index: 1030;\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.4rem;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  transition: background-color 0.3s ease;\n  border-radius: 4px;\n  margin: 0 2px;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.2);\n  color: white !important;\n  font-weight: 500;\n}\n\n\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n  border-radius: 6px;\n  margin-top: 5px;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  transition: background-color 0.2s ease;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n\n\n\n@media (max-width: 768px) {\n  .main-content[_ngcontent-%COMP%] {\n    padding-top: 70px;\n  }\n  \n  .main-content[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n\n\n\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n  transition: all 0.2s ease;\n  border-radius: 6px;\n  font-weight: 500;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0066cc 0%, #004499 100%);\n  border: none;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #004499 0%, #0066cc 100%);\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  transition: transform 0.2s ease;\n  border: none;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  border-radius: 8px;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0,0,0,0.15);\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2Qiw2REFBNkQ7QUFDL0Q7O0FBRUE7RUFDRSxpQkFBaUIsRUFBRSwyQkFBMkI7RUFDOUMsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsWUFBWTtFQUNaLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZEQUE2RDtBQUMvRDs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsdUNBQXVDO0FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWFpbiBBcHAgTGF5b3V0ICovXHJcbi5hcHAtY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgcGFkZGluZy10b3A6IDc2cHg7IC8qIFNwYWNlIGZvciBmaXhlZCBuYXZiYXIgKi9cclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi8qIE5hdmlnYXRpb24gU3R5bGVzICovXHJcbi5uYXZiYXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgei1pbmRleDogMTAzMDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbjogMCAycHg7XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG59XHJcblxyXG4ubmF2LWxpbmsuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogRHJvcGRvd24gU3R5bGVzICovXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG4vKiBNb2JpbGUgUmVzcG9uc2l2ZSAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gIH1cclxuICBcclxuICAubWFpbi1jb250ZW50IC5jb250YWluZXItZmx1aWQge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIExvYWRpbmcgU3Bpbm5lciAqL1xyXG4uc3Bpbm5lci1ib3JkZXItc20ge1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIGhlaWdodDogMXJlbTtcclxufVxyXG5cclxuLyogQnV0dG9uIFN0eWxlcyAqL1xyXG4uYnRuIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNjZjYyAwJSwgIzAwNDQ5OSAxMDAlKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzAwNDQ5OSAwJSwgIzAwNjZjYyAxMDAlKTtcclxufVxyXG5cclxuLyogQ2FyZCBTdHlsZXMgKi9cclxuLmNhcmQge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLDAsMCwwLjE1KTtcclxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 4441);
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/login/login.component */ 4860);
/* harmony import */ var _components_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/accounts/accounts.component */ 5523);
/* harmony import */ var _components_transfers_transfers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/transfers/transfers.component */ 5513);
/* harmony import */ var _components_bill_payment_bill_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/bill-payment/bill-payment.component */ 4911);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ 1245);
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/settings/settings.component */ 2205);
/* harmony import */ var _components_beneficiaries_add_beneficiary_add_beneficiary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/beneficiaries/add-beneficiary/add-beneficiary.component */ 5147);
/* harmony import */ var _components_beneficiaries_view_beneficiaries_view_beneficiaries_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/beneficiaries/view-beneficiaries/view-beneficiaries.component */ 5111);
/* harmony import */ var _components_payees_my_payees_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/payees/my-payees.component */ 7180);
/* harmony import */ var _components_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/chatbot/chatbot.component */ 2289);
/* harmony import */ var _pipes_nl2br_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/nl2br.pipe */ 6400);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ 4796);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/account.service */ 61);
/* harmony import */ var _services_transfer_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/transfer.service */ 8513);
/* harmony import */ var _services_bill_payment_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/bill-payment.service */ 1604);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/notification.service */ 7473);
/* harmony import */ var _services_beneficiary_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/beneficiary.service */ 463);
/* harmony import */ var _services_ai_chat_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/ai-chat.service */ 1449);
/* harmony import */ var _services_pdf_statement_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/pdf-statement.service */ 9192);
/* harmony import */ var _components_financial_advice_financial_advice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/financial-advice/financial-advice.component */ 4176);
/* harmony import */ var _services_financial_advice_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/financial-advice.service */ 1760);
/* harmony import */ var _components_financial_analysis_financial_analysis_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/financial-analysis/financial-analysis.component */ 6075);
/* harmony import */ var _services_financial_analysis_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/financial-analysis.service */ 1098);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 7580);





// NgBootstrap

// Routing

// Components












// Pipes

// Services













class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
      providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_14__.AuthService, _services_account_service__WEBPACK_IMPORTED_MODULE_15__.AccountService, _services_transfer_service__WEBPACK_IMPORTED_MODULE_16__.TransferService, _services_bill_payment_service__WEBPACK_IMPORTED_MODULE_17__.BillPaymentService, _services_notification_service__WEBPACK_IMPORTED_MODULE_18__.NotificationService, _services_beneficiary_service__WEBPACK_IMPORTED_MODULE_19__.BeneficiaryService, _services_ai_chat_service__WEBPACK_IMPORTED_MODULE_20__.AiChatService, _services_pdf_statement_service__WEBPACK_IMPORTED_MODULE_21__.PdfStatementService, _services_financial_advice_service__WEBPACK_IMPORTED_MODULE_23__.FinancialAdviceService, _services_financial_analysis_service__WEBPACK_IMPORTED_MODULE_25__.FinancialAnalysisService],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__.NgbModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent, _components_accounts_accounts_component__WEBPACK_IMPORTED_MODULE_4__.AccountsComponent, _components_transfers_transfers_component__WEBPACK_IMPORTED_MODULE_5__.TransfersComponent, _components_bill_payment_bill_payment_component__WEBPACK_IMPORTED_MODULE_6__.BillPaymentComponent, _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__.ProfileComponent, _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_8__.SettingsComponent, _components_beneficiaries_add_beneficiary_add_beneficiary_component__WEBPACK_IMPORTED_MODULE_9__.AddBeneficiaryComponent, _components_beneficiaries_view_beneficiaries_view_beneficiaries_component__WEBPACK_IMPORTED_MODULE_10__.ViewBeneficiariesComponent, _components_payees_my_payees_component__WEBPACK_IMPORTED_MODULE_11__.MyPayeesComponent, _components_chatbot_chatbot_component__WEBPACK_IMPORTED_MODULE_12__.ChatbotComponent, _pipes_nl2br_pipe__WEBPACK_IMPORTED_MODULE_13__.Nl2brPipe, _components_financial_advice_financial_advice_component__WEBPACK_IMPORTED_MODULE_22__.FinancialAdviceComponent, _components_financial_analysis_financial_analysis_component__WEBPACK_IMPORTED_MODULE_24__.FinancialAnalysisComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_31__.HttpClientModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__.NgbModule]
  });
})();

/***/ }),

/***/ 5523:
/*!***********************************************************!*\
  !*** ./src/app/components/accounts/accounts.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountsComponent: () => (/* binding */ AccountsComponent)
/* harmony export */ });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 2752);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ 8198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/account.service */ 61);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);






function AccountsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Loading your accounts...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AccountsComponent_div_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountsComponent_div_8_div_9_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const account_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.selectAccount(account_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24)(2, "div", 25)(3, "h6", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 30)(12, "h5", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const account_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("active", (ctx_r2.selectedAccount == null ? null : ctx_r2.selectedAccount.id) === account_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r2.getAccountTypeIcon(account_r6.accountType));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", account_r6.accountType, " Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](account_r6.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Opened: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 9, account_r6.openedDate, "mediumDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.formatCurrency(account_r6.balance));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Available: ", ctx_r2.formatCurrency(account_r6.availableBalance), "");
  }
}
function AccountsComponent_div_8_div_11_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 52);
  }
}
function AccountsComponent_div_8_div_11_i_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 53);
  }
}
function AccountsComponent_div_8_div_11_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Click \"Download PDF Statement\" to instantly download a professional PDF with your transaction history. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br")(5, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " The PDF will be saved directly to your Downloads folder in one click. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AccountsComponent_div_8_div_11_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 57)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Please wait while we generate your PDF statement... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AccountsComponent_div_8_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "div", 14)(2, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 33)(6, "div", 11)(7, "div", 34)(8, "div", 35)(9, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Account Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 35)(14, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Account Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 34)(19, "div", 35)(20, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Current Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 35)(25, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Available Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h5", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 11)(30, "div", 40)(31, "div", 41)(32, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountsComponent_div_8_div_11_Template_button_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.downloadStatement());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AccountsComponent_div_8_div_11_span_33_Template, 1, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AccountsComponent_div_8_div_11_i_34_Template, 1, 0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountsComponent_div_8_div_11_Template_button_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.transferMoney());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Transfer Money ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountsComponent_div_8_div_11_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.payBills());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Pay Bills ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, AccountsComponent_div_8_div_11_div_43_Template, 7, 0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, AccountsComponent_div_8_div_11_div_44_Template, 4, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r3.getAccountTypeIcon(ctx_r3.selectedAccount.accountType));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedAccount.accountType, " Account Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.selectedAccount.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.selectedAccount.accountType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.formatCurrency(ctx_r3.selectedAccount.balance));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.formatCurrency(ctx_r3.selectedAccount.availableBalance));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.downloadingPdf);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.downloadingPdf);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.downloadingPdf);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.downloadingPdf ? "Generating PDF..." : "Download PDF Statement", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.downloadingPdf);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.downloadingPdf);
  }
}
function AccountsComponent_div_8_div_12_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No Transactions Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Select an account to view transaction history");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function AccountsComponent_div_8_div_12_div_14_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td")(2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td")(6, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td")(10, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td", 30)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td")(18, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const transaction_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 19, transaction_r20.date, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r19.getTransactionIcon(transaction_r20.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", transaction_r20.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bg-success", transaction_r20.type === "CREDIT")("bg-danger", transaction_r20.type === "DEBIT")("bg-info", transaction_r20.type === "TRANSFER");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", transaction_r20.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-success", transaction_r20.type === "CREDIT")("text-danger", transaction_r20.type === "DEBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", transaction_r20.type === "DEBIT" ? "-" : "+", "", ctx_r19.formatCurrency(transaction_r20.amount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r19.formatCurrency(transaction_r20.balance), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r20.status);
  }
}
function AccountsComponent_div_8_div_12_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 67)(1, "table", 68)(2, "thead", 69)(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AccountsComponent_div_8_div_12_div_14_tr_17_Template, 20, 22, "tr", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r18.transactions);
  }
}
function AccountsComponent_div_8_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "div", 59)(2, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Transaction History ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 61)(6, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Last 30 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Last 90 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Custom Range");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AccountsComponent_div_8_div_12_div_13_Template, 6, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AccountsComponent_div_8_div_12_div_14_Template, 18, 1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.transactions.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r4.transactions.length > 0);
  }
}
function AccountsComponent_div_8_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h5", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Select an Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Click on an account from the list to view details and transaction history");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function AccountsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Account Overview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 17)(8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AccountsComponent_div_8_div_9_Template, 16, 12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AccountsComponent_div_8_div_11_Template, 45, 13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AccountsComponent_div_8_div_12_Template, 15, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AccountsComponent_div_8_div_13_Template, 7, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.accounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.selectedAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.selectedAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r1.selectedAccount);
  }
}
class AccountsComponent {
  constructor(accountService, router, route) {
    this.accountService = accountService;
    this.router = router;
    this.route = route;
    this.accounts = [];
    this.selectedAccount = null;
    this.transactions = [];
    this.loading = false;
    this.downloadingPdf = false;
  }
  ngOnInit() {
    this.loadAccounts();
  }
  loadAccounts() {
    this.loading = true;
    // Clear current data for visual feedback
    this.accounts = [];
    this.selectedAccount = null;
    this.transactions = [];
    // Add a small delay to show loading state  
    setTimeout(() => {
      // Mock data for demo
      this.accounts = [{
        id: '1',
        accountNumber: 'ACC1001234567',
        accountType: 'SAVINGS',
        balance: 15750.50,
        availableBalance: 15750.50,
        currency: 'USD',
        openedDate: new Date('2023-01-15')
      }, {
        id: '2',
        accountNumber: 'ACC1001234568',
        accountType: 'CHECKING',
        balance: 8240.25,
        availableBalance: 8240.25,
        currency: 'USD',
        openedDate: new Date('2023-02-01')
      }];
      this.loading = false;
      // Check for query parameter to auto-select account
      this.checkForAccountSelection();
    }, 500);
  }
  checkForAccountSelection() {
    this.route.queryParams.subscribe(params => {
      const accountId = params['accountId'];
      if (accountId && this.accounts.length > 0) {
        const accountToSelect = this.accounts.find(account => account.id === accountId);
        if (accountToSelect) {
          this.selectAccount(accountToSelect);
          // Scroll to the selected account for better UX
          setTimeout(() => {
            const selectedElement = document.querySelector('.list-group-item.active');
            if (selectedElement) {
              selectedElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }
          }, 100);
        }
      }
    });
  }
  selectAccount(account) {
    this.selectedAccount = account;
    this.loadTransactions(account.id);
  }
  loadTransactions(accountId) {
    // Mock transaction data
    this.transactions = [{
      id: '1',
      type: 'CREDIT',
      amount: 2500.00,
      description: 'Salary Credit',
      date: new Date('2024-01-15'),
      status: 'COMPLETED',
      balance: 15750.50
    }, {
      id: '2',
      type: 'DEBIT',
      amount: 120.00,
      description: 'Grocery Store',
      date: new Date('2024-01-14'),
      status: 'COMPLETED',
      balance: 13250.50
    }, {
      id: '3',
      type: 'TRANSFER',
      amount: 500.00,
      description: 'Internal Transfer',
      date: new Date('2024-01-13'),
      status: 'COMPLETED',
      balance: 12750.50
    }, {
      id: '4',
      type: 'DEBIT',
      amount: 75.25,
      description: 'Gas Station',
      date: new Date('2024-01-12'),
      status: 'COMPLETED',
      balance: 12250.50
    }, {
      id: '5',
      type: 'CREDIT',
      amount: 1000.00,
      description: 'Bonus Payment',
      date: new Date('2024-01-10'),
      status: 'COMPLETED',
      balance: 11750.50
    }];
  }
  // Direct PDF statement download functionality
  downloadStatement() {
    if (!this.selectedAccount) {
      alert('Please select an account first');
      return;
    }
    this.downloadingPdf = true;
    try {
      console.log('Starting PDF generation...');
      // Create PDF using jsPDF
      this.generatePDFStatement();
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('PDF generation failed: ' + (error?.message || error) + '. Downloading as text file instead.');
      this.downloadTextStatement();
    }
  }
  // Generate PDF statement using jsPDF
  generatePDFStatement() {
    console.log('Creating jsPDF instance...');
    const account = this.selectedAccount;
    const doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__.jsPDF();
    console.log('jsPDF instance created successfully');
    // Set document properties
    doc.setProperties({
      title: 'Account Statement',
      subject: 'Banking Statement',
      author: 'NetBanking',
      creator: 'NetBanking System'
    });
    // Header
    doc.setFontSize(20);
    doc.setTextColor(0, 102, 204);
    doc.text('NETBANKING', 20, 25);
    doc.setFontSize(16);
    doc.text('Account Statement', 20, 35);
    // Line under header
    doc.setDrawColor(0, 102, 204);
    doc.line(20, 40, 190, 40);
    // Account Information
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    let yPos = 55;
    doc.text('Account Holder: Demo User', 20, yPos);
    yPos += 8;
    doc.text(`Account Number: ${account.accountNumber}`, 20, yPos);
    yPos += 8;
    doc.text(`Account Type: ${account.accountType}`, 20, yPos);
    yPos += 8;
    doc.text(`Statement Date: ${new Date().toLocaleDateString()}`, 20, yPos);
    yPos += 8;
    doc.text(`Current Balance: $${account.balance.toFixed(2)}`, 20, yPos);
    yPos += 8;
    doc.text(`Available Balance: $${account.availableBalance.toFixed(2)}`, 20, yPos);
    // Transaction table
    yPos += 20;
    const tableData = this.transactions.map(t => [t.date.toLocaleDateString(), t.description, t.type, `${t.type === 'DEBIT' ? '-' : '+'}$${t.amount.toFixed(2)}`, `$${t.balance.toFixed(2)}`]);
    (0,jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__["default"])(doc, {
      head: [['Date', 'Description', 'Type', 'Amount', 'Balance']],
      body: tableData,
      startY: yPos,
      theme: 'grid',
      headStyles: {
        fillColor: [242, 242, 242],
        textColor: [0, 0, 0]
      },
      styles: {
        fontSize: 10
      },
      columnStyles: {
        3: {
          halign: 'right'
        },
        4: {
          halign: 'right'
        }
      }
    });
    // Footer - get the finalY from the last autoTable
    const finalY = doc.lastAutoTable?.finalY || yPos + 50;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text('This is a computer-generated statement and does not require a signature.', 20, finalY);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, finalY + 6);
    doc.text('Thank you for banking with NetBanking!', 20, finalY + 12);
    // Download the PDF
    const fileName = `NetBanking_Statement_${account.accountNumber}_${new Date().toISOString().split('T')[0]}.pdf`;
    console.log('Saving PDF with filename:', fileName);
    doc.save(fileName);
    console.log('PDF saved successfully');
    this.downloadingPdf = false;
    this.showSuccessMessage('PDF statement downloaded successfully!');
  }
  // Fallback text statement download
  downloadTextStatement() {
    const statementData = this.generateTextStatementData();
    const blob = new Blob([statementData], {
      type: 'text/plain'
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `NetBanking_Statement_${this.selectedAccount.accountNumber}_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
    this.showSuccessMessage('Statement downloaded as text file (PDF generation unavailable)');
  }
  showSuccessMessage(message) {
    // Create a better success notification
    const notification = document.createElement('div');
    notification.className = 'alert alert-success position-fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.innerHTML = `
      <i class="fas fa-check-circle me-2"></i>
      ${message}
      <button type="button" class="btn-close" aria-label="Close"></button>
    `;
    document.body.appendChild(notification);
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 5000);
    // Manual close button
    const closeBtn = notification.querySelector('.btn-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      });
    }
  }
  // Transfer money functionality
  transferMoney() {
    if (!this.selectedAccount) {
      alert('Please select an account first');
      return;
    }
    // Navigate to transfers page with pre-selected account
    this.router.navigate(['/transfers'], {
      queryParams: {
        fromAccount: this.selectedAccount.id,
        accountNumber: this.selectedAccount.accountNumber,
        accountType: this.selectedAccount.accountType
      }
    });
  }
  // Pay bills functionality
  payBills() {
    if (!this.selectedAccount) {
      alert('Please select an account first');
      return;
    }
    // Navigate to bills page with pre-selected account
    this.router.navigate(['/bills'], {
      queryParams: {
        fromAccount: this.selectedAccount.id,
        accountNumber: this.selectedAccount.accountNumber,
        accountType: this.selectedAccount.accountType
      }
    });
  }
  generateTextStatementData() {
    const account = this.selectedAccount;
    const statement = `
NETBANKING ACCOUNT STATEMENT
============================

Account Holder: Demo User
Account Number: ${account.accountNumber}
Account Type: ${account.accountType}
Statement Date: ${new Date().toLocaleDateString()}
Currency: ${account.currency}

ACCOUNT SUMMARY
---------------
Current Balance: $${account.balance.toFixed(2)}
Available Balance: $${account.availableBalance.toFixed(2)}

TRANSACTION HISTORY
-------------------
Date          | Type     | Description           | Amount      | Balance
${this.transactions.map(t => `${t.date.toLocaleDateString().padEnd(12)} | ${t.type.padEnd(8)} | ${t.description.padEnd(20)} | $${(t.type === 'DEBIT' ? '-' : '+') + t.amount.toFixed(2).padStart(8)} | $${t.balance.toFixed(2).padStart(10)}`).join('\n')}

---
Thank you for banking with NetBanking!
Secure Online Banking Platform
Generated on: ${new Date().toLocaleString()}
`;
    return statement;
  }
  getAccountTypeIcon(type) {
    switch (type) {
      case 'SAVINGS':
        return 'fas fa-piggy-bank';
      case 'CHECKING':
        return 'fas fa-credit-card';
      case 'BUSINESS':
        return 'fas fa-building';
      case 'JOINT':
        return 'fas fa-users';
      default:
        return 'fas fa-wallet';
    }
  }
  getTransactionIcon(type) {
    switch (type) {
      case 'CREDIT':
        return 'fas fa-arrow-down text-success';
      case 'DEBIT':
        return 'fas fa-arrow-up text-danger';
      case 'TRANSFER':
        return 'fas fa-exchange-alt text-info';
      default:
        return 'fas fa-circle';
    }
  }
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }
  static {
    this.ɵfac = function AccountsComponent_Factory(t) {
      return new (t || AccountsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AccountsComponent,
      selectors: [["app-accounts"]],
      decls: 9,
      vars: 2,
      consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-0"], [1, "fas", "fa-wallet", "me-2", "text-primary"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-sync-alt", "me-2"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], [1, "row"], [1, "col-lg-4", "mb-4"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "fas", "fa-list", "me-2"], [1, "card-body", "p-0"], [1, "list-group", "list-group-flush"], ["class", "list-group-item list-group-item-action", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "col-lg-8", "mb-4"], ["class", "card mb-4", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "list-group-item", "list-group-item-action", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "flex-grow-1"], [1, "mb-1"], [1, "me-2"], [1, "mb-1", "text-muted", "small"], [1, "text-muted"], [1, "text-end"], [1, "mb-0", "text-success"], [1, "card", "mb-4"], [1, "card-body"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label", "text-muted"], [1, "fw-bold"], [1, "text-success"], [1, "text-info"], [1, "col-12"], [1, "d-flex", "gap-2", "flex-wrap"], [1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-file-pdf me-2", 4, "ngIf"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fas", "fa-exchange-alt", "me-2"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-file-invoice", "me-2"], [1, "mt-3"], ["class", "alert alert-info py-2", 4, "ngIf"], ["class", "alert alert-warning py-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-file-pdf", "me-2"], [1, "alert", "alert-info", "py-2"], [1, "fas", "fa-info-circle", "me-1"], [1, "fas", "fa-download", "me-1"], [1, "alert", "alert-warning", "py-2"], [1, "fas", "fa-clock", "me-1"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-history", "me-2"], [1, "btn-group", "btn-group-sm"], [1, "btn", "btn-outline-primary"], ["class", "text-center text-muted py-4", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "text-center", "text-muted", "py-4"], [1, "fas", "fa-inbox", "fa-3x", "mb-3"], [1, "table-responsive"], [1, "table", "table-hover"], [1, "table-light"], [4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center"], [1, "badge"], [1, "text-end", "fw-bold"], [1, "badge", "bg-success"], [1, "card-body", "text-center", "py-5"], [1, "fas", "fa-hand-pointer", "fa-3x", "text-muted", "mb-3"]],
      template: function AccountsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " My Accounts ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountsComponent_Template_button_click_4_listener() {
            return ctx.loadAccounts();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Refresh ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AccountsComponent_div_7_Template, 6, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AccountsComponent_div_8_Template, 14, 4, "div", 6);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
      styles: [".list-group-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.list-group-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--light-color);\n}\n\n.list-group-item.active[_ngcontent-%COMP%] {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  border-bottom: 2px solid var(--border-color);\n}\n\n.btn-group-sm[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  border-radius: 8px;\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50cy9hY2NvdW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1ncm91cC1pdGVtIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuXHJcbi50YWJsZSB0aCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLmJ0bi1ncm91cC1zbSAuYnRuIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 4860:
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function LoginComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
  }
}
function LoginComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.error, " ");
  }
}
function LoginComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.error, " ");
  }
}
function LoginComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 34);
  }
}
function LoginComponent_i_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 35);
  }
}
class LoginComponent {
  constructor(formBuilder, authService, router, route) {
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
    this.loading = false;
    this.submitted = false;
    this.error = '';
    this.message = '';
    this.returnUrl = '/dashboard';
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['demo', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      password: ['password', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
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
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    console.log('🔐 Attempting login...');
    this.authService.login(this.loginForm.value).subscribe({
      next: response => {
        console.log('✅ Login successful, navigating to:', this.returnUrl);
        this.router.navigateByUrl(this.returnUrl);
      },
      error: error => {
        console.error('❌ Login failed:', error);
        this.error = 'Invalid username or password. Use "demo" and "password" for the demo.';
        this.loading = false;
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 47,
      vars: 14,
      consts: [[1, "login-wrapper"], [1, "login-card"], [1, "card"], [1, "card-body", "p-5"], [1, "text-center", "mb-4"], [1, "fas", "fa-university", "fa-3x", "text-primary", "mb-3"], [1, "card-title", "mb-2"], [1, "text-muted"], ["class", "alert alert-info mb-4", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger mb-4", "role", "alert", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], ["for", "username", 1, "form-label"], [1, "input-group"], [1, "input-group-text"], [1, "fas", "fa-user"], ["type", "text", "id", "username", "formControlName", "username", "placeholder", "Enter your username", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], [1, "mb-4"], ["for", "password", 1, "form-label"], [1, "fas", "fa-lock"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Enter your password", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-sign-in-alt me-2", 4, "ngIf"], [1, "mt-4", "p-3", "bg-light", "rounded"], ["role", "alert", 1, "alert", "alert-info", "mb-4"], [1, "fas", "fa-info-circle", "me-2"], ["role", "alert", 1, "alert", "alert-danger", "mb-4"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "invalid-feedback"], [1, "alert", "alert-danger"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-sign-in-alt", "me-2"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h2", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "NetBanking");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Secure Online Banking");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_div_10_Template, 3, 1, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 3, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11)(14, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13)(17, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LoginComponent_div_20_Template, 2, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18)(22, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13)(25, "span", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, LoginComponent_div_28_Template, 2, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, LoginComponent_div_29_Template, 3, 1, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 23)(31, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, LoginComponent_span_32_Template, 1, 0, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, LoginComponent_i_33_Template, 1, 0, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 27)(36, "small", 7)(37, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Demo Credentials:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Username: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "demo");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Password: ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "code");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["username"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["username"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["password"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["password"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Signing In..." : "Sign In", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: [".login-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  padding: 20px;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  background: rgba(255, 255, 255, 0.95);\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n  padding: 12px 16px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);\n}\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px 0 0 8px;\n  color: #6c757d;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: none;\n  border-radius: 8px;\n  padding: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  transition: all 0.3s ease;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);\n  background: linear-gradient(135deg, #5a6fd8 0%, #6a4c93 100%);\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  transform: none;\n  box-shadow: none;\n}\n\n.text-primary[_ngcontent-%COMP%] {\n  color: #667eea !important;\n}\n\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n\n.alert[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: none;\n}\n\ncode[_ngcontent-%COMP%] {\n  background-color: #f1f3f4;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-size: 0.875em;\n}\n\n@media (max-width: 576px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  \n  .card-body[_ngcontent-%COMP%] {\n    padding: 2rem !important;\n  }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNkRBQTZEO0VBQzdELGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwrQ0FBK0M7RUFDL0MsNkRBQTZEO0FBQy9EOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi13cmFwcGVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubG9naW4tY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTVweCAzNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICM2NjdlZWE7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMTAyLCAxMjYsIDIzNCwgMC4yNSk7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzVhNmZkOCAwJSwgIzZhNGM5MyAxMDAlKTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcclxuICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnRleHQtcHJpbWFyeSB7XHJcbiAgY29sb3I6ICM2NjdlZWEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNwaW5uZXItYm9yZGVyLXNtIHtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuY29kZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjNmNDtcclxuICBwYWRkaW5nOiAycHggNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXNpemU6IDAuODc1ZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5sb2dpbi13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMnJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 5147:
/*!***************************************************************************************!*\
  !*** ./src/app/components/beneficiaries/add-beneficiary/add-beneficiary.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddBeneficiaryComponent: () => (/* binding */ AddBeneficiaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_beneficiary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/beneficiary.service */ 463);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function AddBeneficiaryComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getFieldError("name"), " ");
  }
}
function AddBeneficiaryComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getFieldError("email"), " ");
  }
}
function AddBeneficiaryComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.getFieldError("phone"), " ");
  }
}
function AddBeneficiaryComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.getFieldError("accountNumber"), " ");
  }
}
function AddBeneficiaryComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.getFieldError("bankName"), " ");
  }
}
function AddBeneficiaryComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.getFieldError("routingNumber"), " ");
  }
}
function AddBeneficiaryComponent_span_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 64);
  }
}
function AddBeneficiaryComponent_i_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 65);
  }
}
class AddBeneficiaryComponent {
  constructor(fb, router, route, beneficiaryService) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.beneficiaryService = beneficiaryService;
    this.loading = false;
    this.saving = false;
    this.isPayeeMode = false; // Track if we're adding a payee or beneficiary
    this.beneficiaryForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
      nickname: [''],
      accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(5)]],
      bankName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      routingNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^\d{9}$/)]],
      type: ['EXTERNAL', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      category: ['PERSONAL', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^\+?[1-9]\d{1,14}$/)]],
      isActive: [true]
    });
  }
  ngOnInit() {
    // Detect if we're in payee mode based on the URL
    this.isPayeeMode = this.router.url.includes('/payees');
    // If payee mode, set different default category
    if (this.isPayeeMode) {
      this.beneficiaryForm.patchValue({
        category: 'UTILITY',
        type: 'EXTERNAL'
      });
    }
  }
  onSubmit() {
    if (this.beneficiaryForm.valid) {
      this.saving = true;
      const formData = this.beneficiaryForm.value;
      this.beneficiaryService.addBeneficiary(formData).subscribe({
        next: beneficiary => {
          const entityType = this.isPayeeMode ? 'Payee' : 'Beneficiary';
          console.log(`${entityType} added:`, beneficiary);
          this.showSuccessMessage(`${entityType} added successfully!`);
          setTimeout(() => {
            const redirectPath = this.isPayeeMode ? '/payees' : '/beneficiaries';
            this.router.navigate([redirectPath]);
          }, 1500);
        },
        error: error => {
          console.error('Error adding beneficiary:', error);
          this.showErrorMessage('Failed to add beneficiary. Please try again.');
          this.saving = false;
        },
        complete: () => {
          this.saving = false;
        }
      });
    } else {
      this.markFormGroupTouched(this.beneficiaryForm);
    }
  }
  onCancel() {
    const redirectPath = this.isPayeeMode ? '/payees' : '/beneficiaries';
    this.router.navigate([redirectPath]);
  }
  // Getter methods for template
  get pageTitle() {
    return this.isPayeeMode ? 'Add New Payee' : 'Add New Beneficiary';
  }
  get entityType() {
    return this.isPayeeMode ? 'Payee' : 'Beneficiary';
  }
  get backButtonText() {
    return this.isPayeeMode ? 'Back to Payees' : 'Back to Beneficiaries';
  }
  onTypeChange() {
    const type = this.beneficiaryForm.get('type')?.value;
    const routingControl = this.beneficiaryForm.get('routingNumber');
    if (type === 'INTERNAL') {
      routingControl?.clearValidators();
      this.beneficiaryForm.patchValue({
        bankName: 'NetBanking'
      });
    } else {
      routingControl?.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^\d{9}$/)]);
      if (this.beneficiaryForm.get('bankName')?.value === 'NetBanking') {
        this.beneficiaryForm.patchValue({
          bankName: ''
        });
      }
    }
    routingControl?.updateValueAndValidity();
  }
  markFormGroupTouched(formGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }
  isFieldInvalid(fieldName) {
    const field = this.beneficiaryForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(fieldName) {
    const field = this.beneficiaryForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['minlength']) return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`;
      if (field.errors['pattern']) {
        if (fieldName === 'routingNumber') return 'Routing number must be 9 digits';
        if (fieldName === 'phone') return 'Please enter a valid phone number';
        return `Please enter a valid ${fieldName}`;
      }
    }
    return '';
  }
  showSuccessMessage(message) {
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
  showErrorMessage(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-danger position-fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.innerHTML = `<i class="fas fa-exclamation-circle me-2"></i>${message}`;
    document.body.appendChild(notification);
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 4000);
  }
  static {
    this.ɵfac = function AddBeneficiaryComponent_Factory(t) {
      return new (t || AddBeneficiaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_beneficiary_service__WEBPACK_IMPORTED_MODULE_0__.BeneficiaryService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddBeneficiaryComponent,
      selectors: [["app-add-beneficiary"]],
      decls: 166,
      vars: 44,
      consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-0"], [1, "fas", "fa-plus", "me-2", "text-primary"], [1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-arrow-left", "me-2"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "fas", "fa-user-plus", "me-2"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6", "mb-4"], [1, "text-primary"], [1, "mb-3"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "nickname", 1, "form-label"], ["type", "text", "id", "nickname", "formControlName", "nickname", "placeholder", "e.g., Mom, Electric Bill, etc.", 1, "form-control"], [1, "form-text"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "beneficiary@email.com", 1, "form-control"], ["for", "phone", 1, "form-label"], ["type", "tel", "id", "phone", "formControlName", "phone", "placeholder", "+1-555-0123", 1, "form-control"], ["for", "accountNumber", 1, "form-label"], ["type", "text", "id", "accountNumber", "formControlName", "accountNumber", "placeholder", "Enter account number", 1, "form-control"], ["for", "bankName", 1, "form-label"], ["type", "text", "id", "bankName", "formControlName", "bankName", "placeholder", "Enter bank name", 1, "form-control"], ["for", "routingNumber", 1, "form-label"], ["type", "text", "id", "routingNumber", "formControlName", "routingNumber", "placeholder", "9-digit routing number", "maxlength", "9", 1, "form-control"], ["for", "type", 1, "form-label"], ["id", "type", "formControlName", "type", 1, "form-control", 3, "change"], ["value", "EXTERNAL"], ["value", "INTERNAL"], ["for", "category", 1, "form-label"], ["id", "category", "formControlName", "category", 1, "form-control"], ["value", "PERSONAL"], ["value", "BUSINESS"], ["value", "UTILITY"], [1, "form-check", "form-switch", "mb-3"], ["type", "checkbox", "id", "isActive", "formControlName", "isActive", 1, "form-check-input"], ["for", "isActive", 1, "form-check-label"], [1, "card", "bg-light"], [1, "d-flex", "align-items-center", "mb-2"], [1, "fas", "fa-user-circle", "fa-2x", "text-primary", "me-3"], [1, "card-title", "mb-0"], [1, "text-muted"], [1, "card-text"], [1, "badge"], [1, "badge", "ms-1"], [1, "d-flex", "justify-content-between", "align-items-center", "pt-3", "border-top"], [1, "fas", "fa-info-circle", "me-1"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "disabled", "click"], [1, "fas", "fa-times", "me-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-plus me-2", 4, "ngIf"], [1, "card", "mt-4"], [1, "fas", "fa-question-circle", "me-2"], [1, "col-md-4"], [1, "list-unstyled"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-plus", "me-2"]],
      template: function AddBeneficiaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddBeneficiaryComponent_Template_button_click_4_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "h5", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "form", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddBeneficiaryComponent_Template_form_ngSubmit_13_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11)(15, "div", 12)(16, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Basic Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Full Name *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, AddBeneficiaryComponent_div_22_Template, 2, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14)(24, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Nickname (Optional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14)(30, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Email Address (Optional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, AddBeneficiaryComponent_div_33_Template, 2, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 14)(35, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Phone Number (Optional)");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, AddBeneficiaryComponent_div_38_Template, 2, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 12)(40, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Account Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 14)(43, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Account Number *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, AddBeneficiaryComponent_div_46_Template, 2, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 14)(48, "label", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Bank Name *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, AddBeneficiaryComponent_div_51_Template, 2, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 14)(53, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Routing Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, AddBeneficiaryComponent_div_56_Template, 2, 1, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Required for external transfers");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 14)(60, "label", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Account Type *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "select", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AddBeneficiaryComponent_Template_select_change_62_listener() {
            return ctx.onTypeChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "External Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Internal NetBanking Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 11)(68, "div", 12)(69, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Classification");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 14)(72, "label", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Category *");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "select", 36)(75, "option", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Personal");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "option", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Business");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "option", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Utility/Service Provider");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Helps organize your beneficiaries");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "input", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "label", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " Active Beneficiary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "You can enable/disable beneficiaries anytime");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 12)(90, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Preview");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 43)(93, "div", 9)(94, "div", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "i", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div")(97, "h6", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "small", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "p", 48)(102, "small", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "span", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "span", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 51)(110, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "i", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, " Fields marked with * are required ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 53)(114, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddBeneficiaryComponent_Template_button_click_114_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "i", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Cancel ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "button", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, AddBeneficiaryComponent_span_118_Template, 1, 0, "span", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](119, AddBeneficiaryComponent_i_119_Template, 1, 0, "i", 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 59)(122, "div", 6)(123, "h6", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "i", 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, " Need Help? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 9)(127, "div", 11)(128, "div", 61)(129, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Account Types");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "ul", 62)(132, "li")(133, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Internal:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, " Other NetBanking accounts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "li")(137, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "External:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, " Accounts at other banks");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 61)(141, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "ul", 62)(144, "li")(145, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "Personal:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, " Family, friends");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "li")(149, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "Business:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, " Vendors, contractors");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "li")(153, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Utility:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, " Bills, services");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 61)(157, "h6", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Security");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "ul", 62)(160, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "All beneficiaries are encrypted");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Verify account details carefully");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "You can edit details anytime");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          let tmp_18_0;
          let tmp_19_0;
          let tmp_20_0;
          let tmp_21_0;
          let tmp_22_0;
          let tmp_23_0;
          let tmp_24_0;
          let tmp_25_0;
          let tmp_26_0;
          let tmp_27_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.pageTitle, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.backButtonText, " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.entityType, " Information ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.beneficiaryForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.isFieldInvalid("name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", "Enter " + ctx.entityType.toLowerCase() + " name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("A friendly name to easily identify this ", ctx.entityType.toLowerCase(), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.isFieldInvalid("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.isFieldInvalid("phone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("phone"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.isFieldInvalid("accountNumber"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("accountNumber"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.isFieldInvalid("bankName"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("bankName"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.isFieldInvalid("routingNumber"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isFieldInvalid("routingNumber"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ((tmp_18_0 = ctx.beneficiaryForm.get("nickname")) == null ? null : tmp_18_0.value) || ((tmp_18_0 = ctx.beneficiaryForm.get("name")) == null ? null : tmp_18_0.value) || "Beneficiary Name", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](((tmp_19_0 = ctx.beneficiaryForm.get("bankName")) == null ? null : tmp_19_0.value) || "Bank Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](((tmp_20_0 = ctx.beneficiaryForm.get("accountNumber")) == null ? null : tmp_20_0.value) || "Account Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-primary", ((tmp_21_0 = ctx.beneficiaryForm.get("category")) == null ? null : tmp_21_0.value) === "PERSONAL")("bg-success", ((tmp_22_0 = ctx.beneficiaryForm.get("category")) == null ? null : tmp_22_0.value) === "BUSINESS")("bg-warning", ((tmp_23_0 = ctx.beneficiaryForm.get("category")) == null ? null : tmp_23_0.value) === "UTILITY");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ((tmp_24_0 = ctx.beneficiaryForm.get("category")) == null ? null : tmp_24_0.value) || "PERSONAL", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-info", ((tmp_25_0 = ctx.beneficiaryForm.get("type")) == null ? null : tmp_25_0.value) === "INTERNAL")("bg-secondary", ((tmp_26_0 = ctx.beneficiaryForm.get("type")) == null ? null : tmp_26_0.value) === "EXTERNAL");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ((tmp_27_0 = ctx.beneficiaryForm.get("type")) == null ? null : tmp_27_0.value) || "EXTERNAL", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.saving || ctx.beneficiaryForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.saving);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.saving ? "Adding..." : "Add Beneficiary", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: ["\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px var(--shadow-color);\n  border-radius: 12px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: var(--light-color);\n  border-bottom: 1px solid var(--border-color);\n  border-radius: 12px 12px 0 0 !important;\n  font-weight: 600;\n}\n\n\n\n.form-control[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 12px 16px;\n  transition: all 0.2s ease;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--secondary-color);\n  box-shadow: 0 0 0 0.2rem rgba(59, 130, 246, 0.25);\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--dark-color);\n  margin-bottom: 0.5rem;\n}\n\n.form-text[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n\n\n\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--danger-color);\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: var(--danger-color);\n}\n\n\n\nh6.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary-color) !important;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid var(--light-color);\n}\n\n\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 1.5rem;\n  border-radius: 1rem;\n  background-color: var(--border-color);\n  border: none;\n  transition: all 0.2s ease;\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n\n.form-check-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.25);\n}\n\n.form-check-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--dark-color);\n  margin-left: 0.5rem;\n}\n\n\n\n.bg-light[_ngcontent-%COMP%] {\n  background-color: var(--light-color) !important;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n}\n\n\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n}\n\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary-color) !important;\n}\n\n.bg-success[_ngcontent-%COMP%] {\n  background-color: var(--success-color) !important;\n}\n\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: var(--warning-color) !important;\n}\n\n.bg-info[_ngcontent-%COMP%] {\n  background-color: var(--info-color) !important;\n}\n\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color) !important;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));\n  border: none;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: var(--border-color);\n  color: var(--dark-color);\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: var(--light-color);\n  border-color: var(--border-color);\n  color: var(--dark-color);\n}\n\n\n\n.d-flex.gap-2[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n\n\n\n.border-top[_ngcontent-%COMP%] {\n  border-color: var(--border-color) !important;\n}\n\n\n\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n\n\n\n.list-unstyled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-size: 0.9rem;\n}\n\n.list-unstyled[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n\n\n\n@media (max-width: 768px) {\n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  \n  .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  \n  .d-flex.justify-content-between[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n  \n  .d-flex.gap-2[_ngcontent-%COMP%] {\n    justify-content: center;\n    width: 100%;\n  }\n  \n  .btn[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  \n  .form-check-input[_ngcontent-%COMP%] {\n    width: 2.5rem;\n    height: 1.25rem;\n  }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9iZW5lZmljaWFyaWVzL2FkZC1iZW5lZmljaWFyeS9hZGQtYmVuZWZpY2lhcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2Y7RUFDRSxZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw0Q0FBNEM7RUFDNUMsdUNBQXVDO0VBQ3ZDLGdCQUFnQjtBQUNsQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsMkNBQTJDO0FBQzdDOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsV0FBVztBQUNYO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsbURBQW1EO0FBQ3JEOztBQUVBLFlBQVk7QUFDWjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUZBQWlGO0VBQ2pGLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlGQUFpRjtBQUNuRjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsaUNBQWlDO0VBQ2pDLHdCQUF3QjtBQUMxQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsV0FBVztBQUNYO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztFQUVBO0lBQ0UsT0FBTztFQUNUOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZvcm0gQ2FyZHMgKi9cclxuLmNhcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggdmFyKC0tc2hhZG93LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMCAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogRm9ybSBTdHlsaW5nICovXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjI1KTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmZvcm0tdGV4dCB7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG59XHJcblxyXG4vKiBJbnZhbGlkIEZpZWxkcyAqL1xyXG4uaXMtaW52YWxpZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYW5nZXItY29sb3IpO1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjb2xvcjogdmFyKC0tZGFuZ2VyLWNvbG9yKTtcclxufVxyXG5cclxuLyogU2VjdGlvbiBIZWFkZXJzICovXHJcbmg2LnRleHQtcHJpbWFyeSB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWNvbG9yKTtcclxufVxyXG5cclxuLyogU3dpdGNoIFN0eWxpbmcgKi9cclxuLmZvcm0tY2hlY2staW5wdXQge1xyXG4gIHdpZHRoOiAzcmVtO1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2staW5wdXQ6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMjVyZW0gcmdiYSg1OSwgMTMwLCAyNDYsIDAuMjUpO1xyXG59XHJcblxyXG4uZm9ybS1jaGVjay1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxufVxyXG5cclxuLyogUHJldmlldyBDYXJkICovXHJcbi5iZy1saWdodCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogQmFkZ2VzICovXHJcbi5iYWRnZSB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxufVxyXG5cclxuLmJnLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWNjZXNzLWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2FybmluZy1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWluZm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluZm8tY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogQnV0dG9ucyAqL1xyXG4uYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1jb2xvciksIHZhcigtLXNlY29uZGFyeS1jb2xvcikpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcik7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xyXG59XHJcblxyXG4vKiBBY3Rpb24gQnV0dG9ucyAqL1xyXG4uZC1mbGV4LmdhcC0yIHtcclxuICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLyogQm9yZGVyICovXHJcbi5ib3JkZXItdG9wIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogTG9hZGluZyBTcGlubmVyICovXHJcbi5zcGlubmVyLWJvcmRlci1zbSB7XHJcbiAgd2lkdGg6IDFyZW07XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4vKiBIZWxwIFNlY3Rpb24gKi9cclxuLmxpc3QtdW5zdHlsZWQgbGkge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmxpc3QtdW5zdHlsZWQgc3Ryb25nIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnJvdyAuY29sLW1kLTYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmQtZmxleC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuZC1mbGV4LmdhcC0yIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4ge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tY2hlY2staW5wdXQge1xyXG4gICAgd2lkdGg6IDIuNXJlbTtcclxuICAgIGhlaWdodDogMS4yNXJlbTtcclxuICB9XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 5111:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/beneficiaries/view-beneficiaries/view-beneficiaries.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewBeneficiariesComponent: () => (/* binding */ ViewBeneficiariesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_beneficiary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/beneficiary.service */ 463);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function ViewBeneficiariesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Loading beneficiaries...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ViewBeneficiariesComponent_div_8_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cat_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cat_r7.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cat_r7.label);
  }
}
function ViewBeneficiariesComponent_div_8_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r8.label);
  }
}
function ViewBeneficiariesComponent_div_8_div_20_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Inactive ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ViewBeneficiariesComponent_div_8_div_20_div_1_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71)(1, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const beneficiary_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Routing: ", beneficiary_r10.routingNumber, " ");
  }
}
function ViewBeneficiariesComponent_div_8_div_20_div_1_div_44_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74)(1, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const beneficiary_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", beneficiary_r10.email, " ");
  }
}
function ViewBeneficiariesComponent_div_8_div_20_div_1_div_44_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74)(1, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const beneficiary_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", beneficiary_r10.phone, " ");
  }
}
function ViewBeneficiariesComponent_div_8_div_20_div_1_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewBeneficiariesComponent_div_8_div_20_div_1_div_44_div_1_Template, 4, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewBeneficiariesComponent_div_8_div_20_div_1_div_44_div_2_Template, 4, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const beneficiary_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", beneficiary_r10.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", beneficiary_r10.phone);
  }
}
function ViewBeneficiariesComponent_div_8_div_20_div_1_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const beneficiary_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Last used: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, beneficiary_r10.lastUsed, "mediumDate"), " ");
  }
}
function ViewBeneficiariesComponent_div_8_div_20_div_1_span_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Never used");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ViewBeneficiariesComponent_div_8_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "div", 35)(4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 38)(7, "h6", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ViewBeneficiariesComponent_div_8_div_20_div_1_span_9_Template, 3, 0, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 41)(13, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 44)(16, "li")(17, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewBeneficiariesComponent_div_8_div_20_div_1_Template_a_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const beneficiary_r10 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.makeTransfer(beneficiary_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Make Transfer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li")(21, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewBeneficiariesComponent_div_8_div_20_div_1_Template_a_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const beneficiary_r10 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.editBeneficiary(beneficiary_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Edit Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li")(25, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewBeneficiariesComponent_div_8_div_20_div_1_Template_a_click_25_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const beneficiary_r10 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.toggleStatus(beneficiary_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "hr", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "li")(31, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewBeneficiariesComponent_div_8_div_20_div_1_Template_a_click_31_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const beneficiary_r10 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.deleteBeneficiary(beneficiary_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 52)(35, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "code", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, ViewBeneficiariesComponent_div_8_div_20_div_1_div_43_Template, 4, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, ViewBeneficiariesComponent_div_8_div_20_div_1_div_44_Template, 3, 2, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 52)(46, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 61)(52, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, ViewBeneficiariesComponent_div_8_div_20_div_1_span_54_Template, 3, 4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, ViewBeneficiariesComponent_div_8_div_20_div_1_span_55_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 63)(57, "div", 64)(58, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewBeneficiariesComponent_div_8_div_20_div_1_Template_button_click_58_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const beneficiary_r10 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.makeTransfer(beneficiary_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Transfer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewBeneficiariesComponent_div_8_div_20_div_1_Template_button_click_61_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);
      const beneficiary_r10 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r29.editBeneficiary(beneficiary_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const beneficiary_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opacity-50", !beneficiary_r10.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r9.getCategoryIcon(beneficiary_r10.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", beneficiary_r10.nickname || beneficiary_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !beneficiary_r10.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](beneficiary_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r9.deleting);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](beneficiary_r10.isActive ? "fas fa-pause" : "fas fa-play");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-warning", beneficiary_r10.isActive)("text-success", !beneficiary_r10.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", beneficiary_r10.isActive ? "Deactivate" : "Activate", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](beneficiary_r10.bankName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](beneficiary_r10.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", beneficiary_r10.routingNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", beneficiary_r10.email || beneficiary_r10.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-primary", beneficiary_r10.category === "PERSONAL")("bg-success", beneficiary_r10.category === "BUSINESS")("bg-warning", beneficiary_r10.category === "UTILITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", beneficiary_r10.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-info", beneficiary_r10.type === "INTERNAL")("bg-secondary", beneficiary_r10.type === "EXTERNAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r9.getTypeIcon(beneficiary_r10.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", beneficiary_r10.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", beneficiary_r10.lastUsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !beneficiary_r10.lastUsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !beneficiary_r10.isActive);
  }
}
function ViewBeneficiariesComponent_div_8_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ViewBeneficiariesComponent_div_8_div_20_div_1_Template, 64, 36, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.filteredBeneficiaries);
  }
}
function ViewBeneficiariesComponent_div_8_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No Results Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " No beneficiaries match your current search and filter criteria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 81)(7, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewBeneficiariesComponent_div_8_div_21_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      ctx_r32.searchQuery = "";
      ctx_r32.selectedCategory = "ALL";
      ctx_r32.selectedType = "ALL";
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r32.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Clear Filters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewBeneficiariesComponent_div_8_div_21_div_2_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r34.addBeneficiary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Add New Beneficiary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function ViewBeneficiariesComponent_div_8_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No Beneficiaries Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Start by adding your first beneficiary to make transfers and payments easier. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewBeneficiariesComponent_div_8_div_21_div_3_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r35.addBeneficiary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Add Your First Beneficiary ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ViewBeneficiariesComponent_div_8_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 77)(1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ViewBeneficiariesComponent_div_8_div_21_div_2_Template, 13, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ViewBeneficiariesComponent_div_8_div_21_div_3_Template, 9, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.searchQuery || ctx_r5.selectedCategory !== "ALL" || ctx_r5.selectedType !== "ALL");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.searchQuery && ctx_r5.selectedCategory === "ALL" && ctx_r5.selectedType === "ALL");
  }
}
function ViewBeneficiariesComponent_div_8_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86)(1, "div", 12)(2, "div", 87)(3, "div", 19)(4, "div", 88)(5, "h5", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Total Beneficiaries");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 19)(10, "div", 88)(11, "h5", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 19)(16, "div", 88)(17, "h5", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Internal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 19)(22, "div", 88)(23, "h5", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "External");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.beneficiaries.length || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.getActiveBeneficiariesCount(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.getInternalBeneficiariesCount(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.getExternalBeneficiariesCount(), " ");
  }
}
function ViewBeneficiariesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 11)(2, "div", 12)(3, "div", 13)(4, "div", 14)(5, "div", 15)(6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewBeneficiariesComponent_div_8_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r37.searchQuery = $event);
    })("input", function ViewBeneficiariesComponent_div_8_Template_input_input_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r39.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 19)(10, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewBeneficiariesComponent_div_8_Template_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r40.selectedCategory = $event);
    })("change", function ViewBeneficiariesComponent_div_8_Template_select_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r41.onCategoryChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ViewBeneficiariesComponent_div_8_option_11_Template, 2, 2, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 19)(13, "select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewBeneficiariesComponent_div_8_Template_select_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r42.selectedType = $event);
    })("change", function ViewBeneficiariesComponent_div_8_Template_select_change_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r43.onTypeChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ViewBeneficiariesComponent_div_8_option_14_Template, 2, 2, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 22)(16, "div", 23)(17, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ViewBeneficiariesComponent_div_8_div_20_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ViewBeneficiariesComponent_div_8_div_21_Template, 4, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ViewBeneficiariesComponent_div_8_div_22_Template, 27, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.selectedCategory);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.categories);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.selectedType);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Found ", ctx_r1.filteredBeneficiaries.length || 0, " of ", ctx_r1.beneficiaries.length || 0, " beneficiaries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.filteredBeneficiaries.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.filteredBeneficiaries.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.beneficiaries && ctx_r1.beneficiaries.length > 0);
  }
}
class ViewBeneficiariesComponent {
  constructor(beneficiaryService, router) {
    this.beneficiaryService = beneficiaryService;
    this.router = router;
    this.beneficiaries = [];
    this.filteredBeneficiaries = [];
    this.searchQuery = '';
    this.selectedCategory = 'ALL';
    this.selectedType = 'ALL';
    this.loading = false;
    this.deleting = false;
    this.categories = [{
      value: 'ALL',
      label: 'All Categories'
    }, {
      value: 'PERSONAL',
      label: 'Personal'
    }, {
      value: 'BUSINESS',
      label: 'Business'
    }, {
      value: 'UTILITY',
      label: 'Utility'
    }];
    this.types = [{
      value: 'ALL',
      label: 'All Types'
    }, {
      value: 'INTERNAL',
      label: 'Internal'
    }, {
      value: 'EXTERNAL',
      label: 'External'
    }];
  }
  ngOnInit() {
    this.loadBeneficiaries();
  }
  loadBeneficiaries() {
    this.loading = true;
    this.beneficiaryService.getBeneficiaries().subscribe({
      next: beneficiaries => {
        this.beneficiaries = beneficiaries;
        this.applyFilters();
        this.loading = false;
      },
      error: error => {
        console.error('Error loading beneficiaries:', error);
        this.loading = false;
      }
    });
  }
  onSearch() {
    this.applyFilters();
  }
  onCategoryChange() {
    this.applyFilters();
  }
  onTypeChange() {
    this.applyFilters();
  }
  applyFilters() {
    let filtered = [...this.beneficiaries];
    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(b => b.name.toLowerCase().includes(query) || b.accountNumber.toLowerCase().includes(query) || b.bankName.toLowerCase().includes(query) || b.nickname && b.nickname.toLowerCase().includes(query));
    }
    // Apply category filter
    if (this.selectedCategory !== 'ALL') {
      filtered = filtered.filter(b => b.category === this.selectedCategory);
    }
    // Apply type filter
    if (this.selectedType !== 'ALL') {
      filtered = filtered.filter(b => b.type === this.selectedType);
    }
    this.filteredBeneficiaries = filtered;
  }
  addBeneficiary() {
    this.router.navigate(['/beneficiaries/add']);
  }
  editBeneficiary(beneficiary) {
    // Navigate to edit form (could be same as add with different mode)
    this.router.navigate(['/beneficiaries/edit', beneficiary.id]);
  }
  deleteBeneficiary(beneficiary) {
    if (confirm(`Are you sure you want to delete "${beneficiary.name}" from your beneficiaries?`)) {
      this.deleting = true;
      this.beneficiaryService.deleteBeneficiary(beneficiary.id).subscribe({
        next: success => {
          if (success) {
            this.showSuccessMessage(`${beneficiary.name} has been removed from your beneficiaries.`);
            this.loadBeneficiaries();
          } else {
            this.showErrorMessage('Failed to delete beneficiary. Please try again.');
          }
          this.deleting = false;
        },
        error: error => {
          console.error('Error deleting beneficiary:', error);
          this.showErrorMessage('Failed to delete beneficiary. Please try again.');
          this.deleting = false;
        }
      });
    }
  }
  toggleStatus(beneficiary) {
    const newStatus = !beneficiary.isActive;
    this.beneficiaryService.updateBeneficiary(beneficiary.id, {
      isActive: newStatus
    }).subscribe({
      next: updated => {
        if (updated) {
          beneficiary.isActive = newStatus;
          this.showSuccessMessage(`${beneficiary.name} has been ${newStatus ? 'activated' : 'deactivated'}.`);
        }
      },
      error: error => {
        console.error('Error updating beneficiary status:', error);
        this.showErrorMessage('Failed to update beneficiary status.');
      }
    });
  }
  makeTransfer(beneficiary) {
    // Navigate to transfers with pre-selected beneficiary
    this.router.navigate(['/transfers'], {
      queryParams: {
        beneficiaryId: beneficiary.id
      }
    });
  }
  getCategoryIcon(category) {
    switch (category) {
      case 'PERSONAL':
        return 'fas fa-user';
      case 'BUSINESS':
        return 'fas fa-building';
      case 'UTILITY':
        return 'fas fa-bolt';
      default:
        return 'fas fa-circle';
    }
  }
  getTypeIcon(type) {
    switch (type) {
      case 'INTERNAL':
        return 'fas fa-home';
      case 'EXTERNAL':
        return 'fas fa-external-link-alt';
      default:
        return 'fas fa-circle';
    }
  }
  showSuccessMessage(message) {
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
  showErrorMessage(message) {
    const notification = document.createElement('div');
    notification.className = 'alert alert-danger position-fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.innerHTML = `<i class="fas fa-exclamation-circle me-2"></i>${message}`;
    document.body.appendChild(notification);
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 4000);
  }
  getActiveBeneficiariesCount() {
    return this.beneficiaries.filter(b => b.isActive).length || 0;
  }
  getInternalBeneficiariesCount() {
    return this.beneficiaries.filter(b => b.type === 'INTERNAL').length || 0;
  }
  getExternalBeneficiariesCount() {
    return this.beneficiaries.filter(b => b.type === 'EXTERNAL').length || 0;
  }
  static {
    this.ɵfac = function ViewBeneficiariesComponent_Factory(t) {
      return new (t || ViewBeneficiariesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_beneficiary_service__WEBPACK_IMPORTED_MODULE_0__.BeneficiaryService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ViewBeneficiariesComponent,
      selectors: [["app-view-beneficiaries"]],
      decls: 9,
      vars: 2,
      consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-0"], [1, "fas", "fa-users", "me-2", "text-primary"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus", "me-2"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], [1, "card", "mb-4"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-md-6", "mb-2"], [1, "input-group"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search by name, account, bank, or nickname...", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "col-md-3", "mb-2"], [1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "mt-2"], [1, "col-12"], [1, "text-muted"], [1, "fas", "fa-info-circle", "me-1"], ["class", "row", 4, "ngIf"], ["class", "card", 4, "ngIf"], ["class", "card mt-4", 4, "ngIf"], [3, "value"], [1, "row"], ["class", "col-lg-6 col-xl-4 mb-4", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-xl-4", "mb-4"], [1, "card", "beneficiary-card", "h-100"], [1, "card-body", "d-flex", "flex-column"], [1, "d-flex", "align-items-center", "mb-3"], [1, "beneficiary-icon", "me-3"], [1, "text-primary"], [1, "flex-grow-1"], [1, "card-title", "mb-0"], ["class", "badge bg-secondary ms-2", 4, "ngIf"], [1, "dropdown"], ["data-bs-toggle", "dropdown", 1, "btn", "btn-sm", "btn-link", "text-muted", 3, "disabled"], [1, "fas", "fa-ellipsis-v"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "fas", "fa-paper-plane", "me-2", "text-primary"], [1, "fas", "fa-edit", "me-2", "text-warning"], [1, "me-2"], [1, "dropdown-divider"], [1, "dropdown-item", "text-danger", 3, "click"], [1, "fas", "fa-trash", "me-2"], [1, "mb-3"], [1, "card-text", "mb-2"], [1, "fas", "fa-building", "me-2", "text-muted"], [1, "fas", "fa-credit-card", "me-2", "text-muted"], ["class", "mb-2", 4, "ngIf"], ["class", "mb-3", 4, "ngIf"], [1, "badge", "me-1"], [1, "badge"], [1, "me-1"], [1, "mt-auto"], [1, "fas", "fa-clock", "me-1"], [1, "mt-3"], [1, "btn-group", "w-100"], [1, "btn", "btn-sm", "btn-primary", 3, "disabled", "click"], [1, "fas", "fa-paper-plane", "me-1"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "fas", "fa-edit", "me-1"], [1, "badge", "bg-secondary", "ms-2"], [1, "fas", "fa-eye-slash", "me-1"], [1, "mb-2"], [1, "fas", "fa-route", "me-1"], ["class", "mb-1", 4, "ngIf"], [1, "mb-1"], [1, "fas", "fa-envelope", "me-1"], [1, "fas", "fa-phone", "me-1"], [1, "card"], [1, "card-body", "text-center", "py-5"], [1, "fas", "fa-search", "fa-4x", "text-muted", "mb-3"], [1, "text-muted", "mb-4"], [1, "d-flex", "gap-2", "justify-content-center"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fas", "fa-times", "me-2"], [1, "fas", "fa-users", "fa-4x", "text-muted", "mb-3"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "card", "mt-4"], [1, "row", "text-center"], [1, "stat-item"], [1, "text-primary", "mb-0"], [1, "text-success", "mb-0"], [1, "text-info", "mb-0"], [1, "text-secondary", "mb-0"]],
      template: function ViewBeneficiariesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " All Beneficiaries ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewBeneficiariesComponent_Template_button_click_4_listener() {
            return ctx.addBeneficiary();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Add New Beneficiary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ViewBeneficiariesComponent_div_7_Template, 6, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ViewBeneficiariesComponent_div_8_Template, 23, 10, "div", 6);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: ["\n\n.beneficiary-card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n\n.beneficiary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n}\n\n.beneficiary-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n\n.beneficiary-icon[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: rgba(var(--primary-color-rgb), 0.1);\n}\n\n.beneficiary-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n\n\n.opacity-50[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.opacity-50[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: var(--light-color);\n  border-color: var(--border-color);\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-color: var(--border-color);\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--secondary-color);\n  box-shadow: 0 0 0 0.2rem rgba(59, 130, 246, 0.25);\n}\n\n\n\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n}\n\n.bg-primary[_ngcontent-%COMP%] {\n  background-color: var(--primary-color) !important;\n}\n\n.bg-success[_ngcontent-%COMP%] {\n  background-color: var(--success-color) !important;\n}\n\n.bg-warning[_ngcontent-%COMP%] {\n  background-color: var(--warning-color) !important;\n}\n\n.bg-info[_ngcontent-%COMP%] {\n  background-color: var(--info-color) !important;\n}\n\n.bg-secondary[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color) !important;\n}\n\n\n\ncode[_ngcontent-%COMP%] {\n  background-color: rgba(var(--primary-color-rgb), 0.1);\n  color: var(--primary-color);\n  padding: 0.2rem 0.4rem;\n  border-radius: 0.25rem;\n  font-size: 0.875rem;\n}\n\n\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: none;\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border-radius: 8px;\n  min-width: 180px;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  transition: background-color 0.2s ease;\n  font-size: 0.9rem;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--light-color);\n}\n\n.dropdown-item.text-danger[_ngcontent-%COMP%]:hover {\n  background-color: rgba(var(--danger-color-rgb), 0.1);\n}\n\n.dropdown-divider[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px var(--shadow-color);\n  border-radius: 12px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: var(--light-color);\n  border-bottom: 1px solid var(--border-color);\n  border-radius: 12px 12px 0 0 !important;\n  font-weight: 600;\n}\n\n\n\n.stat-item[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n\n.stat-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n\n.stat-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n}\n\n\n\n.text-center[_ngcontent-%COMP%]   i.fa-4x[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n\n\n.card-text[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-size: 0.9rem;\n}\n\n.card-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 16px;\n  opacity: 0.7;\n}\n\n\n\n.card-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  line-height: 1.3;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));\n  border: none;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));\n}\n\n\n\n@media (max-width: 768px) {\n  .beneficiary-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  \n  .beneficiary-icon[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n  }\n  \n  .beneficiary-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  \n  .btn-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  \n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    border-radius: 6px !important;\n    border: 1px solid var(--border-color) !important;\n    margin-bottom: 0.25rem;\n  }\n  \n  .dropdown-menu[_ngcontent-%COMP%] {\n    position: static !important;\n    transform: none !important;\n    box-shadow: none;\n    border: 1px solid var(--border-color);\n    margin-top: 0.5rem;\n  }\n  \n  .stat-item[_ngcontent-%COMP%] {\n    padding: 0.5rem 0;\n  }\n  \n  .stat-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  \n  .d-flex.gap-2[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem !important;\n  }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9iZW5lZmljaWFyaWVzL3ZpZXctYmVuZWZpY2lhcmllcy92aWV3LWJlbmVmaWNpYXJpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7QUFDdEI7RUFDRSxZQUFZO0VBQ1osd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0Usb0NBQW9DO0VBQ3BDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxpREFBaUQ7QUFDbkQ7O0FBRUEsV0FBVztBQUNYO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsbURBQW1EO0FBQ3JEOztBQUVBLHFDQUFxQztBQUNyQztFQUNFLHFEQUFxRDtFQUNyRCwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0FBQzlCOztBQUVBLGFBQWE7QUFDYjtFQUNFLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLFVBQVU7QUFDVjtFQUNFLFlBQVk7RUFDWix5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRDQUE0QztFQUM1Qyx1Q0FBdUM7RUFDdkMsZ0JBQWdCO0FBQ2xCOztBQUVBLGVBQWU7QUFDZjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUEsWUFBWTtBQUNaO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpRkFBaUY7RUFDakYsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUZBQWlGO0FBQ25GOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixnREFBZ0Q7SUFDaEQsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0QixzQkFBc0I7RUFDeEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJlbmVmaWNpYXJ5IENhcmRzICovXHJcbi5iZW5lZmljaWFyeS1jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5iZW5lZmljaWFyeS1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4uYmVuZWZpY2lhcnktY2FyZCAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbn1cclxuXHJcbi5iZW5lZmljaWFyeS1pY29uIHtcclxuICB3aWR0aDogNDVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXByaW1hcnktY29sb3ItcmdiKSwgMC4xKTtcclxufVxyXG5cclxuLmJlbmVmaWNpYXJ5LWljb24gaSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi8qIENhcmQgU3RhdGVzICovXHJcbi5vcGFjaXR5LTUwIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi5vcGFjaXR5LTUwOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi8qIFNlYXJjaCBhbmQgRmlsdGVyIFNlY3Rpb24gKi9cclxuLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDU5LCAxMzAsIDI0NiwgMC4yNSk7XHJcbn1cclxuXHJcbi8qIEJhZGdlcyAqL1xyXG4uYmFkZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VjY2Vzcy1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLXdhcm5pbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhcm5pbmctY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmZvLWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIENvZGUgc3R5bGluZyBmb3IgYWNjb3VudCBudW1iZXJzICovXHJcbmNvZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwLjEpO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBwYWRkaW5nOiAwLjJyZW0gMC40cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLyogQnV0dG9uIEdyb3VwcyAqL1xyXG4uYnRuLWdyb3VwIC5idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmJ0bi1ncm91cCAuYnRuOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tZ3JvdXAgLmJ0bjpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duICovXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtaW4td2lkdGg6IDE4MHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbS50ZXh0LWRhbmdlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1kYW5nZXItY29sb3ItcmdiKSwgMC4xKTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWRpdmlkZXIge1xyXG4gIG1hcmdpbjogMC41cmVtIDA7XHJcbn1cclxuXHJcbi8qIENhcmRzICovXHJcbi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHZhcigtLXNoYWRvdy1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIFN0YXRpc3RpY3MgKi9cclxuLnN0YXQtaXRlbSB7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG59XHJcblxyXG4uc3RhdC1pdGVtIGg1IHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uc3RhdC1pdGVtIHNtYWxsIHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi8qIEVtcHR5IFN0YXRlICovXHJcbi50ZXh0LWNlbnRlciBpLmZhLTR4IHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi8qIENvbnRhY3QgSW5mbyAqL1xyXG4uY2FyZC10ZXh0IHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi5jYXJkLXRleHQgaSB7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4vKiBDYXJkIFRpdGxlICovXHJcbi5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbnMgKi9cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tcHJpbWFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKSwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuYmVuZWZpY2lhcnktY2FyZCAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5iZW5lZmljaWFyeS1pY29uIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuYmVuZWZpY2lhcnktaWNvbiBpIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWdyb3VwIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZ3JvdXAgLmJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWMgIWltcG9ydGFudDtcclxuICAgIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0LWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0LWl0ZW0gaDUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5kLWZsZXguZ2FwLTIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 4911:
/*!*******************************************************************!*\
  !*** ./src/app/components/bill-payment/bill-payment.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillPaymentComponent: () => (/* binding */ BillPaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function BillPaymentComponent_option_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const account_r14 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", account_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", account_r14.accountType, " - ", account_r14.accountNumber, " (", ctx_r0.formatCurrency(account_r14.balance), ") ");
  }
}
function BillPaymentComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select an account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BillPaymentComponent_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payee_r15 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", payee_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.getPayeeCategoryIcon(payee_r15.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", payee_r15.name, " - ", payee_r15.accountNumber, " ");
  }
}
function BillPaymentComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select a payee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BillPaymentComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BillPaymentComponent_div_36_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount must be greater than 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BillPaymentComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BillPaymentComponent_div_36_div_1_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BillPaymentComponent_div_36_div_2_Template, 2, 0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f["amount"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f["amount"].errors["min"]);
  }
}
function BillPaymentComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Due date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BillPaymentComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function BillPaymentComponent_span_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 44);
  }
}
function BillPaymentComponent_i_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
  }
}
function BillPaymentComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No upcoming bills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function BillPaymentComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "div", 49)(3, "h6", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 53)(11, "h6", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillPaymentComponent_div_66_Template_button_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const bill_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.quickPayBill(bill_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pay Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const bill_r18 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bill_r18.payeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Due: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 8, bill_r18.dueDate, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("bg-danger", ctx_r10.getDaysUntilDue(bill_r18.dueDate) <= 2)("bg-warning", ctx_r10.getDaysUntilDue(bill_r18.dueDate) <= 5 && ctx_r10.getDaysUntilDue(bill_r18.dueDate) > 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.getDaysUntilDue(bill_r18.dueDate), " days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.formatCurrency(bill_r18.amount));
  }
}
function BillPaymentComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No recent payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function BillPaymentComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 57)(1, "div", 48)(2, "div", 49)(3, "h6", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 53)(9, "h6", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const payment_r21 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payment_r21.payeeName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 6, payment_r21.date, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.formatCurrency(payment_r21.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r12.getStatusBadgeClass(payment_r21.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", payment_r21.status, " ");
  }
}
function BillPaymentComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61)(1, "div", 62)(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 67)(9, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillPaymentComponent_div_84_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const payee_r22 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.payPayee(payee_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillPaymentComponent_div_84_Template_button_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);
      const payee_r22 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.editPayee(payee_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const payee_r22 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r13.getPayeeCategoryIcon(payee_r22.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payee_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](payee_r22.accountNumber);
  }
}
class BillPaymentComponent {
  constructor(formBuilder, route, router) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.billPaymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
    this.accounts = [];
    this.payees = [];
    this.upcomingBills = [];
    this.recentPayments = [];
    this.loading = false;
    this.submitted = false;
    this.preSelectedAccount = null;
  }
  ngOnInit() {
    this.initializeForm();
    this.loadData();
    this.checkQueryParams();
  }
  checkQueryParams() {
    this.route.queryParams.subscribe(params => {
      if (params['fromAccount']) {
        this.preSelectedAccount = {
          id: params['fromAccount'],
          accountNumber: params['accountNumber'],
          accountType: params['accountType']
        };
        // Pre-select the account in the form
        this.billPaymentForm.patchValue({
          account: params['fromAccount']
        });
        // Show a helpful message
        setTimeout(() => {
          alert(`Account ${params['accountNumber']} (${params['accountType']}) has been pre-selected for bill payment!`);
        }, 500);
      }
    });
  }
  initializeForm() {
    this.billPaymentForm = this.formBuilder.group({
      account: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      payee: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(1)]],
      dueDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      isRecurring: [false]
    });
  }
  loadData() {
    this.loading = true;
    // Mock data
    this.accounts = [{
      id: '1',
      accountNumber: 'ACC1001234567',
      accountType: 'SAVINGS',
      balance: 15750.50
    }, {
      id: '2',
      accountNumber: 'ACC1001234568',
      accountType: 'CHECKING',
      balance: 8240.25
    }];
    this.payees = [{
      id: '1',
      name: 'Electric Company',
      category: 'UTILITY',
      accountNumber: 'ELEC123456'
    }, {
      id: '2',
      name: 'Internet Provider',
      category: 'TELECOM',
      accountNumber: 'INT789012'
    }, {
      id: '3',
      name: 'Credit Card',
      category: 'CREDIT_CARD',
      accountNumber: 'CC456789'
    }];
    this.upcomingBills = [{
      id: '1',
      payeeName: 'Electric Company',
      amount: 85.50,
      dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      status: 'SCHEDULED'
    }, {
      id: '2',
      payeeName: 'Internet Provider',
      amount: 59.99,
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      status: 'SCHEDULED'
    }];
    this.recentPayments = [{
      id: '1',
      payeeName: 'Electric Company',
      amount: 82.30,
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      status: 'COMPLETED'
    }];
    this.loading = false;
  }
  get f() {
    return this.billPaymentForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.billPaymentForm.invalid) {
      return;
    }
    this.loading = true;
    const formData = this.billPaymentForm.value;
    const account = this.accounts.find(acc => acc.id === formData.account);
    const payee = this.payees.find(p => p.id === formData.payee);
    // Show payment confirmation
    const paymentSummary = `
Bill Payment Summary:
From Account: ${account?.accountType} (${account?.accountNumber})
Payee: ${payee?.name}
Amount: $${formData.amount}
Due Date: ${new Date(formData.dueDate).toDateString()}
Description: ${formData.description}
Recurring: ${formData.isRecurring ? 'Yes' : 'No'}
    `;
    if (confirm(`Please confirm this bill payment:\n${paymentSummary}`)) {
      // Simulate API call
      setTimeout(() => {
        alert('Bill payment scheduled successfully!');
        this.billPaymentForm.reset();
        this.submitted = false;
        this.loading = false;
        this.loadData(); // Refresh data
        // If there was a pre-selected account, reset the form to that account
        if (this.preSelectedAccount) {
          this.billPaymentForm.patchValue({
            account: this.preSelectedAccount.id
          });
        }
      }, 2000);
    } else {
      this.loading = false;
    }
  }
  // Quick pay functionality for upcoming bills
  quickPayBill(bill) {
    if (confirm(`Pay ${bill.payeeName} bill of $${bill.amount}?`)) {
      alert(`Payment of $${bill.amount} to ${bill.payeeName} has been processed!`);
      // Remove from upcoming bills
      this.upcomingBills = this.upcomingBills.filter(b => b.id !== bill.id);
      // Add to recent payments
      this.recentPayments.unshift({
        id: Date.now().toString(),
        payeeName: bill.payeeName,
        amount: bill.amount,
        date: new Date(),
        status: 'COMPLETED'
      });
    }
  }
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }
  getPayeeCategoryIcon(category) {
    switch (category) {
      case 'UTILITY':
        return 'fas fa-bolt';
      case 'TELECOM':
        return 'fas fa-wifi';
      case 'CREDIT_CARD':
        return 'fas fa-credit-card';
      case 'INSURANCE':
        return 'fas fa-shield-alt';
      default:
        return 'fas fa-file-invoice';
    }
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case 'COMPLETED':
        return 'bg-success';
      case 'SCHEDULED':
        return 'bg-warning';
      case 'FAILED':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }
  getDaysUntilDue(dueDate) {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
  // Payee management methods
  addPayee() {
    this.router.navigate(['/payees/add']);
  }
  payPayee(payee) {
    // Pre-select the payee in the form
    this.billPaymentForm.patchValue({
      payee: payee.id,
      amount: '',
      description: `Payment to ${payee.name}`
    });
    // Scroll to the form
    setTimeout(() => {
      const formElement = document.querySelector('.card-body form');
      if (formElement) {
        formElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  }
  editPayee(payee) {
    this.router.navigate(['/payees/edit', payee.id]);
  }
  static {
    this.ɵfac = function BillPaymentComponent_Factory(t) {
      return new (t || BillPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BillPaymentComponent,
      selectors: [["app-bill-payment"]],
      decls: 85,
      vars: 27,
      consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-0"], [1, "fas", "fa-file-invoice", "me-2", "text-primary"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "row"], [1, "col-lg-6", "mb-4"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "fas", "fa-credit-card", "me-2"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["formControlName", "account", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "payee", 1, "form-select"], ["type", "number", "formControlName", "amount", "placeholder", "0.00", "step", "0.01", 1, "form-control"], ["type", "date", "formControlName", "dueDate", 1, "form-control"], ["type", "text", "formControlName", "description", "placeholder", "Bill payment description", 1, "form-control"], [1, "mb-3", "form-check"], ["type", "checkbox", "formControlName", "isRecurring", "id", "recurringCheck", 1, "form-check-input"], ["for", "recurringCheck", 1, "form-check-label"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-credit-card me-2", 4, "ngIf"], [1, "card", "mb-4"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-calendar-alt", "me-2"], ["href", "#", 1, "text-decoration-none"], ["class", "text-center text-muted py-4", 4, "ngIf"], ["class", "border-start border-3 border-warning ps-3 py-3", 4, "ngFor", "ngForOf"], [1, "fas", "fa-history", "me-2"], ["class", "border-start border-3 border-success ps-3 py-3", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "fas", "fa-users", "me-2"], ["class", "col-md-4 mb-3", 4, "ngFor", "ngForOf"], [3, "value"], [1, "invalid-feedback"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "text-muted", "py-4"], [1, "fas", "fa-check-circle", "fa-2x", "mb-2"], [1, "border-start", "border-3", "border-warning", "ps-3", "py-3"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "flex-grow-1"], [1, "mb-1"], [1, "mb-1", "text-muted", "small"], [1, "badge", "bg-info", "ms-2"], [1, "text-end"], [1, "mb-1", "text-warning"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "fas", "fa-inbox", "fa-2x", "mb-2"], [1, "border-start", "border-3", "border-success", "ps-3", "py-3"], [1, "text-muted"], [1, "mb-1", "text-success"], [1, "badge"], [1, "col-md-4", "mb-3"], [1, "card", "border"], [1, "card-body", "text-center"], [1, "fa-2x", "text-primary", "mb-2"], [1, "card-title"], [1, "card-text", "small", "text-muted"], [1, "btn-group", "btn-group-sm"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "btn", "btn-outline-secondary", 3, "click"]],
      template: function BillPaymentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Bill Payments ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BillPaymentComponent_Template_button_click_4_listener() {
            return ctx.addPayee();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add Payee ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "h6", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " New Bill Payment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11)(15, "form", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function BillPaymentComponent_Template_form_ngSubmit_15_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13)(17, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pay From Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 15)(20, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Select Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BillPaymentComponent_option_22_Template, 2, 4, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, BillPaymentComponent_div_23_Template, 2, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13)(25, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Payee");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 19)(28, "option", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Select Payee");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, BillPaymentComponent_option_30_Template, 3, 5, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, BillPaymentComponent_div_31_Template, 2, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13)(33, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Amount ($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BillPaymentComponent_div_36_Template, 3, 2, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13)(38, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Due Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, BillPaymentComponent_div_41_Template, 2, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13)(43, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, BillPaymentComponent_div_46_Template, 2, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Make this a recurring payment ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 26)(52, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, BillPaymentComponent_span_53_Template, 1, 0, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, BillPaymentComponent_i_54_Template, 1, 0, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6)(57, "div", 30)(58, "div", 31)(59, "h6", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Upcoming Bills ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "View All");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, BillPaymentComponent_div_65_Template, 4, 0, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, BillPaymentComponent_div_66_Template, 15, 11, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 7)(68, "div", 8)(69, "h6", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Recent Payments ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, BillPaymentComponent_div_73_Template, 4, 0, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, BillPaymentComponent_div_74_Template, 13, 9, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 5)(76, "div", 38)(77, "div", 7)(78, "div", 8)(79, "h6", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " My Payees ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 11)(83, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, BillPaymentComponent_div_84_Template, 13, 4, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.billPaymentForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["account"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.accounts);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["account"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["payee"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.payees);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["payee"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["amount"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["amount"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["dueDate"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["dueDate"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["description"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["description"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Processing..." : "Schedule Payment", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.upcomingBills.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.upcomingBills);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recentPayments.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recentPayments);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.payees);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: ["\n\n.bill-payment-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  transition: transform 0.2s ease;\n}\n\n.bill-payment-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.15);\n}\n\n\n\n.bill-item[_ngcontent-%COMP%] {\n  border-left: 3px solid #ff9800;\n  transition: all 0.2s ease;\n  padding: 1rem;\n  margin-bottom: 0.5rem;\n  background: white;\n  border-radius: 8px;\n}\n\n.bill-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  transform: translateX(4px);\n}\n\n.bill-overdue[_ngcontent-%COMP%] {\n  border-left-color: #f44336;\n}\n\n.bill-due-soon[_ngcontent-%COMP%] {\n  border-left-color: #ff9800;\n}\n\n.bill-upcoming[_ngcontent-%COMP%] {\n  border-left-color: #2196f3;\n}\n\n\n\n.payee-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n  transition: all 0.2s ease;\n  text-align: center;\n  padding: 1rem;\n}\n\n.payee-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0,0,0,0.15);\n}\n\n.payee-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 0.5rem;\n  color: #2196f3;\n}\n\n\n\n.payment-item[_ngcontent-%COMP%] {\n  border-left: 3px solid #4caf50;\n  transition: all 0.2s ease;\n  padding: 1rem;\n  margin-bottom: 0.5rem;\n  background: white;\n  border-radius: 8px;\n}\n\n.payment-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  transform: translateX(4px);\n}\n\n.payment-completed[_ngcontent-%COMP%] {\n  border-left-color: #4caf50;\n}\n\n.payment-scheduled[_ngcontent-%COMP%] {\n  border-left-color: #ff9800;\n}\n\n.payment-failed[_ngcontent-%COMP%] {\n  border-left-color: #f44336;\n}\n\n\n\n.badge-completed[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n}\n\n.badge-scheduled[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n}\n\n.badge-failed[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n\n.badge-overdue[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n\n\n\n.form-select[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #ddd;\n  transition: all 0.3s ease;\n}\n\n.form-select[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #2196f3;\n  box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);\n}\n\n\n\n.due-indicator[_ngcontent-%COMP%] {\n  font-size: 0.875em;\n  padding: 0.25rem 0.5rem;\n  border-radius: 12px;\n  font-weight: 500;\n}\n\n.due-today[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #d32f2f;\n}\n\n.due-soon[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  color: #f57c00;\n}\n\n.due-later[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1976d2;\n}\n\n\n\n@media (max-width: 768px) {\n  .bill-payment-card[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  \n  .bill-item[_ngcontent-%COMP%], .payment-item[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  \n  .payee-card[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9iaWxsLXBheW1lbnQvYmlsbC1wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkJBQTZCO0FBQzdCO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHVDQUF1QztBQUN6Qzs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaURBQWlEO0FBQ25EOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogQmlsbCBQYXltZW50IEZvcm0gU3R5bGVzICovXHJcbi5iaWxsLXBheW1lbnQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uYmlsbC1wYXltZW50LWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbn1cclxuXHJcbi8qIFVwY29taW5nIEJpbGxzICovXHJcbi5iaWxsLWl0ZW0ge1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI2ZmOTgwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmJpbGwtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcclxufVxyXG5cclxuLmJpbGwtb3ZlcmR1ZSB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi5iaWxsLWR1ZS1zb29uIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogI2ZmOTgwMDtcclxufVxyXG5cclxuLmJpbGwtdXBjb21pbmcge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjE5NmYzO1xyXG59XHJcblxyXG4vKiBQYXllZSBDYXJkcyAqL1xyXG4ucGF5ZWUtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLnBheWVlLWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbn1cclxuXHJcbi5wYXllZS1pY29uIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGNvbG9yOiAjMjE5NmYzO1xyXG59XHJcblxyXG4vKiBQYXltZW50IEhpc3RvcnkgKi9cclxuLnBheW1lbnQtaXRlbSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNGNhZjUwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4ucGF5bWVudC1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xyXG59XHJcblxyXG4ucGF5bWVudC1jb21wbGV0ZWQge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjNGNhZjUwO1xyXG59XHJcblxyXG4ucGF5bWVudC1zY2hlZHVsZWQge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmY5ODAwO1xyXG59XHJcblxyXG4ucGF5bWVudC1mYWlsZWQge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBTdGF0dXMgQmFkZ2VzICovXHJcbi5iYWRnZS1jb21wbGV0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XHJcbn1cclxuXHJcbi5iYWRnZS1zY2hlZHVsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk4MDA7XHJcbn1cclxuXHJcbi5iYWRnZS1mYWlsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XHJcbn1cclxuXHJcbi5iYWRnZS1vdmVyZHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBGb3JtIENvbnRyb2xzICovXHJcbi5mb3JtLXNlbGVjdCwgLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmZvcm0tc2VsZWN0OmZvY3VzLCAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICMyMTk2ZjM7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMzMsIDE1MCwgMjQzLCAwLjI1KTtcclxufVxyXG5cclxuLyogRHVlIERhdGUgSW5kaWNhdG9ycyAqL1xyXG4uZHVlLWluZGljYXRvciB7XHJcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmR1ZS10b2RheSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJlZTtcclxuICBjb2xvcjogI2QzMmYyZjtcclxufVxyXG5cclxuLmR1ZS1zb29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2UwO1xyXG4gIGNvbG9yOiAjZjU3YzAwO1xyXG59XHJcblxyXG4uZHVlLWxhdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xyXG4gIGNvbG9yOiAjMTk3NmQyO1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5iaWxsLXBheW1lbnQtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuYmlsbC1pdGVtLCAucGF5bWVudC1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXllZS1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 2289:
/*!*********************************************************!*\
  !*** ./src/app/components/chatbot/chatbot.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatbotComponent: () => (/* binding */ ChatbotComponent)
/* harmony export */ });
/* harmony import */ var C_Users_jaisw_java_project_VibeCoding_vibeCoder_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_ai_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ai-chat.service */ 1449);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);






const _c0 = ["chatContainer"];
const _c1 = ["messageInput"];
function ChatbotComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChatbotComponent_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 21);
  }
}
function ChatbotComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.unreadCount);
  }
}
function ChatbotComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 43);
  }
}
function ChatbotComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u2B50");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\uD83D\uDCAB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\uD83C\uDF1F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u2728");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ChatbotComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChatbotComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChatbotComponent_div_28_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r18.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r20.getMessageTime(message_r18.timestamp));
  }
}
function ChatbotComponent_div_28_div_4_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 81)(1, "div", 82)(2, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const account_r37 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](account_r37.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](account_r37.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r36.formatCurrency(account_r37.balance));
  }
}
function ChatbotComponent_div_28_div_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 76)(1, "div", 77)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Total Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ChatbotComponent_div_28_div_4_div_4_div_7_Template, 8, 3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r25.formatCurrency(message_r18.cardData.totalBalance));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.accounts);
  }
}
function ChatbotComponent_div_28_div_4_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 89)(1, "div", 90)(2, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const transaction_r40 = ctx.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](transaction_r40.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](transaction_r40.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("positive", transaction_r40.amount > 0)("negative", transaction_r40.amount < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r39.formatCurrency(ctx_r39.getAbsoluteValue(transaction_r40.amount)), " ");
  }
}
function ChatbotComponent_div_28_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 86)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Recent Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ChatbotComponent_div_28_div_4_div_5_div_4_Template, 8, 7, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.transactions);
  }
}
function ChatbotComponent_div_28_div_4_div_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 97)(1, "div", 98)(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 100)(7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const account_r43 = ctx.$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", account_r43.type, " Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](account_r43.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Account: ", account_r43.number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Opened: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 5, account_r43.openDate, "MMM d, yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Balance: ", ctx_r42.formatCurrency(account_r43.balance), "");
  }
}
function ChatbotComponent_div_28_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 94)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Your Accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ChatbotComponent_div_28_div_4_div_6_div_4_Template, 14, 8, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.accounts);
  }
}
function ChatbotComponent_div_28_div_4_div_7_div_11_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChatbotComponent_div_28_div_4_div_7_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 114)(1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ChatbotComponent_div_28_div_4_div_7_div_11_span_5_Template, 2, 0, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const card_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fab fa-cc-", card_r48.type.toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u2022\u2022\u2022\u2022", card_r48.last4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", card_r48.isDefault);
  }
}
function ChatbotComponent_div_28_div_4_div_7_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", feature_r50, " ");
  }
}
function ChatbotComponent_div_28_div_4_div_7_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 119)(1, "div", 120)(2, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tx_r51 = ctx.$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tx_r51.merchant);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tx_r51.method);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r47.formatCurrency(ctx_r47.getAbsoluteValue(tx_r51.amount)));
  }
}
function ChatbotComponent_div_28_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 102)(1, "div", 103)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Digital Wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 106)(8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\uD83D\uDCB3 Linked Cards");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ChatbotComponent_div_28_div_4_div_7_div_11_Template, 6, 5, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 109)(13, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ChatbotComponent_div_28_div_4_div_7_span_14_Template, 2, 1, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 112)(16, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\uD83D\uDD04 Recent Transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ChatbotComponent_div_28_div_4_div_7_div_18_Template, 8, 3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r28.formatCurrency(message_r18.cardData.walletBalance));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.linkedCards);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.recentTransactions);
  }
}
function ChatbotComponent_div_28_div_4_div_8_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](feature_r55);
  }
}
function ChatbotComponent_div_28_div_4_div_8_div_23_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 146);
  }
}
function ChatbotComponent_div_28_div_4_div_8_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 142)(1, "div", 143)(2, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ChatbotComponent_div_28_div_4_div_8_div_23_i_4_Template, 1, 0, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const payment_r56 = ctx.$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](payment_r56.merchant);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", payment_r56.success);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r54.formatCurrency(payment_r56.amount));
  }
}
function ChatbotComponent_div_28_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 124)(1, "div", 125)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " QR Payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 127)(6, "div", 128)(7, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Your Payment QR Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Generate QR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Scan QR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 135)(18, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ChatbotComponent_div_28_div_4_div_8_div_19_Template, 4, 1, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 138)(21, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\uD83D\uDCF1 Recent QR Payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ChatbotComponent_div_28_div_4_div_8_div_23_Template, 7, 3, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.features);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.recentQRPayments);
  }
}
function ChatbotComponent_div_28_div_4_div_9_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 155)(1, "div", 156)(2, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 158)(5, "span", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 161)(10, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const crypto_r61 = ctx.$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](crypto_r61.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](crypto_r61.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", crypto_r61.amount, " ", crypto_r61.symbol, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r59.formatCurrency(crypto_r61.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("positive", crypto_r61.change > 0)("negative", crypto_r61.change < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", crypto_r61.change > 0 ? "+" : "", "", crypto_r61.change, "% ");
  }
}
function ChatbotComponent_div_28_div_4_div_9_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", feature_r62, " ");
  }
}
function ChatbotComponent_div_28_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 147)(1, "div", 148)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Crypto Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ChatbotComponent_div_28_div_4_div_9_div_8_Template, 14, 11, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ChatbotComponent_div_28_div_4_div_9_span_10_Template, 2, 1, "span", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r30.formatCurrency(message_r18.cardData.totalValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.currencies);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.features);
  }
}
function ChatbotComponent_div_28_div_4_div_10_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 180)(1, "div", 181)(2, "span", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const reward_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](reward_r65.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](reward_r65.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", reward_r65.cost, " pts");
  }
}
function ChatbotComponent_div_28_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 165)(1, "div", 166)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Loyalty Rewards");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 168)(6, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 171)(11, "div", 172)(12, "span", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 177)(19, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\uD83C\uDF81 Available Rewards");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ChatbotComponent_div_28_div_4_div_10_div_22_Template, 8, 3, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", message_r18.cardData.totalPoints, " Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u2248 ", ctx_r31.formatCurrency(message_r18.cardData.cashValue), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r18.cardData.tier);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", message_r18.cardData.pointsToNextTier, " points to next tier");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", 75, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.availableRewards);
  }
}
function ChatbotComponent_div_28_div_4_div_11_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const platform_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("fab fa-", platform_r70.toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", platform_r70, " ");
  }
}
function ChatbotComponent_div_28_div_4_div_11_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 197)(1, "div", 198)(2, "span", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 201)(7, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const request_r71 = ctx.$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](request_r71.friend);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](request_r71.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r68.formatCurrency(request_r71.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](request_r71.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](request_r71.status);
  }
}
function ChatbotComponent_div_28_div_4_div_11_button_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const action_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", action_r72, " ");
  }
}
function ChatbotComponent_div_28_div_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 185)(1, "div", 186)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Social Payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 188)(6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\uD83C\uDF10 Connected Platforms");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ChatbotComponent_div_28_div_4_div_11_span_9_Template, 3, 4, "span", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 191)(11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\uD83D\uDCB8 Recent Requests");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ChatbotComponent_div_28_div_4_div_11_div_14_Template, 11, 6, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ChatbotComponent_div_28_div_4_div_11_button_16_Template, 2, 1, "button", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.connectedPlatforms);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.recentRequests);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.quickActions);
  }
}
function ChatbotComponent_div_28_div_4_div_12_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const method_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", method_r76, " ");
  }
}
function ChatbotComponent_div_28_div_4_div_12_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 221)(1, "div", 120)(2, "span", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const tx_r77 = ctx.$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tx_r77.merchant);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tx_r77.method);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r75.formatCurrency(tx_r77.amount));
  }
}
function ChatbotComponent_div_28_div_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 205)(1, "div", 206)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Contactless Payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 209)(8, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\uD83D\uDCCA Daily Usage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 210)(11, "div", 211)(12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 215)(19, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\uD83D\uDCF1 Supported Methods");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ChatbotComponent_div_28_div_4_div_12_span_22_Template, 2, 1, "span", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 218)(24, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\uD83D\uDCE1 Recent Contactless");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ChatbotComponent_div_28_div_4_div_12_div_26_Template, 8, 3, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("enabled", message_r18.cardData.nfcEnabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" NFC ", message_r18.cardData.nfcEnabled ? "Enabled" : "Disabled", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r33.formatCurrency(message_r18.cardData.dailyUsed), " / ", ctx_r33.formatCurrency(message_r18.cardData.dailyLimit), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r33.formatCurrency(message_r18.cardData.dailyLimit - message_r18.cardData.dailyUsed), " remaining");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", message_r18.cardData.dailyUsed / message_r18.cardData.dailyLimit * 100, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.supportedMethods);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.recentContactless);
  }
}
function ChatbotComponent_div_28_div_4_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_div_28_div_4_div_13_div_10_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r83);
      const option_r80 = restoredCtx.$implicit;
      const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r81.downloadStatement(message_r18.cardData.statementType, option_r80.period));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 235)(2, "span", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r80.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](option_r80.size);
  }
}
function ChatbotComponent_div_28_div_4_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 223)(1, "div", 224)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 226)(7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\uD83D\uDCC5 Select Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ChatbotComponent_div_28_div_4_div_13_div_10_Template, 7, 2, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 229)(12, "button", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_div_28_div_4_div_13_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r86);
      const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r84.downloadStatement(message_r18.cardData.statementType, "This Month"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Download PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Email Statement ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", message_r18.cardData.icon, " ", message_r18.cardData.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r18.cardData.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.downloadOptions);
  }
}
function ChatbotComponent_div_28_div_4_div_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_div_28_div_4_div_14_div_7_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r91);
      const type_r89 = restoredCtx.$implicit;
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r90.sendMessage(type_r89.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 246)(4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("border-left-color", type_r89.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", type_r89.color + "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", type_r89.icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](type_r89.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](type_r89.description);
  }
}
function ChatbotComponent_div_28_div_4_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 239)(1, "div", 240)(2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ChatbotComponent_div_28_div_4_div_14_div_7_Template, 9, 7, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r18.cardData.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r18.cardData.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.cardData.statementTypes);
  }
}
function ChatbotComponent_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 62)(1, "div", 63)(2, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ChatbotComponent_div_28_div_4_div_4_Template, 8, 2, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ChatbotComponent_div_28_div_4_div_5_Template, 5, 1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ChatbotComponent_div_28_div_4_div_6_Template, 5, 1, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ChatbotComponent_div_28_div_4_div_7_Template, 19, 4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ChatbotComponent_div_28_div_4_div_8_Template, 24, 2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ChatbotComponent_div_28_div_4_div_9_Template, 11, 3, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ChatbotComponent_div_28_div_4_div_10_Template, 23, 7, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ChatbotComponent_div_28_div_4_div_11_Template, 17, 3, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ChatbotComponent_div_28_div_4_div_12_Template, 27, 10, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ChatbotComponent_div_28_div_4_div_13_Template, 18, 4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ChatbotComponent_div_28_div_4_div_14_Template, 8, 3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r18.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r18.cardData == null ? null : message_r18.cardData.type) === "balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r18.cardData == null ? null : message_r18.cardData.type) === "transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r18.cardData == null ? null : message_r18.cardData.type) === "accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r18.cardData == null ? null : message_r18.cardData.type) === "digital_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r18.cardData == null ? null : message_r18.cardData.type) === "qr_payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r18.cardData == null ? null : message_r18.cardData.type) === "crypto_wallet");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r18.cardData == null ? null : message_r18.cardData.type) === "loyalty_points");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r18.cardData == null ? null : message_r18.cardData.type) === "social_payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r18.cardData == null ? null : message_r18.cardData.type) === "contactless_payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r18.cardData == null ? null : message_r18.cardData.type) === "statement_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (message_r18.cardData == null ? null : message_r18.cardData.type) === "statement_options");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r21.getMessageTime(message_r18.timestamp));
  }
}
function ChatbotComponent_div_28_div_5_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_div_28_div_5_button_1_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r97);
      const reply_r95 = restoredCtx.$implicit;
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r96.sendQuickReply(reply_r95));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const reply_r95 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", reply_r95, " ");
  }
}
function ChatbotComponent_div_28_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChatbotComponent_div_28_div_5_button_1_Template, 2, 1, "button", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", message_r18.quickReplies);
  }
}
function ChatbotComponent_div_28_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChatbotComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChatbotComponent_div_28_div_1_Template, 2, 0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ChatbotComponent_div_28_div_3_Template, 5, 2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ChatbotComponent_div_28_div_4_Template, 17, 13, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ChatbotComponent_div_28_div_5_Template, 2, 1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ChatbotComponent_div_28_div_6_Template, 2, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("user-message", message_r18.isFromUser)("bot-message", !message_r18.isFromUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !message_r18.isFromUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", message_r18.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", message_r18.type === "card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", message_r18.quickReplies && message_r18.quickReplies.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", message_r18.isFromUser);
  }
}
function ChatbotComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 253)(1, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 54)(4, "div", 255)(5, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span")(7, "span")(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
function ChatbotComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 257)(1, "button", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_div_31_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r100);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r99.castSpell("balance"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Balance Spell ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_div_31_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r100);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r101.castSpell("transfer"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Transfer Magic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_div_31_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r100);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r102.castSpell("bills"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Bill Magic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_div_31_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r100);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r103.castSpell("wallet"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Digital Wallet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_div_31_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r100);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r104.castSpell("qr"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " QR Payments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_div_31_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r100);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r105.castSpell("crypto"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Crypto Portfolio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_div_31_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r100);
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r106.castSpell("statement"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Statements ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_div_31_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r100);
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r107.castSpell("tax"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Tax Docs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ChatbotComponent_i_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 263);
  }
}
function ChatbotComponent_i_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 264);
  }
}
function ChatbotComponent_i_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 12);
  }
}
function ChatbotComponent_i_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 265);
  }
}
function ChatbotComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 266)(1, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "span", 268)(3, "span", 268)(4, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r15.voiceStatus || "Listening for your magical command...");
  }
}
function ChatbotComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r16.voiceError);
  }
}
function ChatbotComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uD83C\uDFA4 Voice magic requires Chrome, Edge, or Safari with HTTPS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ChatbotComponent {
  constructor(aiChatService) {
    this.aiChatService = aiChatService;
    this.messages = [];
    this.newMessage = '';
    this.isTyping = false;
    this.isChatOpen = false;
    this.unreadCount = 0;
    // Magical Features
    this.magicActivated = false;
    this.isListening = false;
    this.showMagicSuggestions = false;
    this.magicPlaceholder = 'Cast your banking spell here...';
    this.isVoiceSupported = false;
    this.voiceError = '';
    this.voiceStatus = '';
    this.maxListeningTime = 10000; // 10 seconds max listening
    this.magicPlaceholders = ['Cast your banking spell here...', 'Whisper your financial wish...', 'What magic shall I perform?', 'Your wish is my command...', 'Tell me your banking desire...'];
    this.messagesSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    this.typingSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  }
  ngOnInit() {
    this.subscribeToMessages();
    this.subscribeToTyping();
    this.initializeVoiceRecognition();
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  subscribeToMessages() {
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
  subscribeToTyping() {
    this.typingSubscription = this.aiChatService.isTyping$.subscribe(isTyping => {
      this.isTyping = isTyping;
    });
  }
  toggleChat() {
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
  sendQuickReply(reply) {
    // Add magical effect for quick replies
    this.addMagicalQuickReplyEffect();
    this.aiChatService.sendMessage(reply).subscribe();
  }
  addMagicalQuickReplyEffect() {
    // Visual feedback for quick reply magic
    const chatContainer = this.chatContainer?.nativeElement;
    if (chatContainer) {
      chatContainer.classList.add('quick-reply-magic');
      setTimeout(() => {
        chatContainer.classList.remove('quick-reply-magic');
      }, 800);
    }
  }
  onKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
  scrollToBottom() {
    if (this.chatContainer) {
      try {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      } catch (err) {
        console.warn('Could not scroll to bottom:', err);
      }
    }
  }
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }
  formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(new Date(date));
  }
  getMessageTime(timestamp) {
    const now = new Date();
    const messageDate = new Date(timestamp);
    const diffMinutes = Math.floor((now.getTime() - messageDate.getTime()) / (1000 * 60));
    if (diffMinutes < 1) return 'now';
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    if (diffMinutes < 1440) return `${Math.floor(diffMinutes / 60)}h ago`;
    return messageDate.toLocaleDateString();
  }
  getAbsoluteValue(value) {
    return Math.abs(value);
  }
  downloadStatement(statementType, period) {
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
  clearChat() {
    this.aiChatService.clearChat();
  }
  closeChat() {
    this.isChatOpen = false;
  }
  // Magical Feature Methods
  activateMagic() {
    this.magicActivated = true;
    this.rotateMagicPlaceholder();
  }
  deactivateMagic() {
    this.magicActivated = false;
  }
  initializeVoiceRecognition() {
    // Check if we're running on HTTPS (required for Web Speech API)
    const isSecure = location.protocol === 'https:' || location.hostname === 'localhost';
    if (!isSecure) {
      this.isVoiceSupported = false;
      this.voiceError = '🔒 Voice magic requires HTTPS connection. Please use a secure connection.';
      console.warn('Web Speech API requires HTTPS connection');
      return;
    }
    // Check if Web Speech API is supported
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
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
      this.recognition.onresult = event => {
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
      this.recognition.onerror = event => {
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
  toggleVoiceRecognition() {
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
  startVoiceListening() {
    var _this = this;
    return (0,C_Users_jaisw_java_project_VibeCoding_vibeCoder_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.recognition || _this.isListening) return;
      try {
        // Check microphone permissions first
        if (navigator.permissions) {
          const permissionStatus = yield navigator.permissions.query({
            name: 'microphone'
          });
          if (permissionStatus.state === 'denied') {
            _this.voiceError = '🚫 Microphone access denied. Please enable microphone permissions in your browser settings.';
            return;
          }
        }
        _this.voiceError = '';
        console.log('🎤 Starting voice recognition...');
        _this.recognition.start();
      } catch (error) {
        console.error('Failed to start voice recognition:', error);
        _this.handleVoiceError('failed_to_start');
      }
    })();
  }
  stopVoiceListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
    this.isListening = false;
    this.voiceStatus = '';
    this.clearListeningTimeout();
  }
  processVoiceCommand(command) {
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
  handleVoiceError(error) {
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
  setListeningTimeout() {
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
  clearListeningTimeout() {
    if (this.listeningTimeout) {
      clearTimeout(this.listeningTimeout);
      this.listeningTimeout = null;
    }
  }
  castSpell(spellType) {
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
    this.newMessage = spells[spellType] || 'Help me with banking';
    this.sendMessage();
    this.showMagicSuggestions = false;
  }
  onInputFocus() {
    this.showMagicSuggestions = true;
  }
  onInputBlur() {
    // Delay hiding to allow button clicks
    setTimeout(() => {
      this.showMagicSuggestions = false;
    }, 200);
  }
  rotateMagicPlaceholder() {
    const randomIndex = Math.floor(Math.random() * this.magicPlaceholders.length);
    this.magicPlaceholder = this.magicPlaceholders[randomIndex];
  }
  sendMessage(message) {
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
  addMagicalSendEffect() {
    // Create temporary magical effect (visual feedback)
    const messageElement = this.messageInput?.nativeElement;
    if (messageElement) {
      messageElement.classList.add('magic-cast');
      setTimeout(() => {
        messageElement.classList.remove('magic-cast');
      }, 1000);
    }
  }
  ngOnDestroy() {
    this.messagesSubscription.unsubscribe();
    this.typingSubscription.unsubscribe();
  }
  static {
    this.ɵfac = function ChatbotComponent_Factory(t) {
      return new (t || ChatbotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ai_chat_service__WEBPACK_IMPORTED_MODULE_1__.AiChatService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ChatbotComponent,
      selectors: [["app-chatbot"]],
      viewQuery: function ChatbotComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chatContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.messageInput = _t.first);
        }
      },
      decls: 44,
      vars: 29,
      consts: [[1, "bankgenie-toggle-btn", 3, "click", "mouseenter", "mouseleave"], ["class", "genie-icon", 4, "ngIf"], ["class", "fas fa-times", 4, "ngIf"], ["class", "unread-badge", 4, "ngIf"], ["class", "magic-aura", 4, "ngIf"], ["class", "genie-sparkles", 4, "ngIf"], ["class", "magic-circle", 4, "ngIf"], [1, "chat-overlay", 3, "click"], [1, "chat-container"], [1, "chat-header"], [1, "chat-header-info"], [1, "genie-avatar"], [1, "fas", "fa-magic"], [1, "genie-glow"], [1, "bot-info"], [1, "bot-status"], [1, "fas", "fa-circle", "online"], [1, "chat-actions"], ["title", "Clear Chat", 1, "btn-icon", 3, "click"], [1, "fas", "fa-trash"], ["title", "Close Chat", 1, "btn-icon", 3, "click"], [1, "fas", "fa-times"], [1, "chat-messages"], ["chatContainer", ""], [1, "messages-list"], ["class", "message-item", 3, "user-message", "bot-message", 4, "ngFor", "ngForOf"], ["class", "message-item bot-message", 4, "ngIf"], [1, "chat-input"], ["class", "magic-suggestions", 4, "ngIf"], [1, "input-group"], ["title", "Voice Magic", 1, "btn", "btn-magic", "voice-btn", 3, "click"], ["class", "fas fa-microphone", 4, "ngIf"], ["class", "fas fa-microphone-slash magic-pulse", 4, "ngIf"], ["type", "text", "autocomplete", "off", 1, "form-control", "magic-input", 3, "placeholder", "ngModel", "ngModelChange", "keypress", "focus", "blur"], ["messageInput", ""], [1, "btn", "btn-primary", "send-btn", "magic-send", 3, "disabled", "click"], ["class", "fas fa-magic", 4, "ngIf"], ["class", "fas fa-paper-plane", 4, "ngIf"], ["class", "voice-status", 4, "ngIf"], ["class", "voice-error", 4, "ngIf"], ["class", "voice-warning", 4, "ngIf"], [1, "genie-icon"], [1, "unread-badge"], [1, "magic-aura"], [1, "genie-sparkles"], [1, "sparkle", "sparkle-1"], [1, "sparkle", "sparkle-2"], [1, "sparkle", "sparkle-3"], [1, "sparkle", "sparkle-4"], [1, "sparkle", "sparkle-5"], [1, "magic-circle"], [1, "circle-inner"], [1, "message-item"], ["class", "message-avatar genie-message-avatar", 4, "ngIf"], [1, "message-content"], ["class", "message-bubble", 4, "ngIf"], ["class", "message-card", 4, "ngIf"], ["class", "quick-replies", 4, "ngIf"], ["class", "message-avatar user-avatar", 4, "ngIf"], [1, "message-avatar", "genie-message-avatar"], [1, "message-bubble"], [1, "message-time"], [1, "message-card"], [1, "card-header"], [1, "card-message"], ["class", "balance-card", 4, "ngIf"], ["class", "transaction-card", 4, "ngIf"], ["class", "account-info-card", 4, "ngIf"], ["class", "digital-wallet-card", 4, "ngIf"], ["class", "qr-payment-card", 4, "ngIf"], ["class", "crypto-wallet-card", 4, "ngIf"], ["class", "loyalty-points-card", 4, "ngIf"], ["class", "social-payments-card", 4, "ngIf"], ["class", "contactless-card", 4, "ngIf"], ["class", "statement-download-card", 4, "ngIf"], ["class", "statement-options-card", 4, "ngIf"], [1, "balance-card"], [1, "balance-summary"], [1, "balance-amount"], [1, "accounts-list"], ["class", "account-item", 4, "ngFor", "ngForOf"], [1, "account-item"], [1, "account-info"], [1, "account-name"], [1, "account-number"], [1, "account-balance"], [1, "transaction-card"], [1, "transaction-list"], ["class", "transaction-item", 4, "ngFor", "ngForOf"], [1, "transaction-item"], [1, "transaction-info"], [1, "transaction-desc"], [1, "transaction-category"], [1, "transaction-amount"], [1, "account-info-card"], [1, "account-details-list"], ["class", "account-detail-item", 4, "ngFor", "ngForOf"], [1, "account-detail-item"], [1, "account-header"], [1, "account-status", "active"], [1, "account-meta"], [1, "account-balance-detail"], [1, "digital-wallet-card"], [1, "wallet-header"], [1, "fas", "fa-mobile-alt"], [1, "wallet-balance"], [1, "linked-cards"], [1, "card-list"], ["class", "payment-card", 4, "ngFor", "ngForOf"], [1, "wallet-features"], [1, "feature-chips"], ["class", "feature-chip", 4, "ngFor", "ngForOf"], [1, "recent-wallet-transactions"], ["class", "wallet-transaction", 4, "ngFor", "ngForOf"], [1, "payment-card"], [1, "card-info"], ["class", "default-badge", 4, "ngIf"], [1, "default-badge"], [1, "feature-chip"], [1, "wallet-transaction"], [1, "tx-info"], [1, "merchant"], [1, "method"], [1, "tx-amount", "negative"], [1, "qr-payment-card"], [1, "qr-header"], [1, "fas", "fa-qrcode"], [1, "qr-code-section"], [1, "qr-code-display"], [1, "qr-placeholder"], [1, "fas", "fa-qrcode", "qr-icon"], [1, "qr-action-btn", "generate"], [1, "fas", "fa-plus"], [1, "qr-action-btn", "scan"], [1, "fas", "fa-camera"], [1, "qr-features"], [1, "feature-grid"], ["class", "qr-feature", 4, "ngFor", "ngForOf"], [1, "recent-qr-payments"], ["class", "qr-payment-item", 4, "ngFor", "ngForOf"], [1, "qr-feature"], [1, "fas", "fa-check-circle"], [1, "qr-payment-item"], [1, "payment-info"], ["class", "fas fa-check-circle success-icon", 4, "ngIf"], [1, "payment-amount"], [1, "fas", "fa-check-circle", "success-icon"], [1, "crypto-wallet-card"], [1, "crypto-header"], [1, "fab", "fa-bitcoin"], [1, "total-value"], [1, "crypto-currencies"], ["class", "crypto-item", 4, "ngFor", "ngForOf"], [1, "crypto-features"], ["class", "crypto-feature", 4, "ngFor", "ngForOf"], [1, "crypto-item"], [1, "crypto-info"], [1, "crypto-symbol"], [1, "crypto-details"], [1, "crypto-name"], [1, "crypto-amount"], [1, "crypto-value"], [1, "value"], [1, "change"], [1, "crypto-feature"], [1, "loyalty-points-card"], [1, "loyalty-header"], [1, "fas", "fa-star"], [1, "points-summary"], [1, "total-points"], [1, "cash-value"], [1, "tier-progress"], [1, "tier-info"], [1, "current-tier"], [1, "points-to-next"], [1, "progress-bar"], [1, "progress-fill"], [1, "available-rewards"], [1, "reward-list"], ["class", "reward-item", 4, "ngFor", "ngForOf"], [1, "reward-item"], [1, "reward-info"], [1, "reward-name"], [1, "reward-category"], [1, "reward-cost"], [1, "social-payments-card"], [1, "social-header"], [1, "fas", "fa-users"], [1, "connected-platforms"], [1, "platform-list"], ["class", "platform-chip", 4, "ngFor", "ngForOf"], [1, "money-requests"], [1, "request-list"], ["class", "request-item", 4, "ngFor", "ngForOf"], [1, "social-actions"], ["class", "social-action-btn", 4, "ngFor", "ngForOf"], [1, "platform-chip"], [1, "request-item"], [1, "request-info"], [1, "friend-name"], [1, "request-reason"], [1, "request-details"], [1, "request-amount"], [1, "request-status"], [1, "social-action-btn"], [1, "contactless-card"], [1, "contactless-header"], [1, "fas", "fa-wave-square"], [1, "nfc-status"], [1, "daily-limits"], [1, "limit-progress"], [1, "limit-info"], [1, "remaining"], [1, "limit-bar"], [1, "limit-fill"], [1, "supported-methods"], [1, "method-list"], ["class", "method-chip", 4, "ngFor", "ngForOf"], [1, "recent-contactless"], ["class", "contactless-transaction", 4, "ngFor", "ngForOf"], [1, "method-chip"], [1, "contactless-transaction"], [1, "tx-amount"], [1, "statement-download-card"], [1, "statement-header"], [1, "statement-desc"], [1, "download-options"], [1, "period-options"], ["class", "period-option", 3, "click", 4, "ngFor", "ngForOf"], [1, "quick-actions"], [1, "action-btn", "primary", 3, "click"], [1, "fas", "fa-download"], [1, "action-btn", "secondary"], [1, "fas", "fa-envelope"], [1, "period-option", 3, "click"], [1, "period-info"], [1, "period-name"], [1, "file-size"], [1, "fas", "fa-download", "download-icon"], [1, "statement-options-card"], [1, "options-header"], [1, "options-desc"], [1, "statement-types"], ["class", "statement-type", 3, "border-left-color", "click", 4, "ngFor", "ngForOf"], [1, "statement-type", 3, "click"], [1, "type-icon"], [1, "type-info"], [1, "fas", "fa-chevron-right"], [1, "quick-replies"], ["class", "quick-reply-btn", 3, "click", 4, "ngFor", "ngForOf"], [1, "quick-reply-btn", 3, "click"], [1, "message-avatar", "user-avatar"], [1, "fas", "fa-user"], [1, "message-item", "bot-message"], [1, "message-avatar", "genie-message-avatar", "thinking"], [1, "typing-indicator"], [1, "typing-dots"], [1, "magic-suggestions"], [1, "magic-spell-btn", 3, "click"], [1, "fas", "fa-coins"], [1, "fas", "fa-exchange-alt"], [1, "fas", "fa-file-invoice"], [1, "fas", "fa-file-alt"], [1, "fas", "fa-microphone"], [1, "fas", "fa-microphone-slash", "magic-pulse"], [1, "fas", "fa-paper-plane"], [1, "voice-status"], [1, "listening-animation"], [1, "listening-dot"], [1, "voice-text"], [1, "voice-error"], [1, "fas", "fa-exclamation-triangle"], [1, "error-text"], [1, "voice-warning"], [1, "fas", "fa-info-circle"], [1, "warning-text"]],
      template: function ChatbotComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_Template_div_click_0_listener() {
            return ctx.toggleChat();
          })("mouseenter", function ChatbotComponent_Template_div_mouseenter_0_listener() {
            return ctx.activateMagic();
          })("mouseleave", function ChatbotComponent_Template_div_mouseleave_0_listener() {
            return ctx.deactivateMagic();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChatbotComponent_div_1_Template, 2, 0, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ChatbotComponent_i_2_Template, 1, 0, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ChatbotComponent_span_3_Template, 2, 1, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ChatbotComponent_div_4_Template, 1, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ChatbotComponent_div_5_Template, 11, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ChatbotComponent_div_6_Template, 2, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_Template_div_click_7_listener() {
            return ctx.closeChat();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 12)(13, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 14)(15, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\uD83E\uDDDE\u200D\u2642\uFE0F BankGenie");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Your magical banking assistant ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17)(21, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_Template_button_click_21_listener() {
            return ctx.clearChat();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_Template_button_click_23_listener() {
            return ctx.closeChat();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 22, 23)(27, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ChatbotComponent_div_28_Template, 7, 9, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ChatbotComponent_div_29_Template, 9, 0, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ChatbotComponent_div_31_Template, 25, 0, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 29)(33, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_Template_button_click_33_listener() {
            return ctx.toggleVoiceRecognition();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, ChatbotComponent_i_34_Template, 1, 0, "i", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ChatbotComponent_i_35_Template, 1, 0, "i", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "input", 33, 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChatbotComponent_Template_input_ngModelChange_36_listener($event) {
            return ctx.newMessage = $event;
          })("keypress", function ChatbotComponent_Template_input_keypress_36_listener($event) {
            return ctx.onKeyPress($event);
          })("focus", function ChatbotComponent_Template_input_focus_36_listener() {
            return ctx.onInputFocus();
          })("blur", function ChatbotComponent_Template_input_blur_36_listener() {
            return ctx.onInputBlur();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatbotComponent_Template_button_click_38_listener() {
            return ctx.sendMessage();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, ChatbotComponent_i_39_Template, 1, 0, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, ChatbotComponent_i_40_Template, 1, 0, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, ChatbotComponent_div_41_Template, 7, 1, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, ChatbotComponent_div_42_Template, 4, 1, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, ChatbotComponent_div_43_Template, 4, 0, "div", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("chat-open", ctx.isChatOpen)("magic-activated", ctx.magicActivated);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isChatOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isChatOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.unreadCount > 0 && !ctx.isChatOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isChatOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isChatOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isChatOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx.isChatOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.isChatOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.messages);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isTyping);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showMagicSuggestions && !ctx.newMessage.trim());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("listening", ctx.isListening);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isListening);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isListening);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.magicPlaceholder)("ngModel", ctx.newMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.newMessage.trim());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.newMessage.trim());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.newMessage.trim());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isListening);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.voiceError && !ctx.isListening);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isVoiceSupported && !ctx.voiceError);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["\n\n.bankgenie-toggle-btn[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n  width: 70px;\n  height: 70px;\n  background: linear-gradient(135deg, #9c27b0, #673ab7, #3f51b5);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: white;\n  font-size: 28px;\n  z-index: 1050;\n  box-shadow: 0 6px 25px rgba(156, 39, 176, 0.4);\n  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-user-select: none;\n          user-select: none;\n  animation: _ngcontent-%COMP%_genieFloat 3s ease-in-out infinite;\n}\n\n.bankgenie-toggle-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px) scale(1.05);\n  box-shadow: 0 10px 35px rgba(156, 39, 176, 0.6);\n}\n\n.bankgenie-toggle-btn.chat-open[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #dc3545, #c82333);\n  transform: rotate(180deg);\n  animation: none;\n}\n\n.genie-icon[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  animation: _ngcontent-%COMP%_genieWand 2s ease-in-out infinite;\n}\n\n.genie-sparkles[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n\n.sparkle[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 12px;\n  animation: _ngcontent-%COMP%_sparkleFloat 2s ease-in-out infinite;\n}\n\n.sparkle-1[_ngcontent-%COMP%] {\n  top: -5px;\n  right: -5px;\n  animation-delay: 0s;\n}\n\n.sparkle-2[_ngcontent-%COMP%] {\n  bottom: -5px;\n  left: -5px;\n  animation-delay: 0.7s;\n}\n\n.sparkle-3[_ngcontent-%COMP%] {\n  top: 10px;\n  left: -8px;\n  animation-delay: 1.4s;\n}\n\n.sparkle-4[_ngcontent-%COMP%] {\n  top: 50%;\n  right: -10px;\n  animation-delay: 2.1s;\n}\n\n.sparkle-5[_ngcontent-%COMP%] {\n  bottom: 10px;\n  left: 50%;\n  animation-delay: 2.8s;\n}\n\n\n\n.magic-aura[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  right: -10px;\n  bottom: -10px;\n  border-radius: 50%;\n  background: linear-gradient(45deg, rgba(156, 39, 176, 0.3), rgba(103, 58, 183, 0.3), rgba(63, 81, 181, 0.3));\n  animation: _ngcontent-%COMP%_magicAura 4s ease-in-out infinite;\n  z-index: -1;\n}\n\n\n\n.magic-circle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -15px;\n  left: -15px;\n  right: -15px;\n  bottom: -15px;\n  border: 2px solid rgba(255, 215, 0, 0.5);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_magicCircleRotate 8s linear infinite;\n  z-index: -2;\n}\n\n.circle-inner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  border: 1px dashed rgba(255, 215, 0, 0.3);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_magicCircleRotate 6s linear infinite reverse;\n}\n\n.bankgenie-toggle-btn.magic-activated[_ngcontent-%COMP%] {\n  transform: scale(1.1) translateY(-3px);\n  box-shadow: 0 15px 40px rgba(156, 39, 176, 0.8);\n}\n\n.unread-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  background: #dc3545;\n  color: white;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: bold;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n\n\n\n.chat-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1040;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n}\n\n.chat-overlay.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n\n\n\n.chat-container[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 100px;\n  right: 20px;\n  width: 380px;\n  height: calc(100vh - 140px);\n  max-height: 600px;\n  min-height: 400px;\n  background: linear-gradient(145deg, #ffffff, #f8f9fc);\n  border-radius: 20px;\n  box-shadow: 0 15px 50px rgba(156, 39, 176, 0.2), 0 5px 20px rgba(0, 0, 0, 0.1);\n  z-index: 1045;\n  display: flex;\n  flex-direction: column;\n  transform: translateY(100vh) scale(0.7) rotateY(15deg);\n  opacity: 0;\n  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  border: 2px solid rgba(156, 39, 176, 0.1);\n}\n\n.chat-container.open[_ngcontent-%COMP%] {\n  transform: translateY(0) scale(1) rotateY(0deg);\n  opacity: 1;\n}\n\n\n\n.chat-container[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: \n    radial-gradient(circle at 20% 80%, rgba(156, 39, 176, 0.1) 0%, transparent 50%),\n    radial-gradient(circle at 80% 20%, rgba(103, 58, 183, 0.1) 0%, transparent 50%),\n    radial-gradient(circle at 40% 40%, rgba(63, 81, 181, 0.1) 0%, transparent 50%);\n  animation: _ngcontent-%COMP%_magicParticles 10s ease-in-out infinite;\n  pointer-events: none;\n}\n\n\n\n.chat-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #9c27b0, #673ab7, #3f51b5);\n  color: white;\n  padding: 16px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top-left-radius: 18px;\n  border-top-right-radius: 18px;\n  position: relative;\n  overflow: hidden;\n  flex-shrink: 0;\n  min-height: 70px;\n}\n\n.chat-header[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%);\n  animation: _ngcontent-%COMP%_headerShimmer 3s ease-in-out infinite;\n}\n\n.chat-header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  position: relative;\n  z-index: 2;\n}\n\n.genie-avatar[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  position: relative;\n  animation: _ngcontent-%COMP%_genieGlow 2s ease-in-out infinite;\n}\n\n.genie-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  right: -2px;\n  bottom: -2px;\n  background: linear-gradient(45deg, #ffd700, #ff69b4, #00bcd4, #ffd700);\n  border-radius: 50%;\n  z-index: -1;\n  animation: _ngcontent-%COMP%_rainbowSpin 3s linear infinite;\n  opacity: 0.7;\n}\n\n.bot-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_titleSparkle 3s ease-in-out infinite;\n}\n\n.bot-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  opacity: 0.9;\n}\n\n.bot-status[_ngcontent-%COMP%]   .online[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-size: 8px;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n}\n\n.chat-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.btn-icon[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  padding: 8px;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  width: 32px;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.btn-icon[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n\n\n.chat-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  background: #f8f9fa;\n}\n\n.messages-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.message-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  max-width: 85%;\n  animation: _ngcontent-%COMP%_messageSlideIn 0.3s ease-out;\n}\n\n.message-item.user-message[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  flex-direction: row-reverse;\n}\n\n.message-item.bot-message[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.message-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  flex-shrink: 0;\n  margin-top: 4px;\n}\n\n.message-item.bot-message[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #9c27b0, #673ab7);\n  color: white;\n}\n\n.genie-message-avatar[_ngcontent-%COMP%] {\n  position: relative;\n  animation: _ngcontent-%COMP%_subtleGlow 3s ease-in-out infinite;\n}\n\n.genie-message-avatar.thinking[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_thinkingPulse 1.5s ease-in-out infinite;\n}\n\n.genie-message-avatar[_ngcontent-%COMP%]::after {\n  content: '\u2728';\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  font-size: 10px;\n  animation: _ngcontent-%COMP%_sparkleRotate 2s linear infinite;\n}\n\n.message-item.user-message[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745, #1e7e34);\n  color: white;\n}\n\n.message-content[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n\n\n.message-bubble[_ngcontent-%COMP%] {\n  background: white;\n  padding: 12px 16px;\n  border-radius: 18px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  position: relative;\n}\n\n.user-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #007bff, #0056b3);\n  color: white;\n  border-bottom-right-radius: 6px;\n}\n\n.bot-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 6px;\n  background: linear-gradient(135deg, #ffffff, #f8f9fc);\n  border: 1px solid rgba(156, 39, 176, 0.1);\n}\n\n.message-bubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.4;\n  font-size: 14px;\n}\n\n.message-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.7;\n  margin-top: 4px;\n  display: block;\n}\n\n\n\n.message-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  border: 1px solid #e9ecef;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.card-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #495057;\n}\n\n\n\n.balance-card[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.balance-summary[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 16px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid #e9ecef;\n}\n\n.balance-summary[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #6c757d;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.balance-amount[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n  background: linear-gradient(135deg, #9c27b0, #673ab7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.accounts-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.account-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px;\n  background: #f8f9fa;\n  border-radius: 8px;\n}\n\n.account-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.account-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: #212529;\n}\n\n.account-number[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n}\n\n.account-balance[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background: linear-gradient(135deg, #9c27b0, #673ab7);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  font-size: 14px;\n}\n\n\n\n.transaction-card[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.transaction-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  color: #212529;\n}\n\n.transaction-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.transaction-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid #f1f3f4;\n}\n\n.transaction-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.transaction-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.transaction-desc[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #212529;\n  font-size: 14px;\n}\n\n.transaction-category[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6c757d;\n}\n\n.transaction-amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.transaction-amount.positive[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n\n.transaction-amount.negative[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n\n\n\n.account-info-card[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.account-info-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  color: #212529;\n}\n\n.account-details-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.account-detail-item[_ngcontent-%COMP%] {\n  padding: 12px;\n  background: linear-gradient(135deg, #f8f9fa, #ffffff);\n  border-radius: 8px;\n  border-left: 4px solid #9c27b0;\n  box-shadow: 0 2px 8px rgba(156, 39, 176, 0.1);\n}\n\n.account-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.account-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #212529;\n}\n\n.account-status[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.account-status.active[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n}\n\n.account-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.account-meta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #6c757d;\n}\n\n.account-balance-detail[_ngcontent-%COMP%] {\n  font-weight: 600;\n  background: linear-gradient(135deg, #9c27b0, #673ab7) !important;\n  -webkit-background-clip: text !important;\n  -webkit-text-fill-color: transparent !important;\n  background-clip: text !important;\n}\n\n\n\n.quick-replies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n.quick-reply-btn[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  border: 1px solid #dee2e6;\n  color: #495057;\n  padding: 6px 12px;\n  border-radius: 16px;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n\n.quick-reply-btn[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #9c27b0, #673ab7);\n  color: white;\n  border-color: #9c27b0;\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(156, 39, 176, 0.3);\n}\n\n\n\n.typing-indicator[_ngcontent-%COMP%] {\n  background: white;\n  padding: 12px 16px;\n  border-radius: 18px;\n  border-bottom-left-radius: 6px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  display: inline-block;\n}\n\n.typing-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n\n.typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #6c757d;\n  animation: _ngcontent-%COMP%_typingBounce 1.4s infinite ease-in-out;\n}\n\n.typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) { animation-delay: -0.32s; }\n.typing-dots[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) { animation-delay: -0.16s; }\n\n\n\n.chat-input[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: white;\n  border-top: 1px solid #e9ecef;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 1px solid #dee2e6;\n  border-radius: 24px;\n  padding: 10px 16px;\n  font-size: 14px;\n  outline: none;\n  transition: all 0.2s ease;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n\n.send-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #9c27b0, #673ab7);\n  border: none;\n  border-radius: 50%;\n  width: 42px;\n  height: 42px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  position: relative;\n}\n\n.send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px) scale(1.05);\n  box-shadow: 0 6px 20px rgba(156, 39, 176, 0.4);\n}\n\n.send-btn[_ngcontent-%COMP%]:hover:not(:disabled)::before {\n  content: '\u2728';\n  position: absolute;\n  top: -10px;\n  right: -5px;\n  font-size: 12px;\n  animation: _ngcontent-%COMP%_sendSparkle 0.5s ease-out;\n}\n\n.send-btn[_ngcontent-%COMP%]:disabled {\n  background: #6c757d;\n  cursor: not-allowed;\n}\n\n\n\n\n\n\n.magic-suggestions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-bottom: 12px;\n  padding: 8px 0;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.magic-spell-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(103, 58, 183, 0.1));\n  border: 1px solid rgba(156, 39, 176, 0.3);\n  color: #9c27b0;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 11px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.magic-spell-btn[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #9c27b0, #673ab7);\n  color: white;\n  transform: translateY(-2px) scale(1.05);\n  box-shadow: 0 4px 15px rgba(156, 39, 176, 0.4);\n}\n\n.magic-spell-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n\n\n.voice-btn[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ff6b6b, #ff8e53);\n  border: none;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  color: white;\n  transition: all 0.3s ease;\n  position: relative;\n}\n\n.voice-btn[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #ff8e53, #ff6b6b);\n  transform: translateY(-1px);\n  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);\n}\n\n.voice-btn.listening[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #4ecdc4, #44a08d);\n  animation: _ngcontent-%COMP%_voicePulse 1.5s ease-in-out infinite;\n}\n\n.magic-pulse[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_magicPulse 1s ease-in-out infinite;\n}\n\n\n\n.magic-input[_ngcontent-%COMP%] {\n  border: 2px solid rgba(156, 39, 176, 0.2) !important;\n  border-radius: 25px !important;\n  transition: all 0.3s ease !important;\n  background: linear-gradient(135deg, #ffffff, #fafbff) !important;\n}\n\n.magic-input[_ngcontent-%COMP%]:focus {\n  border-color: #9c27b0 !important;\n  box-shadow: 0 0 0 3px rgba(156, 39, 176, 0.1) !important;\n  background: white !important;\n}\n\n.magic-input.magic-cast[_ngcontent-%COMP%] {\n  border-color: #ffd700 !important;\n  box-shadow: 0 0 20px rgba(255, 215, 0, 0.6) !important;\n  animation: _ngcontent-%COMP%_magicCast 1s ease-out;\n}\n\n\n\n.magic-send[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n\n.magic-send[_ngcontent-%COMP%]:hover::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);\n  animation: _ngcontent-%COMP%_magicSweep 0.6s ease-out;\n}\n\n\n\n.voice-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px;\n  background: linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(68, 160, 141, 0.1));\n  border-radius: 15px;\n  margin-top: 8px;\n  border: 1px solid rgba(78, 205, 196, 0.3);\n}\n\n.listening-animation[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3px;\n}\n\n.listening-dot[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  background: #4ecdc4;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_listeningBounce 1.4s ease-in-out infinite;\n}\n\n.listening-dot[_ngcontent-%COMP%]:nth-child(1) { animation-delay: 0s; }\n.listening-dot[_ngcontent-%COMP%]:nth-child(2) { animation-delay: 0.2s; }\n.listening-dot[_ngcontent-%COMP%]:nth-child(3) { animation-delay: 0.4s; }\n\n.voice-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #4ecdc4;\n  font-style: italic;\n}\n\n\n\n.voice-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: linear-gradient(135deg, rgba(220, 53, 69, 0.1), rgba(255, 107, 107, 0.1));\n  border-radius: 15px;\n  margin-top: 8px;\n  border: 1px solid rgba(220, 53, 69, 0.3);\n  animation: _ngcontent-%COMP%_errorShake 0.5s ease-in-out;\n}\n\n.voice-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-size: 12px;\n}\n\n.error-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #dc3545;\n  font-weight: 500;\n}\n\n\n\n.voice-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 152, 0, 0.1));\n  border-radius: 15px;\n  margin-top: 8px;\n  border: 1px solid rgba(255, 193, 7, 0.3);\n}\n\n.voice-warning[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffc107;\n  font-size: 12px;\n}\n\n.warning-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #ff8c00;\n  font-weight: 500;\n}\n\n\n\n.chat-messages.quick-reply-magic[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_quickReplyMagic 0.8s ease-out;\n}\n\n\n\n\n\n\n.digital-wallet-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  border-radius: 12px;\n  color: white;\n  margin-bottom: 12px;\n}\n\n.wallet-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.wallet-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.wallet-balance[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n\n.linked-cards[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.linked-cards[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0 0 8px 0;\n  opacity: 0.9;\n}\n\n.card-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.payment-card[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.15);\n  padding: 8px 12px;\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.card-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n}\n\n.default-badge[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 6px;\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 10px;\n}\n\n.wallet-features[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.feature-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.feature-chip[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 3px 8px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.recent-wallet-transactions[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0 0 8px 0;\n  opacity: 0.9;\n}\n\n.wallet-transaction[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.wallet-transaction[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.tx-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.merchant[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.method[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.8;\n}\n\n.tx-amount[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n\n\n\n.qr-payment-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: linear-gradient(135deg, #11998e, #38ef7d);\n  border-radius: 12px;\n  color: white;\n  margin-bottom: 12px;\n}\n\n.qr-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.qr-code-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.qr-code-display[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  background: white;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n\n.qr-placeholder[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #666;\n}\n\n.qr-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.qr-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10px;\n}\n\n.qr-action-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  padding: 8px 16px;\n  border-radius: 20px;\n  font-size: 11px;\n  margin: 0 4px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.qr-action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-1px);\n}\n\n.qr-features[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n\n.feature-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n}\n\n.qr-feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 11px;\n}\n\n.qr-feature[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.recent-qr-payments[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0 0 8px 0;\n  opacity: 0.9;\n}\n\n.qr-payment-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.qr-payment-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.payment-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.success-icon[_ngcontent-%COMP%] {\n  color: #4ade80;\n  font-size: 12px;\n}\n\n.payment-amount[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n\n\n\n.crypto-wallet-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: linear-gradient(135deg, #f093fb, #f5576c);\n  border-radius: 12px;\n  color: white;\n  margin-bottom: 12px;\n}\n\n.crypto-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.crypto-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.total-value[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);\n}\n\n.crypto-currencies[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.crypto-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.15);\n  padding: 12px;\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.crypto-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.crypto-symbol[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 12px;\n}\n\n.crypto-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.crypto-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.crypto-amount[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.8;\n}\n\n.crypto-value[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.change[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 2px;\n}\n\n.change.positive[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n\n.change.negative[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n\n.crypto-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.crypto-feature[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 3px 8px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n\n\n.loyalty-points-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: linear-gradient(135deg, #ffecd2, #fcb69f);\n  border-radius: 12px;\n  color: #8b4513;\n  margin-bottom: 12px;\n}\n\n.loyalty-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n\n.loyalty-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #d97706;\n}\n\n.points-summary[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.total-points[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #d97706;\n}\n\n.cash-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.8;\n}\n\n.tier-progress[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.tier-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n\n.current-tier[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #d97706;\n}\n\n.points-to-next[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.8;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(139, 69, 19, 0.2);\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(135deg, #d97706, #f59e0b);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n\n.available-rewards[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0 0 8px 0;\n  color: #d97706;\n}\n\n.reward-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.reward-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(139, 69, 19, 0.1);\n  padding: 8px 12px;\n  border-radius: 8px;\n}\n\n.reward-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.reward-name[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n}\n\n.reward-category[_ngcontent-%COMP%] {\n  font-size: 9px;\n  opacity: 0.7;\n}\n\n.reward-cost[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  color: #d97706;\n}\n\n\n\n.social-payments-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  border-radius: 12px;\n  color: white;\n  margin-bottom: 12px;\n}\n\n.social-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.connected-platforms[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0 0 8px 0;\n  opacity: 0.9;\n}\n\n.platform-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 16px;\n}\n\n.platform-chip[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 4px 8px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.money-requests[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0 0 8px 0;\n  opacity: 0.9;\n}\n\n.request-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-bottom: 16px;\n}\n\n.request-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.15);\n  padding: 10px 12px;\n  border-radius: 8px;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.request-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.friend-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.request-reason[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: 0.8;\n}\n\n.request-details[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.request-amount[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.request-status[_ngcontent-%COMP%] {\n  font-size: 9px;\n  padding: 2px 6px;\n  border-radius: 8px;\n  margin-top: 2px;\n  display: inline-block;\n}\n\n.request-status.pending[_ngcontent-%COMP%] {\n  background: rgba(255, 193, 7, 0.3);\n  color: #ffc107;\n}\n\n.request-status.completed[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.3);\n  color: #28a745;\n}\n\n.social-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.social-action-btn[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 6px 12px;\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  color: white;\n  border-radius: 15px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.social-action-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  transform: translateY(-1px);\n}\n\n\n\n.contactless-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: linear-gradient(135deg, #4facfe, #00f2fe);\n  border-radius: 12px;\n  color: white;\n  margin-bottom: 12px;\n}\n\n.contactless-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n.contactless-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.nfc-status[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 4px 8px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.nfc-status.enabled[_ngcontent-%COMP%] {\n  background: rgba(40, 167, 69, 0.3);\n  color: #4ade80;\n}\n\n.daily-limits[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0 0 8px 0;\n  opacity: 0.9;\n}\n\n.limit-progress[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.limit-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 6px;\n  font-size: 11px;\n}\n\n.remaining[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n\n.limit-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.limit-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: 3px;\n  transition: width 0.3s ease;\n}\n\n.supported-methods[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0 0 8px 0;\n  opacity: 0.9;\n}\n\n.method-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-bottom: 16px;\n}\n\n.method-chip[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 3px 8px;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.recent-contactless[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 0 0 8px 0;\n  opacity: 0.9;\n}\n\n.contactless-transaction[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 6px 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.contactless-transaction[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_messageSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_typingBounce {\n  0%, 80%, 100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_genieFloat {\n  0%, 100% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_genieWand {\n  0%, 100% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(-10deg);\n  }\n  75% {\n    transform: rotate(10deg);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_sparkleFloat {\n  0% {\n    opacity: 0;\n    transform: scale(0) rotate(0deg);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1) rotate(180deg);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0) rotate(360deg);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_genieGlow {\n  0%, 100% {\n    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_rainbowSpin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_headerShimmer {\n  0% {\n    transform: translateX(-100%);\n  }\n  50% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_subtleGlow {\n  0%, 100% {\n    box-shadow: 0 0 5px rgba(156, 39, 176, 0.3);\n  }\n  50% {\n    box-shadow: 0 0 15px rgba(156, 39, 176, 0.6);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_thinkingPulse {\n  0%, 100% {\n    transform: scale(1);\n    box-shadow: 0 0 5px rgba(156, 39, 176, 0.3);\n  }\n  50% {\n    transform: scale(1.1);\n    box-shadow: 0 0 20px rgba(156, 39, 176, 0.8);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_sparkleRotate {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(180deg) scale(1.2);\n  }\n  100% {\n    transform: rotate(360deg) scale(1);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_sendSparkle {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(0);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_magicParticles {\n  0%, 100% {\n    opacity: 0.3;\n    transform: scale(1);\n  }\n  33% {\n    opacity: 0.6;\n    transform: scale(1.1);\n  }\n  66% {\n    opacity: 0.4;\n    transform: scale(0.9);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_titleSparkle {\n  0%, 100% {\n    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n  }\n  50% {\n    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 10px rgba(255, 215, 0, 0.5);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_magicWaveEffect {\n  0% {\n    transform: translateX(-100%);\n    opacity: 0;\n  }\n  50% {\n    opacity: 0.3;\n  }\n  100% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_magicAura {\n  0%, 100% {\n    opacity: 0.3;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.1);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_magicCircleRotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_voicePulse {\n  0%, 100% {\n    transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(78, 205, 196, 0.4);\n  }\n  50% {\n    transform: scale(1.05);\n    box-shadow: 0 0 0 10px rgba(78, 205, 196, 0);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_magicPulse {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0.7;\n    transform: scale(1.1);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_listeningBounce {\n  0%, 80%, 100% {\n    transform: scale(0);\n    opacity: 0.5;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_magicCast {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.02);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_magicSweep {\n  0% {\n    left: -100%;\n  }\n  100% {\n    left: 100%;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_quickReplyMagic {\n  0% {\n    filter: brightness(1);\n  }\n  50% {\n    filter: brightness(1.2) hue-rotate(45deg);\n  }\n  100% {\n    filter: brightness(1);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_errorShake {\n  0%, 100% { transform: translateX(0); }\n  10%, 30%, 50%, 70%, 90% { transform: translateX(-2px); }\n  20%, 40%, 60%, 80% { transform: translateX(2px); }\n}\n\n\n\n@media (max-width: 768px) {\n  .chat-container[_ngcontent-%COMP%] {\n    width: calc(100vw - 30px);\n    height: calc(100vh - 120px);\n    right: 15px;\n    bottom: 90px;\n    border-radius: 15px;\n    max-height: none;\n  }\n\n  .bankgenie-toggle-btn[_ngcontent-%COMP%] {\n    right: 15px;\n    bottom: 15px;\n    width: 65px;\n    height: 65px;\n    font-size: 26px;\n  }\n\n  .chat-header[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n    min-height: 65px;\n  }\n\n  .bot-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n\n  .genie-avatar[_ngcontent-%COMP%] {\n    width: 42px;\n    height: 42px;\n    font-size: 18px;\n  }\n\n  .message-item[_ngcontent-%COMP%] {\n    max-width: 85%;\n  }\n\n  .balance-amount[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n\n  .sparkle[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n\n@media (max-width: 480px) {\n  .chat-container[_ngcontent-%COMP%] {\n    width: calc(100vw - 20px);\n    height: calc(100vh - 100px);\n    right: 10px;\n    bottom: 80px;\n    border-radius: 12px;\n  }\n\n  .bankgenie-toggle-btn[_ngcontent-%COMP%] {\n    right: 10px;\n    bottom: 10px;\n    width: 60px;\n    height: 60px;\n    font-size: 24px;\n  }\n\n  .chat-header[_ngcontent-%COMP%] {\n    padding: 12px 14px;\n    min-height: 60px;\n  }\n\n  .bot-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .genie-avatar[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    font-size: 16px;\n  }\n\n  .message-item[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n\n  .balance-amount[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n\n\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #dee2e6;\n  border-radius: 2px;\n}\n\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #adb5bd;\n}\n\n\n\n\n\n\n\n\n.statement-download-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border-radius: 15px;\n  padding: 20px;\n  margin: 10px 0;\n  color: white;\n  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n\n.statement-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n  display: flex;\n  align-items: center;\n}\n\n.statement-desc[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n\n.download-options[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 15px;\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.period-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n\n.period-option[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.period-option[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n\n.period-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.period-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n}\n\n.file-size[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.download-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 15px;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n\n.action-btn.primary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.9);\n  color: #667eea;\n}\n\n.action-btn.primary[_ngcontent-%COMP%]:hover {\n  background: white;\n  transform: translateY(-2px);\n}\n\n.action-btn.secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  color: white;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.action-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n\n\n.statement-options-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n  border-radius: 15px;\n  padding: 20px;\n  margin: 10px 0;\n  color: white;\n  box-shadow: 0 8px 32px rgba(240, 147, 251, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.options-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.options-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n\n.options-desc[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 14px;\n}\n\n.statement-types[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.statement-type[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 15px;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  border-left: 4px solid transparent;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.statement-type[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateX(5px);\n  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);\n}\n\n.type-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  font-weight: bold;\n}\n\n.type-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.type-info[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n\n.type-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n  margin: 0;\n}\n\n.statement-type[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 16px;\n}\n\n\n\n.statement-download-card[_ngcontent-%COMP%], .statement-options-card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_statementSlideIn 0.6s ease-out;\n}\n\n@keyframes _ngcontent-%COMP%_statementSlideIn {\n  from {\n    opacity: 0;\n    transform: translateY(30px) scale(0.95);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n\n\n\n.magic-spell-btn[_ngcontent-%COMP%]:nth-child(7), .magic-spell-btn[_ngcontent-%COMP%]:nth-child(8) {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  border: 2px solid rgba(102, 126, 234, 0.3);\n}\n\n.magic-spell-btn[_ngcontent-%COMP%]:nth-child(7):hover, .magic-spell-btn[_ngcontent-%COMP%]:nth-child(8):hover {\n  background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);\n  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaGF0Ym90L2NoYXRib3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBd0M7QUFDeEM7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhEQUE4RDtFQUM5RCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLDhDQUE4QztFQUM5QyxpREFBaUQ7RUFDakQseUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsU0FBUztFQUNULFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiw0R0FBNEc7RUFDNUcsNENBQTRDO0VBQzVDLFdBQVc7QUFDYjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQix1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUVBLHlDQUF5QztBQUN6QztFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxREFBcUQ7RUFDckQsbUJBQW1CO0VBQ25CLDhFQUE4RTtFQUM5RSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzREFBc0Q7RUFDdEQsVUFBVTtFQUNWLGlEQUFpRDtFQUNqRCxnQkFBZ0I7RUFDaEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLFVBQVU7QUFDWjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVDs7O2tGQUdnRjtFQUNoRixrREFBa0Q7RUFDbEQsb0JBQW9CO0FBQ3RCOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLDhEQUE4RDtFQUM5RCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QseUdBQXlHO0VBQ3pHLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNFQUFzRTtFQUN0RSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlDQUF5QztFQUN6QyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxjQUFjO0VBQ2QsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLGVBQWU7RUFDZiwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsWUFBWTtBQUNkOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBLGdDQUFnQztBQUNoQztFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsWUFBWTtFQUNaLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixxREFBcUQ7RUFDckQseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHdDQUF3QztFQUN4QyxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscURBQXFEO0VBQ3JELDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscURBQXFEO0VBQ3JELDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscURBQXFEO0VBQ3JELGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdFQUFnRTtFQUNoRSx3Q0FBd0M7RUFDeEMsK0NBQStDO0VBQy9DLGdDQUFnQztBQUNsQzs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFFBQVE7RUFDUixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsOENBQThDO0FBQ2hEOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qix3Q0FBd0M7RUFDeEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaURBQWlEO0FBQ25EOztBQUVBLGlDQUFpQyx1QkFBdUIsRUFBRTtBQUMxRCxpQ0FBaUMsdUJBQXVCLEVBQUU7O0FBRTFELDJCQUEyQjtBQUMzQjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLE9BQU87RUFDUCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2Qyw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUEsdUNBQXVDOztBQUV2QyxzQkFBc0I7QUFDdEI7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxRkFBcUY7RUFDckYseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELFlBQVk7RUFDWix1Q0FBdUM7RUFDdkMsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxxREFBcUQ7RUFDckQsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELDJCQUEyQjtFQUMzQiwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSxxREFBcUQ7RUFDckQsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLG9EQUFvRDtFQUNwRCw4QkFBOEI7RUFDOUIsb0NBQW9DO0VBQ3BDLGdFQUFnRTtBQUNsRTs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyx3REFBd0Q7RUFDeEQsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHNEQUFzRDtFQUN0RCxnQ0FBZ0M7QUFDbEM7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNGQUFzRjtFQUN0RixtQ0FBbUM7QUFDckM7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLFlBQVk7RUFDWixxRkFBcUY7RUFDckYsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9EQUFvRDtBQUN0RDs7QUFFQSw4QkFBOEIsbUJBQW1CLEVBQUU7QUFDbkQsOEJBQThCLHFCQUFxQixFQUFFO0FBQ3JELDhCQUE4QixxQkFBcUIsRUFBRTs7QUFFckQ7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLHFGQUFxRjtFQUNyRixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHdDQUF3QztFQUN4QyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsbUZBQW1GO0VBQ25GLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSx3Q0FBd0M7QUFDMUM7O0FBRUEsNkNBQTZDOztBQUU3Qyx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2IscURBQXFEO0VBQ3JELG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLHFEQUFxRDtFQUNyRCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGFBQWE7RUFDYixxREFBcUQ7RUFDckQsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQiwwQ0FBMEM7QUFDNUM7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsYUFBYTtFQUNiLHFEQUFxRDtFQUNyRCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFEQUFxRDtFQUNyRCxrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0UsYUFBYTtFQUNiLHFEQUFxRDtFQUNyRCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsUUFBUTtFQUNSLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtFQUNSLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQywwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDJCQUEyQjtBQUM3Qjs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxhQUFhO0VBQ2IscURBQXFEO0VBQ3JELG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRTtJQUNFLFVBQVU7SUFDVix1Q0FBdUM7RUFDekM7RUFDQTtJQUNFLFVBQVU7SUFDVixpQ0FBaUM7RUFDbkM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFVBQVU7SUFDVixrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLFVBQVU7SUFDVixrQ0FBa0M7RUFDcEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNkNBQTZDO0VBQy9DO0VBQ0E7SUFDRSwyQ0FBMkM7RUFDN0M7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLDRDQUE0QztFQUM5QztBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsMkNBQTJDO0VBQzdDO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsNENBQTRDO0VBQzlDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdDQUFnQztFQUNsQztFQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDO0VBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHlDQUF5QztFQUMzQztFQUNBO0lBQ0UsMEVBQTBFO0VBQzVFO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQiwyQ0FBMkM7RUFDN0M7RUFDQTtJQUNFLHNCQUFzQjtJQUN0Qiw0Q0FBNEM7RUFDOUM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSx5Q0FBeUM7RUFDM0M7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0UsV0FBVyx3QkFBd0IsRUFBRTtFQUNyQywwQkFBMEIsMkJBQTJCLEVBQUU7RUFDdkQscUJBQXFCLDBCQUEwQixFQUFFO0FBQ25EOztBQUVBLGtDQUFrQztBQUNsQztFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOzsrQ0FFK0M7O0FBRS9DLDRCQUE0QjtBQUM1QjtFQUNFLDZEQUE2RDtFQUM3RCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osK0NBQStDO0VBQy9DLDBDQUEwQztFQUMxQyxtQ0FBMkI7VUFBM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osMENBQTBDO0FBQzVDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLDZEQUE2RDtFQUM3RCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osK0NBQStDO0VBQy9DLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0VBQzFCLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsU0FBUztBQUNYOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGVBQWU7QUFDakI7O0FBRUEsNkJBQTZCO0FBQzdCOztFQUVFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UsVUFBVTtJQUNWLGlDQUFpQztFQUNuQztBQUNGOztBQUVBLHdEQUF3RDtBQUN4RDs7RUFFRSw2REFBNkQ7RUFDN0QsMENBQTBDO0FBQzVDOztBQUVBOztFQUVFLDZEQUE2RDtFQUM3RCwrQ0FBK0M7QUFDakQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PSBCQU5LR0VOSUUgVE9HR0xFIEJVVFRPTiA9PT09PSAqL1xyXG4uYmFua2dlbmllLXRvZ2dsZS1idG4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5YzI3YjAsICM2NzNhYjcsICMzZjUxYjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgei1pbmRleDogMTA1MDtcclxuICBib3gtc2hhZG93OiAwIDZweCAyNXB4IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjQpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYW5pbWF0aW9uOiBnZW5pZUZsb2F0IDNzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4uYmFua2dlbmllLXRvZ2dsZS1idG46aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KSBzY2FsZSgxLjA1KTtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMzVweCByZ2JhKDE1NiwgMzksIDE3NiwgMC42KTtcclxufVxyXG5cclxuLmJhbmtnZW5pZS10b2dnbGUtYnRuLmNoYXQtb3BlbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2RjMzU0NSwgI2M4MjMzMyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICBhbmltYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5nZW5pZS1pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBhbmltYXRpb246IGdlbmllV2FuZCAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLmdlbmllLXNwYXJrbGVzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uc3BhcmtsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBhbmltYXRpb246IHNwYXJrbGVGbG9hdCAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLnNwYXJrbGUtMSB7XHJcbiAgdG9wOiAtNXB4O1xyXG4gIHJpZ2h0OiAtNXB4O1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbn1cclxuXHJcbi5zcGFya2xlLTIge1xyXG4gIGJvdHRvbTogLTVweDtcclxuICBsZWZ0OiAtNXB4O1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC43cztcclxufVxyXG5cclxuLnNwYXJrbGUtMyB7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IC04cHg7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjRzO1xyXG59XHJcblxyXG4uc3BhcmtsZS00IHtcclxuICB0b3A6IDUwJTtcclxuICByaWdodDogLTEwcHg7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAyLjFzO1xyXG59XHJcblxyXG4uc3BhcmtsZS01IHtcclxuICBib3R0b206IDEwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi44cztcclxufVxyXG5cclxuLyogTWFnaWMgQXVyYSBFZmZlY3QgKi9cclxuLm1hZ2ljLWF1cmEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0xMHB4O1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG4gIHJpZ2h0OiAtMTBweDtcclxuICBib3R0b206IC0xMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMTU2LCAzOSwgMTc2LCAwLjMpLCByZ2JhKDEwMywgNTgsIDE4MywgMC4zKSwgcmdiYSg2MywgODEsIDE4MSwgMC4zKSk7XHJcbiAgYW5pbWF0aW9uOiBtYWdpY0F1cmEgNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi8qIE1hZ2ljIENpcmNsZSAqL1xyXG4ubWFnaWMtY2lyY2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMTVweDtcclxuICBsZWZ0OiAtMTVweDtcclxuICByaWdodDogLTE1cHg7XHJcbiAgYm90dG9tOiAtMTVweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjE1LCAwLCAwLjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IG1hZ2ljQ2lyY2xlUm90YXRlIDhzIGxpbmVhciBpbmZpbml0ZTtcclxuICB6LWluZGV4OiAtMjtcclxufVxyXG5cclxuLmNpcmNsZS1pbm5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIGxlZnQ6IDVweDtcclxuICByaWdodDogNXB4O1xyXG4gIGJvdHRvbTogNXB4O1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjE1LCAwLCAwLjMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBhbmltYXRpb246IG1hZ2ljQ2lyY2xlUm90YXRlIDZzIGxpbmVhciBpbmZpbml0ZSByZXZlcnNlO1xyXG59XHJcblxyXG4uYmFua2dlbmllLXRvZ2dsZS1idG4ubWFnaWMtYWN0aXZhdGVkIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSkgdHJhbnNsYXRlWSgtM3B4KTtcclxuICBib3gtc2hhZG93OiAwIDE1cHggNDBweCByZ2JhKDE1NiwgMzksIDE3NiwgMC44KTtcclxufVxyXG5cclxuLnVucmVhZC1iYWRnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTVweDtcclxuICByaWdodDogLTVweDtcclxuICBiYWNrZ3JvdW5kOiAjZGMzNTQ1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcclxufVxyXG5cclxuLyogPT09PT0gQ0hBVCBPVkVSTEFZID09PT09ICovXHJcbi5jaGF0LW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHotaW5kZXg6IDEwNDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmNoYXQtb3ZlcmxheS5zaG93IHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qID09PT09IEJBTktHRU5JRSBDSEFUIENPTlRBSU5FUiA9PT09PSAqL1xyXG4uY2hhdC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDEwMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAzODBweDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNDBweCk7XHJcbiAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgI2ZmZmZmZiwgI2Y4ZjlmYyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiAwIDE1cHggNTBweCByZ2JhKDE1NiwgMzksIDE3NiwgMC4yKSwgMCA1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgei1pbmRleDogMTA0NTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHZoKSBzY2FsZSgwLjcpIHJvdGF0ZVkoMTVkZWcpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMTU2LCAzOSwgMTc2LCAwLjEpO1xyXG59XHJcblxyXG4uY2hhdC1jb250YWluZXIub3BlbiB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogTWFnaWMgUGFydGljbGVzIEJhY2tncm91bmQgKi9cclxuLmNoYXQtY29udGFpbmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZDogXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSA4MCUsIHJnYmEoMTU2LCAzOSwgMTc2LCAwLjEpIDAlLCB0cmFuc3BhcmVudCA1MCUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA4MCUgMjAlLCByZ2JhKDEwMywgNTgsIDE4MywgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgNDAlIDQwJSwgcmdiYSg2MywgODEsIDE4MSwgMC4xKSAwJSwgdHJhbnNwYXJlbnQgNTAlKTtcclxuICBhbmltYXRpb246IG1hZ2ljUGFydGljbGVzIDEwcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLyogPT09PT0gQkFOS0dFTklFIEhFQURFUiA9PT09PSAqL1xyXG4uY2hhdC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5YzI3YjAsICM2NzNhYjcsICMzZjUxYjUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1pbi1oZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi5jaGF0LWhlYWRlcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsMjU1LDI1NSwwLjEpIDAlLCB0cmFuc3BhcmVudCA1MCUsIHJnYmEoMjU1LDI1NSwyNTUsMC4xKSAxMDAlKTtcclxuICBhbmltYXRpb246IGhlYWRlclNoaW1tZXIgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5jaGF0LWhlYWRlci1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uZ2VuaWUtYXZhdGFyIHtcclxuICB3aWR0aDogNDVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYW5pbWF0aW9uOiBnZW5pZUdsb3cgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5nZW5pZS1nbG93IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtMnB4O1xyXG4gIGxlZnQ6IC0ycHg7XHJcbiAgcmlnaHQ6IC0ycHg7XHJcbiAgYm90dG9tOiAtMnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmZDcwMCwgI2ZmNjliNCwgIzAwYmNkNCwgI2ZmZDcwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGFuaW1hdGlvbjogcmFpbmJvd1NwaW4gM3MgbGluZWFyIGluZmluaXRlO1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmJvdC1pbmZvIGg0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgYW5pbWF0aW9uOiB0aXRsZVNwYXJrbGUgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5ib3Qtc3RhdHVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmJvdC1zdGF0dXMgLm9ubGluZSB7XHJcbiAgY29sb3I6ICMyOGE3NDU7XHJcbiAgZm9udC1zaXplOiA4cHg7XHJcbiAgYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTtcclxufVxyXG5cclxuLmNoYXQtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmJ0bi1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWljb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG5cclxuLyogPT09PT0gQ0hBVCBNRVNTQUdFUyA9PT09PSAqL1xyXG4uY2hhdC1tZXNzYWdlcyB7XHJcbiAgZmxleDogMTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxufVxyXG5cclxuLm1lc3NhZ2VzLWxpc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1heC13aWR0aDogODUlO1xyXG4gIGFuaW1hdGlvbjogbWVzc2FnZVNsaWRlSW4gMC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuLm1lc3NhZ2UtaXRlbS51c2VyLW1lc3NhZ2Uge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcclxufVxyXG5cclxuLm1lc3NhZ2UtaXRlbS5ib3QtbWVzc2FnZSB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLm1lc3NhZ2UtYXZhdGFyIHtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1pdGVtLmJvdC1tZXNzYWdlIC5tZXNzYWdlLWF2YXRhciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzljMjdiMCwgIzY3M2FiNyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZ2VuaWUtbWVzc2FnZS1hdmF0YXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbmltYXRpb246IHN1YnRsZUdsb3cgM3MgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5nZW5pZS1tZXNzYWdlLWF2YXRhci50aGlua2luZyB7XHJcbiAgYW5pbWF0aW9uOiB0aGlua2luZ1B1bHNlIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5nZW5pZS1tZXNzYWdlLWF2YXRhcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICfDosKcwqgnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC01cHg7XHJcbiAgcmlnaHQ6IC01cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGFuaW1hdGlvbjogc3BhcmtsZVJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWl0ZW0udXNlci1tZXNzYWdlIC5tZXNzYWdlLWF2YXRhciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzI4YTc0NSwgIzFlN2UzNCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWVzc2FnZS1jb250ZW50IHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLyogPT09PT0gTUVTU0FHRSBCVUJCTEVTID09PT09ICovXHJcbi5tZXNzYWdlLWJ1YmJsZSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi51c2VyLW1lc3NhZ2UgLm1lc3NhZ2UtYnViYmxlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA3YmZmLCAjMDA1NmIzKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmJvdC1tZXNzYWdlIC5tZXNzYWdlLWJ1YmJsZSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZmZmZmYsICNmOGY5ZmMpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU2LCAzOSwgMTc2LCAwLjEpO1xyXG59XHJcblxyXG4ubWVzc2FnZS1idWJibGUgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS10aW1lIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLyogPT09PT0gTUVTU0FHRSBDQVJEUyA9PT09PSAqL1xyXG4ubWVzc2FnZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xyXG59XHJcblxyXG4uY2FyZC1tZXNzYWdlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG59XHJcblxyXG4vKiBCYWxhbmNlIENhcmQgKi9cclxuLmJhbGFuY2UtY2FyZCB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmJhbGFuY2Utc3VtbWFyeSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XHJcbn1cclxuXHJcbi5iYWxhbmNlLXN1bW1hcnkgaDUge1xyXG4gIG1hcmdpbjogMCAwIDhweCAwO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYmFsYW5jZS1hbW91bnQge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOWMyN2IwLCAjNjczYWI3KTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG59XHJcblxyXG4uYWNjb3VudHMtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTJweDtcclxufVxyXG5cclxuLmFjY291bnQtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uYWNjb3VudC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAycHg7XHJcbn1cclxuXHJcbi5hY2NvdW50LW5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG59XHJcblxyXG4uYWNjb3VudC1udW1iZXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLmFjY291bnQtYmFsYW5jZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOWMyN2IwLCAjNjczYWI3KTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLyogVHJhbnNhY3Rpb24gQ2FyZCAqL1xyXG4udHJhbnNhY3Rpb24tY2FyZCB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNhcmQgaDUge1xyXG4gIG1hcmdpbjogMCAwIDE2cHggMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4cHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWRlc2Mge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tY2F0ZWdvcnkge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWFtb3VudCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbi1hbW91bnQucG9zaXRpdmUge1xyXG4gIGNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tYW1vdW50Lm5lZ2F0aXZlIHtcclxuICBjb2xvcjogI2RjMzU0NTtcclxufVxyXG5cclxuLyogQWNjb3VudCBJbmZvIENhcmQgKi9cclxuLmFjY291bnQtaW5mby1jYXJkIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uYWNjb3VudC1pbmZvLWNhcmQgaDUge1xyXG4gIG1hcmdpbjogMCAwIDE2cHggMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbn1cclxuXHJcbi5hY2NvdW50LWRldGFpbHMtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLmFjY291bnQtZGV0YWlsLWl0ZW0ge1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y4ZjlmYSwgI2ZmZmZmZik7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzljMjdiMDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuMSk7XHJcbn1cclxuXHJcbi5hY2NvdW50LWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5hY2NvdW50LWhlYWRlciBoNiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG59XHJcblxyXG4uYWNjb3VudC1zdGF0dXMge1xyXG4gIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uYWNjb3VudC1zdGF0dXMuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZDRlZGRhO1xyXG4gIGNvbG9yOiAjMTU1NzI0O1xyXG59XHJcblxyXG4uYWNjb3VudC1tZXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA0cHg7XHJcbn1cclxuXHJcbi5hY2NvdW50LW1ldGEgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLmFjY291bnQtYmFsYW5jZS1kZXRhaWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzljMjdiMCwgIzY3M2FiNykgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dCAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiA9PT09PSBRVUlDSyBSRVBMSUVTID09PT09ICovXHJcbi5xdWljay1yZXBsaWVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDhweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5xdWljay1yZXBseS1idG4ge1xyXG4gIGJhY2tncm91bmQ6ICNlOWVjZWY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ucXVpY2stcmVwbHktYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOWMyN2IwLCAjNjczYWI3KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjOWMyN2IwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjMpO1xyXG59XHJcblxyXG4vKiA9PT09PSBUWVBJTkcgSU5ESUNBVE9SID09PT09ICovXHJcbi50eXBpbmctaW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50eXBpbmctZG90cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDRweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udHlwaW5nLWRvdHMgc3BhbiB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICBhbmltYXRpb246IHR5cGluZ0JvdW5jZSAxLjRzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4udHlwaW5nLWRvdHMgc3BhbjpudGgtY2hpbGQoMSkgeyBhbmltYXRpb24tZGVsYXk6IC0wLjMyczsgfVxyXG4udHlwaW5nLWRvdHMgc3BhbjpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IC0wLjE2czsgfVxyXG5cclxuLyogPT09PT0gQ0hBVCBJTlBVVCA9PT09PSAqL1xyXG4uY2hhdC1pbnB1dCB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZWNlZjtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBmbGV4OiAxO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcclxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEyMywgMjU1LCAwLjEpO1xyXG59XHJcblxyXG4uc2VuZC1idG4ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5YzI3YjAsICM2NzNhYjcpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VuZC1idG46aG92ZXI6bm90KDpkaXNhYmxlZCkge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KSBzY2FsZSgxLjA1KTtcclxuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjQpO1xyXG59XHJcblxyXG4uc2VuZC1idG46aG92ZXI6bm90KDpkaXNhYmxlZCk6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJ8OiwpzCqCc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgcmlnaHQ6IC01cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGFuaW1hdGlvbjogc2VuZFNwYXJrbGUgMC41cyBlYXNlLW91dDtcclxufVxyXG5cclxuLnNlbmQtYnRuOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbi8qID09PT09IE1BR0lDQUwgSU5QVVQgRkVBVFVSRVMgPT09PT0gKi9cclxuXHJcbi8qIE1hZ2ljIFN1Z2dlc3Rpb25zICovXHJcbi5tYWdpYy1zdWdnZXN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDhweCAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLm1hZ2ljLXNwZWxsLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNTYsIDM5LCAxNzYsIDAuMSksIHJnYmEoMTAzLCA1OCwgMTgzLCAwLjEpKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NiwgMzksIDE3NiwgMC4zKTtcclxuICBjb2xvcjogIzljMjdiMDtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA0cHg7XHJcbn1cclxuXHJcbi5tYWdpYy1zcGVsbC1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5YzI3YjAsICM2NzNhYjcpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCkgc2NhbGUoMS4wNSk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTVweCByZ2JhKDE1NiwgMzksIDE3NiwgMC40KTtcclxufVxyXG5cclxuLm1hZ2ljLXNwZWxsLWJ0biBpIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFZvaWNlIEJ1dHRvbiAqL1xyXG4udm9pY2UtYnRuIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmY2YjZiLCAjZmY4ZTUzKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi52b2ljZS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmZjhlNTMsICNmZjZiNmIpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMjU1LCAxMDcsIDEwNywgMC40KTtcclxufVxyXG5cclxuLnZvaWNlLWJ0bi5saXN0ZW5pbmcge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0ZWNkYzQsICM0NGEwOGQpO1xyXG4gIGFuaW1hdGlvbjogdm9pY2VQdWxzZSAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4ubWFnaWMtcHVsc2Uge1xyXG4gIGFuaW1hdGlvbjogbWFnaWNQdWxzZSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLyogTWFnaWMgSW5wdXQgKi9cclxuLm1hZ2ljLWlucHV0IHtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDE1NiwgMzksIDE3NiwgMC4yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHggIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmZmZiwgI2ZhZmJmZikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hZ2ljLWlucHV0OmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6ICM5YzI3YjAgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuMSkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFnaWMtaW5wdXQubWFnaWMtY2FzdCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZkNzAwICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgyNTUsIDIxNSwgMCwgMC42KSAhaW1wb3J0YW50O1xyXG4gIGFuaW1hdGlvbjogbWFnaWNDYXN0IDFzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4vKiBNYWdpYyBTZW5kIEJ1dHRvbiAqL1xyXG4ubWFnaWMtc2VuZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tYWdpYy1zZW5kOmhvdmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogLTEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KSwgdHJhbnNwYXJlbnQpO1xyXG4gIGFuaW1hdGlvbjogbWFnaWNTd2VlcCAwLjZzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4vKiBWb2ljZSBTdGF0dXMgKi9cclxuLnZvaWNlLXN0YXR1cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDc4LCAyMDUsIDE5NiwgMC4xKSwgcmdiYSg2OCwgMTYwLCAxNDEsIDAuMSkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzgsIDIwNSwgMTk2LCAwLjMpO1xyXG59XHJcblxyXG4ubGlzdGVuaW5nLWFuaW1hdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDNweDtcclxufVxyXG5cclxuLmxpc3RlbmluZy1kb3Qge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgYmFja2dyb3VuZDogIzRlY2RjNDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYW5pbWF0aW9uOiBsaXN0ZW5pbmdCb3VuY2UgMS40cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuLmxpc3RlbmluZy1kb3Q6bnRoLWNoaWxkKDEpIHsgYW5pbWF0aW9uLWRlbGF5OiAwczsgfVxyXG4ubGlzdGVuaW5nLWRvdDpudGgtY2hpbGQoMikgeyBhbmltYXRpb24tZGVsYXk6IDAuMnM7IH1cclxuLmxpc3RlbmluZy1kb3Q6bnRoLWNoaWxkKDMpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjRzOyB9XHJcblxyXG4udm9pY2UtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiAjNGVjZGM0O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLyogVm9pY2UgRXJyb3IgRGlzcGxheSAqL1xyXG4udm9pY2UtZXJyb3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDIyMCwgNTMsIDY5LCAwLjEpLCByZ2JhKDI1NSwgMTA3LCAxMDcsIDAuMSkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIwLCA1MywgNjksIDAuMyk7XHJcbiAgYW5pbWF0aW9uOiBlcnJvclNoYWtlIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi52b2ljZS1lcnJvciBpIHtcclxuICBjb2xvcjogI2RjMzU0NTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5lcnJvci10ZXh0IHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICNkYzM1NDU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogVm9pY2UgV2FybmluZyBEaXNwbGF5ICovXHJcbi52b2ljZS13YXJuaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNTUsIDE5MywgNywgMC4xKSwgcmdiYSgyNTUsIDE1MiwgMCwgMC4xKSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDE5MywgNywgMC4zKTtcclxufVxyXG5cclxuLnZvaWNlLXdhcm5pbmcgaSB7XHJcbiAgY29sb3I6ICNmZmMxMDc7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ud2FybmluZy10ZXh0IHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgY29sb3I6ICNmZjhjMDA7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogQ2hhdCBFZmZlY3RzICovXHJcbi5jaGF0LW1lc3NhZ2VzLnF1aWNrLXJlcGx5LW1hZ2ljIHtcclxuICBhbmltYXRpb246IHF1aWNrUmVwbHlNYWdpYyAwLjhzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4vKiA9PT09PSBNT0RFUk4gQkFOS0lORyBGRUFUVVJFIENBUkRTID09PT09ICovXHJcblxyXG4vKiBEaWdpdGFsIFdhbGxldCBDYXJkICovXHJcbi5kaWdpdGFsLXdhbGxldC1jYXJkIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEsICM3NjRiYTIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi53YWxsZXQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi53YWxsZXQtaGVhZGVyIGg1IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLndhbGxldC1iYWxhbmNlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLmxpbmtlZC1jYXJkcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmxpbmtlZC1jYXJkcyBoNiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbjogMCAwIDhweCAwO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLmNhcmQtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogNnB4O1xyXG59XHJcblxyXG4ucGF5bWVudC1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxufVxyXG5cclxuLmNhcmQtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmRlZmF1bHQtYmFkZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiAycHggNnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ud2FsbGV0LWZlYXR1cmVzIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4uZmVhdHVyZS1jaGlwcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiA0cHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNoaXAge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLnJlY2VudC13YWxsZXQtdHJhbnNhY3Rpb25zIGg2IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4ud2FsbGV0LXRyYW5zYWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbn1cclxuXHJcbi53YWxsZXQtdHJhbnNhY3Rpb246bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLnR4LWluZm8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuLm1lcmNoYW50IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm1ldGhvZCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLnR4LWFtb3VudCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIFFSIFBheW1lbnQgQ2FyZCAqL1xyXG4ucXItcGF5bWVudC1jYXJkIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMTk5OGUsICMzOGVmN2QpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5xci1oZWFkZXIgaDUge1xyXG4gIG1hcmdpbjogMCAwIDE2cHggMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4ucXItY29kZS1zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4ucXItY29kZS1kaXNwbGF5IHtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4ucXItcGxhY2Vob2xkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzY2NjtcclxufVxyXG5cclxuLnFyLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5xci1wbGFjZWhvbGRlciBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4ucXItYWN0aW9uLWJ0biB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbWFyZ2luOiAwIDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNHB4O1xyXG59XHJcblxyXG4ucXItYWN0aW9uLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLnFyLWZlYXR1cmVzIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4uZmVhdHVyZS1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLnFyLWZlYXR1cmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDZweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5xci1mZWF0dXJlIGkge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbn1cclxuXHJcbi5yZWNlbnQtcXItcGF5bWVudHMgaDYge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDAgMCA4cHggMDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5xci1wYXltZW50LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNnB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxufVxyXG5cclxuLnFyLXBheW1lbnQtaXRlbTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4ucGF5bWVudC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5zdWNjZXNzLWljb24ge1xyXG4gIGNvbG9yOiAjNGFkZTgwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnBheW1lbnQtYW1vdW50IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogQ3J5cHRvY3VycmVuY3kgQ2FyZCAqL1xyXG4uY3J5cHRvLXdhbGxldC1jYXJkIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMDkzZmIsICNmNTU3NmMpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5jcnlwdG8taGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5jcnlwdG8taGVhZGVyIGg1IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLnRvdGFsLXZhbHVlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLmNyeXB0by1jdXJyZW5jaWVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5jcnlwdG8taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxufVxyXG5cclxuLmNyeXB0by1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uY3J5cHRvLXN5bWJvbCB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY3J5cHRvLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDJweDtcclxufVxyXG5cclxuLmNyeXB0by1uYW1lIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmNyeXB0by1hbW91bnQge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5jcnlwdG8tdmFsdWUge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uY2hhbmdlIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4uY2hhbmdlLnBvc2l0aXZlIHtcclxuICBjb2xvcjogIzRhZGU4MDtcclxufVxyXG5cclxuLmNoYW5nZS5uZWdhdGl2ZSB7XHJcbiAgY29sb3I6ICNlZjQ0NDQ7XHJcbn1cclxuXHJcbi5jcnlwdG8tZmVhdHVyZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogNHB4O1xyXG59XHJcblxyXG4uY3J5cHRvLWZlYXR1cmUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiAzcHggOHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxufVxyXG5cclxuLyogTG95YWx0eSBQb2ludHMgQ2FyZCAqL1xyXG4ubG95YWx0eS1wb2ludHMtY2FyZCB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZlY2QyLCAjZmNiNjlmKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGNvbG9yOiAjOGI0NTEzO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5sb3lhbHR5LWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmxveWFsdHktaGVhZGVyIGg1IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBjb2xvcjogI2Q5NzcwNjtcclxufVxyXG5cclxuLnBvaW50cy1zdW1tYXJ5IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnRvdGFsLXBvaW50cyB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICNkOTc3MDY7XHJcbn1cclxuXHJcbi5jYXNoLXZhbHVlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4udGllci1wcm9ncmVzcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnRpZXItaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5jdXJyZW50LXRpZXIge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjZDk3NzA2O1xyXG59XHJcblxyXG4ucG9pbnRzLXRvLW5leHQge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTM5LCA2OSwgMTksIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1maWxsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Q5NzcwNiwgI2Y1OWUwYik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmF2YWlsYWJsZS1yZXdhcmRzIGg2IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XHJcbiAgY29sb3I6ICNkOTc3MDY7XHJcbn1cclxuXHJcbi5yZXdhcmQtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4ucmV3YXJkLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMzksIDY5LCAxOSwgMC4xKTtcclxuICBwYWRkaW5nOiA4cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5yZXdhcmQtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMnB4O1xyXG59XHJcblxyXG4ucmV3YXJkLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucmV3YXJkLWNhdGVnb3J5IHtcclxuICBmb250LXNpemU6IDlweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5yZXdhcmQtY29zdCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICNkOTc3MDY7XHJcbn1cclxuXHJcbi8qIFNvY2lhbCBQYXltZW50cyBDYXJkICovXHJcbi5zb2NpYWwtcGF5bWVudHMtY2FyZCB7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhLCAjNzY0YmEyKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4uc29jaWFsLWhlYWRlciBoNSB7XHJcbiAgbWFyZ2luOiAwIDAgMTZweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi5jb25uZWN0ZWQtcGxhdGZvcm1zIGg2IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4ucGxhdGZvcm0tbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiA2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnBsYXRmb3JtLWNoaXAge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA0cHg7XHJcbn1cclxuXHJcbi5tb25leS1yZXF1ZXN0cyBoNiB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbjogMCAwIDhweCAwO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLnJlcXVlc3QtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5yZXF1ZXN0LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxufVxyXG5cclxuLnJlcXVlc3QtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMnB4O1xyXG59XHJcblxyXG4uZnJpZW5kLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ucmVxdWVzdC1yZWFzb24ge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5yZXF1ZXN0LWRldGFpbHMge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ucmVxdWVzdC1hbW91bnQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucmVxdWVzdC1zdGF0dXMge1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIHBhZGRpbmc6IDJweCA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5yZXF1ZXN0LXN0YXR1cy5wZW5kaW5nIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LCAwLjMpO1xyXG4gIGNvbG9yOiAjZmZjMTA3O1xyXG59XHJcblxyXG4ucmVxdWVzdC1zdGF0dXMuY29tcGxldGVkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjMpO1xyXG4gIGNvbG9yOiAjMjhhNzQ1O1xyXG59XHJcblxyXG4uc29jaWFsLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogNnB4O1xyXG59XHJcblxyXG4uc29jaWFsLWFjdGlvbi1idG4ge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uc29jaWFsLWFjdGlvbi1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi8qIENvbnRhY3RsZXNzIFBheW1lbnRzIENhcmQgKi9cclxuLmNvbnRhY3RsZXNzLWNhcmQge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzRmYWNmZSwgIzAwZjJmZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmNvbnRhY3RsZXNzLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uY29udGFjdGxlc3MtaGVhZGVyIGg1IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLm5mYy1zdGF0dXMge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nOiA0cHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG4ubmZjLXN0YXR1cy5lbmFibGVkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LCAwLjMpO1xyXG4gIGNvbG9yOiAjNGFkZTgwO1xyXG59XHJcblxyXG4uZGFpbHktbGltaXRzIGg2IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4ubGltaXQtcHJvZ3Jlc3Mge1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5saW1pdC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDZweDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbi5yZW1haW5pbmcge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmxpbWl0LWJhciB7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubGltaXQtZmlsbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uc3VwcG9ydGVkLW1ldGhvZHMgaDYge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDAgMCA4cHggMDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5tZXRob2QtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiA0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLm1ldGhvZC1jaGlwIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZzogM3B4IDhweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbi5yZWNlbnQtY29udGFjdGxlc3MgaDYge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDAgMCA4cHggMDtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5jb250YWN0bGVzcy10cmFuc2FjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA2cHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG59XHJcblxyXG4uY29udGFjdGxlc3MtdHJhbnNhY3Rpb246bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLyogPT09PT0gQkFOS0dFTklFIEFOSU1BVElPTlMgPT09PT0gKi9cclxuQGtleWZyYW1lcyBtZXNzYWdlU2xpZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpIHNjYWxlKDAuOTUpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0eXBpbmdCb3VuY2Uge1xyXG4gIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBnZW5pZUZsb2F0IHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZ2VuaWVXYW5kIHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMGRlZyk7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwYXJrbGVGbG9hdCB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDE4MGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGdlbmllR2xvdyB7XHJcbiAgMCUsIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgyNTUsIDIxNSwgMCwgMC42KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmFpbmJvd1NwaW4ge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGhlYWRlclNoaW1tZXIge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzdWJ0bGVHbG93IHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjMpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuNik7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRoaW5raW5nUHVsc2Uge1xyXG4gIDAlLCAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMTU2LCAzOSwgMTc2LCAwLjMpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgxNTYsIDM5LCAxNzYsIDAuOCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwYXJrbGVSb3RhdGUge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKSBzY2FsZSgxLjIpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNlbmRTcGFya2xlIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1hZ2ljUGFydGljbGVzIHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICAzMyUge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxuICA2NiUge1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0aXRsZVNwYXJrbGUge1xyXG4gIDAlLCAxMDAlIHtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMCAxMHB4IHJnYmEoMjU1LCAyMTUsIDAsIDAuNSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1hZ2ljV2F2ZUVmZmVjdCB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbWFnaWNBdXJhIHtcclxuICAwJSwgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtYWdpY0NpcmNsZVJvdGF0ZSB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdm9pY2VQdWxzZSB7XHJcbiAgMCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSg3OCwgMjA1LCAxOTYsIDAuNCk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDc4LCAyMDUsIDE5NiwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1hZ2ljUHVsc2Uge1xyXG4gIDAlLCAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBsaXN0ZW5pbmdCb3VuY2Uge1xyXG4gIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgNDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtYWdpY0Nhc3Qge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1hZ2ljU3dlZXAge1xyXG4gIDAlIHtcclxuICAgIGxlZnQ6IC0xMDAlO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGxlZnQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHF1aWNrUmVwbHlNYWdpYyB7XHJcbiAgMCUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMikgaHVlLXJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDEpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBlcnJvclNoYWtlIHtcclxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxyXG4gIDEwJSwgMzAlLCA1MCUsIDcwJSwgOTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpOyB9XHJcbiAgMjAlLCA0MCUsIDYwJSwgODAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCk7IH1cclxufVxyXG5cclxuLyogPT09PT0gUkVTUE9OU0lWRSBERVNJR04gPT09PT0gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNoYXQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzBweCk7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMjBweCk7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIGJvdHRvbTogOTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmJhbmtnZW5pZS10b2dnbGUtYnRuIHtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG5cclxuICAuY2hhdC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgbWluLWhlaWdodDogNjVweDtcclxuICB9XHJcblxyXG4gIC5ib3QtaW5mbyBoNCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZ2VuaWUtYXZhdGFyIHtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLm1lc3NhZ2UtaXRlbSB7XHJcbiAgICBtYXgtd2lkdGg6IDg1JTtcclxuICB9XHJcblxyXG4gIC5iYWxhbmNlLWFtb3VudCB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAuc3BhcmtsZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAuY2hhdC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMHB4KTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwMHB4KTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgYm90dG9tOiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcblxyXG4gIC5iYW5rZ2VuaWUtdG9nZ2xlLWJ0biB7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLmNoYXQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEycHggMTRweDtcclxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICAuYm90LWluZm8gaDQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmdlbmllLWF2YXRhciB7XHJcbiAgICB3aWR0aDogMzhweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5tZXNzYWdlLWl0ZW0ge1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgfVxyXG5cclxuICAuYmFsYW5jZS1hbW91bnQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogPT09PT0gU0NST0xMQkFSIFNUWUxJTkcgPT09PT0gKi9cclxuLmNoYXQtbWVzc2FnZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNHB4O1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlczo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICNkZWUyZTY7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uY2hhdC1tZXNzYWdlczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNhZGI1YmQ7XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICBTVEFURU1FTlQgQ0FSRFMgU1RZTEVTXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyogU3RhdGVtZW50IERvd25sb2FkIENhcmQgKi9cclxuLnN0YXRlbWVudC1kb3dubG9hZC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcclxufVxyXG5cclxuLnN0YXRlbWVudC1oZWFkZXIgaDUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGF0ZW1lbnQtZGVzYyB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmRvd25sb2FkLW9wdGlvbnMgaDYge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxufVxyXG5cclxuLnBlcmlvZC1vcHRpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5wZXJpb2Qtb3B0aW9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG4ucGVyaW9kLW9wdGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLnBlcmlvZC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5wZXJpb2QtbmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5maWxlLXNpemUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG59XHJcblxyXG4uZG93bmxvYWQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbn1cclxuXHJcbi5xdWljay1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0biB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLmFjdGlvbi1idG4ucHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIGNvbG9yOiAjNjY3ZWVhO1xyXG59XHJcblxyXG4uYWN0aW9uLWJ0bi5wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnRuLnNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbn1cclxuXHJcbi5hY3Rpb24tYnRuLnNlY29uZGFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG4vKiBTdGF0ZW1lbnQgT3B0aW9ucyBDYXJkICovXHJcbi5zdGF0ZW1lbnQtb3B0aW9ucy1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjA5M2ZiIDAlLCAjZjU1NzZjIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMzJweCByZ2JhKDI0MCwgMTQ3LCAyNTEsIDAuMyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG4ub3B0aW9ucy1oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ub3B0aW9ucy1oZWFkZXIgaDUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLm9wdGlvbnMtZGVzYyB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zdGF0ZW1lbnQtdHlwZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5zdGF0ZW1lbnQtdHlwZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG4uc3RhdGVtZW50LXR5cGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLnR5cGUtaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnR5cGUtaW5mbyB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnR5cGUtaW5mbyBoNiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4udHlwZS1pbmZvIHAge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnN0YXRlbWVudC10eXBlIGkge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4vKiBTdGF0ZW1lbnQgQ2FyZCBBbmltYXRpb24gKi9cclxuLnN0YXRlbWVudC1kb3dubG9hZC1jYXJkLFxyXG4uc3RhdGVtZW50LW9wdGlvbnMtY2FyZCB7XHJcbiAgYW5pbWF0aW9uOiBzdGF0ZW1lbnRTbGlkZUluIDAuNnMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3RhdGVtZW50U2xpZGVJbiB7XHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpIHNjYWxlKDAuOTUpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xyXG4gIH1cclxufVxyXG5cclxuLyogQWRkaXRpb25hbCBNYWdpYyBTcGVsbCBCdXR0b24gU3R5bGVzIGZvciBTdGF0ZW1lbnRzICovXHJcbi5tYWdpYy1zcGVsbC1idG46bnRoLWNoaWxkKDcpLFxyXG4ubWFnaWMtc3BlbGwtYnRuOm50aC1jaGlsZCg4KSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDEwMiwgMTI2LCAyMzQsIDAuMyk7XHJcbn1cclxuXHJcbi5tYWdpYy1zcGVsbC1idG46bnRoLWNoaWxkKDcpOmhvdmVyLFxyXG4ubWFnaWMtc3BlbGwtYnRuOm50aC1jaGlsZCg4KTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzc2NGJhMiAwJSwgIzY2N2VlYSAxMDAlKTtcclxuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMTAyLCAxMjYsIDIzNCwgMC40KTtcclxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 4441:
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);





function DashboardComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Loading your banking information...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Welcome back, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "small", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r2.user.firstName, " ", ctx_r2.user.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Last login: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 3, ctx_r2.user.lastLoginAt, "medium"), "");
  }
}
function DashboardComponent_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_8_div_3_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const account_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.navigateToAccount(account_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16)(3, "div", 45)(4, "div")(5, "h6", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 49)(13, "small", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const account_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r3.getAccountTypeIcon(account_r9.accountType));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", account_r9.accountType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](account_r9.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.formatCurrency(account_r9.balance));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.formatCurrency(account_r9.availableBalance));
  }
}
function DashboardComponent_div_8_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No recent transfers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_8_div_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "div", 45)(2, "div")(3, "h6", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 49)(10, "h6", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const transfer_r12 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](transfer_r12.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" To: ", transfer_r12.recipientName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge bg-", transfer_r12.status === "COMPLETED" ? "success" : "warning", " ms-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", transfer_r12.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("-", ctx_r5.formatCurrency(transfer_r12.amount), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 8, transfer_r12.createdAt, "short"));
  }
}
function DashboardComponent_div_8_div_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No upcoming bills");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_8_div_85_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Recurring");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_div_8_div_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 54)(1, "div", 45)(2, "div")(3, "h6", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardComponent_div_8_div_85_span_8_Template, 2, 0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 49)(10, "h6", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_8_div_85_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.navigateToBills());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Pay Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const bill_r13 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](bill_r13.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Due: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 4, bill_r13.dueDate, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", bill_r13.isRecurring);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.formatCurrency(bill_r13.amount));
  }
}
function DashboardComponent_div_8_div_86_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 67)(1, "div", 68)(2, "div")(3, "h6", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "small", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const notification_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("alert-info", notification_r18.priority === "LOW")("alert-warning", notification_r18.priority === "MEDIUM")("alert-danger", notification_r18.priority === "HIGH");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notification_r18.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](notification_r18.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 9, notification_r18.createdAt, "short"));
  }
}
function DashboardComponent_div_8_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30)(1, "div", 63)(2, "div", 32)(3, "div", 64)(4, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Recent Notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardComponent_div_8_div_86_div_8_Template, 11, 12, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.notifications);
  }
}
function DashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_div_8_div_1_Template, 9, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_div_8_div_3_Template, 18, 6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14)(5, "div", 15)(6, "div", 16)(7, "h6", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Total Balance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Across all accounts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12)(15, "div", 14)(16, "div", 20)(17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Pending Transfers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14)(24, "div", 20)(25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Upcoming Bills");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14)(32, "div", 20)(33, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Unread Alerts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 14)(40, "div", 20)(41, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Monthly Spending");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 26)(48, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_8_Template_div_click_48_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.navigateToFinancialAnalysis());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Analysis");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Financial Insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 26)(56, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_8_Template_div_click_56_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.navigateToFinancialAdvice());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Advice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Get Advice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 30)(64, "div", 31)(65, "div", 32)(66, "div", 33)(67, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, " Recent Transfers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, DashboardComponent_div_8_div_73_Template, 4, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, DashboardComponent_div_8_div_74_Template, 15, 11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 31)(76, "div", 32)(77, "div", 33)(78, "h6", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, " Upcoming Bills ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_8_Template_a_click_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.navigateToBills());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "View All");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, DashboardComponent_div_8_div_84_Template, 4, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, DashboardComponent_div_8_div_85_Template, 14, 7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, DashboardComponent_div_8_div_86_Template, 9, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.accounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formatCurrency(ctx_r1.totalBalance));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.pendingTransfers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.upcomingBills.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.unreadNotifications);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formatCurrency(ctx_r1.monthlySpending));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.recentTransfers.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.recentTransfers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.upcomingBills.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.upcomingBills);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.notifications.length > 0);
  }
}
class DashboardComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.user = null;
    this.accounts = [];
    this.recentTransfers = [];
    this.upcomingBills = [];
    this.notifications = [];
    this.wallet = null;
    this.walletSummary = null;
    this.loading = true;
    this.userSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    // Dashboard stats
    this.totalBalance = 0;
    this.monthlySpending = 0;
    this.pendingTransfers = 0;
    this.unreadNotifications = 0;
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  loadDashboardData() {
    this.loading = true;
    // Subscribe to user changes to get real-time updates
    this.userSubscription = this.authService.currentUser$.subscribe(user => {
      this.user = user;
    });
    // Mock data for demo
    this.accounts = [{
      id: '1',
      accountNumber: 'ACC1001234567',
      accountType: 'SAVINGS',
      balance: 15750.50,
      availableBalance: 15750.50,
      currency: 'USD'
    }, {
      id: '2',
      accountNumber: 'ACC1001234568',
      accountType: 'CHECKING',
      balance: 8240.25,
      availableBalance: 8240.25,
      currency: 'USD'
    }];
    this.recentTransfers = [{
      id: '1',
      description: 'Internal Transfer',
      recipientName: 'Savings Account',
      amount: 500.00,
      status: 'COMPLETED',
      createdAt: new Date()
    }];
    this.upcomingBills = [{
      id: '1',
      description: 'Electric Bill',
      amount: 85.50,
      dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      isRecurring: true
    }];
    this.notifications = [{
      id: '1',
      title: 'Welcome!',
      message: 'Welcome to NetBanking demo application',
      priority: 'LOW',
      createdAt: new Date()
    }];
    this.calculateTotalBalance();
    this.pendingTransfers = 0;
    this.unreadNotifications = 1;
    this.monthlySpending = 1250.75;
    this.loading = false;
  }
  calculateTotalBalance() {
    this.totalBalance = this.accounts.reduce((total, account) => total + account.balance, 0);
  }
  getAccountTypeIcon(type) {
    switch (type) {
      case 'SAVINGS':
        return 'fas fa-piggy-bank';
      case 'CHECKING':
        return 'fas fa-credit-card';
      case 'BUSINESS':
        return 'fas fa-building';
      case 'JOINT':
        return 'fas fa-users';
      default:
        return 'fas fa-wallet';
    }
  }
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }
  refreshDashboard() {
    this.loading = true;
    // Add a small delay to show loading state
    setTimeout(() => {
      this.loadDashboardData();
    }, 500);
  }
  navigateToAccount(account) {
    // Navigate to accounts page with selected account
    this.router.navigate(['/accounts'], {
      queryParams: {
        accountId: account.id
      }
    });
  }
  navigateToBills() {
    this.router.navigate(['/bills']);
  }
  navigateToFinancialAnalysis() {
    this.router.navigate(['/financial-analysis']);
  }
  navigateToFinancialAdvice() {
    this.router.navigate(['/financial-advice']);
  }
  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 9,
      vars: 2,
      consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-0"], [1, "fas", "fa-tachometer-alt", "me-2", "text-primary"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fas", "fa-sync-alt", "me-2"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], ["class", "alert alert-info", 4, "ngIf"], [1, "row", "mb-4"], ["class", "col-md-3 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-3", "mb-3"], [1, "card", "balance-card", "text-white"], [1, "card-body"], [1, "card-title"], [1, "fas", "fa-wallet", "me-2"], [1, "mb-0"], [1, "card", "text-center"], [1, "fas", "fa-exchange-alt", "fa-2x", "text-info", "mb-2"], [1, "card-text", "text-muted"], [1, "fas", "fa-file-invoice", "fa-2x", "text-warning", "mb-2"], [1, "fas", "fa-bell", "fa-2x", "text-danger", "mb-2"], [1, "fas", "fa-credit-card", "fa-2x", "text-success", "mb-2"], [1, "col-md-2", "mb-3"], [1, "card", "text-center", "clickable-card", 3, "click"], [1, "fas", "fa-chart-line", "fa-2x", "text-primary", "mb-2"], [1, "fas", "fa-lightbulb", "fa-2x", "text-warning", "mb-2"], [1, "row"], [1, "col-lg-6", "mb-4"], [1, "card"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-history", "me-2"], ["href", "#", 1, "text-decoration-none"], ["class", "text-center text-muted py-3", 4, "ngIf"], ["class", "transaction-item border-start ps-3 py-2", 4, "ngFor", "ngForOf"], [1, "fas", "fa-calendar-check", "me-2"], [1, "text-decoration-none", 2, "cursor", "pointer", 3, "click"], ["class", "row", 4, "ngIf"], [1, "alert", "alert-info"], [1, "fas", "fa-user-circle", "me-2"], [1, "d-block", "mt-1"], [1, "card", "dashboard-card", "text-white", "clickable-card", 3, "click"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "card-title", "mb-1"], [1, "me-2"], [1, "card-text", "small", "mb-2"], [1, "text-end"], [1, "d-block"], [1, "fas", "fa-arrow-right", "mt-2"], [1, "text-center", "text-muted", "py-3"], [1, "fas", "fa-inbox", "fa-2x", "mb-2"], [1, "transaction-item", "border-start", "ps-3", "py-2"], [1, "mb-1"], [1, "text-muted"], [1, "mb-0", "text-danger"], [1, "fas", "fa-check-circle", "fa-2x", "mb-2"], ["class", "badge bg-info ms-2", 4, "ngIf"], [1, "mb-0", "text-warning"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "badge", "bg-info", "ms-2"], [1, "col-12"], [1, "card-header"], [1, "fas", "fa-bell", "me-2"], ["class", "alert alert-dismissible fade show", 3, "alert-info", "alert-warning", "alert-danger", 4, "ngFor", "ngForOf"], [1, "alert", "alert-dismissible", "fade", "show"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "alert-heading", "mb-1"], ["type", "button", "aria-label", "Close", 1, "btn-close"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Dashboard ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_4_listener() {
            return ctx.refreshDashboard();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Refresh ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DashboardComponent_div_7_Template, 6, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardComponent_div_8_Template, 87, 12, "div", 6);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
      styles: ["\n\n.dashboard-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));\n  color: white;\n  border-radius: 12px;\n  transition: transform 0.2s ease;\n}\n\n.dashboard-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n\n.clickable-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.clickable-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px) scale(1.02);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);\n}\n\n.balance-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--success-color), #34d399);\n  color: white;\n}\n\n.stats-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--info-color), #0ea5e9);\n  color: white;\n}\n\n.warning-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--warning-color), #fbbf24);\n  color: white;\n}\n\n\n\n.transaction-item[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--secondary-color);\n  transition: all 0.2s ease;\n  padding: 1rem;\n  margin-bottom: 0.5rem;\n  background: white;\n  border-radius: 8px;\n}\n\n.transaction-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--light-color);\n  transform: translateX(4px);\n}\n\n.transaction-credit[_ngcontent-%COMP%] {\n  border-left-color: var(--success-color);\n}\n\n.transaction-debit[_ngcontent-%COMP%] {\n  border-left-color: var(--danger-color);\n}\n\n.transaction-transfer[_ngcontent-%COMP%] {\n  border-left-color: var(--info-color);\n}\n\n\n\n.quick-action-btn[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  padding: 12px 24px;\n  font-weight: 600;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n\n.quick-action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0,0,0,0.1);\n}\n\n\n\n.welcome-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 2rem;\n}\n\n\n\n.account-summary-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  transition: transform 0.2s ease;\n}\n\n.account-summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.15);\n}\n\n\n\n@media (max-width: 768px) {\n  .dashboard-card[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  \n  .transaction-item[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  \n  .quick-action-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0.5rem;\n  }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCO0VBQ0UsaUZBQWlGO0VBQ2pGLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QywwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsK0RBQStEO0VBQy9ELFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtFQUFrRTtFQUNsRSxZQUFZO0FBQ2Q7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsNkNBQTZDO0VBQzdDLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isc0NBQXNDO0FBQ3hDOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLDZEQUE2RDtFQUM3RCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHVDQUF1QztBQUN6Qzs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZCBDYXJkcyAqL1xyXG4uZGFzaGJvYXJkLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uZGFzaGJvYXJkLWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcclxufVxyXG5cclxuLmNsaWNrYWJsZS1jYXJkIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmNsaWNrYWJsZS1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMS4wMik7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4uYmFsYW5jZS1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1zdWNjZXNzLWNvbG9yKSwgIzM0ZDM5OSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3RhdHMtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW5mby1jb2xvciksICMwZWE1ZTkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLndhcm5pbmctY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0td2FybmluZy1jb2xvciksICNmYmJmMjQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogVHJhbnNhY3Rpb24gSXRlbXMgKi9cclxuLnRyYW5zYWN0aW9uLWl0ZW0ge1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNHB4KTtcclxufVxyXG5cclxuLnRyYW5zYWN0aW9uLWNyZWRpdCB7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tZGViaXQge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1kYW5nZXItY29sb3IpO1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb24tdHJhbnNmZXIge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB2YXIoLS1pbmZvLWNvbG9yKTtcclxufVxyXG5cclxuLyogUXVpY2sgQWN0aW9ucyAqL1xyXG4ucXVpY2stYWN0aW9uLWJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucXVpY2stYWN0aW9uLWJ0bjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4vKiBXZWxjb21lIFNlY3Rpb24gKi9cclxuLndlbGNvbWUtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLyogQWNjb3VudCBTdW1tYXJ5ICovXHJcbi5hY2NvdW50LXN1bW1hcnktY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uYWNjb3VudC1zdW1tYXJ5LWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgYWRqdXN0bWVudHMgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmRhc2hib2FyZC1jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50cmFuc2FjdGlvbi1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5xdWljay1hY3Rpb24tYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 4176:
/*!***************************************************************************!*\
  !*** ./src/app/components/financial-advice/financial-advice.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinancialAdviceComponent: () => (/* binding */ FinancialAdviceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_financial_advice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/financial-advice.service */ 1760);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function FinancialAdviceComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function FinancialAdviceComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.getFieldError("salary"), " ");
  }
}
function FinancialAdviceComponent_div_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.getFieldError("expenses." + category_r8), " ");
  }
}
function FinancialAdviceComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, FinancialAdviceComponent_div_16_div_6_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", category_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 8, category_r8), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r2.getFieldError("expenses." + category_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", category_r8)("formControlName", category_r8)("placeholder", "Enter " + category_r8 + " expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.getFieldError("expenses." + category_r8));
  }
}
function FinancialAdviceComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.getFieldError("futureGoal"), " ");
  }
}
function FinancialAdviceComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Get Personalized Advice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FinancialAdviceComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Generating Advice...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function FinancialAdviceComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38)(1, "div", 39)(2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Analyzing your financial data and generating personalized advice...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function FinancialAdviceComponent_div_55_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r13, " ");
  }
}
function FinancialAdviceComponent_div_55_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 66)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const insight_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", insight_r15.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](insight_r15.detail);
  }
}
function FinancialAdviceComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Personalized Financial Advice ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 46)(6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, FinancialAdviceComponent_div_55_li_7_Template, 3, 1, "li", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 43)(9, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Financial Insights & Analysis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FinancialAdviceComponent_div_55_div_13_Template, 6, 2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 43)(15, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Recommended Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 46)(19, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Next Steps:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Consider implementing the advice above and track your progress over time. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 24)(25, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinancialAdviceComponent_div_55_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r16.downloadFinancialReport());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Download Report (TXT) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinancialAdviceComponent_div_55_Template_button_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r18.downloadReportAsHTML());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Download Report (HTML) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinancialAdviceComponent_div_55_Template_button_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.scheduleFollowUpReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Schedule Follow-up Review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 41)(35, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Follow-up Management");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 60)(39, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinancialAdviceComponent_div_55_Template_button_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.viewScheduledFollowUps());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " View Scheduled Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinancialAdviceComponent_div_55_Template_button_click_42_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.clearFollowUpReminders());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Clear All Reminders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.adviceResponse.advice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.adviceResponse.insights);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r7.adviceResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r7.adviceResponse);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r7.adviceResponse);
  }
}
const _c0 = function () {
  return ["housing", "groceries", "transportation", "utilities", "entertainment", "savings", "other"];
};
class FinancialAdviceComponent {
  constructor(fb, adviceService) {
    this.fb = fb;
    this.adviceService = adviceService;
    this.adviceResponse = null;
    this.isLoading = false;
    this.hasSubmitted = false;
    this.errorMessage = '';
    this.adviceForm = this.fb.group({
      salary: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
      expenses: this.fb.group({
        housing: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
        groceries: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
        transportation: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
        utilities: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
        entertainment: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
        savings: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
        other: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]]
      }),
      futureGoal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(200)]]
    });
  }
  ngOnInit() {
    // Optional initialization logic
  }
  onSubmit() {
    this.hasSubmitted = true;
    this.errorMessage = '';
    if (this.adviceForm.valid) {
      this.isLoading = true;
      this.adviceResponse = null;
      const formData = this.adviceForm.value;
      // Calculate total expenses
      const totalExpenses = Object.values(formData.expenses).reduce((sum, expense) => sum + (expense || 0), 0);
      // Validate that expenses don't exceed salary
      if (totalExpenses > formData.salary) {
        this.errorMessage = 'Total expenses cannot exceed your salary. Please review your expense entries.';
        this.isLoading = false;
        return;
      }
      this.adviceService.getAdvice(formData).subscribe({
        next: response => {
          this.adviceResponse = response;
          this.isLoading = false;
        },
        error: error => {
          console.error('Error getting financial advice:', error);
          this.errorMessage = 'Unable to generate financial advice at this time. Please try again later.';
          this.isLoading = false;
        }
      });
    }
  }
  // Helper method to get total expenses
  getTotalExpenses() {
    const expenses = this.adviceForm.get('expenses')?.value;
    if (!expenses) return 0;
    return Object.values(expenses).reduce((sum, expense) => sum + (expense || 0), 0);
  }
  // Helper method to get remaining amount
  getRemainingAmount() {
    const salary = this.adviceForm.get('salary')?.value || 0;
    return salary - this.getTotalExpenses();
  }
  // Helper method to check if form is valid
  isFormValid() {
    return this.adviceForm.valid && this.getTotalExpenses() <= (this.adviceForm.get('salary')?.value || 0);
  }
  // Helper method to get savings value with proper type casting
  getSavingsValue() {
    const savingsValue = this.adviceForm.get('expenses.savings')?.value;
    return savingsValue || 0;
  }
  // Reset form
  resetForm() {
    this.adviceForm.reset();
    this.adviceResponse = null;
    this.hasSubmitted = false;
    this.errorMessage = '';
    this.isLoading = false;
  }
  // Download financial report
  downloadFinancialReport() {
    if (!this.adviceResponse) {
      return;
    }
    // Create report content
    const reportContent = this.generateReportContent();
    // Create and download the file
    const blob = new Blob([reportContent], {
      type: 'text/plain'
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `financial-advice-report-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
  // Download report as HTML (more formatted)
  downloadReportAsHTML() {
    if (!this.adviceResponse) {
      return;
    }
    const htmlContent = this.generateHTMLReport();
    const blob = new Blob([htmlContent], {
      type: 'text/html'
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `financial-advice-report-${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
  // Generate HTML report
  generateHTMLReport() {
    const formData = this.adviceForm.value;
    const totalExpenses = this.getTotalExpenses();
    const remaining = this.getRemainingAmount();
    return `
<!DOCTYPE html>
<html>
<head>
    <title>Financial Advice Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
        .section { margin-bottom: 30px; }
        .section h2 { color: #2c3e50; border-left: 4px solid #3498db; padding-left: 15px; }
        .summary-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 20px 0; }
        .summary-item { background: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center; }
        .summary-value { font-size: 1.5em; font-weight: bold; color: #2c3e50; }
        .expense-item { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #eee; }
        .advice-item { background: #e8f5e8; padding: 10px; margin: 10px 0; border-radius: 5px; }
        .insight-item { background: #fff3cd; padding: 10px; margin: 10px 0; border-radius: 5px; }
        .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 0.9em; color: #666; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Financial Advice Report</h1>
        <p>Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
    </div>

    <div class="section">
        <h2>Income & Expenses Summary</h2>
        <div class="summary-grid">
            <div class="summary-item">
                <div class="summary-value">$${formData.salary.toLocaleString()}</div>
                <div>Monthly Salary</div>
            </div>
            <div class="summary-item">
                <div class="summary-value">$${totalExpenses.toLocaleString()}</div>
                <div>Total Expenses</div>
            </div>
            <div class="summary-item">
                <div class="summary-value">$${remaining.toLocaleString()}</div>
                <div>Remaining Amount</div>
            </div>
            <div class="summary-item">
                                 <div class="summary-value">${((formData.expenses.savings || 0) / totalExpenses * 100).toFixed(1)}%</div>
                <div>Savings Rate</div>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>Expense Breakdown</h2>
                 ${Object.entries(formData.expenses).map(([category, amount]) => {
      const amountValue = amount;
      if (amountValue > 0) {
        const percentage = (amountValue / totalExpenses * 100).toFixed(1);
        return `<div class="expense-item">
                 <span>${category.charAt(0).toUpperCase() + category.slice(1)}</span>
                 <span>$${amountValue.toLocaleString()} (${percentage}%)</span>
             </div>`;
      }
      return '';
    }).join('')}
    </div>

    ${this.adviceResponse ? `
    <div class="section">
        <h2>Personalized Advice</h2>
        ${this.adviceResponse.advice.map((advice, index) => `<div class="advice-item">${index + 1}. ${advice}</div>`).join('')}
    </div>

    <div class="section">
        <h2>Financial Insights</h2>
        ${this.adviceResponse.insights.map((insight, index) => `<div class="insight-item">
            <strong>${insight.title}</strong><br>
            ${insight.detail}
          </div>`).join('')}
    </div>
    ` : ''}

    <div class="section">
        <h2>Recommendations</h2>
        <ul>
            <li>Review your expense categories monthly</li>
            <li>Set up automatic savings transfers</li>
            <li>Track your progress toward financial goals</li>
            <li>Consider consulting with a financial advisor</li>
            <li>Review and adjust your budget quarterly</li>
        </ul>
    </div>

    <div class="footer">
        <p><strong>Disclaimer:</strong> This report is for informational purposes only and should not be considered as financial advice. Please consult with a qualified financial professional for personalized guidance.</p>
    </div>
</body>
</html>`;
  }
  // Generate report content
  generateReportContent() {
    const formData = this.adviceForm.value;
    const totalExpenses = this.getTotalExpenses();
    const remaining = this.getRemainingAmount();
    let report = 'FINANCIAL ADVICE REPORT\n';
    report += '========================\n\n';
    report += `Generated on: ${new Date().toLocaleDateString()}\n`;
    report += `Generated at: ${new Date().toLocaleTimeString()}\n\n`;
    report += 'INCOME & EXPENSES SUMMARY\n';
    report += '-------------------------\n';
    report += `Monthly Salary: $${formData.salary.toLocaleString()}\n`;
    report += `Total Expenses: $${totalExpenses.toLocaleString()}\n`;
    report += `Remaining Amount: $${remaining.toLocaleString()}\n`;
    report += `Savings Rate: ${((formData.expenses.savings || 0) / totalExpenses * 100).toFixed(1)}%\n\n`;
    report += 'EXPENSE BREAKDOWN\n';
    report += '-----------------\n';
    Object.entries(formData.expenses).forEach(([category, amount]) => {
      const amountValue = amount;
      if (amountValue > 0) {
        const percentage = (amountValue / totalExpenses * 100).toFixed(1);
        report += `${category.charAt(0).toUpperCase() + category.slice(1)}: $${amountValue.toLocaleString()} (${percentage}%)\n`;
      }
    });
    report += '\n';
    if (this.adviceResponse) {
      report += 'PERSONALIZED ADVICE\n';
      report += '-------------------\n';
      this.adviceResponse.advice.forEach((advice, index) => {
        report += `${index + 1}. ${advice}\n`;
      });
      report += '\n';
      report += 'FINANCIAL INSIGHTS\n';
      report += '------------------\n';
      this.adviceResponse.insights.forEach((insight, index) => {
        report += `${index + 1}. ${insight.title}\n`;
        report += `   ${insight.detail}\n\n`;
      });
    }
    report += 'RECOMMENDATIONS\n';
    report += '---------------\n';
    report += '1. Review your expense categories monthly\n';
    report += '2. Set up automatic savings transfers\n';
    report += '3. Track your progress toward financial goals\n';
    report += '4. Consider consulting with a financial advisor\n';
    report += '5. Review and adjust your budget quarterly\n\n';
    report += 'This report is for informational purposes only and should not be considered as financial advice.\n';
    report += 'Please consult with a qualified financial professional for personalized guidance.';
    return report;
  }
  // Schedule follow-up review
  scheduleFollowUpReview() {
    // Get current date and add 3 months for follow-up
    const followUpDate = new Date();
    followUpDate.setMonth(followUpDate.getMonth() + 3);
    // Create calendar event (for demonstration - in real app, integrate with calendar service)
    const eventDetails = {
      title: 'Financial Review Follow-up',
      description: `Follow-up review for financial advice received on ${new Date().toLocaleDateString()}`,
      startDate: followUpDate,
      endDate: new Date(followUpDate.getTime() + 60 * 60 * 1000),
      location: 'Online/Phone',
      notes: `Review progress on financial goals and adjust budget as needed. Original advice: ${this.adviceResponse?.advice.slice(0, 2).join('; ')}`
    };
    // Show confirmation message
    alert(`Follow-up review scheduled for ${followUpDate.toLocaleDateString()} at ${followUpDate.toLocaleTimeString()}\n\nEvent Details:\n${eventDetails.title}\n${eventDetails.description}\n\nNote: This is a demo. In a real application, this would integrate with your calendar system.`);
    // You could also store this in localStorage or send to a backend service
    this.saveFollowUpReminder(eventDetails);
  }
  // Save follow-up reminder
  saveFollowUpReminder(eventDetails) {
    const reminders = JSON.parse(localStorage.getItem('financialFollowUps') || '[]');
    reminders.push({
      id: Date.now().toString(),
      ...eventDetails,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('financialFollowUps', JSON.stringify(reminders));
  }
  // View scheduled follow-ups
  viewScheduledFollowUps() {
    const reminders = JSON.parse(localStorage.getItem('financialFollowUps') || '[]');
    if (reminders.length === 0) {
      alert('No follow-up reviews scheduled yet.');
      return;
    }
    let message = 'SCHEDULED FOLLOW-UP REVIEWS:\n\n';
    reminders.forEach((reminder, index) => {
      const date = new Date(reminder.startDate).toLocaleDateString();
      const time = new Date(reminder.startDate).toLocaleTimeString();
      message += `${index + 1}. ${reminder.title}\n`;
      message += `   Date: ${date} at ${time}\n`;
      message += `   Description: ${reminder.description}\n`;
      message += `   Notes: ${reminder.notes}\n\n`;
    });
    alert(message);
  }
  // Clear all follow-up reminders
  clearFollowUpReminders() {
    if (confirm('Are you sure you want to clear all scheduled follow-up reminders?')) {
      localStorage.removeItem('financialFollowUps');
      alert('All follow-up reminders have been cleared.');
    }
  }
  // Get field error message
  getFieldError(fieldName) {
    const field = this.adviceForm.get(fieldName);
    if (field?.errors && this.hasSubmitted) {
      if (field.errors['required']) return 'This field is required';
      if (field.errors['min']) return 'Value must be greater than or equal to 0';
      if (field.errors['maxlength']) return 'Maximum length exceeded';
    }
    return '';
  }
  static {
    this.ɵfac = function FinancialAdviceComponent_Factory(t) {
      return new (t || FinancialAdviceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_financial_advice_service__WEBPACK_IMPORTED_MODULE_0__.FinancialAdviceService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FinancialAdviceComponent,
      selectors: [["app-financial-advice"]],
      decls: 56,
      vars: 31,
      consts: [[1, "financial-advice-container"], [1, "form-title"], [1, "fas", "fa-chart-line", "me-2"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "financial-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "salary"], [1, "fas", "fa-dollar-sign", "me-2"], ["type", "number", "id", "salary", "formControlName", "salary", "placeholder", "Enter your monthly salary", "required", "", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], [1, "fas", "fa-list-alt", "me-2"], ["formGroupName", "expenses", 1, "expense-grid"], ["class", "form-group", 4, "ngFor", "ngForOf"], [1, "expense-summary"], [1, "row"], [1, "col-md-4"], [1, "summary-item"], [1, "summary-label"], [1, "summary-value", "text-danger"], [1, "summary-value"], [1, "summary-value", "text-info"], ["for", "futureGoal"], [1, "fas", "fa-bullseye", "me-2"], ["type", "text", "id", "futureGoal", "formControlName", "futureGoal", "placeholder", "e.g., Buy a house, Save for retirement, Start a business", 1, "form-control"], [1, "d-grid", "gap-2"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "fas", "fa-magic", "me-2"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], [1, "fas", "fa-refresh", "me-2"], ["class", "loading", 4, "ngIf"], ["class", "advice-results", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "invalid-feedback"], [3, "for"], [1, "fas", "fa-tag", "me-2"], ["type", "number", 1, "form-control", 3, "id", "formControlName", "placeholder"], [1, "loading"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3"], [1, "advice-results"], [1, "card"], [1, "card-header"], [1, "fas", "fa-lightbulb", "me-2"], [1, "card-body"], [4, "ngFor", "ngForOf"], [1, "fas", "fa-chart-pie", "me-2"], ["class", "insight-item", 4, "ngFor", "ngForOf"], [1, "fas", "fa-tasks", "me-2"], [1, "alert", "alert-info"], [1, "fas", "fa-info-circle", "me-2"], [1, "btn", "btn-outline-primary", 3, "disabled", "click"], [1, "fas", "fa-download", "me-2"], [1, "btn", "btn-outline-secondary", 3, "disabled", "click"], [1, "fas", "fa-file-code", "me-2"], [1, "btn", "btn-outline-success", 3, "disabled", "click"], [1, "fas", "fa-calendar-plus", "me-2"], [1, "fas", "fa-calendar-check", "me-2"], [1, "d-grid", "gap-2", "d-md-flex"], [1, "btn", "btn-outline-info", "btn-sm", 3, "click"], [1, "fas", "fa-eye", "me-2"], [1, "btn", "btn-outline-warning", "btn-sm", 3, "click"], [1, "fas", "fa-trash", "me-2"], [1, "fas", "fa-check-circle", "me-2"], [1, "insight-item"]],
      template: function FinancialAdviceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Financial Advice & Planning ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FinancialAdviceComponent_div_4_Template, 3, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function FinancialAdviceComponent_Template_form_ngSubmit_5_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Monthly Salary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, FinancialAdviceComponent_div_11_Template, 2, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Monthly Expenses Breakdown ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, FinancialAdviceComponent_div_16_Template, 7, 10, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "div", 15)(20, "div", 16)(21, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Total Expenses:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15)(27, "div", 16)(28, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Remaining:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 15)(34, "div", 16)(35, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Savings Rate:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 5)(41, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Future Financial Goal ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, FinancialAdviceComponent_div_45_Template, 2, 1, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 24)(47, "button", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, FinancialAdviceComponent_span_49_Template, 2, 0, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, FinancialAdviceComponent_span_50_Template, 2, 0, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FinancialAdviceComponent_Template_button_click_51_listener() {
            return ctx.resetForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Reset Form ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, FinancialAdviceComponent_div_54_Template, 6, 0, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, FinancialAdviceComponent_div_55_Template, 45, 5, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.adviceForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.getFieldError("salary"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getFieldError("salary"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](25, 21, ctx.getTotalExpenses(), "1.0-0"), "");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("text-success", ctx.getRemainingAmount() >= 0)("text-danger", ctx.getRemainingAmount() < 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](32, 24, ctx.getRemainingAmount(), "1.0-0"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](39, 27, ctx.getTotalExpenses() > 0 ? (ctx.getSavingsValue() || 0) / ctx.getTotalExpenses() * 100 : 0, "1.0-1"), "% ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx.getFieldError("futureGoal"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.getFieldError("futureGoal"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isFormValid() || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.adviceResponse);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe],
      styles: ["\n\n.financial-advice-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #f8f9fa;\n  min-height: 100vh;\n}\n\n\n\n.form-title[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 30px;\n  border-radius: 15px;\n  margin-bottom: 30px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  text-align: center;\n  font-weight: 600;\n  font-size: 2rem;\n}\n\n\n\n.financial-form[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 15px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  padding: 30px;\n  margin-bottom: 30px;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.financial-form[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);\n}\n\n\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.95rem;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  font-size: 14px;\n  transition: all 0.3s ease;\n  background-color: #f8f9fa;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--secondary-color);\n  box-shadow: 0 0 0 0.2rem rgba(59, 130, 246, 0.25);\n  background-color: white;\n  outline: none;\n}\n\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--danger-color);\n  box-shadow: 0 0 0 0.2rem rgba(239, 68, 68, 0.25);\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 0.875rem;\n  color: var(--danger-color);\n}\n\n\n\n.expense-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n  margin: 20px 0;\n}\n\n.expense-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  padding: 20px;\n  border-radius: 12px;\n  border: 1px solid #dee2e6;\n  transition: all 0.3s ease;\n}\n\n.expense-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n}\n\n\n\n.expense-summary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  border-radius: 12px;\n  padding: 20px;\n  margin: 20px 0;\n  border: 1px solid #dee2e6;\n}\n\n.summary-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 0;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.summary-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #495057;\n  font-size: 0.9rem;\n}\n\n.summary-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.1rem;\n}\n\n\n\n.financial-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n  margin: 30px 0 20px 0;\n  padding-bottom: 10px;\n  border-bottom: 2px solid var(--border-color);\n  font-size: 1.3rem;\n}\n\n\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);\n  border: none;\n  color: white;\n  padding: 12px 30px;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 100%;\n  margin-top: 20px;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  background: #6c757d;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #6c757d;\n  color: #6c757d;\n  background: transparent;\n  padding: 12px 30px;\n  border-radius: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  width: 100%;\n}\n\n.btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background: #6c757d;\n  color: white;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n\n\n\n.advice-results[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.advice-results[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background: white;\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  overflow: hidden;\n}\n\n.advice-results[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n}\n\n.advice-results[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);\n  color: white;\n  border: none;\n  padding: 20px 25px;\n  font-weight: 600;\n  font-size: 1.2rem;\n}\n\n.advice-results[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 25px;\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n}\n\n\n\n.advice-results[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n\n.advice-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);\n  padding: 15px 20px;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  border-left: 4px solid var(--info-color);\n  transition: all 0.3s ease;\n  font-weight: 500;\n  color: #0c5460;\n}\n\n.advice-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #bbdefb 0%, #90caf9 100%);\n  transform: translateX(5px);\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);\n}\n\n\n\n.insight-item[_ngcontent-%COMP%] {\n  background: white;\n  padding: 20px;\n  margin-bottom: 15px;\n  border-radius: 10px;\n  border: 1px solid #e9ecef;\n  transition: all 0.3s ease;\n}\n\n.insight-item[_ngcontent-%COMP%]:hover {\n  border-color: var(--secondary-color);\n  box-shadow: 0 5px 15px rgba(59, 130, 246, 0.1);\n  transform: translateY(-2px);\n}\n\n.insight-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  font-weight: 600;\n  margin-bottom: 10px;\n  font-size: 1.1rem;\n}\n\n.insight-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6c757d;\n  margin: 0;\n  line-height: 1.6;\n}\n\n\n\n.loading[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: var(--primary-color);\n}\n\n\n\n.alert[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);\n  color: #721c24;\n  border-left: 4px solid var(--danger-color);\n}\n\n.alert-info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d1ecf1 0%, #b8e6f1 100%);\n  color: #0c5460;\n  border-left: 4px solid var(--info-color);\n}\n\n\n\n@media (max-width: 768px) {\n  .financial-advice-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  \n  .form-title[_ngcontent-%COMP%] {\n    padding: 20px;\n    font-size: 1.5rem;\n    margin-bottom: 20px;\n  }\n  \n  .financial-form[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  \n  .expense-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 15px;\n  }\n  \n  .expense-grid[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  \n  .expense-summary[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  \n  .summary-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 5px;\n  }\n  \n  .advice-results[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  \n  .insight-item[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n}\n\n@media (max-width: 576px) {\n  .financial-form[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  \n  .form-control[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  \n  .btn-primary[_ngcontent-%COMP%], .btn-outline-secondary[_ngcontent-%COMP%] {\n    padding: 10px 20px;\n    font-size: 0.9rem;\n  }\n  \n  .advice-results[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 12px 15px;\n    font-size: 0.9rem;\n  }\n  \n  .expense-summary[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n}\n\n\n\n@keyframes _ngcontent-%COMP%_fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.advice-results[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeInUp 0.5s ease-out;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;\n}\n\n\n\n.follow-up-management[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding: 20px;\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  border-radius: 12px;\n  border: 1px solid #dee2e6;\n}\n\n.follow-up-management[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #495057;\n  margin-bottom: 15px;\n  font-weight: 600;\n}\n\n.follow-up-management[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n\n\n.download-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n\n.download-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n\n\n\n@media (max-width: 768px) {\n  .follow-up-management[_ngcontent-%COMP%]   .d-md-flex[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  \n  .download-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  \n  .download-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n}\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9maW5hbmNpYWwtYWR2aWNlL2ZpbmFuY2lhbC1hZHZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQ0FBc0M7QUFDdEM7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSw2REFBNkQ7RUFDN0QsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMENBQTBDO0FBQzVDOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsaURBQWlEO0VBQ2pELHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQSxpQkFBaUI7QUFDakI7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7RUFDVCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCwyQkFBMkI7RUFDM0IseUNBQXlDO0FBQzNDOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLDZEQUE2RDtFQUM3RCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQiw0Q0FBNEM7RUFDNUMsaUJBQWlCO0FBQ25COztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLHlGQUF5RjtFQUN6RixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQ0FBMEM7RUFDMUMsbUJBQW1CO0VBQ25CLHFEQUFxRDtFQUNyRCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UseUZBQXlGO0VBQ3pGLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkRBQTZEO0FBQy9EOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4Qyx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsMEJBQTBCO0VBQzFCLHlDQUF5QztBQUMzQzs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw4Q0FBOEM7RUFDOUMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBRUEsaUJBQWlCO0FBQ2pCO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxjQUFjO0VBQ2QsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELGNBQWM7RUFDZCx3Q0FBd0M7QUFDMUM7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBLDBCQUEwQjtBQUMxQjtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLCtFQUErRTtBQUNqRjs7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDZEQUE2RDtFQUM3RCxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEscUJBQXFCO0FBQ3JCO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjs7QUFFQSxvREFBb0Q7QUFDcEQ7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZpbmFuY2lhbCBBZHZpY2UgQ29tcG9uZW50IFN0eWxlcyAqL1xyXG4uZmluYW5jaWFsLWFkdmljZS1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLyogSGVhZGVyIFNlY3Rpb24gKi9cclxuLmZvcm0tdGl0bGUge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi8qIEZvcm0gQ29udGFpbmVyICovXHJcbi5maW5hbmNpYWwtZm9ybSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uZmluYW5jaWFsLWZvcm06aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi8qIEZvcm0gR3JvdXBzICovXHJcbi5mb3JtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDU5LCAxMzAsIDI0NiwgMC4yNSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWRhbmdlci1jb2xvcik7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjM5LCA2OCwgNjgsIDAuMjUpO1xyXG59XHJcblxyXG4uaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1kYW5nZXItY29sb3IpO1xyXG59XHJcblxyXG4vKiBFeHBlbnNlIEdyaWQgKi9cclxuLmV4cGVuc2UtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcclxuICBnYXA6IDIwcHg7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5leHBlbnNlLWdyaWQgLmZvcm0tZ3JvdXAge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEgMCUsICNlOWVjZWYgMTAwJSk7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmV4cGVuc2UtZ3JpZCAuZm9ybS1ncm91cDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U5ZWNlZiAwJSwgI2RlZTJlNiAxMDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi8qIEV4cGVuc2UgU3VtbWFyeSAqL1xyXG4uZXhwZW5zZS1zdW1tYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4uc3VtbWFyeS1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnN1bW1hcnktaXRlbTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uc3VtbWFyeS1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLnN1bW1hcnktdmFsdWUge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi8qIFNlY3Rpb24gSGVhZGVycyAqL1xyXG4uZmluYW5jaWFsLWZvcm0gaDMge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMzBweCAwIDIwcHggMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLyogU3VibWl0IEJ1dHRvbiAqL1xyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktY29sb3IpIDAlLCB2YXIoLS1zZWNvbmRhcnktY29sb3IpIDEwMCUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweCAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxZTQwYWYgMCUsICMyNTYzZWIgMTAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgdHJhbnNmb3JtOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xyXG4gIGJvcmRlci1jb2xvcjogIzZjNzU3ZDtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiAxMnB4IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtc2Vjb25kYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4vKiBBZHZpY2UgUmVzdWx0cyAqL1xyXG4uYWR2aWNlLXJlc3VsdHMge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5hZHZpY2UtcmVzdWx0cyAuY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmFkdmljZS1yZXN1bHRzIC5jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLmFkdmljZS1yZXN1bHRzIC5jYXJkLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1jb2xvcikgMCUsIHZhcigtLXNlY29uZGFyeS1jb2xvcikgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAyMHB4IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmFkdmljZS1yZXN1bHRzIC5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZmZmZiAwJSwgI2Y4ZjlmYSAxMDAlKTtcclxufVxyXG5cclxuLyogQWR2aWNlIExpc3QgKi9cclxuLmFkdmljZS1yZXN1bHRzIHVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5hZHZpY2UtcmVzdWx0cyBsaSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UzZjJmZCAwJSwgI2JiZGVmYiAxMDAlKTtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1pbmZvLWNvbG9yKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMwYzU0NjA7XHJcbn1cclxuXHJcbi5hZHZpY2UtcmVzdWx0cyBsaTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2JiZGVmYiAwJSwgIzkwY2FmOSAxMDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLyogSW5zaWdodCBJdGVtcyAqL1xyXG4uaW5zaWdodC1pdGVtIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5pbnNpZ2h0LWl0ZW06aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjEpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxufVxyXG5cclxuLmluc2lnaHQtaXRlbSBoNCB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLmluc2lnaHQtaXRlbSBwIHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxufVxyXG5cclxuLyogTG9hZGluZyBTdGF0ZSAqL1xyXG4ubG9hZGluZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG4vKiBBbGVydCBTdHlsZXMgKi9cclxuLmFsZXJ0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhkN2RhIDAlLCAjZjVjNmNiIDEwMCUpO1xyXG4gIGNvbG9yOiAjNzIxYzI0O1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tZGFuZ2VyLWNvbG9yKTtcclxufVxyXG5cclxuLmFsZXJ0LWluZm8ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkMWVjZjEgMCUsICNiOGU2ZjEgMTAwJSk7XHJcbiAgY29sb3I6ICMwYzU0NjA7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB2YXIoLS1pbmZvLWNvbG9yKTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZpbmFuY2lhbC1hZHZpY2UtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5maW5hbmNpYWwtZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhwZW5zZS1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ2FwOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuZXhwZW5zZS1ncmlkIC5mb3JtLWdyb3VwIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leHBlbnNlLXN1bW1hcnkge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLnN1bW1hcnktaXRlbSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBnYXA6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLmFkdmljZS1yZXN1bHRzIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLmluc2lnaHQtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmZpbmFuY2lhbC1mb3JtIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gIH1cclxuICBcclxuICAuYnRuLXByaW1hcnksIC5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5hZHZpY2UtcmVzdWx0cyBsaSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmV4cGVuc2Utc3VtbWFyeSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogQW5pbWF0aW9uIGZvciByZXN1bHRzICovXHJcbkBrZXlmcmFtZXMgZmFkZUluVXAge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5hZHZpY2UtcmVzdWx0cyB7XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW5VcCAwLjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4vKiBTbW9vdGggdHJhbnNpdGlvbnMgKi9cclxuKiB7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLyogRm9sbG93LXVwIE1hbmFnZW1lbnQgU2VjdGlvbiAqL1xyXG4uZm9sbG93LXVwLW1hbmFnZW1lbnQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLmZvbGxvdy11cC1tYW5hZ2VtZW50IGg2IHtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5mb2xsb3ctdXAtbWFuYWdlbWVudCAuYnRuIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4vKiBEb3dubG9hZCBCdXR0b25zICovXHJcbi5kb3dubG9hZC1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmRvd25sb2FkLWJ1dHRvbnMgLmJ0biB7XHJcbiAgZmxleDogMTtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIGFkanVzdG1lbnRzIGZvciBmb2xsb3ctdXAgbWFuYWdlbWVudCAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZm9sbG93LXVwLW1hbmFnZW1lbnQgLmQtbWQtZmxleCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuZG93bmxvYWQtYnV0dG9ucyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuZG93bmxvYWQtYnV0dG9ucyAuYnRuIHtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 6075:
/*!*******************************************************************************!*\
  !*** ./src/app/components/financial-analysis/financial-analysis.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinancialAnalysisComponent: () => (/* binding */ FinancialAnalysisComponent)
/* harmony export */ });
/* harmony import */ var _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/financial-analysis.model */ 3182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_financial_analysis_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/financial-analysis.service */ 1098);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);




function FinancialAnalysisComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Loading financial data...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function FinancialAnalysisComponent_div_13_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "div")(3, "h6", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const insight_r10 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.getSeverityClass(insight_r10.severity));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](insight_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](insight_r10.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 6, insight_r10.createdAt, "short"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r2.getSeverityClass(insight_r10.severity));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", insight_r10.severity, " ");
  }
}
function FinancialAnalysisComponent_div_13_div_86_li_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 67)(1, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const factor_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](factor_r12.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("text-success", factor_r12.impact > 0)("text-danger", factor_r12.impact < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 7, factor_r12.impact), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", factor_r12.probability, "% probability)");
  }
}
function FinancialAnalysisComponent_div_13_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "div", 56)(2, "div", 57)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Cash Flow Chart Visualization");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Chart library integration would go here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 59)(10, "div", 60)(11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Forecast Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 61)(14, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Period");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 61)(21, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Confidence Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 63)(24, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 61)(27, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Key Factors");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ul", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, FinancialAnalysisComponent_div_13_div_86_li_30_Template, 9, 9, "li", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 6, ctx_r3.cashFlowForecast.startDate, "shortDate"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](19, 9, ctx_r3.cashFlowForecast.endDate, "shortDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r3.cashFlowForecast.confidence, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.cashFlowForecast.confidence, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.cashFlowForecast.factors);
  }
}
function FinancialAnalysisComponent_div_13_div_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 61)(1, "div", 68)(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](category_r13.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", category_r13.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 12, category_r13.spent));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", category_r13.spent / (category_r13.budget || category_r13.spent) * 100, "%")("background-color", category_r13.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 14, category_r13.spent), " of ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 16, category_r13.budget), " budget ");
  }
}
function FinancialAnalysisComponent_div_13_div_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75)(1, "div", 68)(2, "h6", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 77)(6, "div", 78)(7, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 78)(13, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Average");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 78)(19, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Frequency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pattern_r14 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](pattern_r14.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r5.getTrendIcon(pattern_r14.trend));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r5.getTrendColor(pattern_r14.trend));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 8, pattern_r14.totalAmount));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 10, pattern_r14.averageAmount));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", pattern_r14.frequency, "/month");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", pattern_r14.percentageOfTotal, "% of total spending ");
  }
}
function FinancialAnalysisComponent_div_13_div_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 80)(1, "div", 24)(2, "div", 56)(3, "div", 81)(4, "div")(5, "h6", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 83)(12, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 84)(18, "h6", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Payment Suggestion ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 24)(22, "div", 86)(23, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Suggested Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](27, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 86)(29, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Suggested Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p", 67)(35, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Reason:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p", 88)(39, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Impact:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 59)(43, "div", 89)(44, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Pay Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " Schedule ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const bill_r15 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](bill_r15.billName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](bill_r15.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r6.getPriorityClass(bill_r15.priority));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", bill_r15.priority, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 10, bill_r15.amount));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Due in ", ctx_r6.getDaysUntilDue(bill_r15.dueDate), " days ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](27, 12, bill_r15.paymentSuggestion.suggestedAmount));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](33, 14, bill_r15.paymentSuggestion.suggestedDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", bill_r15.paymentSuggestion.reason, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", bill_r15.paymentSuggestion.impact, "");
  }
}
function FinancialAnalysisComponent_div_13_div_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No bill reminders found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Add Your First Bill Reminder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function FinancialAnalysisComponent_div_13_div_125_div_9_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const action_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](action_r20);
  }
}
function FinancialAnalysisComponent_div_13_div_125_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 103)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Recommended Actions:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FinancialAnalysisComponent_div_13_div_125_div_9_li_4_Template, 2, 1, "li", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const insight_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", insight_r16.actionItems);
  }
}
function FinancialAnalysisComponent_div_13_div_125_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 103)(1, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Take Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Dismiss ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function FinancialAnalysisComponent_div_13_div_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 98)(1, "div", 51)(2, "div", 52)(3, "div", 99)(4, "h6", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, FinancialAnalysisComponent_div_13_div_125_div_9_Template, 5, 1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "small", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 102)(14, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, FinancialAnalysisComponent_div_13_div_125_div_16_Template, 7, 0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const insight_r16 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r8.getSeverityClass(insight_r16.severity));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", insight_r16.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](insight_r16.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", insight_r16.actionItems && insight_r16.actionItems.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 8, insight_r16.createdAt, "medium"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r8.getSeverityClass(insight_r16.severity));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", insight_r16.severity, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", insight_r16.actionable);
  }
}
function FinancialAnalysisComponent_div_13_div_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No insights available at the moment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Continue using your account to generate personalized insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function FinancialAnalysisComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "ul", 14)(2, "li", 15)(3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinancialAnalysisComponent_div_13_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.onTabChange("overview"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Overview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 15)(7, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinancialAnalysisComponent_div_13_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r24.onTabChange("cashflow"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Cash Flow Forecast ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 15)(11, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinancialAnalysisComponent_div_13_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.onTabChange("spending"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Spending Analysis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 15)(15, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinancialAnalysisComponent_div_13_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.onTabChange("bills"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Bill Reminders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 15)(19, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinancialAnalysisComponent_div_13_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.onTabChange("insights"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Insights ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 22)(23, "div", 23)(24, "div", 24)(25, "div", 25)(26, "div", 26)(27, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Projected Balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 25)(35, "div", 26)(36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](40, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Projected Income");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 25)(44, "div", 26)(45, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Projected Expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 25)(53, "div", 26)(54, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "h4", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Pending Bills");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 24)(61, "div", 34)(62, "div", 35)(63, "div", 36)(64, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " Recent Insights ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, FinancialAnalysisComponent_div_13_div_68_Template, 12, 9, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 23)(70, "div", 35)(71, "div", 36)(72, "div", 40)(73, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, " Cash Flow Forecast ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 41)(77, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinancialAnalysisComponent_div_13_Template_button_click_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r28.onForecastPeriodChange(ctx_r28.forecastPeriodEnum.WEEKLY));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " Weekly ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinancialAnalysisComponent_div_13_Template_button_click_79_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.onForecastPeriodChange(ctx_r29.forecastPeriodEnum.MONTHLY));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Monthly ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinancialAnalysisComponent_div_13_Template_button_click_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r30.onForecastPeriodChange(ctx_r30.forecastPeriodEnum.QUARTERLY));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " Quarterly ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinancialAnalysisComponent_div_13_Template_button_click_83_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r31.onForecastPeriodChange(ctx_r31.forecastPeriodEnum.YEARLY));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " Yearly ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, FinancialAnalysisComponent_div_13_div_86_Template, 31, 12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 23)(88, "div", 24)(89, "div", 44)(90, "div", 35)(91, "div", 36)(92, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, " Spending by Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](96, FinancialAnalysisComponent_div_13_div_96_Template, 15, 18, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 44)(98, "div", 35)(99, "div", 36)(100, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, " Spending Trends ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](104, FinancialAnalysisComponent_div_13_div_104_Template, 25, 12, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 23)(106, "div", 35)(107, "div", 36)(108, "div", 40)(109, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, " Bill Reminders & Payment Suggestions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, " Add Reminder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](116, FinancialAnalysisComponent_div_13_div_116_Template, 53, 17, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](117, FinancialAnalysisComponent_div_13_div_117_Template, 7, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 23)(119, "div", 35)(120, "div", 36)(121, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, " Financial Insights & Recommendations ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](125, FinancialAnalysisComponent_div_13_div_125_Template, 17, 11, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](126, FinancialAnalysisComponent_div_13_div_126_Template, 6, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r1.activeTab === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r1.activeTab === "cashflow");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r1.activeTab === "spending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r1.activeTab === "bills");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r1.activeTab === "insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx_r1.activeTab === "overview")("active", ctx_r1.activeTab === "overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 50, ctx_r1.cashFlowForecast == null ? null : ctx_r1.cashFlowForecast.projectedBalance));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](40, 52, ctx_r1.cashFlowForecast == null ? null : ctx_r1.cashFlowForecast.projectedIncome));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 54, ctx_r1.cashFlowForecast == null ? null : ctx_r1.cashFlowForecast.projectedExpenses));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.billReminders.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.financialInsights.slice(0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx_r1.activeTab === "cashflow")("active", ctx_r1.activeTab === "cashflow");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r1.selectedForecastPeriod === ctx_r1.forecastPeriodEnum.WEEKLY);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r1.selectedForecastPeriod === ctx_r1.forecastPeriodEnum.MONTHLY);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r1.selectedForecastPeriod === ctx_r1.forecastPeriodEnum.QUARTERLY);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r1.selectedForecastPeriod === ctx_r1.forecastPeriodEnum.YEARLY);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.cashFlowForecast);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx_r1.activeTab === "spending")("active", ctx_r1.activeTab === "spending");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.spendingCategories);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.spendingPatterns);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx_r1.activeTab === "bills")("active", ctx_r1.activeTab === "bills");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.billReminders);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.billReminders.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("show", ctx_r1.activeTab === "insights")("active", ctx_r1.activeTab === "insights");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.financialInsights);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.financialInsights.length === 0);
  }
}
class FinancialAnalysisComponent {
  constructor(financialAnalysisService) {
    this.financialAnalysisService = financialAnalysisService;
    this.activeTab = 'overview';
    this.loading = false;
    // Cash Flow Data
    this.cashFlowForecast = null;
    this.selectedForecastPeriod = _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_0__.ForecastPeriod.MONTHLY;
    this.forecastPeriodEnum = _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_0__.ForecastPeriod; // Make enum accessible in template
    // Spending Analysis Data
    this.spendingPatterns = [];
    this.spendingCategories = [];
    // Bill Reminders Data
    this.billReminders = [];
    // Financial Insights Data
    this.financialInsights = [];
  }
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.loading = true;
    // Load all data in parallel
    Promise.all([this.loadCashFlowForecast(), this.loadSpendingPatterns(), this.loadSpendingCategories(), this.loadBillReminders(), this.loadFinancialInsights()]).finally(() => {
      this.loading = false;
    });
  }
  loadCashFlowForecast() {
    return this.financialAnalysisService.getCashFlowForecast(this.selectedForecastPeriod).toPromise().then(forecast => {
      this.cashFlowForecast = forecast || null;
    }).catch(error => {
      console.error('Error loading cash flow forecast:', error);
    });
  }
  loadSpendingPatterns() {
    return this.financialAnalysisService.getSpendingPatterns(6).toPromise().then(patterns => {
      this.spendingPatterns = patterns || [];
    }).catch(error => {
      console.error('Error loading spending patterns:', error);
    });
  }
  loadSpendingCategories() {
    return this.financialAnalysisService.getSpendingCategories().toPromise().then(categories => {
      this.spendingCategories = categories || [];
    }).catch(error => {
      console.error('Error loading spending categories:', error);
    });
  }
  loadBillReminders() {
    return this.financialAnalysisService.getBillReminders().toPromise().then(reminders => {
      this.billReminders = reminders || [];
    }).catch(error => {
      console.error('Error loading bill reminders:', error);
    });
  }
  loadFinancialInsights() {
    return this.financialAnalysisService.getFinancialInsights().toPromise().then(insights => {
      this.financialInsights = insights || [];
    }).catch(error => {
      console.error('Error loading financial insights:', error);
    });
  }
  onForecastPeriodChange(period) {
    this.selectedForecastPeriod = period;
    this.loadCashFlowForecast();
  }
  onTabChange(tab) {
    this.activeTab = tab;
  }
  refreshData() {
    this.loadData();
  }
  getSeverityClass(severity) {
    switch (severity) {
      case 'CRITICAL':
        return 'alert-danger';
      case 'ALERT':
        return 'alert-warning';
      case 'WARNING':
        return 'alert-warning';
      case 'INFO':
        return 'alert-info';
      default:
        return 'alert-secondary';
    }
  }
  getTrendIcon(trend) {
    switch (trend) {
      case 'INCREASING':
        return 'trending_up';
      case 'DECREASING':
        return 'trending_down';
      case 'STABLE':
        return 'trending_flat';
      case 'FLUCTUATING':
        return 'timeline';
      default:
        return 'trending_flat';
    }
  }
  getTrendColor(trend) {
    switch (trend) {
      case 'INCREASING':
        return 'text-danger';
      case 'DECREASING':
        return 'text-success';
      case 'STABLE':
        return 'text-primary';
      case 'FLUCTUATING':
        return 'text-warning';
      default:
        return 'text-muted';
    }
  }
  getDaysUntilDue(dueDate) {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  getPriorityClass(priority) {
    switch (priority) {
      case 'CRITICAL':
        return 'badge-danger';
      case 'HIGH':
        return 'badge-warning';
      case 'MEDIUM':
        return 'badge-info';
      case 'LOW':
        return 'badge-secondary';
      default:
        return 'badge-secondary';
    }
  }
  static {
    this.ɵfac = function FinancialAnalysisComponent_Factory(t) {
      return new (t || FinancialAnalysisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_financial_analysis_service__WEBPACK_IMPORTED_MODULE_1__.FinancialAnalysisService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: FinancialAnalysisComponent,
      selectors: [["app-financial-analysis"]],
      decls: 14,
      vars: 5,
      consts: [[1, "financial-analysis-container"], [1, "header-section"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "mb-1"], [1, "fas", "fa-chart-line", "me-2"], [1, "text-muted", "mb-0"], [1, "btn", "btn-outline-primary", 3, "disabled", "click"], [1, "fas", "fa-sync-alt", "me-2"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], ["id", "financialTabs", "role", "tablist", 1, "nav", "nav-tabs", "mb-4"], ["role", "presentation", 1, "nav-item"], ["type", "button", 1, "nav-link", 3, "click"], [1, "fas", "fa-tachometer-alt", "me-2"], [1, "fas", "fa-chart-area", "me-2"], [1, "fas", "fa-pie-chart", "me-2"], [1, "fas", "fa-calendar-check", "me-2"], [1, "fas", "fa-lightbulb", "me-2"], ["id", "financialTabContent", 1, "tab-content"], [1, "tab-pane", "fade"], [1, "row"], [1, "col-md-3", "mb-4"], [1, "card", "stat-card"], [1, "card-body", "text-center"], [1, "fas", "fa-dollar-sign", "text-success", "mb-2", 2, "font-size", "2rem"], [1, "card-title"], [1, "card-text", "text-muted"], [1, "fas", "fa-arrow-up", "text-success", "mb-2", 2, "font-size", "2rem"], [1, "fas", "fa-arrow-down", "text-danger", "mb-2", 2, "font-size", "2rem"], [1, "fas", "fa-exclamation-triangle", "text-warning", "mb-2", 2, "font-size", "2rem"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], ["class", "alert", "role", "alert", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "align-items-center"], ["role", "group", 1, "btn-group"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], ["class", "row", 4, "ngIf"], [1, "col-md-6", "mb-4"], ["class", "mb-3", 4, "ngFor", "ngForOf"], ["class", "mb-3 p-3 border rounded", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-sm"], [1, "fas", "fa-plus", "me-2"], ["class", "bill-reminder-item mb-4 p-3 border rounded", 4, "ngFor", "ngForOf"], ["class", "insight-item mb-4", 4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", 3, "ngClass"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "alert-heading"], [1, "text-muted"], [1, "badge", 3, "ngClass"], [1, "col-md-8"], [1, "forecast-chart-placeholder"], [1, "fas", "fa-chart-line", "text-muted", 2, "font-size", "4rem"], [1, "col-md-4"], [1, "forecast-summary"], [1, "mb-3"], [1, "form-label"], [1, "progress"], ["role", "progressbar", 1, "progress-bar"], [1, "list-unstyled"], ["class", "mb-2", 4, "ngFor", "ngForOf"], [1, "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "align-items-center"], [1, "fas", 2, "width", "20px"], [1, "ms-2"], [1, "fw-bold"], [1, "progress", 2, "height", "8px"], [1, "progress-bar"], [1, "mb-3", "p-3", "border", "rounded"], [1, "fas", 3, "ngClass"], [1, "row", "text-center"], [1, "col-4"], [1, "mb-0", "fw-bold"], [1, "bill-reminder-item", "mb-4", "p-3", "border", "rounded"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-2"], [1, "text-muted", "mb-1"], [1, "text-end"], [1, "payment-suggestion", "mt-3", "p-3", "bg-light", "rounded"], [1, "fas", "fa-lightbulb", "text-warning", "me-2"], [1, "col-md-6"], [1, "mb-1", "fw-bold"], [1, "mb-0", "text-success"], [1, "d-grid", "gap-2"], [1, "btn", "btn-success", "btn-sm"], [1, "fas", "fa-check", "me-2"], [1, "btn", "btn-outline-primary", "btn-sm"], [1, "fas", "fa-clock", "me-2"], [1, "btn", "btn-outline-secondary", "btn-sm"], [1, "fas", "fa-edit", "me-2"], [1, "fas", "fa-calendar-times", "text-muted", 2, "font-size", "3rem"], [1, "btn", "btn-primary"], [1, "insight-item", "mb-4"], [1, "flex-grow-1"], [1, "alert-heading", "d-flex", "align-items-center"], ["class", "mt-3", 4, "ngIf"], [1, "ms-3"], [1, "mt-3"], [1, "mb-0", "mt-2"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", "btn-outline-primary", "me-2"], [1, "fas", "fa-check", "me-1"], [1, "btn", "btn-sm", "btn-outline-secondary"], [1, "fas", "fa-times", "me-1"], [1, "fas", "fa-lightbulb", "text-muted", 2, "font-size", "3rem"]],
      template: function FinancialAnalysisComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Financial Analysis ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Comprehensive financial insights and forecasting");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FinancialAnalysisComponent_Template_button_click_9_listener() {
            return ctx.refreshData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Refresh ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, FinancialAnalysisComponent_div_12_Template, 6, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, FinancialAnalysisComponent_div_13_Template, 127, 56, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("fa-spin", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: [".financial-analysis-container[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #f8f9fa;\n  min-height: 100vh;\n}\n\n.header-section[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 30px;\n  border-radius: 15px;\n  margin-bottom: 30px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n\n.header-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 600;\n}\n\n.header-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n\n\n.nav-tabs[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #e9ecef;\n  background: white;\n  border-radius: 10px 10px 0 0;\n  padding: 0 20px;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  border: none;\n  color: #6c757d;\n  font-weight: 500;\n  padding: 15px 20px;\n  border-radius: 0;\n  transition: all 0.3s ease;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #495057;\n  background-color: #f8f9fa;\n  border: none;\n}\n\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #007bff;\n  background-color: white;\n  border-bottom: 3px solid #007bff;\n  font-weight: 600;\n}\n\n\n\n.tab-content[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0 0 10px 10px;\n  padding: 30px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n}\n\n.tab-pane[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n\n\n.stat-card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);\n}\n\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n}\n\n.stat-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n\n.stat-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n\n.stat-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin-bottom: 0;\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 15px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  border-bottom: 1px solid #dee2e6;\n  border-radius: 15px 15px 0 0 !important;\n  padding: 20px 25px;\n}\n\n.card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: #495057;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 25px;\n}\n\n\n\n.progress[_ngcontent-%COMP%] {\n  height: 10px;\n  border-radius: 5px;\n  background-color: #e9ecef;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  transition: width 0.6s ease;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 500;\n  padding: 8px 16px;\n  transition: all 0.3s ease;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);\n  border: none;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #0056b3 0%, #004085 100%);\n  transform: translateY(-1px);\n}\n\n.btn-outline-primary[_ngcontent-%COMP%] {\n  border-color: #007bff;\n  color: #007bff;\n}\n\n.btn-outline-primary[_ngcontent-%COMP%]:hover, .btn-outline-primary.active[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border-color: #007bff;\n  transform: translateY(-1px);\n}\n\n.btn-success[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #28a745 0%, #1e7e34 100%);\n  border: none;\n}\n\n.btn-success[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, #1e7e34 0%, #155724 100%);\n  transform: translateY(-1px);\n}\n\n\n\n.alert[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 10px;\n  padding: 20px;\n  margin-bottom: 15px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);\n}\n\n.alert-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);\n  color: #721c24;\n}\n\n.alert-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);\n  color: #856404;\n}\n\n.alert-info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #d1ecf1 0%, #b8e6f1 100%);\n  color: #0c5460;\n}\n\n.alert-secondary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #e2e3e5 0%, #d6d8db 100%);\n  color: #383d41;\n}\n\n\n\n.badge[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-weight: 500;\n  font-size: 0.75rem;\n}\n\n.badge-danger[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);\n}\n\n.badge-warning[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ffc107 0%, #e0a800 100%);\n  color: #212529;\n}\n\n.badge-info[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);\n}\n\n.badge-secondary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%);\n}\n\n\n\n.bill-reminder-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e9ecef !important;\n  border-radius: 12px;\n  transition: all 0.3s ease;\n}\n\n.bill-reminder-item[_ngcontent-%COMP%]:hover {\n  border-color: #007bff !important;\n  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.1);\n}\n\n.payment-suggestion[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;\n  border: 1px solid #dee2e6;\n  border-radius: 8px;\n}\n\n\n\n.spending-category-item[_ngcontent-%COMP%] {\n  padding: 15px;\n  border-radius: 8px;\n  margin-bottom: 10px;\n  transition: all 0.3s ease;\n}\n\n.spending-category-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  transform: translateX(5px);\n}\n\n\n\n.forecast-chart-placeholder[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);\n  border-radius: 10px;\n  border: 2px dashed #dee2e6;\n}\n\n\n\n.insight-item[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n\n.insight-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(5px);\n}\n\n\n\n@media (max-width: 768px) {\n  .financial-analysis-container[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  \n  .header-section[_ngcontent-%COMP%] {\n    padding: 20px;\n    margin-bottom: 20px;\n  }\n  \n  .tab-content[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  \n  .nav-tabs[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n  \n  .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n    font-size: 0.9rem;\n  }\n  \n  .card-body[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  \n  .stat-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  \n  .stat-card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n}\n\n@media (max-width: 576px) {\n  .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 8px 12px;\n    font-size: 0.8rem;\n  }\n  \n  .nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    display: none;\n  }\n  \n  .card-body[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  \n  .btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 0.9rem;\n  }\n}\n\n\n\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n  border-radius: 4px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 4px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9maW5hbmNpYWwtYW5hbHlzaXMvZmluYW5jaWFsLWFuYWx5c2lzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtBQUNsQjs7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRSxpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxxREFBcUQ7RUFDckQsNkRBQTZEO0FBQy9EOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxnQ0FBZ0M7RUFDaEMsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7QUFDN0I7O0FBRUEsWUFBWTtBQUNaO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsMkJBQTJCO0FBQzdCOztBQUVBLFdBQVc7QUFDWDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZEQUE2RDtFQUM3RCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkRBQTZEO0VBQzdELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsY0FBYztBQUNoQjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2REFBNkQ7QUFDL0Q7O0FBRUE7RUFDRSw2REFBNkQ7RUFDN0QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLDZEQUE2RDtBQUMvRDs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0Usd0VBQXdFO0VBQ3hFLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtBQUM1Qjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSw2REFBNkQ7RUFDN0QsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLCtFQUErRTtBQUNqRjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsInNvdXJjZXNDb250ZW50IjpbIi5maW5hbmNpYWwtYW5hbHlzaXMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5oZWFkZXItc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uaGVhZGVyLXNlY3Rpb24gaDIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaGVhZGVyLXNlY3Rpb24gcCB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcclxufVxyXG5cclxuLyogTmF2aWdhdGlvbiBUYWJzICovXHJcbi5uYXYtdGFicyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlOWVjZWY7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWxpbmsge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWxpbms6aG92ZXIge1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICMwMDdiZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICMwMDdiZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogVGFiIENvbnRlbnQgKi9cclxuLnRhYi1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xyXG59XHJcblxyXG4udGFiLXBhbmUge1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTdGF0IENhcmRzICovXHJcbi5zdGF0LWNhcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZmZmZmIDAlLCAjZjhmOWZhIDEwMCUpO1xyXG59XHJcblxyXG4uc3RhdC1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLnN0YXQtY2FyZCAuY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG4uc3RhdC1jYXJkIC5jYXJkLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5zdGF0LWNhcmQgLmNhcmQtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLyogQ2FyZHMgKi9cclxuLmNhcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAyMHB4IDI1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciBoNSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi8qIFByb2dyZXNzIEJhcnMgKi9cclxuLnByb2dyZXNzIHtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbn1cclxuXHJcbi5wcm9ncmVzcy1iYXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGVhc2U7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbnMgKi9cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA3YmZmIDAlLCAjMDA1NmIzIDEwMCUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDA1NmIzIDAlLCAjMDA0MDg1IDEwMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnkge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcclxuICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLXByaW1hcnk6aG92ZXIsXHJcbi5idG4tb3V0bGluZS1wcmltYXJ5LmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyOGE3NDUgMCUsICMxZTdlMzQgMTAwJSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3M6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxZTdlMzQgMCUsICMxNTU3MjQgMTAwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4vKiBBbGVydHMgKi9cclxuLmFsZXJ0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhkN2RhIDAlLCAjZjVjNmNiIDEwMCUpO1xyXG4gIGNvbG9yOiAjNzIxYzI0O1xyXG59XHJcblxyXG4uYWxlcnQtd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZmZjNjZCAwJSwgI2ZmZWFhNyAxMDAlKTtcclxuICBjb2xvcjogIzg1NjQwNDtcclxufVxyXG5cclxuLmFsZXJ0LWluZm8ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkMWVjZjEgMCUsICNiOGU2ZjEgMTAwJSk7XHJcbiAgY29sb3I6ICMwYzU0NjA7XHJcbn1cclxuXHJcbi5hbGVydC1zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlMmUzZTUgMCUsICNkNmQ4ZGIgMTAwJSk7XHJcbiAgY29sb3I6ICMzODNkNDE7XHJcbn1cclxuXHJcbi8qIEJhZGdlcyAqL1xyXG4uYmFkZ2Uge1xyXG4gIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5iYWRnZS1kYW5nZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNkYzM1NDUgMCUsICNjODIzMzMgMTAwJSk7XHJcbn1cclxuXHJcbi5iYWRnZS13YXJuaW5nIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmZjMTA3IDAlLCAjZTBhODAwIDEwMCUpO1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG59XHJcblxyXG4uYmFkZ2UtaW5mbyB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzE3YTJiOCAwJSwgIzEzODQ5NiAxMDAlKTtcclxufVxyXG5cclxuLmJhZGdlLXNlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZjNzU3ZCAwJSwgIzVhNjI2OCAxMDAlKTtcclxufVxyXG5cclxuLyogQmlsbCBSZW1pbmRlciBJdGVtcyAqL1xyXG4uYmlsbC1yZW1pbmRlci1pdGVtIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uYmlsbC1yZW1pbmRlci1pdGVtOmhvdmVyIHtcclxuICBib3JkZXItY29sb3I6ICMwMDdiZmYgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMTIzLCAyNTUsIDAuMSk7XHJcbn1cclxuXHJcbi5wYXltZW50LXN1Z2dlc3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmOGY5ZmEgMCUsICNlOWVjZWYgMTAwJSkgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLyogU3BlbmRpbmcgQ2F0ZWdvcmllcyAqL1xyXG4uc3BlbmRpbmctY2F0ZWdvcnktaXRlbSB7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4uc3BlbmRpbmctY2F0ZWdvcnktaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcclxufVxyXG5cclxuLyogRm9yZWNhc3QgQ2hhcnQgUGxhY2Vob2xkZXIgKi9cclxuLmZvcmVjYXN0LWNoYXJ0LXBsYWNlaG9sZGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjhmOWZhIDAlLCAjZTllY2VmIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggZGFzaGVkICNkZWUyZTY7XHJcbn1cclxuXHJcbi8qIEluc2lnaHQgSXRlbXMgKi9cclxuLmluc2lnaHQtaXRlbSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmluc2lnaHQtaXRlbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5maW5hbmNpYWwtYW5hbHlzaXMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYi1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtdGFicyB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtdGFicyAubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXQtY2FyZCAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdGF0LWNhcmQgLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAubmF2LXRhYnMgLm5hdi1saW5rIHtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtdGFicyAubmF2LWxpbmsgaSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4ge1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIExvYWRpbmcgQW5pbWF0aW9uICovXHJcbi5zcGlubmVyLWJvcmRlciB7XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG59XHJcblxyXG4vKiBTbW9vdGggVHJhbnNpdGlvbnMgKi9cclxuKiB7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLyogQ3VzdG9tIFNjcm9sbGJhciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2MxYzFjMTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNhOGE4YTg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 7180:
/*!**********************************************************!*\
  !*** ./src/app/components/payees/my-payees.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyPayeesComponent: () => (/* binding */ MyPayeesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_beneficiary_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/beneficiary.service */ 463);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);





function MyPayeesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Loading your payees...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function MyPayeesComponent_div_12_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "div", 33)(3, "div", 34)(4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 37)(7, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 40)(14, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 42)(20, "div", 43)(21, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyPayeesComponent_div_12_div_12_div_7_Template_button_click_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const payee_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.makePayment(payee_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Pay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyPayeesComponent_div_12_div_12_div_7_Template_button_click_24_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const payee_r7 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.payBill(payee_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Bill ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const payee_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r6.getCategoryIcon(payee_r7.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r6.getCategoryClass(payee_r7.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](payee_r7.nickname || payee_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](payee_r7.bankName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r6.getTypeIcon(payee_r7.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](payee_r7.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Last used: ", ctx_r6.formatLastUsed(payee_r7.lastUsed), "");
  }
}
function MyPayeesComponent_div_12_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 26)(2, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Recent Payees ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15)(6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MyPayeesComponent_div_12_div_12_div_7_Template, 27, 9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.recentPayees);
  }
}
function MyPayeesComponent_div_12_div_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50)(1, "div", 32)(2, "div", 33)(3, "div", 34)(4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 37)(7, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 42)(12, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyPayeesComponent_div_12_div_13_div_7_Template_button_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const payee_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.makePayment(payee_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Quick Pay ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const payee_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r11.getCategoryIcon(payee_r12.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r11.getCategoryClass(payee_r12.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](payee_r12.nickname || payee_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](payee_r12.bankName);
  }
}
function MyPayeesComponent_div_12_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "div", 26)(2, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Frequently Used ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15)(6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MyPayeesComponent_div_12_div_13_div_7_Template, 15, 5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.frequentPayees);
  }
}
function MyPayeesComponent_div_12_div_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyPayeesComponent_div_12_div_14_div_6_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.addNewPayee());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Add New Payee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("No payees found matching \"", ctx_r15.searchQuery, "\"");
  }
}
function MyPayeesComponent_div_12_div_14_div_7_div_1_small_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const payee_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Last used: ", ctx_r21.formatLastUsed(payee_r20.lastUsed), "");
  }
}
function MyPayeesComponent_div_12_div_14_div_7_div_1_small_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Never used");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function MyPayeesComponent_div_12_div_14_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31)(1, "div", 32)(2, "div", 33)(3, "div", 34)(4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 37)(7, "h6", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 58)(12, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ul", 61)(15, "li")(16, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyPayeesComponent_div_12_div_14_div_7_div_1_Template_a_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);
      const payee_r20 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.makePayment(payee_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Make Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li")(20, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyPayeesComponent_div_12_div_14_div_7_div_1_Template_a_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);
      const payee_r20 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r26.payBill(payee_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Pay Bill ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li")(24, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyPayeesComponent_div_12_div_14_div_7_div_1_Template_a_click_24_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);
      const payee_r20 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r27.editPayee(payee_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 40)(28, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, MyPayeesComponent_div_12_div_14_div_7_div_1_small_31_Template, 2, 1, "small", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, MyPayeesComponent_div_12_div_14_div_7_div_1_small_32_Template, 2, 0, "small", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const payee_r20 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r19.getCategoryIcon(payee_r20.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r19.getCategoryClass(payee_r20.category));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](payee_r20.nickname || payee_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](payee_r20.bankName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](payee_r20.accountNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", payee_r20.lastUsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !payee_r20.lastUsed);
  }
}
function MyPayeesComponent_div_12_div_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MyPayeesComponent_div_12_div_14_div_7_div_1_Template, 33, 8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r16.filteredPayees);
  }
}
function MyPayeesComponent_div_12_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52)(1, "div", 26)(2, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Search Results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MyPayeesComponent_div_12_div_14_div_6_Template, 7, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MyPayeesComponent_div_12_div_14_div_7_Template, 2, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.filteredPayees.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.filteredPayees.length > 0);
  }
}
function MyPayeesComponent_div_12_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52)(1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "No Payees Yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Start by adding your first payee to make payments and transfers easier.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 72)(8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyPayeesComponent_div_12_div_15_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r28.addNewPayee());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Add New Payee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyPayeesComponent_div_12_div_15_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r30.viewAllBeneficiaries());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Browse All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
function MyPayeesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 14)(2, "div", 15)(3, "div", 16)(4, "div", 17)(5, "div", 18)(6, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyPayeesComponent_div_12_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r31.searchQuery = $event);
    })("input", function MyPayeesComponent_div_12_Template_input_input_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r33.onSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 22)(10, "small", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MyPayeesComponent_div_12_div_12_Template, 8, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MyPayeesComponent_div_12_div_13_Template, 8, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MyPayeesComponent_div_12_div_14_Template, 8, 2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MyPayeesComponent_div_12_div_15_Template, 14, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r1.filteredPayees.length, " payees found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.recentPayees.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.frequentPayees.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.searchQuery && ctx_r1.recentPayees.length === 0 && ctx_r1.frequentPayees.length === 0);
  }
}
class MyPayeesComponent {
  constructor(beneficiaryService, router) {
    this.beneficiaryService = beneficiaryService;
    this.router = router;
    this.recentPayees = [];
    this.frequentPayees = [];
    this.allBeneficiaries = [];
    this.loading = false;
    this.searchQuery = '';
    this.filteredPayees = [];
  }
  ngOnInit() {
    this.loadPayeesData();
  }
  loadPayeesData() {
    this.loading = true;
    // Load recent payees
    this.beneficiaryService.getRecentPayees(10).subscribe({
      next: recent => {
        this.recentPayees = recent;
      }
    });
    // Load all beneficiaries to show frequent ones
    this.beneficiaryService.getBeneficiaries().subscribe({
      next: beneficiaries => {
        this.allBeneficiaries = beneficiaries;
        this.frequentPayees = beneficiaries.filter(b => b.lastUsed).sort((a, b) => {
          // Sort by frequency of use (mock - could be based on usage count)
          const aLastUsed = a.lastUsed?.getTime() || 0;
          const bLastUsed = b.lastUsed?.getTime() || 0;
          return bLastUsed - aLastUsed;
        }).slice(0, 8);
        this.filteredPayees = [...this.allBeneficiaries];
        this.loading = false;
      },
      error: error => {
        console.error('Error loading payees:', error);
        this.loading = false;
      }
    });
  }
  onSearch() {
    if (this.searchQuery.trim()) {
      this.beneficiaryService.searchBeneficiaries(this.searchQuery).subscribe({
        next: results => {
          this.filteredPayees = results;
        }
      });
    } else {
      this.filteredPayees = [...this.allBeneficiaries];
    }
  }
  makePayment(payee) {
    // Navigate to transfers with selected payee
    this.router.navigate(['/transfers'], {
      queryParams: {
        beneficiaryId: payee.id,
        payeeName: payee.name,
        accountNumber: payee.accountNumber
      }
    });
  }
  payBill(payee) {
    // Navigate to bill payment with selected payee
    this.router.navigate(['/bills'], {
      queryParams: {
        payeeId: payee.id,
        payeeName: payee.name
      }
    });
  }
  addNewPayee() {
    this.router.navigate(['/payees/add']);
  }
  viewAllBeneficiaries() {
    this.router.navigate(['/beneficiaries']);
  }
  editPayee(payee) {
    this.router.navigate(['/payees/edit', payee.id]);
  }
  getCategoryIcon(category) {
    switch (category) {
      case 'PERSONAL':
        return 'fas fa-user';
      case 'BUSINESS':
        return 'fas fa-building';
      case 'UTILITY':
        return 'fas fa-bolt';
      default:
        return 'fas fa-circle';
    }
  }
  getCategoryClass(category) {
    switch (category) {
      case 'PERSONAL':
        return 'text-primary';
      case 'BUSINESS':
        return 'text-success';
      case 'UTILITY':
        return 'text-warning';
      default:
        return 'text-secondary';
    }
  }
  getTypeIcon(type) {
    switch (type) {
      case 'INTERNAL':
        return 'fas fa-home';
      case 'EXTERNAL':
        return 'fas fa-external-link-alt';
      default:
        return 'fas fa-circle';
    }
  }
  formatLastUsed(date) {
    if (!date) return 'Never used';
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
  }
  showSuccessMessage(message) {
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
  static {
    this.ɵfac = function MyPayeesComponent_Factory(t) {
      return new (t || MyPayeesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_beneficiary_service__WEBPACK_IMPORTED_MODULE_0__.BeneficiaryService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MyPayeesComponent,
      selectors: [["app-my-payees"]],
      decls: 13,
      vars: 2,
      consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-0"], [1, "fas", "fa-heart", "me-2", "text-primary"], [1, "d-flex", "gap-2"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fas", "fa-list", "me-2"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus", "me-2"], ["class", "text-center py-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], [1, "card", "mb-4"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-md-8"], [1, "input-group"], [1, "input-group-text"], [1, "fas", "fa-search"], ["type", "text", "placeholder", "Search payees by name, account, or bank...", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], [1, "col-md-4", "text-end"], [1, "text-muted"], ["class", "card mb-4", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "card-header"], [1, "mb-0"], [1, "fas", "fa-clock", "me-2"], [1, "row"], ["class", "col-lg-6 col-xl-4 mb-3", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-xl-4", "mb-3"], [1, "card", "payee-card", "h-100"], [1, "card-body", "d-flex", "flex-column"], [1, "d-flex", "align-items-center", "mb-2"], [1, "payee-icon", "me-3"], [3, "ngClass"], [1, "flex-grow-1"], [1, "card-title", "mb-0"], [1, "payee-type"], [1, "card-text"], [1, "text-success"], [1, "mt-auto"], [1, "btn-group", "w-100"], [1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "fas", "fa-paper-plane", "me-1"], [1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "fas", "fa-file-invoice", "me-1"], [1, "fas", "fa-star", "me-2"], ["class", "col-lg-6 col-xl-3 mb-3", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-xl-3", "mb-3"], [1, "btn", "btn-sm", "btn-outline-primary", "w-100", 3, "click"], [1, "card"], [1, "fas", "fa-search", "me-2"], ["class", "text-center py-4", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "text-center", "py-4"], [1, "fas", "fa-search", "fa-3x", "text-muted", "mb-3"], [1, "dropdown"], ["data-bs-toggle", "dropdown", 1, "btn", "btn-sm", "btn-link", "text-muted"], [1, "fas", "fa-ellipsis-v"], [1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], [1, "fas", "fa-paper-plane", "me-2"], [1, "fas", "fa-file-invoice", "me-2"], [1, "fas", "fa-edit", "me-2"], ["class", "text-info", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "text-info"], [1, "card-body", "text-center", "py-5"], [1, "fas", "fa-heart", "fa-4x", "text-muted", "mb-3"], [1, "text-muted", "mb-4"], [1, "d-flex", "gap-2", "justify-content-center"]],
      template: function MyPayeesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " My Payees ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyPayeesComponent_Template_button_click_5_listener() {
            return ctx.viewAllBeneficiaries();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " View All ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyPayeesComponent_Template_button_click_8_listener() {
            return ctx.addNewPayee();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Add New Payee ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MyPayeesComponent_div_11_Template, 6, 0, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MyPayeesComponent_div_12_Template, 16, 6, "div", 9);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
      styles: ["\n\n.payee-card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 12px;\n  transition: all 0.2s ease;\n}\n\n.payee-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n}\n\n.payee-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: rgba(var(--primary-color-rgb), 0.1);\n}\n\n.payee-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n\n.payee-type[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n\n\n.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary-color) !important;\n}\n\n.text-success[_ngcontent-%COMP%] {\n  color: var(--success-color) !important;\n}\n\n.text-warning[_ngcontent-%COMP%] {\n  color: var(--warning-color) !important;\n}\n\n.text-secondary[_ngcontent-%COMP%] {\n  color: var(--secondary-color) !important;\n}\n\n\n\n.input-group-text[_ngcontent-%COMP%] {\n  background-color: var(--light-color);\n  border-color: var(--border-color);\n}\n\n.form-control[_ngcontent-%COMP%] {\n  border-color: var(--border-color);\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--secondary-color);\n  box-shadow: 0 0 0 0.2rem rgba(59, 130, 246, 0.25);\n}\n\n\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 6px;\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right: none;\n}\n\n.btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: var(--light-color);\n  border-bottom: 1px solid var(--border-color);\n  border-radius: 12px 12px 0 0 !important;\n  font-weight: 600;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px var(--shadow-color);\n  border-radius: 12px;\n}\n\n\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  border-radius: 8px;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  transition: background-color 0.2s ease;\n}\n\n.dropdown-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--light-color);\n}\n\n\n\n.text-center[_ngcontent-%COMP%]   i.fa-4x[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n\n\n@media (max-width: 768px) {\n  .payee-card[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  \n  .d-flex.gap-2[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 0.5rem !important;\n  }\n  \n  .btn-group[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  \n  .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    border-radius: 6px !important;\n    border: 1px solid var(--border-color) !important;\n    margin-bottom: 0.25rem;\n  }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYXllZXMvbXktcGF5ZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsWUFBWTtFQUNaLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLG9DQUFvQztFQUNwQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsaURBQWlEO0FBQ25EOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDRCQUE0QjtBQUM5Qjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxvQ0FBb0M7RUFDcEMsNENBQTRDO0VBQzVDLHVDQUF1QztFQUN2QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLG1CQUFtQjtBQUNyQjs7QUFFQSxhQUFhO0FBQ2I7RUFDRSxZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0UsWUFBWTtBQUNkOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixnREFBZ0Q7SUFDaEQsc0JBQXNCO0VBQ3hCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQYXllZSBDYXJkcyAqL1xyXG4ucGF5ZWUtY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ucGF5ZWUtY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG5cclxuLnBheWVlLWljb24ge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tcHJpbWFyeS1jb2xvci1yZ2IpLCAwLjEpO1xyXG59XHJcblxyXG4ucGF5ZWUtaWNvbiBpIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLnBheWVlLXR5cGUge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIENhdGVnb3J5IENvbG9ycyAqL1xyXG4udGV4dC1wcmltYXJ5IHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtc3VjY2VzcyB7XHJcbiAgY29sb3I6IHZhcigtLXN1Y2Nlc3MtY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXdhcm5pbmcge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuaW5nLWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC1zZWNvbmRhcnkge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIFNlYXJjaCBTZWN0aW9uICovXHJcbi5pbnB1dC1ncm91cC10ZXh0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg1OSwgMTMwLCAyNDYsIDAuMjUpO1xyXG59XHJcblxyXG4vKiBCdXR0b24gR3JvdXBzICovXHJcbi5idG4tZ3JvdXAgLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uYnRuLWdyb3VwIC5idG46Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1ncm91cCAuYnRuOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG5cclxuLyogQ2FyZHMgKi9cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHZhcigtLXNoYWRvdy1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLyogRHJvcGRvd24gKi9cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtY29sb3IpO1xyXG59XHJcblxyXG4vKiBFbXB0eSBTdGF0ZSAqL1xyXG4udGV4dC1jZW50ZXIgaS5mYS00eCB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucGF5ZWUtY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuZC1mbGV4LmdhcC0yIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuYnRuLWdyb3VwIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tZ3JvdXAgLmJ0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgfVxyXG59ICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 1245:
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function ProfileComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Loading your profile...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ProfileComponent_div_5_h5_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r2.user.firstName, " ", ctx_r2.user.lastName, "");
  }
}
function ProfileComponent_div_5_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.user.email);
  }
}
function ProfileComponent_div_5_div_16_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.getFieldError(ctx_r6.profileForm, "firstName"), " ");
  }
}
function ProfileComponent_div_5_div_16_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.getFieldError(ctx_r7.profileForm, "lastName"), " ");
  }
}
function ProfileComponent_div_5_div_16_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r8.getFieldError(ctx_r8.profileForm, "email"), " ");
  }
}
function ProfileComponent_div_5_div_16_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.getFieldError(ctx_r9.profileForm, "phoneNumber"), " ");
  }
}
function ProfileComponent_div_5_div_16_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r10.getFieldError(ctx_r10.profileForm, "zipCode"), " ");
  }
}
function ProfileComponent_div_5_div_16_span_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 58);
  }
}
function ProfileComponent_div_5_div_16_i_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 59);
  }
}
function ProfileComponent_div_5_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div", 25)(2, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Profile Information ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 27)(6, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_5_div_16_Template_form_ngSubmit_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.onProfileSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9)(8, "div", 29)(9, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "First Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProfileComponent_div_5_div_16_div_12_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 29)(14, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Last Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProfileComponent_div_5_div_16_div_17_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9)(19, "div", 29)(20, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Email Address *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProfileComponent_div_5_div_16_div_23_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 29)(25, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Phone Number *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ProfileComponent_div_5_div_16_div_28_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 39)(30, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 9)(34, "div", 42)(35, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 42)(39, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 42)(43, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "ZIP Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, ProfileComponent_div_5_div_16_div_46_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 9)(48, "div", 29)(49, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Date of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 29)(53, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Occupation");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 53)(57, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, ProfileComponent_div_5_div_16_span_58_Template, 1, 0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, ProfileComponent_div_5_div_16_i_59_Template, 1, 0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r4.profileForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r4.isFieldInvalid(ctx_r4.profileForm, "firstName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isFieldInvalid(ctx_r4.profileForm, "firstName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r4.isFieldInvalid(ctx_r4.profileForm, "lastName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isFieldInvalid(ctx_r4.profileForm, "lastName"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r4.isFieldInvalid(ctx_r4.profileForm, "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isFieldInvalid(ctx_r4.profileForm, "email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r4.isFieldInvalid(ctx_r4.profileForm, "phoneNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isFieldInvalid(ctx_r4.profileForm, "phoneNumber"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r4.isFieldInvalid(ctx_r4.profileForm, "zipCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isFieldInvalid(ctx_r4.profileForm, "zipCode"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r4.updating || ctx_r4.profileForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.updating ? "Updating..." : "Update Profile", " ");
  }
}
function ProfileComponent_div_5_div_17_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r15.getFieldError(ctx_r15.passwordForm, "currentPassword"), " ");
  }
}
function ProfileComponent_div_5_div_17_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r16.getFieldError(ctx_r16.passwordForm, "newPassword"), " ");
  }
}
function ProfileComponent_div_5_div_17_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r17.getFieldError(ctx_r17.passwordForm, "confirmPassword"), " ");
  }
}
function ProfileComponent_div_5_div_17_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 58);
  }
}
function ProfileComponent_div_5_div_17_i_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 71);
  }
}
function ProfileComponent_div_5_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div", 25)(2, "h5", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 27)(6, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ProfileComponent_div_5_div_17_Template_form_ngSubmit_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.onPasswordSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 39)(8, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Current Password *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ProfileComponent_div_5_div_17_div_11_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 39)(13, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "New Password *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProfileComponent_div_5_div_17_div_16_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Password must be at least 8 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 39)(20, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Confirm New Password *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ProfileComponent_div_5_div_17_div_23_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Password Requirements:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ul", 69)(29, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "At least 8 characters long");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Include both uppercase and lowercase letters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Include at least one number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Include at least one special character");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 53)(38, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, ProfileComponent_div_5_div_17_span_39_Template, 1, 0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, ProfileComponent_div_5_div_17_i_40_Template, 1, 0, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r5.passwordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r5.isFieldInvalid(ctx_r5.passwordForm, "currentPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.isFieldInvalid(ctx_r5.passwordForm, "currentPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r5.isFieldInvalid(ctx_r5.passwordForm, "newPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.isFieldInvalid(ctx_r5.passwordForm, "newPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-invalid", ctx_r5.isFieldInvalid(ctx_r5.passwordForm, "confirmPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.isFieldInvalid(ctx_r5.passwordForm, "confirmPassword"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r5.updating || ctx_r5.passwordForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r5.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.updating ? "Changing..." : "Change Password", " ");
  }
}
function ProfileComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProfileComponent_div_5_h5_6_Template, 2, 2, "h5", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProfileComponent_div_5_p_7_Template, 2, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17)(9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_5_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r22.setActiveTab("profile"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Profile Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_div_5_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r24.setActiveTab("password"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Change Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ProfileComponent_div_5_div_16_Template, 61, 20, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ProfileComponent_div_5_div_17_Template, 42, 14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn-primary", ctx_r1.activeTab === "profile")("btn-outline-primary", ctx_r1.activeTab !== "profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btn-primary", ctx_r1.activeTab === "password")("btn-outline-primary", ctx_r1.activeTab !== "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "password");
  }
}
class ProfileComponent {
  constructor(fb, authService) {
    this.fb = fb;
    this.authService = authService;
    this.user = null;
    this.loading = false;
    this.updating = false;
    this.activeTab = 'profile';
    this.profileForm = this.fb.group({
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^\+?[1-9]\d{1,14}$/)]],
      address: [''],
      city: [''],
      state: [''],
      zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^\d{5}(-\d{4})?$/)]],
      dateOfBirth: [''],
      occupation: ['']
    });
    this.passwordForm = this.fb.group({
      currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(8)]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  ngOnInit() {
    this.loadUserProfile();
  }
  loadUserProfile() {
    this.loading = true;
    this.user = this.authService.getCurrentUser();
    if (this.user) {
      this.profileForm.patchValue({
        firstName: this.user.firstName || '',
        lastName: this.user.lastName || '',
        email: this.user.email || '',
        phoneNumber: this.user.phoneNumber || '',
        address: this.user.address || '',
        city: this.user.city || '',
        state: this.user.state || '',
        zipCode: this.user.zipCode || '',
        dateOfBirth: this.user.dateOfBirth ? new Date(this.user.dateOfBirth).toISOString().split('T')[0] : '',
        occupation: this.user.occupation || ''
      });
    }
    this.loading = false;
  }
  onProfileSubmit() {
    if (this.profileForm.valid) {
      this.updating = true;
      const formData = this.profileForm.value;
      // Update user profile through AuthService
      this.authService.updateUserProfile(formData).subscribe({
        next: updatedUser => {
          console.log('Profile updated:', updatedUser);
          this.user = updatedUser; // Update local user reference
          this.showSuccessMessage('Profile updated successfully!');
          this.updating = false;
        },
        error: error => {
          console.error('Profile update failed:', error);
          this.showErrorMessage('Failed to update profile. Please try again.');
          this.updating = false;
        }
      });
    } else {
      this.markFormGroupTouched(this.profileForm);
    }
  }
  onPasswordSubmit() {
    if (this.passwordForm.valid) {
      this.updating = true;
      const formData = this.passwordForm.value;
      // Simulate API call
      setTimeout(() => {
        console.log('Password changed');
        this.showSuccessMessage('Password changed successfully!');
        this.passwordForm.reset();
        this.updating = false;
      }, 1000);
    } else {
      this.markFormGroupTouched(this.passwordForm);
    }
  }
  passwordMatchValidator(form) {
    const newPassword = form.get('newPassword');
    const confirmPassword = form.get('confirmPassword');
    if (newPassword && confirmPassword && newPassword.value !== confirmPassword.value) {
      confirmPassword.setErrors({
        passwordMismatch: true
      });
      return {
        passwordMismatch: true
      };
    }
    return null;
  }
  markFormGroupTouched(formGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }
  showSuccessMessage(message) {
    // Create success notification
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
  showErrorMessage(message) {
    // Create error notification
    const notification = document.createElement('div');
    notification.className = 'alert alert-danger position-fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.zIndex = '9999';
    notification.innerHTML = `<i class="fas fa-exclamation-circle me-2"></i>${message}`;
    document.body.appendChild(notification);
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 4000);
  }
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  isFieldInvalid(form, fieldName) {
    const field = form.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
  getFieldError(form, fieldName) {
    const field = form.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['minlength']) return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`;
      if (field.errors['pattern']) return `Please enter a valid ${fieldName}`;
      if (field.errors['passwordMismatch']) return 'Passwords do not match';
    }
    return '';
  }
  static {
    this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 6,
      vars: 2,
      consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-0"], [1, "fas", "fa-user-circle", "me-2", "text-primary"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], [1, "row"], [1, "col-lg-3", "mb-4"], [1, "card"], [1, "card-body", "text-center"], [1, "profile-avatar", "mb-3"], [1, "fas", "fa-user-circle", "fa-5x", "text-primary"], ["class", "card-title", 4, "ngIf"], ["class", "text-muted", 4, "ngIf"], [1, "d-grid", "gap-2"], [1, "btn", 3, "click"], [1, "fas", "fa-user", "me-2"], [1, "fas", "fa-lock", "me-2"], [1, "col-lg-9"], ["class", "card", 4, "ngIf"], [1, "card-title"], [1, "text-muted"], [1, "card-header"], [1, "mb-0"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "col-md-6", "mb-3"], ["for", "firstName", 1, "form-label"], ["type", "text", "id", "firstName", "formControlName", "firstName", 1, "form-control"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "lastName", 1, "form-label"], ["type", "text", "id", "lastName", "formControlName", "lastName", 1, "form-control"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "phoneNumber", 1, "form-label"], ["type", "tel", "id", "phoneNumber", "formControlName", "phoneNumber", "placeholder", "+1-555-0123", 1, "form-control"], [1, "mb-3"], ["for", "address", 1, "form-label"], ["type", "text", "id", "address", "formControlName", "address", "placeholder", "Street address", 1, "form-control"], [1, "col-md-4", "mb-3"], ["for", "city", 1, "form-label"], ["type", "text", "id", "city", "formControlName", "city", 1, "form-control"], ["for", "state", 1, "form-label"], ["type", "text", "id", "state", "formControlName", "state", 1, "form-control"], ["for", "zipCode", 1, "form-label"], ["type", "text", "id", "zipCode", "formControlName", "zipCode", "placeholder", "12345", 1, "form-control"], ["for", "dateOfBirth", 1, "form-label"], ["type", "date", "id", "dateOfBirth", "formControlName", "dateOfBirth", 1, "form-control"], ["for", "occupation", 1, "form-label"], ["type", "text", "id", "occupation", "formControlName", "occupation", 1, "form-control"], [1, "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-save me-2", 4, "ngIf"], [1, "invalid-feedback"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-save", "me-2"], ["for", "currentPassword", 1, "form-label"], ["type", "password", "id", "currentPassword", "formControlName", "currentPassword", 1, "form-control"], ["for", "newPassword", 1, "form-label"], ["type", "password", "id", "newPassword", "formControlName", "newPassword", 1, "form-control"], [1, "form-text"], ["for", "confirmPassword", 1, "form-label"], ["type", "password", "id", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control"], [1, "alert", "alert-info"], [1, "fas", "fa-info-circle", "me-2"], [1, "mb-0", "mt-2"], ["class", "fas fa-key me-2", 4, "ngIf"], [1, "fas", "fa-key", "me-2"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " My Profile ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProfileComponent_div_4_Template, 6, 0, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProfileComponent_div_5_Template, 18, 12, "div", 4);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
      styles: ["\n\n.profile-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.profile-avatar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n  transition: color 0.3s ease;\n}\n\n.profile-avatar[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n}\n\n\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px var(--shadow-color);\n  border-radius: 12px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: var(--light-color);\n  border-bottom: 1px solid var(--border-color);\n  border-radius: 12px 12px 0 0 !important;\n  font-weight: 600;\n}\n\n\n\n.form-control[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 12px 16px;\n  transition: all 0.2s ease;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--secondary-color);\n  box-shadow: 0 0 0 0.2rem rgba(59, 130, 246, 0.25);\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--dark-color);\n  margin-bottom: 0.5rem;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n\n\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: var(--danger-color);\n}\n\n.invalid-feedback[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  color: var(--danger-color);\n}\n\n\n\n.alert-success[_ngcontent-%COMP%] {\n  background-color: rgba(16, 185, 129, 0.1);\n  border-color: rgba(16, 185, 129, 0.2);\n  color: var(--success-color);\n  border-radius: 8px;\n}\n\n\n\n.alert-info[_ngcontent-%COMP%] {\n  background-color: rgba(6, 182, 212, 0.1);\n  border-color: rgba(6, 182, 212, 0.2);\n  color: var(--info-color);\n  border-radius: 8px;\n}\n\n\n\n@media (max-width: 768px) {\n  .profile-avatar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 3rem !important;\n  }\n  \n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  \n  .d-grid[_ngcontent-%COMP%] {\n    gap: 0.5rem !important;\n  }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLFlBQVk7RUFDWix5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRDQUE0QztFQUM1Qyx1Q0FBdUM7RUFDdkMsZ0JBQWdCO0FBQ2xCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2Qjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDBCQUEwQjtBQUM1Qjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSx5Q0FBeUM7RUFDekMscUNBQXFDO0VBQ3JDLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUEsZUFBZTtBQUNmO0VBQ0Usd0NBQXdDO0VBQ3hDLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBQcm9maWxlIEF2YXRhciAqL1xyXG4ucHJvZmlsZS1hdmF0YXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS1hdmF0YXIgaSB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLnByb2ZpbGUtYXZhdGFyOmhvdmVyIGkge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG59XHJcblxyXG4vKiBQcm9maWxlIENhcmRzICovXHJcbi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHZhcigtLXNoYWRvdy1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIEZvcm0gU3R5bGluZyAqL1xyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDU5LCAxMzAsIDI0NiwgMC4yNSk7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi8qIFRhYiBOYXZpZ2F0aW9uICovXHJcbi5idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuLyogSW52YWxpZCBGaWVsZHMgKi9cclxuLmlzLWludmFsaWQge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFuZ2VyLWNvbG9yKTtcclxufVxyXG5cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgY29sb3I6IHZhcigtLWRhbmdlci1jb2xvcik7XHJcbn1cclxuXHJcbi8qIFN1Y2Nlc3MgTWVzc2FnZXMgKi9cclxuLmFsZXJ0LXN1Y2Nlc3Mge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNiwgMTg1LCAxMjksIDAuMik7XHJcbiAgY29sb3I6IHZhcigtLXN1Y2Nlc3MtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLyogSW5mbyBBbGVydCAqL1xyXG4uYWxlcnQtaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2LCAxODIsIDIxMiwgMC4xKTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoNiwgMTgyLCAyMTIsIDAuMik7XHJcbiAgY29sb3I6IHZhcigtLWluZm8tY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnByb2ZpbGUtYXZhdGFyIGkge1xyXG4gICAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmQtZ3JpZCB7XHJcbiAgICBnYXA6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 2205:
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsComponent: () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function SettingsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Loading your settings...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function SettingsComponent_div_8_div_17_span_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 58);
  }
}
function SettingsComponent_div_8_div_17_i_77_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
  }
}
function SettingsComponent_div_8_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "div", 23)(2, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Notification Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14)(6, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_div_8_div_17_Template_form_ngSubmit_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onNotificationSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11)(8, "div", 26)(9, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Communication Preferences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Email Notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Receive notifications via email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " SMS Notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Receive notifications via text message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Push Notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Receive push notifications on your device");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26)(33, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Alert Types");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Transaction Alerts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Get notified of all transactions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Security Alerts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Important security notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Bill Reminders ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Reminders for upcoming bills");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Low Balance Alerts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Alert when account balance is low");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 11)(64, "div", 50)(65, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Marketing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Marketing Emails ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Receive promotional emails and offers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 54)(75, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, SettingsComponent_div_8_div_17_span_76_Template, 1, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, SettingsComponent_div_8_div_17_i_77_Template, 1, 0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.notificationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.updating ? "Updating..." : "Save Notification Settings", " ");
  }
}
function SettingsComponent_div_8_div_18_span_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 58);
  }
}
function SettingsComponent_div_8_div_18_i_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
  }
}
function SettingsComponent_div_8_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "div", 23)(2, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Security Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14)(6, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_div_8_div_18_Template_form_ngSubmit_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.onSecuritySubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11)(8, "div", 26)(9, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Authentication");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Two-Factor Authentication ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Add an extra layer of security to your account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Biometric Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Use fingerprint or face recognition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 65)(26, "label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Session Timeout (minutes) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 68)(30, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "15 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "30 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "1 hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "2 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "4 hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Automatically log out after inactivity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26)(43, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Monitoring");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Login Alerts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Get notified of new login attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Device Tracking ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Track and manage trusted devices");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Security Tip:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Enable two-factor authentication and regular security alerts to keep your account secure. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 54)(65, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, SettingsComponent_div_8_div_18_span_66_Template, 1, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, SettingsComponent_div_8_div_18_i_67_Template, 1, 0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.securityForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.updating ? "Updating..." : "Save Security Settings", " ");
  }
}
function SettingsComponent_div_8_div_19_span_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 58);
  }
}
function SettingsComponent_div_8_div_19_i_100_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 59);
  }
}
function SettingsComponent_div_8_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "div", 23)(2, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " User Preferences ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14)(6, "form", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_div_8_div_19_Template_form_ngSubmit_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.onPreferencesSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11)(8, "div", 26)(9, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Localization");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 65)(12, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Language ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 84)(16, "option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Espa\u00F1ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Fran\u00E7ais");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Deutsch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 65)(25, "label", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Currency ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 91)(29, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "USD - US Dollar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "EUR - Euro");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "GBP - British Pound");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "CAD - Canadian Dollar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 65)(38, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Date Format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 98)(42, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "MM/DD/YYYY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "DD/MM/YYYY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "YYYY-MM-DD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 65)(49, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Time Format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "select", 103)(53, "option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "12-hour (AM/PM)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "24-hour");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26)(58, "h6", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Display");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 65)(61, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Theme ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "select", 108)(65, "option", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Light");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Auto (System)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 65)(72, "label", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Transactions per Page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "select", 114)(76, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "25");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "50");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 65)(85, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Default Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "select", 121)(89, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "No preference");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Savings Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Checking Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Default account for transfers and payments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 54)(98, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, SettingsComponent_div_8_div_19_span_99_Template, 1, 0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, SettingsComponent_div_8_div_19_i_100_Template, 1, 0, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.preferencesForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.updating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.updating ? "Updating..." : "Save Preferences", " ");
  }
}
function SettingsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Settings Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16)(7, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_8_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.setActiveTab("notifications"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_8_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.setActiveTab("security"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Security ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_div_8_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r20.setActiveTab("preferences"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Preferences ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SettingsComponent_div_8_div_17_Template, 79, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SettingsComponent_div_8_div_18_Template, 69, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SettingsComponent_div_8_div_19_Template, 102, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-primary", ctx_r1.activeTab === "notifications")("btn-outline-primary", ctx_r1.activeTab !== "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-primary", ctx_r1.activeTab === "security")("btn-outline-primary", ctx_r1.activeTab !== "security");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("btn-primary", ctx_r1.activeTab === "preferences")("btn-outline-primary", ctx_r1.activeTab !== "preferences");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "security");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.activeTab === "preferences");
  }
}
class SettingsComponent {
  constructor(fb) {
    this.fb = fb;
    this.activeTab = 'notifications';
    this.loading = false;
    this.updating = false;
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
  ngOnInit() {
    this.loadSettings();
  }
  loadSettings() {
    this.loading = true;
    // Simulate loading settings from API
    setTimeout(() => {
      // Load saved settings or use defaults
      this.loading = false;
    }, 500);
  }
  onNotificationSubmit() {
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
  onSecuritySubmit() {
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
  onPreferencesSubmit() {
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
  setActiveTab(tab) {
    this.activeTab = tab;
  }
  resetToDefaults() {
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
  showSuccessMessage(message) {
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
  static {
    this.ɵfac = function SettingsComponent_Factory(t) {
      return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SettingsComponent,
      selectors: [["app-settings"]],
      decls: 9,
      vars: 2,
      consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-0"], [1, "fas", "fa-cog", "me-2", "text-primary"], [1, "btn", "btn-outline-danger", 3, "click"], [1, "fas", "fa-undo", "me-2"], ["class", "text-center py-5", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "visually-hidden"], [1, "mt-3", "text-muted"], [1, "row"], [1, "col-lg-3", "mb-4"], [1, "card"], [1, "card-body"], [1, "card-title"], [1, "d-grid", "gap-2"], [1, "btn", 3, "click"], [1, "fas", "fa-bell", "me-2"], [1, "fas", "fa-shield-alt", "me-2"], [1, "fas", "fa-sliders-h", "me-2"], [1, "col-lg-9"], ["class", "card", 4, "ngIf"], [1, "card-header"], [1, "mb-0"], [3, "formGroup", "ngSubmit"], [1, "col-md-6", "mb-4"], [1, "text-primary"], [1, "form-check", "form-switch", "mb-3"], ["type", "checkbox", "id", "emailNotifications", "formControlName", "emailNotifications", 1, "form-check-input"], ["for", "emailNotifications", 1, "form-check-label"], [1, "fas", "fa-envelope", "me-2"], [1, "form-text"], ["type", "checkbox", "id", "smsNotifications", "formControlName", "smsNotifications", 1, "form-check-input"], ["for", "smsNotifications", 1, "form-check-label"], [1, "fas", "fa-sms", "me-2"], ["type", "checkbox", "id", "pushNotifications", "formControlName", "pushNotifications", 1, "form-check-input"], ["for", "pushNotifications", 1, "form-check-label"], [1, "fas", "fa-mobile-alt", "me-2"], ["type", "checkbox", "id", "transactionAlerts", "formControlName", "transactionAlerts", 1, "form-check-input"], ["for", "transactionAlerts", 1, "form-check-label"], [1, "fas", "fa-exchange-alt", "me-2"], ["type", "checkbox", "id", "securityAlerts", "formControlName", "securityAlerts", 1, "form-check-input"], ["for", "securityAlerts", 1, "form-check-label"], ["type", "checkbox", "id", "billReminders", "formControlName", "billReminders", 1, "form-check-input"], ["for", "billReminders", 1, "form-check-label"], [1, "fas", "fa-file-invoice", "me-2"], ["type", "checkbox", "id", "lowBalanceAlerts", "formControlName", "lowBalanceAlerts", 1, "form-check-input"], ["for", "lowBalanceAlerts", 1, "form-check-label"], [1, "fas", "fa-exclamation-triangle", "me-2"], [1, "col-12"], ["type", "checkbox", "id", "marketingEmails", "formControlName", "marketingEmails", 1, "form-check-input"], ["for", "marketingEmails", 1, "form-check-label"], [1, "fas", "fa-bullhorn", "me-2"], [1, "d-flex", "justify-content-end"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-save me-2", 4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "fas", "fa-save", "me-2"], ["type", "checkbox", "id", "twoFactorAuth", "formControlName", "twoFactorAuth", 1, "form-check-input"], ["for", "twoFactorAuth", 1, "form-check-label"], ["type", "checkbox", "id", "biometricLogin", "formControlName", "biometricLogin", 1, "form-check-input"], ["for", "biometricLogin", 1, "form-check-label"], [1, "fas", "fa-fingerprint", "me-2"], [1, "mb-3"], ["for", "sessionTimeout", 1, "form-label"], [1, "fas", "fa-clock", "me-2"], ["id", "sessionTimeout", "formControlName", "sessionTimeout", 1, "form-control"], ["value", "15"], ["value", "30"], ["value", "60"], ["value", "120"], ["value", "240"], ["type", "checkbox", "id", "loginAlerts", "formControlName", "loginAlerts", 1, "form-check-input"], ["for", "loginAlerts", 1, "form-check-label"], [1, "fas", "fa-sign-in-alt", "me-2"], ["type", "checkbox", "id", "deviceTracking", "formControlName", "deviceTracking", 1, "form-check-input"], ["for", "deviceTracking", 1, "form-check-label"], [1, "fas", "fa-laptop", "me-2"], [1, "alert", "alert-info"], [1, "fas", "fa-info-circle", "me-2"], ["for", "language", 1, "form-label"], [1, "fas", "fa-language", "me-2"], ["id", "language", "formControlName", "language", 1, "form-control"], ["value", "en"], ["value", "es"], ["value", "fr"], ["value", "de"], ["for", "currency", 1, "form-label"], [1, "fas", "fa-dollar-sign", "me-2"], ["id", "currency", "formControlName", "currency", 1, "form-control"], ["value", "USD"], ["value", "EUR"], ["value", "GBP"], ["value", "CAD"], ["for", "dateFormat", 1, "form-label"], [1, "fas", "fa-calendar", "me-2"], ["id", "dateFormat", "formControlName", "dateFormat", 1, "form-control"], ["value", "MM/DD/YYYY"], ["value", "DD/MM/YYYY"], ["value", "YYYY-MM-DD"], ["for", "timeFormat", 1, "form-label"], ["id", "timeFormat", "formControlName", "timeFormat", 1, "form-control"], ["value", "12"], ["value", "24"], ["for", "theme", 1, "form-label"], [1, "fas", "fa-palette", "me-2"], ["id", "theme", "formControlName", "theme", 1, "form-control"], ["value", "light"], ["value", "dark"], ["value", "auto"], ["for", "transactionsPerPage", 1, "form-label"], [1, "fas", "fa-list", "me-2"], ["id", "transactionsPerPage", "formControlName", "transactionsPerPage", 1, "form-control"], ["value", "5"], ["value", "10"], ["value", "25"], ["value", "50"], ["for", "defaultAccount", 1, "form-label"], [1, "fas", "fa-wallet", "me-2"], ["id", "defaultAccount", "formControlName", "defaultAccount", 1, "form-control"], ["value", ""], ["value", "savings"], ["value", "checking"]],
      template: function SettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Settings ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_4_listener() {
            return ctx.resetToDefaults();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Reset to Defaults ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SettingsComponent_div_7_Template, 6, 0, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SettingsComponent_div_8_Template, 20, 15, "div", 6);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
      styles: ["\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: 0 2px 8px var(--shadow-color);\n  border-radius: 12px;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: var(--light-color);\n  border-bottom: 1px solid var(--border-color);\n  border-radius: 12px 12px 0 0 !important;\n  font-weight: 600;\n}\n\n\n\n.form-control[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  padding: 12px 16px;\n  transition: all 0.2s ease;\n}\n\n.form-control[_ngcontent-%COMP%]:focus {\n  border-color: var(--secondary-color);\n  box-shadow: 0 0 0 0.2rem rgba(59, 130, 246, 0.25);\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--dark-color);\n  margin-bottom: 0.5rem;\n}\n\n\n\n.form-check-input[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 1.5rem;\n  border-radius: 1rem;\n  background-color: var(--border-color);\n  border: none;\n  transition: all 0.2s ease;\n}\n\n.form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: var(--primary-color);\n  border-color: var(--primary-color);\n}\n\n.form-check-input[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.25rem rgba(59, 130, 246, 0.25);\n}\n\n.form-check-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--dark-color);\n  margin-left: 0.5rem;\n}\n\n.form-text[_ngcontent-%COMP%] {\n  color: var(--secondary-color);\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n\n\n\n.btn[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  font-weight: 500;\n  transition: all 0.2s ease;\n  text-align: left;\n  justify-content: flex-start;\n}\n\n.btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n\n\nh6.text-primary[_ngcontent-%COMP%] {\n  color: var(--primary-color) !important;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 2px solid var(--light-color);\n}\n\n\n\n.alert-info[_ngcontent-%COMP%] {\n  background-color: rgba(6, 182, 212, 0.1);\n  border-color: rgba(6, 182, 212, 0.2);\n  color: var(--info-color);\n  border-radius: 8px;\n  border-left: 4px solid var(--info-color);\n}\n\n\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));\n  border: none;\n  font-weight: 500;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));\n  transform: translateY(-1px);\n}\n\n.btn-outline-danger[_ngcontent-%COMP%] {\n  border-color: var(--danger-color);\n  color: var(--danger-color);\n}\n\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background-color: var(--danger-color);\n  border-color: var(--danger-color);\n  transform: translateY(-1px);\n}\n\n\n\n.spinner-border-sm[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n\n\n\n@media (max-width: 768px) {\n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  \n  .d-grid[_ngcontent-%COMP%] {\n    gap: 0.5rem !important;\n  }\n  \n  .row[_ngcontent-%COMP%]   .col-md-6[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n  \n  .form-check-input[_ngcontent-%COMP%] {\n    width: 2.5rem;\n    height: 1.25rem;\n  }\n  \n  .d-flex.justify-content-end[_ngcontent-%COMP%] {\n    justify-content: center !important;\n  }\n  \n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFtQjtBQUNuQjtFQUNFLFlBQVk7RUFDWix5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLDRDQUE0QztFQUM1Qyx1Q0FBdUM7RUFDdkMsZ0JBQWdCO0FBQ2xCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2Qjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQ0FBcUM7RUFDckMsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0Usc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDJDQUEyQztBQUM3Qzs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSx3Q0FBd0M7RUFDeEMsb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsd0NBQXdDO0FBQzFDOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGlGQUFpRjtFQUNqRixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUZBQWlGO0VBQ2pGLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsaUNBQWlDO0VBQ2pDLDJCQUEyQjtBQUM3Qjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldHRpbmdzIENhcmRzICovXHJcbi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHZhcigtLXNoYWRvdy1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1jb2xvcik7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweCAxMnB4IDAgMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi8qIEZvcm0gU3R5bGluZyAqL1xyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDU5LCAxMzAsIDI0NiwgMC4yNSk7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi8qIFN3aXRjaCBTdHlsaW5nICovXHJcbi5mb3JtLWNoZWNrLWlucHV0IHtcclxuICB3aWR0aDogM3JlbTtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrLWlucHV0OmZvY3VzIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjI1cmVtIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjI1KTtcclxufVxyXG5cclxuLmZvcm0tY2hlY2stbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6IHZhcigtLWRhcmstY29sb3IpO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLXRleHQge1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxufVxyXG5cclxuLyogVGFiIE5hdmlnYXRpb24gKi9cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4uYnRuIGkge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4vKiBTZWN0aW9uIEhlYWRlcnMgKi9cclxuaDYudGV4dC1wcmltYXJ5IHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcikgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbGlnaHQtY29sb3IpO1xyXG59XHJcblxyXG4vKiBBbGVydCBTdHlsaW5nICovXHJcbi5hbGVydC1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYsIDE4MiwgMjEyLCAwLjEpO1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSg2LCAxODIsIDIxMiwgMC4yKTtcclxuICBjb2xvcjogdmFyKC0taW5mby1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0taW5mby1jb2xvcik7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbiBTdHlsaW5nICovXHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHJpbWFyeS1jb2xvciksIHZhcigtLXNlY29uZGFyeS1jb2xvcikpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXNlY29uZGFyeS1jb2xvciksIHZhcigtLXByaW1hcnktY29sb3IpKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1kYW5nZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFuZ2VyLWNvbG9yKTtcclxuICBjb2xvcjogdmFyKC0tZGFuZ2VyLWNvbG9yKTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWRhbmdlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyLWNvbG9yKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWRhbmdlci1jb2xvcik7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4vKiBMb2FkaW5nIFNwaW5uZXIgKi9cclxuLnNwaW5uZXItYm9yZGVyLXNtIHtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmQtZ3JpZCB7XHJcbiAgICBnYXA6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAucm93IC5jb2wtbWQtNiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1jaGVjay1pbnB1dCB7XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICAuZC1mbGV4Lmp1c3RpZnktY29udGVudC1lbmQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 5513:
/*!*************************************************************!*\
  !*** ./src/app/components/transfers/transfers.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransfersComponent: () => (/* binding */ TransfersComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);





function TransfersComponent_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const account_r11 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", account_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", account_r11.accountType, " - ", account_r11.accountNumber, " (", ctx_r0.formatCurrency(account_r11.balance), ") ");
  }
}
function TransfersComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select a source account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TransfersComponent_optgroup_42_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const account_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", account_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", account_r13.accountType, " - ", account_r13.accountNumber, " ");
  }
}
function TransfersComponent_optgroup_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "optgroup", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransfersComponent_optgroup_42_option_1_Template, 2, 3, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.accounts);
  }
}
function TransfersComponent_optgroup_43_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const beneficiary_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", beneficiary_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", beneficiary_r15.name, " - ", beneficiary_r15.accountNumber, " ");
  }
}
function TransfersComponent_optgroup_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "optgroup", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransfersComponent_optgroup_43_option_1_Template, 2, 3, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.beneficiaries);
  }
}
function TransfersComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please select a destination account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TransfersComponent_div_49_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TransfersComponent_div_49_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Amount must be greater than 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TransfersComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TransfersComponent_div_49_div_1_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TransfersComponent_div_49_div_2_Template, 2, 0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f["amount"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f["amount"].errors["min"]);
  }
}
function TransfersComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function TransfersComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 52);
  }
}
function TransfersComponent_i_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
  }
}
function TransfersComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "No recent transfers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function TransfersComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55)(1, "div", 56)(2, "div", 57)(3, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 60)(11, "h6", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const transfer_r18 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](transfer_r18.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("To: ", transfer_r18.recipientName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 7, transfer_r18.date, "short"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("-", ctx_r10.formatCurrency(transfer_r18.amount), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r10.getStatusBadgeClass(transfer_r18.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transfer_r18.status, " ");
  }
}
class TransfersComponent {
  constructor(formBuilder, route, router) {
    this.formBuilder = formBuilder;
    this.route = route;
    this.router = router;
    this.transferForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
    this.accounts = [];
    this.beneficiaries = [];
    this.recentTransfers = [];
    this.loading = false;
    this.submitted = false;
    this.preSelectedAccount = null;
  }
  ngOnInit() {
    this.initializeForm();
    this.loadData();
    this.checkQueryParams();
  }
  checkQueryParams() {
    this.route.queryParams.subscribe(params => {
      if (params['fromAccount']) {
        this.preSelectedAccount = {
          id: params['fromAccount'],
          accountNumber: params['accountNumber'],
          accountType: params['accountType']
        };
        // Pre-select the account in the form
        this.transferForm.patchValue({
          fromAccount: params['fromAccount']
        });
        // Show a helpful message
        setTimeout(() => {
          alert(`Account ${params['accountNumber']} (${params['accountType']}) has been pre-selected for transfer!`);
        }, 500);
      }
    });
  }
  initializeForm() {
    this.transferForm = this.formBuilder.group({
      fromAccount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      toAccount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(1)]],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      transferType: ['INTERNAL', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]
    });
  }
  loadData() {
    this.loading = true;
    // Mock data
    this.accounts = [{
      id: '1',
      accountNumber: 'ACC1001234567',
      accountType: 'SAVINGS',
      balance: 15750.50
    }, {
      id: '2',
      accountNumber: 'ACC1001234568',
      accountType: 'CHECKING',
      balance: 8240.25
    }];
    this.beneficiaries = [{
      id: '1',
      name: 'John Doe',
      accountNumber: 'ACC2001234567',
      bankName: 'Other Bank'
    }, {
      id: '2',
      name: 'Jane Smith',
      accountNumber: 'ACC2001234568',
      bankName: 'Another Bank'
    }];
    this.recentTransfers = [{
      id: '1',
      description: 'Internal Transfer',
      amount: 500.00,
      status: 'COMPLETED',
      date: new Date(),
      recipientName: 'Savings Account'
    }, {
      id: '2',
      description: 'External Transfer',
      amount: 1000.00,
      status: 'PENDING',
      date: new Date(),
      recipientName: 'John Doe'
    }];
    this.loading = false;
  }
  get f() {
    return this.transferForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.transferForm.invalid) {
      return;
    }
    this.loading = true;
    const formData = this.transferForm.value;
    const fromAccount = this.accounts.find(acc => acc.id === formData.fromAccount);
    const toAccount = this.transferForm.value.transferType === 'INTERNAL' ? this.accounts.find(acc => acc.id === formData.toAccount) : this.beneficiaries.find(ben => ben.id === formData.toAccount);
    // Show transfer confirmation
    const transferSummary = `
Transfer Summary:
From: ${fromAccount?.accountType} (${fromAccount?.accountNumber})
To: ${toAccount?.name || toAccount?.accountType} (${toAccount?.accountNumber})
Amount: $${formData.amount}
Description: ${formData.description}
    `;
    if (confirm(`Please confirm this transfer:\n${transferSummary}`)) {
      // Simulate API call
      setTimeout(() => {
        alert('Transfer completed successfully!');
        this.transferForm.reset();
        this.submitted = false;
        this.loading = false;
        this.loadData(); // Refresh data
        // If there was a pre-selected account, reset the form to that account
        if (this.preSelectedAccount) {
          this.transferForm.patchValue({
            fromAccount: this.preSelectedAccount.id
          });
        }
      }, 2000);
    } else {
      this.loading = false;
    }
  }
  formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  }
  getStatusBadgeClass(status) {
    switch (status) {
      case 'COMPLETED':
        return 'bg-success';
      case 'PENDING':
        return 'bg-warning';
      case 'FAILED':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }
  // Navigation methods for beneficiaries
  addBeneficiary() {
    this.router.navigate(['/beneficiaries/add']);
  }
  viewAllBeneficiaries() {
    this.router.navigate(['/beneficiaries']);
  }
  static {
    this.ɵfac = function TransfersComponent_Factory(t) {
      return new (t || TransfersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TransfersComponent,
      selectors: [["app-transfers"]],
      decls: 93,
      vars: 22,
      consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "h3", "mb-0"], [1, "fas", "fa-exchange-alt", "me-2", "text-primary"], [1, "btn-group"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-plus", "me-2"], [1, "btn", "btn-outline-primary", 3, "click"], [1, "fas", "fa-list", "me-2"], [1, "row"], [1, "col-lg-6", "mb-4"], [1, "card"], [1, "card-header"], [1, "mb-0"], [1, "fas", "fa-paper-plane", "me-2"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "mb-3"], [1, "form-label"], ["formControlName", "transferType", 1, "form-select"], ["value", "INTERNAL"], ["value", "EXTERNAL"], ["formControlName", "fromAccount", 1, "form-select"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "toAccount", 1, "form-select"], ["label", "My Accounts", 4, "ngIf"], ["label", "Beneficiaries", 4, "ngIf"], ["type", "number", "formControlName", "amount", "placeholder", "0.00", "step", "0.01", 1, "form-control"], ["type", "text", "formControlName", "description", "placeholder", "Transfer description", 1, "form-control"], [1, "d-grid"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "spinner-border spinner-border-sm me-2", 4, "ngIf"], ["class", "fas fa-paper-plane me-2", 4, "ngIf"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], [1, "fas", "fa-history", "me-2"], ["href", "#", 1, "text-decoration-none"], ["class", "text-center text-muted py-4", 4, "ngIf"], ["class", "border-start border-3 border-primary ps-3 py-3", 4, "ngFor", "ngForOf"], [1, "card", "mt-4"], [1, "fas", "fa-shield-alt", "me-2"], [1, "row", "text-center"], [1, "col-4"], [1, "text-success"], [1, "text-muted"], [1, "text-info"], [1, "text-warning"], [3, "value"], [1, "invalid-feedback"], ["label", "My Accounts"], ["label", "Beneficiaries"], [4, "ngIf"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "text-center", "text-muted", "py-4"], [1, "fas", "fa-inbox", "fa-2x", "mb-2"], [1, "border-start", "border-3", "border-primary", "ps-3", "py-3"], [1, "d-flex", "justify-content-between", "align-items-start"], [1, "flex-grow-1"], [1, "mb-1"], [1, "mb-1", "text-muted", "small"], [1, "text-end"], [1, "mb-1", "text-danger"], [1, "badge"]],
      template: function TransfersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Fund Transfers ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransfersComponent_Template_button_click_5_listener() {
            return ctx.addBeneficiary();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Add Beneficiary ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransfersComponent_Template_button_click_8_listener() {
            return ctx.viewAllBeneficiaries();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " View All Beneficiaries ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8)(12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "h6", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " New Transfer ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14)(19, "form", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TransfersComponent_Template_form_ngSubmit_19_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16)(21, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Transfer Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 18)(24, "option", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Internal Transfer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "External Transfer");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16)(29, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "From Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 21)(32, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Select Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TransfersComponent_option_34_Template, 2, 4, "option", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, TransfersComponent_div_35_Template, 2, 0, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16)(37, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "To Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 25)(40, "option", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Select Destination");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TransfersComponent_optgroup_42_Template, 2, 1, "optgroup", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TransfersComponent_optgroup_43_Template, 2, 1, "optgroup", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TransfersComponent_div_44_Template, 2, 0, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 16)(46, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Amount ($)");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TransfersComponent_div_49_Template, 3, 2, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16)(51, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, TransfersComponent_div_54_Template, 2, 0, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30)(56, "button", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, TransfersComponent_span_57_Template, 1, 0, "span", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, TransfersComponent_i_58_Template, 1, 0, "i", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9)(61, "div", 10)(62, "div", 34)(63, "h6", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Recent Transfers ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "View All");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, TransfersComponent_div_69_Template, 4, 0, "div", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, TransfersComponent_div_70_Template, 15, 10, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 39)(72, "div", 11)(73, "h6", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Transfer Limits ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 14)(77, "div", 41)(78, "div", 42)(79, "h5", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "$10,000");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "small", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Daily Limit");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 42)(84, "h5", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "$50,000");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "small", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Monthly Limit");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 42)(89, "h5", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "$8,500");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "small", 44);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Remaining Today");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.transferForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["fromAccount"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.accounts);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["fromAccount"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["toAccount"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f["transferType"].value === "INTERNAL");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f["transferType"].value === "EXTERNAL");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["toAccount"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["amount"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["amount"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.submitted && ctx.f["description"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f["description"].errors);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.loading ? "Processing..." : "Transfer Money", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.recentTransfers.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.recentTransfers);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe],
      styles: ["\n\n.transfer-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n  transition: transform 0.2s ease;\n}\n\n.transfer-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0,0,0,0.15);\n}\n\n\n\n.account-selector[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n\n\n.transfer-limits[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  padding: 1rem;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n\n\n\n.transfer-item[_ngcontent-%COMP%] {\n  border-left: 3px solid #2196f3;\n  transition: all 0.2s ease;\n  padding: 1rem;\n  margin-bottom: 0.5rem;\n  background: white;\n  border-radius: 8px;\n}\n\n.transfer-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  transform: translateX(4px);\n}\n\n.transfer-completed[_ngcontent-%COMP%] {\n  border-left-color: #4caf50;\n}\n\n.transfer-pending[_ngcontent-%COMP%] {\n  border-left-color: #ff9800;\n}\n\n.transfer-failed[_ngcontent-%COMP%] {\n  border-left-color: #f44336;\n}\n\n\n\n.badge-completed[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n}\n\n.badge-pending[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n}\n\n.badge-failed[_ngcontent-%COMP%] {\n  background-color: #f44336;\n}\n\n\n\n.form-select[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  border: 1px solid #ddd;\n  transition: all 0.3s ease;\n}\n\n.form-select[_ngcontent-%COMP%]:focus, .form-control[_ngcontent-%COMP%]:focus {\n  border-color: #2196f3;\n  box-shadow: 0 0 0 0.2rem rgba(33, 150, 243, 0.25);\n}\n\n\n\n@media (max-width: 768px) {\n  .transfer-card[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  \n  .transfer-item[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n} \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90cmFuc2ZlcnMvdHJhbnNmZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUJBQXlCO0FBQ3pCO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHVDQUF1QztBQUN6Qzs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQSxxQkFBcUI7QUFDckI7RUFDRSw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlEQUFpRDtBQUNuRDs7QUFFQSxlQUFlO0FBQ2Y7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyogVHJhbnNmZXIgRm9ybSBTdHlsZXMgKi9cclxuLnRyYW5zZmVyLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnRyYW5zZmVyLWNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbn1cclxuXHJcbi8qIEFjY291bnQgU2VsZWN0aW9uICovXHJcbi5hY2NvdW50LXNlbGVjdG9yIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi8qIFRyYW5zZmVyIExpbWl0cyAqL1xyXG4udHJhbnNmZXItbGltaXRzIHtcclxuICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzIxOTZmMztcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4vKiBSZWNlbnQgVHJhbnNmZXJzICovXHJcbi50cmFuc2Zlci1pdGVtIHtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMyMTk2ZjM7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi50cmFuc2Zlci1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xyXG59XHJcblxyXG4udHJhbnNmZXItY29tcGxldGVkIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzRjYWY1MDtcclxufVxyXG5cclxuLnRyYW5zZmVyLXBlbmRpbmcge1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjZmY5ODAwO1xyXG59XHJcblxyXG4udHJhbnNmZXItZmFpbGVkIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLyogU3RhdHVzIEJhZGdlcyAqL1xyXG4uYmFkZ2UtY29tcGxldGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG59XHJcblxyXG4uYmFkZ2UtcGVuZGluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcclxufVxyXG5cclxuLmJhZGdlLWZhaWxlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcclxufVxyXG5cclxuLyogRm9ybSBDb250cm9scyAqL1xyXG4uZm9ybS1zZWxlY3QsIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5mb3JtLXNlbGVjdDpmb2N1cywgLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDMzLCAxNTAsIDI0MywgMC4yNSk7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRyYW5zZmVyLWNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRyYW5zZmVyLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICB9XHJcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);




class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    // First, do a synchronous check
    const token = this.authService.getToken();
    const user = this.authService.getCurrentUser();
    // If we have both token and user, allow immediately
    if (token && user) {
      return true;
    }
    // Fallback to Observable check
    return this.authService.isAuthenticated$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(isAuthenticated => {
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
    }));
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 3182:
/*!****************************************************!*\
  !*** ./src/app/models/financial-analysis.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FactorType: () => (/* binding */ FactorType),
/* harmony export */   ForecastPeriod: () => (/* binding */ ForecastPeriod),
/* harmony export */   InsightSeverity: () => (/* binding */ InsightSeverity),
/* harmony export */   InsightType: () => (/* binding */ InsightType),
/* harmony export */   RecurrenceFrequency: () => (/* binding */ RecurrenceFrequency),
/* harmony export */   ReminderPriority: () => (/* binding */ ReminderPriority),
/* harmony export */   ReminderStatus: () => (/* binding */ ReminderStatus),
/* harmony export */   TrendDirection: () => (/* binding */ TrendDirection)
/* harmony export */ });
var ForecastPeriod;
(function (ForecastPeriod) {
  ForecastPeriod["WEEKLY"] = "WEEKLY";
  ForecastPeriod["MONTHLY"] = "MONTHLY";
  ForecastPeriod["QUARTERLY"] = "QUARTERLY";
  ForecastPeriod["YEARLY"] = "YEARLY";
})(ForecastPeriod || (ForecastPeriod = {}));
var FactorType;
(function (FactorType) {
  FactorType["INCOME"] = "INCOME";
  FactorType["EXPENSE"] = "EXPENSE";
  FactorType["TRANSFER"] = "TRANSFER";
  FactorType["BILL"] = "BILL";
  FactorType["SUBSCRIPTION"] = "SUBSCRIPTION";
})(FactorType || (FactorType = {}));
var TrendDirection;
(function (TrendDirection) {
  TrendDirection["INCREASING"] = "INCREASING";
  TrendDirection["DECREASING"] = "DECREASING";
  TrendDirection["STABLE"] = "STABLE";
  TrendDirection["FLUCTUATING"] = "FLUCTUATING";
})(TrendDirection || (TrendDirection = {}));
var RecurrenceFrequency;
(function (RecurrenceFrequency) {
  RecurrenceFrequency["WEEKLY"] = "WEEKLY";
  RecurrenceFrequency["MONTHLY"] = "MONTHLY";
  RecurrenceFrequency["QUARTERLY"] = "QUARTERLY";
  RecurrenceFrequency["YEARLY"] = "YEARLY";
})(RecurrenceFrequency || (RecurrenceFrequency = {}));
var ReminderStatus;
(function (ReminderStatus) {
  ReminderStatus["PENDING"] = "PENDING";
  ReminderStatus["PAID"] = "PAID";
  ReminderStatus["OVERDUE"] = "OVERDUE";
  ReminderStatus["CANCELLED"] = "CANCELLED";
})(ReminderStatus || (ReminderStatus = {}));
var ReminderPriority;
(function (ReminderPriority) {
  ReminderPriority["LOW"] = "LOW";
  ReminderPriority["MEDIUM"] = "MEDIUM";
  ReminderPriority["HIGH"] = "HIGH";
  ReminderPriority["CRITICAL"] = "CRITICAL";
})(ReminderPriority || (ReminderPriority = {}));
var InsightType;
(function (InsightType) {
  InsightType["SPENDING_ALERT"] = "SPENDING_ALERT";
  InsightType["BUDGET_BREACH"] = "BUDGET_BREACH";
  InsightType["SAVINGS_OPPORTUNITY"] = "SAVINGS_OPPORTUNITY";
  InsightType["BILL_REMINDER"] = "BILL_REMINDER";
  InsightType["CASH_FLOW_WARNING"] = "CASH_FLOW_WARNING";
  InsightType["PATTERN_DETECTED"] = "PATTERN_DETECTED";
})(InsightType || (InsightType = {}));
var InsightSeverity;
(function (InsightSeverity) {
  InsightSeverity["INFO"] = "INFO";
  InsightSeverity["WARNING"] = "WARNING";
  InsightSeverity["ALERT"] = "ALERT";
  InsightSeverity["CRITICAL"] = "CRITICAL";
})(InsightSeverity || (InsightSeverity = {}));

/***/ }),

/***/ 6400:
/*!*************************************!*\
  !*** ./src/app/pipes/nl2br.pipe.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nl2brPipe: () => (/* binding */ Nl2brPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class Nl2brPipe {
  transform(value) {
    if (!value) return value;
    return value.replace(/\n/g, '<br>');
  }
  static {
    this.ɵfac = function Nl2brPipe_Factory(t) {
      return new (t || Nl2brPipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "nl2br",
      type: Nl2brPipe,
      pure: true
    });
  }
}


/***/ }),

/***/ 61:
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountService: () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 4796);





class AccountService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getAuthHeaders() {
    const token = this.authService.getToken();
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
  getAccounts() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/accounts`, {
      headers: this.getAuthHeaders()
    });
  }
  getAccount(accountId) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/accounts/${accountId}`, {
      headers: this.getAuthHeaders()
    });
  }
  getAccountBalance(accountId) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/accounts/${accountId}/balance`, {
      headers: this.getAuthHeaders()
    });
  }
  getTransactions(accountId) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/accounts/${accountId}/transactions`, {
      headers: this.getAuthHeaders()
    });
  }
  getTransactionsByDateRange(accountId, fromDate, toDate) {
    const params = {
      fromDate: fromDate.toISOString(),
      toDate: toDate.toISOString()
    };
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/accounts/${accountId}/transactions`, {
      headers: this.getAuthHeaders(),
      params
    });
  }
  getAccountStatement(accountId, fromDate, toDate) {
    const params = {
      fromDate: fromDate.toISOString(),
      toDate: toDate.toISOString()
    };
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/accounts/${accountId}/statement`, {
      headers: this.getAuthHeaders(),
      params
    });
  }
  searchTransactions(accountId, query) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/accounts/${accountId}/transactions/search`, {
      headers: this.getAuthHeaders(),
      params: {
        q: query
      }
    });
  }
  getTransaction(accountId, transactionId) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/accounts/${accountId}/transactions/${transactionId}`, {
      headers: this.getAuthHeaders()
    });
  }
  static {
    this.ɵfac = function AccountService_Factory(t) {
      return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AccountService,
      factory: AccountService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 1449:
/*!*********************************************!*\
  !*** ./src/app/services/ai-chat.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AiChatService: () => (/* binding */ AiChatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 5074);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 4796);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.service */ 61);
/* harmony import */ var _transfer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transfer.service */ 8513);
/* harmony import */ var _bill_payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bill-payment.service */ 1604);
/* harmony import */ var _pdf_statement_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pdf-statement.service */ 9192);







class AiChatService {
  constructor(authService, accountService, transferService, billPaymentService, pdfStatementService) {
    this.authService = authService;
    this.accountService = accountService;
    this.transferService = transferService;
    this.billPaymentService = billPaymentService;
    this.pdfStatementService = pdfStatementService;
    this.messagesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
    this.isTypingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(false);
    this.chatSessionId = this.generateSessionId();
    this.messages$ = this.messagesSubject.asObservable();
    this.isTyping$ = this.isTypingSubject.asObservable();
    // Banking-specific intents and responses
    this.bankingIntents = {
      'greeting': {
        patterns: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'start'],
        responses: ['🧞‍♂️ Hello! I\'m BankGenie, your magical banking assistant. What banking wish can I grant today?', '✨ Hi there! BankGenie at your service! Ready to make your banking dreams come true?', '🌟 Welcome! I\'m BankGenie, here to work some banking magic for you. What can I help with?'],
        quickReplies: ['Check Balance', 'Recent Transactions', 'Transfer Money', 'Pay Bills']
      },
      'balance_inquiry': {
        patterns: ['balance', 'how much', 'account balance', 'check balance', 'money'],
        responses: ['✨ Abracadabra! Let me reveal your account treasures...', '🔮 Gazing into your financial crystal ball...', '💰 Your wish is my command! Summoning your account balances...'],
        requiresAuth: true
      },
      'transaction_history': {
        patterns: ['transaction history', 'recent transactions', 'transaction statement', 'spending history', 'payment history'],
        responses: ['📜 Unrolling the magical scroll of your recent transactions...', '🔍 Peering into your financial timeline...', '⏰ Time magic activated! Here\'s your transaction history...'],
        requiresAuth: true
      },
      'transfer_money': {
        patterns: ['transfer', 'send money', 'move money', 'pay someone'],
        responses: ['💫 Money teleportation magic! Which account shall we transfer from?', '🪄 Ready to cast a money transfer spell! Choose your source account...', '✨ Your transfer wish is my command! Let\'s move some magical money...'],
        requiresAuth: true,
        quickReplies: ['Between My Accounts', 'To Another Person', 'External Transfer']
      },
      'bill_payment': {
        patterns: ['pay bill', 'bills', 'payments', 'utilities'],
        responses: ['🧾 Summoning your bill payment portal! Let me show you what needs attention...', '💳 Bill payment magic in progress! Here are your pending bills...', '⚡ Zapping away those bills! Let\'s see what\'s due...'],
        requiresAuth: true
      },
      'help': {
        patterns: ['help', 'what can you do', 'commands', 'assist'],
        responses: ['🧞‍♂️ BankGenie at your service! I can grant these banking wishes: ✨ Account balances ✨ Transaction history ✨ Money transfers ✨ Bill payments ✨ Digital wallet ✨ QR payments ✨ Crypto portfolio ✨ Loyalty rewards ✨ Social payments ✨ Contactless magic ✨ Download statements ✨ Tax documents and much more!'],
        quickReplies: ['Check Balance', 'Download Statement', 'Digital Wallet', 'QR Payments']
      },
      'account_info': {
        patterns: ['account', 'account info', 'my accounts', 'account details'],
        responses: ['🏦 Opening the vault of account wisdom! Here\'s your complete account overview...', '📋 Your account secrets revealed! Let me show you everything...', '🔐 Unlocking your account treasury! Here are all the details...'],
        requiresAuth: true
      },
      'digital_wallet': {
        patterns: ['digital wallet', 'wallet', 'mobile wallet', 'e-wallet', 'digital money'],
        responses: ['📱 Summoning your digital wallet portal! Here\'s your mobile money magic...', '💳 Opening your digital treasure chest! Your e-wallet awaits...', '🎆 Digital wallet magic activated! Here are all your mobile payment options...'],
        requiresAuth: true,
        quickReplies: ['Add Money', 'Send Money', 'QR Payment', 'Transaction History']
      },
      'qr_payments': {
        patterns: ['qr', 'qr code', 'qr payment', 'scan', 'quick response', 'qr money'],
        responses: ['📱 QR Magic activated! Ready to scan or generate payment codes...', '🔲 Conjuring QR payment portal! Your instant payment magic...', '⚡ QR code wizardry in progress! Scan or create payment codes...'],
        requiresAuth: true,
        quickReplies: ['Generate QR', 'Scan QR', 'QR History']
      },
      'cryptocurrency': {
        patterns: ['crypto', 'bitcoin', 'ethereum', 'cryptocurrency', 'crypto wallet', 'digital currency'],
        responses: ['₿ Crypto crystal ball activated! Peering into your digital currency realm...', '🚀 Blockchain magic engaged! Here\'s your cryptocurrency overview...', '💎 Digital gold vault unlocked! Your crypto treasures revealed...'],
        requiresAuth: true,
        quickReplies: ['Portfolio', 'Market Prices', 'Buy Crypto', 'Crypto News']
      },
      'loyalty_points': {
        patterns: ['loyalty', 'points', 'rewards', 'cashback', 'loyalty program', 'reward points'],
        responses: ['🌟 Loyalty magic sparkles! Your reward treasures await...', '🎁 Points paradise opened! Here are all your magical rewards...', '✨ Reward spell activated! Your loyalty treasures revealed...'],
        requiresAuth: true,
        quickReplies: ['View Points', 'Redeem Rewards', 'Earning History', 'Special Offers']
      },
      'social_payments': {
        patterns: ['social', 'request money', 'social media', 'facebook pay', 'instagram pay', 'social transfer'],
        responses: ['📲 Social payment magic! Connect with friends for money transfers...', '👥 Social money spells activated! Request or send via social media...', '🌐 Social banking portal opened! Your friend-to-friend payment magic...'],
        requiresAuth: true,
        quickReplies: ['Request Money', 'Social Send', 'Split Bill', 'Contact Friends']
      },
      'contactless_payments': {
        patterns: ['contactless', 'nfc', 'tap to pay', 'touchless', 'proximity payment', 'near field'],
        responses: ['📡 Contactless magic waves activated! Tap-to-pay powers engaged...', '🔗 NFC spells conjured! Your touchless payment magic ready...', '⚡ Proximity payment portal opened! Wave your device to pay...'],
        requiresAuth: true,
        quickReplies: ['Enable NFC', 'Payment Limits', 'Transaction History', 'Security Settings']
      },
      'account_statement': {
        patterns: ['account statement', 'statement', 'bank statement', 'monthly statement', 'account summary', 'download statement', 'get statement', 'statement download'],
        responses: ['📄 Summoning your account statement scroll! Let me conjure your financial records...', '📋 Magical statement generation in progress! Your account details are being assembled...', '🧾 Abracadabra! Your account statement is materializing...'],
        requiresAuth: true,
        quickReplies: ['This Month', 'Last Month', 'Last 3 Months', 'Custom Period']
      },
      'transaction_report': {
        patterns: ['transaction report', 'transaction statement', 'spending report', 'expense report', 'transaction history', 'recent transactions', 'spending history'],
        responses: ['📊 Conjuring your transaction magic report! All your spending spells revealed...', '💳 Transaction history scroll unrolling! Your financial journey awaits...', '📈 Magical transaction analysis in progress! Every penny accounted for...'],
        requiresAuth: true,
        quickReplies: ['Last 30 Days', 'Last 90 Days', 'This Year', 'Custom Range']
      },
      'tax_statement': {
        patterns: ['tax statement', 'tax report', 'tax document', 'annual tax', 'tax summary', 'tax papers', 'tax docs', 'tax forms'],
        responses: ['🧾 Tax magic activated! Summoning your annual tax documents...', '📋 Tax scroll materializing! All your tax-related treasures compiled...', '💰 Tax statement spell casting! Your financial tax data organized...'],
        requiresAuth: true,
        quickReplies: ['Current Year', 'Previous Year', 'Last 2 Years', 'Email Statement']
      },
      'loan_statement': {
        patterns: ['loan statement', 'emi statement', 'loan report', 'mortgage statement', 'loan details', 'emi details', 'loan summary'],
        responses: ['🏠 Loan magic scroll appearing! Your EMI journey documented...', '💸 Loan statement spell activated! Every payment magically tracked...', '📊 Mortgage magic report! Your loan adventure summarized...'],
        requiresAuth: true,
        quickReplies: ['EMI History', 'Outstanding Balance', 'Payment Schedule', 'Loan Summary']
      },
      'investment_statement': {
        patterns: ['investment statement', 'portfolio statement', 'investment report', 'portfolio summary', 'investment summary', 'portfolio report'],
        responses: ['📈 Investment magic portfolio materializing! Your wealth spells revealed...', '💎 Portfolio statement conjured! Your investment treasures detailed...', '🚀 Investment report magic! Your financial growth journey mapped...'],
        requiresAuth: true,
        quickReplies: ['Portfolio Summary', 'Performance Report', 'Dividend History', 'Capital Gains']
      },
      'download_statement': {
        patterns: ['download statement', 'get statement', 'statement pdf', 'download report', 'download account statement', 'download transaction report', 'download tax statement', 'statement download'],
        responses: ['⬇️ Download magic activated! Your statement will appear in your device...', '📥 Statement download spell cast! Materializing your document...', '💾 Digital statement magic! Your PDF is being conjured...'],
        requiresAuth: true,
        quickReplies: ['Account Statement', 'Transaction Report', 'Tax Document', 'Investment Report']
      }
    };
    this.initializeChat();
  }
  initializeChat() {
    const welcomeMessage = {
      id: this.generateMessageId(),
      content: '🧞‍♂️ Welcome! I\'m BankGenie, your magical banking assistant! I can grant your wishes for account info, transfers, bill payments, and much more. What banking magic can I help you with today?',
      timestamp: new Date(),
      isFromUser: false,
      type: 'text',
      quickReplies: ['Check Balance', 'Recent Transactions', 'Transfer Money', 'Pay Bills', 'Help'],
      intent: 'greeting'
    };
    this.messagesSubject.next([welcomeMessage]);
  }
  sendMessage(content) {
    const userMessage = {
      id: this.generateMessageId(),
      content: content,
      timestamp: new Date(),
      isFromUser: true,
      type: 'text'
    };
    // Add user message to chat
    const currentMessages = this.messagesSubject.value;
    this.messagesSubject.next([...currentMessages, userMessage]);
    // Show typing indicator
    this.isTypingSubject.next(true);
    // Process message and generate response
    return this.processMessage(content).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.delay)(1500) // Simulate AI thinking time
    );
  }

  processMessage(content) {
    const intent = this.detectIntent(content);
    const response = this.generateResponse(intent, content);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(response);
  }
  detectIntent(message) {
    const lowerMessage = message.toLowerCase();
    let bestMatch = {
      intent: 'unknown',
      confidence: 0.1,
      entities: {}
    };
    // First, check for exact phrase matches (highest priority)
    for (const [intentName, intentData] of Object.entries(this.bankingIntents)) {
      for (const pattern of intentData.patterns) {
        if (lowerMessage.includes(pattern)) {
          return {
            intent: intentName,
            confidence: 0.95,
            entities: this.extractEntities(message, intentName)
          };
        }
      }
    }
    // Second, check for key word combinations (medium priority)
    for (const [intentName, intentData] of Object.entries(this.bankingIntents)) {
      for (const pattern of intentData.patterns) {
        const patternWords = pattern.split(' ');
        // Skip single word patterns in this phase to avoid false matches
        if (patternWords.length === 1) continue;
        const messageWords = lowerMessage.split(' ');
        const matchedWords = patternWords.filter(word => messageWords.some(messageWord => messageWord === word || word.length > 3 && messageWord.includes(word) || messageWord.length > 3 && word.includes(messageWord)));
        const matchScore = matchedWords.length / patternWords.length;
        // Require at least 70% match for multi-word patterns
        if (matchScore >= 0.7 && matchScore > bestMatch.confidence) {
          bestMatch = {
            intent: intentName,
            confidence: matchScore * 0.8,
            entities: this.extractEntities(message, intentName)
          };
        }
      }
    }
    // Third, specific keyword-based detection (lowest priority, most specific)
    if (bestMatch.confidence < 0.6) {
      // Statement-related requests (must be very specific)
      if ((lowerMessage.includes('statement') || lowerMessage.includes('download')) && (lowerMessage.includes('account') || lowerMessage.includes('bank'))) {
        return {
          intent: 'account_statement',
          confidence: 0.75,
          entities: this.extractEntities(message, 'account_statement')
        };
      }
      if ((lowerMessage.includes('statement') || lowerMessage.includes('report')) && lowerMessage.includes('transaction')) {
        return {
          intent: 'transaction_report',
          confidence: 0.75,
          entities: this.extractEntities(message, 'transaction_report')
        };
      }
      if (lowerMessage.includes('statement') && lowerMessage.includes('tax')) {
        return {
          intent: 'tax_statement',
          confidence: 0.75,
          entities: this.extractEntities(message, 'tax_statement')
        };
      }
      // Balance inquiries
      if ((lowerMessage.includes('balance') || lowerMessage.includes('money')) && (lowerMessage.includes('check') || lowerMessage.includes('show') || lowerMessage.includes('how much'))) {
        return {
          intent: 'balance_inquiry',
          confidence: 0.75,
          entities: this.extractEntities(message, 'balance_inquiry')
        };
      }
      // Transaction history (be more specific)
      if (lowerMessage.includes('transaction') && lowerMessage.includes('history') || lowerMessage.includes('recent') && lowerMessage.includes('transaction')) {
        return {
          intent: 'transaction_history',
          confidence: 0.7,
          entities: this.extractEntities(message, 'transaction_history')
        };
      }
      // Generic statement download (only if explicitly mentioned)
      if (lowerMessage.includes('download') && lowerMessage.includes('statement') || lowerMessage.includes('get') && lowerMessage.includes('statement')) {
        return {
          intent: 'download_statement',
          confidence: 0.65,
          entities: this.extractEntities(message, 'download_statement')
        };
      }
    }
    // Return best match only if confidence is reasonable
    return bestMatch.confidence > 0.6 ? bestMatch : {
      intent: 'unknown',
      confidence: 0.1
    };
  }
  extractEntities(message, intent) {
    const entities = {};
    const lowerMessage = message.toLowerCase();
    // Extract amounts
    const amountMatch = message.match(/\$?(\d+(?:,\d{3})*(?:\.\d{2})?)/);
    if (amountMatch) {
      entities['amount'] = parseFloat(amountMatch[1].replace(/,/g, ''));
    }
    // Extract account types
    if (lowerMessage.includes('saving')) entities['accountType'] = 'SAVINGS';
    if (lowerMessage.includes('checking')) entities['accountType'] = 'CHECKING';
    return entities;
  }
  generateResponse(intent, originalMessage) {
    const intentData = this.bankingIntents[intent.intent];
    let response;
    if (!intentData) {
      response = this.generateUnknownResponse(originalMessage);
    } else if (intentData.requiresAuth && !this.authService.getToken()) {
      response = this.generateAuthRequiredResponse();
    } else {
      response = this.generateIntentResponse(intent, intentData);
    }
    // Add response to chat and hide typing indicator
    setTimeout(() => {
      const currentMessages = this.messagesSubject.value;
      this.messagesSubject.next([...currentMessages, response]);
      this.isTypingSubject.next(false);
    }, 100);
    return response;
  }
  generateIntentResponse(intent, intentData) {
    const randomResponse = intentData.responses[Math.floor(Math.random() * intentData.responses.length)];
    const response = {
      id: this.generateMessageId(),
      content: randomResponse,
      timestamp: new Date(),
      isFromUser: false,
      type: 'text',
      intent: intent.intent,
      quickReplies: intentData.quickReplies
    };
    // Add special handling for specific intents
    switch (intent.intent) {
      case 'balance_inquiry':
        response.type = 'card';
        response.cardData = this.generateBalanceCard();
        break;
      case 'transaction_history':
        response.type = 'card';
        response.cardData = this.generateTransactionCard();
        break;
      case 'account_info':
        response.type = 'card';
        response.cardData = this.generateAccountCard();
        break;
      case 'digital_wallet':
        response.type = 'card';
        response.cardData = this.generateDigitalWalletCard();
        break;
      case 'qr_payments':
        response.type = 'card';
        response.cardData = this.generateQRPaymentCard();
        break;
      case 'cryptocurrency':
        response.type = 'card';
        response.cardData = this.generateCryptoWalletCard();
        break;
      case 'loyalty_points':
        response.type = 'card';
        response.cardData = this.generateLoyaltyPointsCard();
        break;
      case 'social_payments':
        response.type = 'card';
        response.cardData = this.generateSocialPaymentsCard();
        break;
      case 'contactless_payments':
        response.type = 'card';
        response.cardData = this.generateContactlessPaymentsCard();
        break;
      case 'account_statement':
        response.type = 'card';
        response.cardData = this.generateStatementDownloadCard('account');
        break;
      case 'transaction_report':
        response.type = 'card';
        response.cardData = this.generateStatementDownloadCard('transaction');
        break;
      case 'tax_statement':
        response.type = 'card';
        response.cardData = this.generateStatementDownloadCard('tax');
        break;
      case 'loan_statement':
        response.type = 'card';
        response.cardData = this.generateStatementDownloadCard('loan');
        break;
      case 'investment_statement':
        response.type = 'card';
        response.cardData = this.generateStatementDownloadCard('investment');
        break;
      case 'download_statement':
        response.type = 'card';
        response.cardData = this.generateStatementOptionsCard();
        break;
    }
    return response;
  }
  generateBalanceCard() {
    // Mock account data - in real app, this would come from AccountService
    return {
      type: 'balance',
      accounts: [{
        name: 'Savings Account',
        number: '****4567',
        balance: 15750.50
      }, {
        name: 'Checking Account',
        number: '****4568',
        balance: 8240.25
      }],
      totalBalance: 23990.75
    };
  }
  generateTransactionCard() {
    return {
      type: 'transactions',
      transactions: [{
        description: 'Coffee Shop',
        amount: -4.50,
        date: new Date(),
        category: 'Food & Dining'
      }, {
        description: 'Salary Deposit',
        amount: 3500.00,
        date: new Date(Date.now() - 86400000),
        category: 'Income'
      }, {
        description: 'Electric Bill',
        amount: -85.50,
        date: new Date(Date.now() - 172800000),
        category: 'Utilities'
      }]
    };
  }
  generateAccountCard() {
    return {
      type: 'accounts',
      accounts: [{
        type: 'Savings',
        number: 'ACC1001234567',
        balance: 15750.50,
        status: 'Active',
        openDate: '2020-01-15'
      }, {
        type: 'Checking',
        number: 'ACC1001234568',
        balance: 8240.25,
        status: 'Active',
        openDate: '2020-01-15'
      }]
    };
  }
  generateUnknownResponse(message) {
    const responses = ['🤔 Hmm, that wish is beyond my magical powers! Could you try rephrasing it?', '🧞‍♂️ My genie magic didn\'t catch that! Can you ask about accounts, transfers, or bill payments?', '✨ I\'m still learning new spells! Try asking about balances, transactions, or money transfers.', '🔮 The crystal ball is a bit cloudy on that one! Please ask about banking topics.'];
    return {
      id: this.generateMessageId(),
      content: responses[Math.floor(Math.random() * responses.length)],
      timestamp: new Date(),
      isFromUser: false,
      type: 'text',
      quickReplies: ['Check Balance', 'Transfer Money', 'Pay Bills', 'Help'],
      intent: 'unknown'
    };
  }
  generateAuthRequiredResponse() {
    return {
      id: this.generateMessageId(),
      content: '🔐 Oops! I need you to be logged into your magical banking realm first. Please sign in to unlock my full genie powers!',
      timestamp: new Date(),
      isFromUser: false,
      type: 'text',
      intent: 'auth_required'
    };
  }
  clearChat() {
    this.messagesSubject.next([]);
    this.initializeChat();
  }
  generateMessageId() {
    return 'msg_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
  generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
  getMessages() {
    return this.messagesSubject.value;
  }
  // Modern Banking Features Card Generators
  generateDigitalWalletCard() {
    return {
      type: 'digital_wallet',
      walletBalance: 1250.75,
      linkedCards: [{
        type: 'Visa',
        last4: '4532',
        isDefault: true
      }, {
        type: 'Mastercard',
        last4: '8901',
        isDefault: false
      }],
      recentTransactions: [{
        merchant: 'Starbucks Coffee',
        amount: -5.49,
        date: new Date(),
        method: 'Tap to Pay'
      }, {
        merchant: 'Uber Ride',
        amount: -12.30,
        date: new Date(Date.now() - 3600000),
        method: 'Digital Wallet'
      }, {
        merchant: 'Amazon Purchase',
        amount: -89.99,
        date: new Date(Date.now() - 7200000),
        method: 'Online Payment'
      }],
      features: ['Tap to Pay', 'QR Payments', 'P2P Transfers', 'Bill Splitting']
    };
  }
  generateQRPaymentCard() {
    return {
      type: 'qr_payments',
      qrCode: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PGcgZmlsbD0iIzAwMCI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz48L2c+PC9zdmc+',
      paymentAmount: 0,
      merchantName: 'QuickPay QR',
      recentQRPayments: [{
        merchant: 'Local Coffee Shop',
        amount: 8.50,
        date: new Date(),
        success: true
      }, {
        merchant: 'Street Food Vendor',
        amount: 15.75,
        date: new Date(Date.now() - 86400000),
        success: true
      }, {
        merchant: 'Parking Meter',
        amount: 2.00,
        date: new Date(Date.now() - 172800000),
        success: true
      }],
      features: ['Instant QR Generation', 'Scan & Pay', 'Merchant QR', 'P2P QR Codes']
    };
  }
  generateCryptoWalletCard() {
    return {
      type: 'crypto_wallet',
      totalValue: 4567.89,
      currencies: [{
        name: 'Bitcoin',
        symbol: 'BTC',
        amount: 0.0789,
        value: 2845.32,
        change: +5.67
      }, {
        name: 'Ethereum',
        symbol: 'ETH',
        amount: 1.2456,
        value: 1432.87,
        change: -2.34
      }, {
        name: 'Cardano',
        symbol: 'ADA',
        amount: 1250.00,
        value: 289.70,
        change: +12.45
      }],
      features: ['View Only', 'Price Tracking', 'Portfolio Analytics', 'Market News']
    };
  }
  generateLoyaltyPointsCard() {
    return {
      type: 'loyalty_points',
      totalPoints: 15750,
      cashValue: 157.50,
      tier: 'Gold Member',
      pointsToNextTier: 4250,
      recentEarnings: [{
        source: 'Credit Card Purchase',
        points: 125,
        date: new Date()
      }, {
        source: 'Monthly Bonus',
        points: 500,
        date: new Date(Date.now() - 86400000)
      }, {
        source: 'Referral Bonus',
        points: 1000,
        date: new Date(Date.now() - 172800000)
      }],
      availableRewards: [{
        name: '$10 Cashback',
        cost: 1000,
        category: 'Cash'
      }, {
        name: 'Coffee Voucher',
        cost: 500,
        category: 'Food'
      }, {
        name: 'Movie Ticket',
        cost: 1500,
        category: 'Entertainment'
      }]
    };
  }
  generateSocialPaymentsCard() {
    return {
      type: 'social_payments',
      connectedPlatforms: ['Facebook', 'Instagram', 'WhatsApp', 'Telegram'],
      recentRequests: [{
        friend: 'John Smith',
        amount: 25.00,
        reason: 'Dinner split',
        status: 'pending'
      }, {
        friend: 'Sarah Wilson',
        amount: 15.50,
        reason: 'Movie tickets',
        status: 'completed'
      }, {
        friend: 'Mike Johnson',
        amount: 40.00,
        reason: 'Gas money',
        status: 'completed'
      }],
      quickActions: ['Request Money', 'Send Money', 'Split Bill', 'Group Payment'],
      socialFeatures: ['Contact Integration', 'Payment Reminders', 'Social Feed', 'Group Chats']
    };
  }
  generateContactlessPaymentsCard() {
    return {
      type: 'contactless_payments',
      nfcEnabled: true,
      dailyLimit: 100.00,
      dailyUsed: 23.45,
      monthlyTransactions: 47,
      recentContactless: [{
        merchant: 'Metro Transit',
        amount: 2.75,
        date: new Date(),
        method: 'NFC'
      }, {
        merchant: 'Grocery Store',
        amount: 45.67,
        date: new Date(Date.now() - 3600000),
        method: 'Tap Card'
      }, {
        merchant: 'Gas Station',
        amount: 15.00,
        date: new Date(Date.now() - 7200000),
        method: 'Mobile NFC'
      }],
      supportedMethods: ['NFC Phone', 'Contactless Card', 'Smartwatch', 'Wearables']
    };
  }
  generateStatementDownloadCard(statementType) {
    return {
      type: 'statement_download',
      statementType: statementType,
      title: this.getStatementTitle(statementType),
      description: this.getStatementDescription(statementType),
      icon: this.getStatementIcon(statementType),
      downloadOptions: [{
        period: 'This Month',
        filename: `${statementType}_statement_${new Date().getMonth() + 1}_${new Date().getFullYear()}`,
        size: '245 KB'
      }, {
        period: 'Last Month',
        filename: `${statementType}_statement_${new Date().getMonth()}_${new Date().getFullYear()}`,
        size: '189 KB'
      }, {
        period: 'Last 3 Months',
        filename: `${statementType}_statement_3months_${new Date().getFullYear()}`,
        size: '567 KB'
      }, {
        period: 'Custom Period',
        filename: `${statementType}_statement_custom`,
        size: 'Variable'
      }],
      quickActions: ['Download PDF', 'Email Statement', 'View Online', 'Schedule Regular Delivery']
    };
  }
  generateStatementOptionsCard() {
    return {
      type: 'statement_options',
      title: '📋 Statement Magic Portal',
      description: 'Choose your preferred statement type to conjure',
      statementTypes: [{
        type: 'account',
        title: 'Account Statement',
        description: 'Complete account summary with all transactions',
        icon: '🏦',
        color: '#4CAF50'
      }, {
        type: 'transaction',
        title: 'Transaction Report',
        description: 'Detailed spending and income analysis',
        icon: '📊',
        color: '#2196F3'
      }, {
        type: 'tax',
        title: 'Tax Statement',
        description: 'Annual tax documents and summaries',
        icon: '🧾',
        color: '#FF9800'
      }, {
        type: 'loan',
        title: 'Loan Statement',
        description: 'EMI history and outstanding balance',
        icon: '🏠',
        color: '#9C27B0'
      }, {
        type: 'investment',
        title: 'Investment Report',
        description: 'Portfolio performance and holdings',
        icon: '📈',
        color: '#F44336'
      }, {
        type: 'digital_wallet',
        title: 'Digital Wallet Statement',
        description: 'Mobile wallet transactions and balance',
        icon: '📱',
        color: '#00BCD4'
      }]
    };
  }
  getStatementTitle(type) {
    const titles = {
      'account': '🏦 Account Statement',
      'transaction': '📊 Transaction Report',
      'tax': '🧾 Tax Statement',
      'loan': '🏠 Loan Statement',
      'investment': '📈 Investment Report',
      'digital_wallet': '📱 Digital Wallet Statement'
    };
    return titles[type] || '📄 Statement';
  }
  getStatementDescription(type) {
    const descriptions = {
      'account': 'Complete account summary with balance and transaction history',
      'transaction': 'Detailed analysis of all your spending and income patterns',
      'tax': 'Annual tax documents with interest and investment summaries',
      'loan': 'EMI payment history and outstanding loan balance details',
      'investment': 'Portfolio performance report with gains and holdings',
      'digital_wallet': 'Mobile wallet transactions and payment history'
    };
    return descriptions[type] || 'Financial statement document';
  }
  getStatementIcon(type) {
    const icons = {
      'account': '🏦',
      'transaction': '📊',
      'tax': '🧾',
      'loan': '🏠',
      'investment': '📈',
      'digital_wallet': '📱'
    };
    return icons[type] || '📄';
  }
  // Method to handle statement download requests
  handleStatementDownload(statementType, period) {
    const options = this.createStatementOptions(statementType, period);
    switch (statementType) {
      case 'account':
        this.pdfStatementService.generateAccountStatement(options).subscribe(blob => {
          this.pdfStatementService.downloadStatement(blob, `account-statement-${period.toLowerCase().replace(' ', '-')}`);
        });
        break;
      case 'transaction':
        this.pdfStatementService.generateTransactionHistory(options).subscribe(blob => {
          this.pdfStatementService.downloadStatement(blob, `transaction-report-${period.toLowerCase().replace(' ', '-')}`);
        });
        break;
      case 'tax':
        this.pdfStatementService.generateTaxStatement(new Date().getFullYear()).subscribe(blob => {
          this.pdfStatementService.downloadStatement(blob, `tax-statement-${new Date().getFullYear()}`);
        });
        break;
      case 'loan':
        this.pdfStatementService.generateLoanStatement('LOAN001', options).subscribe(blob => {
          this.pdfStatementService.downloadStatement(blob, `loan-statement-${period.toLowerCase().replace(' ', '-')}`);
        });
        break;
      case 'investment':
        this.pdfStatementService.generateInvestmentStatement('PORTFOLIO001', options).subscribe(blob => {
          this.pdfStatementService.downloadStatement(blob, `investment-report-${period.toLowerCase().replace(' ', '-')}`);
        });
        break;
      case 'digital_wallet':
        this.pdfStatementService.generateDigitalWalletStatement(options).subscribe(blob => {
          this.pdfStatementService.downloadStatement(blob, `wallet-statement-${period.toLowerCase().replace(' ', '-')}`);
        });
        break;
    }
  }
  createStatementOptions(statementType, period) {
    const now = new Date();
    let startDate;
    let endDate = new Date(now);
    switch (period) {
      case 'This Month':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        break;
      case 'Last Month':
        startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        endDate = new Date(now.getFullYear(), now.getMonth(), 0);
        break;
      case 'Last 3 Months':
        startDate = new Date(now.getFullYear(), now.getMonth() - 3, 1);
        break;
      default:
        startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    }
    return {
      startDate,
      endDate,
      statementType: period === 'This Month' ? 'monthly' : 'custom',
      format: 'pdf'
    };
  }
  static {
    this.ɵfac = function AiChatService_Factory(t) {
      return new (t || AiChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_transfer_service__WEBPACK_IMPORTED_MODULE_2__.TransferService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_bill_payment_service__WEBPACK_IMPORTED_MODULE_3__.BillPaymentService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_pdf_statement_service__WEBPACK_IMPORTED_MODULE_4__.PdfStatementService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: AiChatService,
      factory: AiChatService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);




class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.TOKEN_KEY = 'netbanking_token';
    this.USER_KEY = 'netbanking_user';
    this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
    this.currentUser$ = this.currentUserSubject.asObservable();
    // Initialize authentication state synchronously
    this.initializeAuthState();
  }
  login(credentials) {
    // For demo purposes, simulate login without real API call
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      setTimeout(() => {
        if (credentials.username === 'demo' && credentials.password === 'password') {
          const mockUser = {
            id: '1',
            username: 'demo',
            email: 'demo@netbanking.com',
            firstName: 'John',
            lastName: 'Doe',
            phoneNumber: '+1234567890',
            address: '123 Main Street',
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
            dateOfBirth: '1990-01-15',
            occupation: 'Software Developer',
            isActive: true,
            createdAt: new Date(),
            lastLoginAt: new Date()
          };
          const mockResponse = {
            token: 'demo-jwt-token-' + Date.now(),
            user: mockUser,
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
          };

          this.setToken(mockResponse.token);
          this.setCurrentUser(mockResponse.user);
          this.isAuthenticatedSubject.next(true);
          this.currentUserSubject.next(mockResponse.user);
          observer.next(mockResponse);
          observer.complete();
        } else {
          observer.error({
            message: 'Invalid credentials'
          });
        }
      }, 1000);
    });
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  getCurrentUser() {
    return this.currentUserSubject.value;
  }
  updateUserProfile(profileData) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      // Simulate API call delay
      setTimeout(() => {
        const currentUser = this.getCurrentUser();
        if (currentUser) {
          // Update the user data with new profile information
          const updatedUser = {
            ...currentUser,
            ...profileData
          };
          // Update localStorage and BehaviorSubject
          this.setCurrentUser(updatedUser);
          this.currentUserSubject.next(updatedUser);
          observer.next(updatedUser);
          observer.complete();
        } else {
          observer.error('No user logged in');
        }
      }, 1000);
    });
  }
  hasToken() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  setToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  setCurrentUser(user) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }
  getCurrentUserFromStorage() {
    const userJson = localStorage.getItem(this.USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  }
  initializeAuthState() {
    const token = this.getToken();
    const user = this.getCurrentUserFromStorage();
    if (token && user) {
      // Set authentication state immediately
      this.isAuthenticatedSubject.next(true);
      this.currentUserSubject.next(user);
    } else {
      // Clear any partial state
      this.isAuthenticatedSubject.next(false);
      this.currentUserSubject.next(null);
    }
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 463:
/*!*************************************************!*\
  !*** ./src/app/services/beneficiary.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BeneficiaryService: () => (/* binding */ BeneficiaryService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class BeneficiaryService {
  constructor() {
    this.beneficiaries = [{
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
    }, {
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
    }, {
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
    }];
  }
  getBeneficiaries() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.beneficiaries);
  }
  getBeneficiary(id) {
    const beneficiary = this.beneficiaries.find(b => b.id === id);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(beneficiary);
  }
  addBeneficiary(beneficiary) {
    const newBeneficiary = {
      ...beneficiary,
      id: Date.now().toString(),
      createdAt: new Date()
    };
    this.beneficiaries.push(newBeneficiary);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(newBeneficiary);
  }
  updateBeneficiary(id, updates) {
    const index = this.beneficiaries.findIndex(b => b.id === id);
    if (index !== -1) {
      this.beneficiaries[index] = {
        ...this.beneficiaries[index],
        ...updates
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.beneficiaries[index]);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
  }
  deleteBeneficiary(id) {
    const index = this.beneficiaries.findIndex(b => b.id === id);
    if (index !== -1) {
      this.beneficiaries.splice(index, 1);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(true);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(false);
  }
  getRecentPayees(limit = 5) {
    const recent = this.beneficiaries.filter(b => b.lastUsed).sort((a, b) => (b.lastUsed?.getTime() || 0) - (a.lastUsed?.getTime() || 0)).slice(0, limit);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(recent);
  }
  searchBeneficiaries(query) {
    const filtered = this.beneficiaries.filter(b => b.name.toLowerCase().includes(query.toLowerCase()) || b.accountNumber.includes(query) || b.bankName.toLowerCase().includes(query.toLowerCase()) || b.nickname && b.nickname.toLowerCase().includes(query.toLowerCase()));
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(filtered);
  }
  static {
    this.ɵfac = function BeneficiaryService_Factory(t) {
      return new (t || BeneficiaryService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: BeneficiaryService,
      factory: BeneficiaryService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 1604:
/*!**************************************************!*\
  !*** ./src/app/services/bill-payment.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BillPaymentService: () => (/* binding */ BillPaymentService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 4796);





class BillPaymentService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getAuthHeaders() {
    const token = this.authService.getToken();
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
  // Bill Payment Operations
  createBillPayment(request) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills`, request, {
      headers: this.getAuthHeaders()
    });
  }
  getBillPayments() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills`, {
      headers: this.getAuthHeaders()
    });
  }
  getBillPayment(paymentId) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/${paymentId}`, {
      headers: this.getAuthHeaders()
    });
  }
  getBillPaymentsByStatus(status) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills`, {
      headers: this.getAuthHeaders(),
      params: {
        status: status.toString()
      }
    });
  }
  cancelBillPayment(paymentId) {
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/${paymentId}/cancel`, {}, {
      headers: this.getAuthHeaders()
    });
  }
  // Scheduled and Recurring Payments
  getScheduledPayments() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/scheduled`, {
      headers: this.getAuthHeaders()
    });
  }
  getRecurringPayments() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/recurring`, {
      headers: this.getAuthHeaders()
    });
  }
  updateRecurringPayment(paymentId, payment) {
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/recurring/${paymentId}`, payment, {
      headers: this.getAuthHeaders()
    });
  }
  cancelRecurringPayment(paymentId) {
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/recurring/${paymentId}`, {
      headers: this.getAuthHeaders()
    });
  }
  // Payee Management
  getPayees() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/payees`, {
      headers: this.getAuthHeaders()
    });
  }
  getPayeesByCategory(category) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/payees`, {
      headers: this.getAuthHeaders(),
      params: {
        category: category.toString()
      }
    });
  }
  addPayee(payee) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/payees`, payee, {
      headers: this.getAuthHeaders()
    });
  }
  updatePayee(payeeId, payee) {
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/payees/${payeeId}`, payee, {
      headers: this.getAuthHeaders()
    });
  }
  deletePayee(payeeId) {
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/payees/${payeeId}`, {
      headers: this.getAuthHeaders()
    });
  }
  // Bill Management
  getPaymentHistory(fromDate, toDate) {
    let params = {};
    if (fromDate) params.fromDate = fromDate.toISOString();
    if (toDate) params.toDate = toDate.toISOString();
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/history`, {
      headers: this.getAuthHeaders(),
      params
    });
  }
  getUpcomingBills() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/upcoming`, {
      headers: this.getAuthHeaders()
    });
  }
  getOverdueBills() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/overdue`, {
      headers: this.getAuthHeaders()
    });
  }
  // Validation
  validateBillPayment(request) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/bills/validate`, request, {
      headers: this.getAuthHeaders()
    });
  }
  static {
    this.ɵfac = function BillPaymentService_Factory(t) {
      return new (t || BillPaymentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: BillPaymentService,
      factory: BillPaymentService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 1760:
/*!******************************************************!*\
  !*** ./src/app/services/financial-advice.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinancialAdviceService: () => (/* binding */ FinancialAdviceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);


class FinancialAdviceService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:8080/api/financial-advice';
  }
  getAdvice(data) {
    return this.http.post(this.apiUrl, data);
  }
  static {
    this.ɵfac = function FinancialAdviceService_Factory(t) {
      return new (t || FinancialAdviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FinancialAdviceService,
      factory: FinancialAdviceService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 1098:
/*!********************************************************!*\
  !*** ./src/app/services/financial-analysis.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FinancialAnalysisService: () => (/* binding */ FinancialAnalysisService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/financial-analysis.model */ 3182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);






class FinancialAnalysisService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  // Cash Flow Forecasting
  getCashFlowForecast(period = _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__.ForecastPeriod.MONTHLY) {
    return this.http.get(`${this.apiUrl}/financial-analysis/cash-flow-forecast?period=${period}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching cash flow forecast:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.generateMockCashFlowForecast(period));
    }));
  }
  getForecastPeriods() {
    return this.http.get(`${this.apiUrl}/financial-analysis/cash-flow-forecast/periods`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching forecast periods:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([{
        value: '1_MONTH',
        label: '1 Month',
        description: 'Short-term forecast'
      }, {
        value: '3_MONTHS',
        label: '3 Months',
        description: 'Quarterly forecast'
      }, {
        value: '6_MONTHS',
        label: '6 Months',
        description: 'Semi-annual forecast'
      }, {
        value: '12_MONTHS',
        label: '12 Months',
        description: 'Annual forecast'
      }]);
    }));
  }
  // Spending Pattern Analysis
  getSpendingPatterns(months = 6) {
    return this.http.get(`${this.apiUrl}/financial-analysis/spending-patterns?months=${months}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching spending patterns:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.generateMockSpendingPatterns());
    }));
  }
  getSpendingCategories() {
    return this.http.get(`${this.apiUrl}/financial-analysis/spending-patterns/categories`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching spending categories:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.generateMockSpendingCategories());
    }));
  }
  // Bill Reminders
  getBillReminders() {
    return this.http.get(`${this.apiUrl}/financial-analysis/bill-reminders`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching bill reminders:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.generateMockBillReminders());
    }));
  }
  createBillReminder(reminder) {
    return this.http.post(`${this.apiUrl}/financial-analysis/bill-reminders`, reminder).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error creating bill reminder:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.generateMockBillReminder(reminder));
    }));
  }
  updateBillReminder(id, reminder) {
    return this.http.put(`${this.apiUrl}/financial-analysis/bill-reminders/${id}`, reminder).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error updating bill reminder:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.generateMockBillReminder(reminder, id));
    }));
  }
  deleteBillReminder(id) {
    return this.http.delete(`${this.apiUrl}/financial-analysis/bill-reminders/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error deleting bill reminder:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(true);
    }));
  }
  getBillCategories() {
    return this.http.get(`${this.apiUrl}/financial-analysis/bill-reminders/categories`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching bill categories:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([{
        value: 'UTILITIES',
        label: 'Utilities',
        icon: 'bolt'
      }, {
        value: 'INSURANCE',
        label: 'Insurance',
        icon: 'shield-alt'
      }, {
        value: 'RENT',
        label: 'Rent/Mortgage',
        icon: 'home'
      }, {
        value: 'CREDIT_CARD',
        label: 'Credit Card',
        icon: 'credit-card'
      }, {
        value: 'LOAN',
        label: 'Loan Payment',
        icon: 'money-bill-wave'
      }, {
        value: 'SUBSCRIPTION',
        label: 'Subscription',
        icon: 'sync'
      }, {
        value: 'MEDICAL',
        label: 'Medical',
        icon: 'stethoscope'
      }, {
        value: 'OTHER',
        label: 'Other',
        icon: 'ellipsis-h'
      }]);
    }));
  }
  getBillPriorities() {
    return this.http.get(`${this.apiUrl}/financial-analysis/bill-reminders/priorities`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching bill priorities:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([{
        value: 'LOW',
        label: 'Low',
        color: 'success'
      }, {
        value: 'MEDIUM',
        label: 'Medium',
        color: 'warning'
      }, {
        value: 'HIGH',
        label: 'High',
        color: 'danger'
      }, {
        value: 'CRITICAL',
        label: 'Critical',
        color: 'dark'
      }]);
    }));
  }
  // Financial Insights
  getFinancialInsights() {
    return this.http.get(`${this.apiUrl}/financial-analysis/insights`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching financial insights:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.generateMockFinancialInsights());
    }));
  }
  getInsightTypes() {
    return this.http.get(`${this.apiUrl}/financial-analysis/insights/types`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching insight types:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([{
        value: 'SPENDING_ALERT',
        label: 'Spending Alert',
        icon: 'exclamation-triangle'
      }, {
        value: 'SAVINGS_OPPORTUNITY',
        label: 'Savings Opportunity',
        icon: 'piggy-bank'
      }, {
        value: 'BILL_REMINDER',
        label: 'Bill Reminder',
        icon: 'calendar-alt'
      }, {
        value: 'BUDGET_ALERT',
        label: 'Budget Alert',
        icon: 'chart-pie'
      }, {
        value: 'INVESTMENT_OPPORTUNITY',
        label: 'Investment Opportunity',
        icon: 'chart-line'
      }]);
    }));
  }
  // Dashboard Summary
  getDashboardSummary() {
    return this.http.get(`${this.apiUrl}/financial-analysis/dashboard-summary`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(error => {
      console.error('Error fetching dashboard summary:', error);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)({
        totalBills: 3,
        upcomingBills: 1,
        totalInsights: 3,
        unreadInsights: 2,
        spendingTrends: [],
        recentInsights: []
      });
    }));
  }
  // Mock Data Generators
  generateMockCashFlowForecast(period) {
    const now = new Date();
    const endDate = new Date(now);
    switch (period) {
      case _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__.ForecastPeriod.WEEKLY:
        endDate.setDate(now.getDate() + 7);
        break;
      case _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__.ForecastPeriod.MONTHLY:
        endDate.setMonth(now.getMonth() + 1);
        break;
      case _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__.ForecastPeriod.QUARTERLY:
        endDate.setMonth(now.getMonth() + 3);
        break;
      case _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__.ForecastPeriod.YEARLY:
        endDate.setFullYear(now.getFullYear() + 1);
        break;
    }
    return {
      id: '1',
      userId: 'user1',
      period,
      startDate: now,
      endDate,
      projectedIncome: 8500,
      projectedExpenses: 6200,
      projectedBalance: 2300,
      confidence: 85,
      factors: [{
        type: 'INCOME',
        description: 'Monthly salary',
        impact: 5000,
        probability: 95
      }, {
        type: 'EXPENSE',
        description: 'Rent payment',
        impact: -2000,
        probability: 100
      }],
      createdAt: now,
      updatedAt: now
    };
  }
  generateMockSpendingPatterns() {
    return [{
      id: '1',
      userId: 'user1',
      category: 'Food & Dining',
      totalAmount: 1200,
      averageAmount: 300,
      frequency: 12,
      trend: _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__.TrendDirection.INCREASING,
      percentageOfTotal: 25,
      lastTransactionDate: new Date(),
      analysisPeriod: new Date()
    }, {
      id: '2',
      userId: 'user1',
      category: 'Transportation',
      totalAmount: 800,
      averageAmount: 200,
      frequency: 8,
      trend: _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__.TrendDirection.STABLE,
      percentageOfTotal: 17,
      lastTransactionDate: new Date(),
      analysisPeriod: new Date()
    }, {
      id: '3',
      userId: 'user1',
      category: 'Entertainment',
      totalAmount: 600,
      averageAmount: 150,
      frequency: 4,
      trend: _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__.TrendDirection.DECREASING,
      percentageOfTotal: 12,
      lastTransactionDate: new Date(),
      analysisPeriod: new Date()
    }];
  }
  generateMockSpendingCategories() {
    return [{
      name: 'Food & Dining',
      color: '#FF6B6B',
      icon: 'restaurant',
      budget: 500,
      spent: 300,
      remaining: 200
    }, {
      name: 'Transportation',
      color: '#4ECDC4',
      icon: 'directions_car',
      budget: 300,
      spent: 200,
      remaining: 100
    }, {
      name: 'Entertainment',
      color: '#45B7D1',
      icon: 'movie',
      budget: 200,
      spent: 150,
      remaining: 50
    }, {
      name: 'Shopping',
      color: '#96CEB4',
      icon: 'shopping_bag',
      budget: 400,
      spent: 250,
      remaining: 150
    }];
  }
  generateMockBillReminders() {
    return [{
      id: '1',
      userId: 'user1',
      billName: 'Electricity Bill',
      amount: 150,
      dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      category: 'Utilities',
      isRecurring: true,
      frequency: 'MONTHLY',
      status: 'PENDING',
      priority: 'MEDIUM',
      paymentSuggestion: {
        suggestedAmount: 150,
        suggestedDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
        reason: 'Pay early to avoid late fees',
        impact: 'Save $15 late fee',
        alternatives: []
      },
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: '2',
      userId: 'user1',
      billName: 'Credit Card Payment',
      amount: 500,
      dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      category: 'Credit',
      isRecurring: true,
      frequency: 'MONTHLY',
      status: 'PENDING',
      priority: 'HIGH',
      paymentSuggestion: {
        suggestedAmount: 500,
        suggestedDate: new Date(),
        reason: 'High priority payment',
        impact: 'Avoid interest charges',
        alternatives: []
      },
      createdAt: new Date(),
      updatedAt: new Date()
    }];
  }
  generateMockBillReminder(reminder, id) {
    return {
      id: id || 'new-id',
      userId: 'user1',
      billName: reminder.billName || 'New Bill',
      amount: reminder.amount || 0,
      dueDate: reminder.dueDate || new Date(),
      category: reminder.category || 'Other',
      isRecurring: reminder.isRecurring || false,
      status: 'PENDING',
      priority: 'MEDIUM',
      paymentSuggestion: {
        suggestedAmount: reminder.amount || 0,
        suggestedDate: new Date(),
        reason: 'New bill reminder',
        impact: 'Timely payment',
        alternatives: []
      },
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }
  generateMockFinancialInsights() {
    return [{
      id: '1',
      userId: 'user1',
      type: _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__.InsightType.SPENDING_ALERT,
      title: 'High Entertainment Spending',
      description: 'Your entertainment spending is 20% higher than last month. Consider reviewing your budget.',
      severity: _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__.InsightSeverity.WARNING,
      actionable: true,
      actionItems: ['Review entertainment budget', 'Set spending limits'],
      data: {
        category: 'Entertainment',
        increase: 20
      },
      createdAt: new Date()
    }, {
      id: '2',
      userId: 'user1',
      type: _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__.InsightType.BILL_REMINDER,
      title: 'Upcoming Bill Due',
      description: 'Your electricity bill of $150 is due in 5 days.',
      severity: _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__.InsightSeverity.INFO,
      actionable: true,
      actionItems: ['Schedule payment', 'Set up auto-pay'],
      data: {
        billName: 'Electricity Bill',
        amount: 150,
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
      },
      createdAt: new Date()
    }, {
      id: '3',
      userId: 'user1',
      type: _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__.InsightType.SAVINGS_OPPORTUNITY,
      title: 'Savings Opportunity Detected',
      description: 'You could save $200/month by reducing dining out expenses.',
      severity: _models_financial_analysis_model__WEBPACK_IMPORTED_MODULE_1__.InsightSeverity.INFO,
      actionable: true,
      actionItems: ['Cook more meals at home', 'Set dining budget'],
      data: {
        potentialSavings: 200,
        category: 'Food & Dining'
      },
      createdAt: new Date()
    }];
  }
  static {
    this.ɵfac = function FinancialAnalysisService_Factory(t) {
      return new (t || FinancialAnalysisService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: FinancialAnalysisService,
      factory: FinancialAnalysisService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 7473:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NotificationPriority: () => (/* binding */ NotificationPriority),
/* harmony export */   NotificationService: () => (/* binding */ NotificationService),
/* harmony export */   NotificationType: () => (/* binding */ NotificationType)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 4796);






var NotificationType;
(function (NotificationType) {
  NotificationType["INFO"] = "INFO";
  NotificationType["SUCCESS"] = "SUCCESS";
  NotificationType["WARNING"] = "WARNING";
  NotificationType["ERROR"] = "ERROR";
  NotificationType["TRANSACTION"] = "TRANSACTION";
  NotificationType["SECURITY"] = "SECURITY";
  NotificationType["SYSTEM"] = "SYSTEM";
})(NotificationType || (NotificationType = {}));
var NotificationPriority;
(function (NotificationPriority) {
  NotificationPriority["LOW"] = "LOW";
  NotificationPriority["MEDIUM"] = "MEDIUM";
  NotificationPriority["HIGH"] = "HIGH";
  NotificationPriority["URGENT"] = "URGENT";
})(NotificationPriority || (NotificationPriority = {}));
class NotificationService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.notifications$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.unreadCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
    this.realTimeNotifications$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.notifications = this.notifications$.asObservable();
    this.unreadCount = this.unreadCount$.asObservable();
    this.realTimeNotifications = this.realTimeNotifications$.asObservable();
    // Initialize notifications when service is created
    this.loadNotifications();
    this.loadUnreadCount();
  }
  getAuthHeaders() {
    const token = this.authService.getToken();
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
  // WebSocket Connection
  connect() {
    if (this.websocket) {
      return; // Already connected
    }

    try {
      this.websocket = new WebSocket(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.wsUrl);
      this.websocket.onopen = () => {
        console.log('WebSocket connected for notifications');
      };
      this.websocket.onmessage = event => {
        try {
          const notification = JSON.parse(event.data);
          this.handleRealTimeNotification(notification);
        } catch (error) {
          console.error('Error parsing notification:', error);
        }
      };
      this.websocket.onclose = () => {
        console.log('WebSocket disconnected');
        this.websocket = undefined;
        // Attempt to reconnect after 5 seconds
        setTimeout(() => this.connect(), 5000);
      };
      this.websocket.onerror = error => {
        console.error('WebSocket error:', error);
      };
    } catch (error) {
      console.error('Failed to connect WebSocket:', error);
    }
  }
  disconnect() {
    if (this.websocket) {
      this.websocket.close();
      this.websocket = undefined;
    }
  }
  // HTTP API Methods
  getNotifications() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/notifications`, {
      headers: this.getAuthHeaders()
    });
  }
  getUnreadNotifications() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/notifications/unread`, {
      headers: this.getAuthHeaders()
    });
  }
  markAsRead(notificationId) {
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/notifications/${notificationId}/read`, {}, {
      headers: this.getAuthHeaders()
    });
  }
  markAllAsRead() {
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/notifications/read-all`, {}, {
      headers: this.getAuthHeaders()
    });
  }
  deleteNotification(notificationId) {
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/notifications/${notificationId}`, {
      headers: this.getAuthHeaders()
    });
  }
  getUnreadCount() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/notifications/unread/count`, {
      headers: this.getAuthHeaders()
    });
  }
  // Local Methods
  loadNotifications() {
    this.getNotifications().subscribe({
      next: notifications => {
        this.notifications$.next(notifications);
      },
      error: error => {
        console.error('Error loading notifications:', error);
      }
    });
  }
  loadUnreadCount() {
    this.getUnreadCount().subscribe({
      next: response => {
        this.unreadCount$.next(response.count);
      },
      error: error => {
        console.error('Error loading unread count:', error);
      }
    });
  }
  handleRealTimeNotification(notification) {
    // Add to notifications list
    const currentNotifications = this.notifications$.value;
    this.notifications$.next([notification, ...currentNotifications]);
    // Update unread count
    this.unreadCount$.next(this.unreadCount$.value + 1);
    // Emit real-time notification
    this.realTimeNotifications$.next(notification);
    // Show browser notification if permission granted
    this.showBrowserNotification(notification);
  }
  showBrowserNotification(notification) {
    if ('Notification' in window && Notification.permission === 'granted') {
      const browserNotification = new Notification(notification.title, {
        body: notification.message,
        icon: '/assets/icons/notification-icon.png',
        badge: '/assets/icons/badge-icon.png',
        tag: notification.id
      });
      // Auto close after 5 seconds
      setTimeout(() => {
        browserNotification.close();
      }, 5000);
      // Handle click
      browserNotification.onclick = () => {
        window.focus();
        if (notification.actionUrl) {
          // Navigate to action URL if provided
          window.location.href = notification.actionUrl;
        }
        browserNotification.close();
      };
    }
  }
  // Request browser notification permission
  requestNotificationPermission() {
    if ('Notification' in window) {
      return Notification.requestPermission();
    }
    return Promise.resolve('denied');
  }
  // Toast notification methods for user feedback
  showSuccess(message, title = 'Success') {
    const notification = {
      id: this.generateId(),
      title,
      message,
      type: NotificationType.SUCCESS,
      priority: NotificationPriority.MEDIUM,
      isRead: false,
      createdAt: new Date(),
      userId: this.authService.getCurrentUser()?.id || 'anonymous'
    };
    this.handleRealTimeNotification(notification);
  }
  showError(message, title = 'Error') {
    const notification = {
      id: this.generateId(),
      title,
      message,
      type: NotificationType.ERROR,
      priority: NotificationPriority.HIGH,
      isRead: false,
      createdAt: new Date(),
      userId: this.authService.getCurrentUser()?.id || 'anonymous'
    };
    this.handleRealTimeNotification(notification);
  }
  showInfo(message, title = 'Info') {
    const notification = {
      id: this.generateId(),
      title,
      message,
      type: NotificationType.INFO,
      priority: NotificationPriority.LOW,
      isRead: false,
      createdAt: new Date(),
      userId: this.authService.getCurrentUser()?.id || 'anonymous'
    };
    this.handleRealTimeNotification(notification);
  }
  showWarning(message, title = 'Warning') {
    const notification = {
      id: this.generateId(),
      title,
      message,
      type: NotificationType.WARNING,
      priority: NotificationPriority.MEDIUM,
      isRead: false,
      createdAt: new Date(),
      userId: this.authService.getCurrentUser()?.id || 'anonymous'
    };
    this.handleRealTimeNotification(notification);
  }
  generateId() {
    return 'notif_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }
  static {
    this.ɵfac = function NotificationService_Factory(t) {
      return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: NotificationService,
      factory: NotificationService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 9192:
/*!***************************************************!*\
  !*** ./src/app/services/pdf-statement.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PdfStatementService: () => (/* binding */ PdfStatementService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 3942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 5074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);



class PdfStatementService {
  constructor() {}
  /**
   * Generate Account Statement PDF
   */
  generateAccountStatement(options) {
    console.log('🧞‍♂️ Generating account statement:', options);
    return this.createPdfStatement('Account Statement', options, this.getAccountStatementData()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.delay)(2000) // Simulate processing time
    );
  }
  /**
   * Generate Transaction History PDF
   */
  generateTransactionHistory(options) {
    console.log('🧞‍♂️ Generating transaction history:', options);
    return this.createPdfStatement('Transaction Report', options, this.getTransactionData()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.delay)(2000));
  }
  /**
   * Generate Tax Statement PDF
   */
  generateTaxStatement(year) {
    console.log('🧞‍♂️ Generating tax statement for year:', year);
    const options = {
      startDate: new Date(year, 0, 1),
      endDate: new Date(year, 11, 31),
      statementType: 'yearly'
    };
    return this.createPdfStatement('Tax Statement', options, this.getTaxStatementData(year)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.delay)(2000));
  }
  /**
   * Generate Loan Statement PDF
   */
  generateLoanStatement(loanId, options) {
    console.log('🧞‍♂️ Generating loan statement:', loanId, options);
    return this.createPdfStatement('Loan Statement', options, this.getLoanStatementData()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.delay)(2000));
  }
  /**
   * Generate Investment Statement PDF
   */
  generateInvestmentStatement(portfolioId, options) {
    console.log('🧞‍♂️ Generating investment statement:', portfolioId, options);
    return this.createPdfStatement('Investment Report', options, this.getInvestmentData()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.delay)(2000));
  }
  /**
   * Generate Digital Wallet Statement PDF
   */
  generateDigitalWalletStatement(options) {
    console.log('🧞‍♂️ Generating digital wallet statement:', options);
    return this.createPdfStatement('Digital Wallet Statement', options, this.getWalletData()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.delay)(2000));
  }
  /**
   * Create PDF Statement using jsPDF
   */
  createPdfStatement(title, options, data) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      try {
        // Check if jsPDF is available from CDN
        const jsPDF = window.jspdf?.jsPDF || window.jsPDF;
        if (jsPDF) {
          console.log('✨ Creating PDF using jsPDF...');
          const pdf = new jsPDF();
          // Add header
          this.addPdfHeader(pdf, title);
          // Add statement period
          this.addStatementPeriod(pdf, options);
          // Add statement content based on type
          this.addStatementContent(pdf, title, data);
          // Add footer
          this.addPdfFooter(pdf);
          // Generate blob
          const pdfBlob = pdf.output('blob');
          console.log('📄 PDF generated successfully!');
          observer.next(pdfBlob);
          observer.complete();
        } else {
          // Fallback: create a properly formatted text document
          console.warn('⚠️ jsPDF not available, creating formatted text document');
          const fallbackContent = this.createDetailedTextStatement(title, options, data);
          const blob = new Blob([fallbackContent], {
            type: 'text/plain'
          });
          observer.next(blob);
          observer.complete();
        }
      } catch (error) {
        console.error('❌ Error generating PDF:', error);
        // Create fallback document
        const fallbackContent = this.createDetailedTextStatement(title, options, data);
        const blob = new Blob([fallbackContent], {
          type: 'text/plain'
        });
        observer.next(blob);
        observer.complete();
      }
    });
  }
  addPdfHeader(pdf, title) {
    // BankGenie Header
    pdf.setFontSize(20);
    pdf.setTextColor(156, 39, 176); // Purple color
    pdf.text('🧞‍♂️ BankGenie', 20, 20);
    pdf.setFontSize(16);
    pdf.setTextColor(0, 0, 0);
    pdf.text(title, 20, 35);
    // Add line
    pdf.setDrawColor(156, 39, 176);
    pdf.line(20, 40, 190, 40);
  }
  addStatementPeriod(pdf, options) {
    pdf.setFontSize(10);
    pdf.setTextColor(100, 100, 100);
    const startDate = options.startDate.toLocaleDateString();
    const endDate = options.endDate.toLocaleDateString();
    pdf.text(`Statement Period: ${startDate} to ${endDate}`, 20, 50);
    pdf.text(`Generated on: ${new Date().toLocaleString()}`, 20, 55);
  }
  addStatementContent(pdf, title, data) {
    let yPosition = 70;
    pdf.setFontSize(12);
    pdf.setTextColor(0, 0, 0);
    // Add content based on statement type
    if (title.includes('Account')) {
      yPosition = this.addAccountContent(pdf, data, yPosition);
    } else if (title.includes('Transaction')) {
      yPosition = this.addTransactionContent(pdf, data, yPosition);
    } else if (title.includes('Tax')) {
      yPosition = this.addTaxContent(pdf, data, yPosition);
    } else if (title.includes('Investment')) {
      yPosition = this.addInvestmentContent(pdf, data, yPosition);
    }
  }
  addAccountContent(pdf, data, yPosition) {
    pdf.text('Account Summary', 20, yPosition);
    yPosition += 10;
    data.accounts.forEach(account => {
      pdf.text(`${account.type}: ${account.number}`, 20, yPosition);
      pdf.text(`Balance: $${account.balance.toFixed(2)}`, 120, yPosition);
      yPosition += 8;
    });
    yPosition += 5;
    pdf.setFontSize(14);
    pdf.text(`Total Balance: $${data.totalBalance.toFixed(2)}`, 20, yPosition);
    return yPosition + 15;
  }
  addTransactionContent(pdf, data, yPosition) {
    pdf.text('Recent Transactions', 20, yPosition);
    yPosition += 10;
    data.transactions.forEach(transaction => {
      pdf.text(transaction.description, 20, yPosition);
      pdf.text(transaction.category, 90, yPosition);
      const amount = transaction.amount >= 0 ? `+$${transaction.amount.toFixed(2)}` : `-$${Math.abs(transaction.amount).toFixed(2)}`;
      pdf.text(amount, 150, yPosition);
      yPosition += 8;
    });
    return yPosition + 10;
  }
  addTaxContent(pdf, data, yPosition) {
    pdf.text('Tax Summary', 20, yPosition);
    yPosition += 10;
    pdf.text(`Interest Earned: $${data.interestEarned.toFixed(2)}`, 20, yPosition);
    yPosition += 8;
    pdf.text(`Tax Deductions: $${data.taxDeductions.toFixed(2)}`, 20, yPosition);
    yPosition += 8;
    pdf.text(`Taxable Income: $${data.taxableIncome.toFixed(2)}`, 20, yPosition);
    return yPosition + 15;
  }
  addInvestmentContent(pdf, data, yPosition) {
    pdf.text('Investment Portfolio', 20, yPosition);
    yPosition += 10;
    data.investments.forEach(investment => {
      pdf.text(`${investment.name}: $${investment.value.toFixed(2)}`, 20, yPosition);
      const change = investment.change >= 0 ? `+${investment.change}%` : `${investment.change}%`;
      pdf.text(change, 150, yPosition);
      yPosition += 8;
    });
    return yPosition + 10;
  }
  addPdfFooter(pdf) {
    const pageHeight = pdf.internal.pageSize.height;
    pdf.setFontSize(8);
    pdf.setTextColor(150, 150, 150);
    pdf.text('Generated by BankGenie - Your Magical Banking Assistant', 20, pageHeight - 20);
    pdf.text('This document contains confidential financial information', 20, pageHeight - 15);
  }
  createDetailedTextStatement(title, options, data) {
    const startDate = options.startDate.toLocaleDateString();
    const endDate = options.endDate.toLocaleDateString();
    const generatedDate = new Date().toLocaleString();
    let content = `🧞‍♂️ BankGenie - ${title}\n`;
    content += `${'='.repeat(60)}\n\n`;
    content += `Statement Period: ${startDate} to ${endDate}\n`;
    content += `Generated on: ${generatedDate}\n`;
    content += `${'='.repeat(60)}\n\n`;
    // Add content based on statement type
    if (title.includes('Account')) {
      content += this.formatAccountData(data);
    } else if (title.includes('Transaction')) {
      content += this.formatTransactionData(data);
    } else if (title.includes('Tax')) {
      content += this.formatTaxData(data);
    } else if (title.includes('Investment')) {
      content += this.formatInvestmentData(data);
    } else if (title.includes('Loan')) {
      content += this.formatLoanData(data);
    } else if (title.includes('Wallet')) {
      content += this.formatWalletData(data);
    }
    content += `\n${'='.repeat(60)}\n`;
    content += `Generated by BankGenie - Your Magical Banking Assistant\n`;
    content += `This document contains confidential financial information\n`;
    content += `For support, visit our help center or contact customer service\n`;
    return content;
  }
  formatAccountData(data) {
    let content = `ACCOUNT SUMMARY\n`;
    content += `${'-'.repeat(30)}\n`;
    data.accounts.forEach(account => {
      content += `${account.type}: ${account.number}\n`;
      content += `Balance: $${account.balance.toFixed(2)}\n\n`;
    });
    content += `${'-'.repeat(30)}\n`;
    content += `TOTAL BALANCE: $${data.totalBalance.toFixed(2)}\n`;
    return content;
  }
  formatTransactionData(data) {
    let content = `RECENT TRANSACTIONS\n`;
    content += `${'-'.repeat(50)}\n`;
    content += `${'Description'.padEnd(20)} ${'Category'.padEnd(15)} Amount\n`;
    content += `${'-'.repeat(50)}\n`;
    data.transactions.forEach(transaction => {
      const amount = transaction.amount >= 0 ? `+$${transaction.amount.toFixed(2)}` : `-$${Math.abs(transaction.amount).toFixed(2)}`;
      content += `${transaction.description.padEnd(20)} ${transaction.category.padEnd(15)} ${amount}\n`;
    });
    return content;
  }
  formatTaxData(data) {
    let content = `TAX SUMMARY - ${data.year}\n`;
    content += `${'-'.repeat(30)}\n`;
    content += `Interest Earned: $${data.interestEarned.toFixed(2)}\n`;
    content += `Tax Deductions: $${data.taxDeductions.toFixed(2)}\n`;
    content += `Taxable Income: $${data.taxableIncome.toFixed(2)}\n`;
    content += `Tax Withheld: $${data.taxWithheld.toFixed(2)}\n`;
    return content;
  }
  formatInvestmentData(data) {
    let content = `INVESTMENT PORTFOLIO\n`;
    content += `${'-'.repeat(40)}\n`;
    content += `${'Investment'.padEnd(20)} ${'Value'.padEnd(12)} Change\n`;
    content += `${'-'.repeat(40)}\n`;
    data.investments.forEach(investment => {
      const change = investment.change >= 0 ? `+${investment.change}%` : `${investment.change}%`;
      content += `${investment.name.padEnd(20)} $${investment.value.toFixed(2).padEnd(10)} ${change}\n`;
    });
    content += `${'-'.repeat(40)}\n`;
    content += `TOTAL VALUE: $${data.totalValue.toFixed(2)}\n`;
    return content;
  }
  formatLoanData(data) {
    let content = `LOAN STATEMENT\n`;
    content += `${'-'.repeat(30)}\n`;
    content += `Loan ID: ${data.loanId}\n`;
    content += `Loan Type: ${data.loanType}\n`;
    content += `Principal Amount: $${data.principalAmount.toFixed(2)}\n`;
    content += `Outstanding Balance: $${data.outstandingBalance.toFixed(2)}\n`;
    content += `Monthly EMI: $${data.monthlyEMI.toFixed(2)}\n`;
    content += `Interest Rate: ${data.interestRate}%\n`;
    return content;
  }
  formatWalletData(data) {
    let content = `DIGITAL WALLET STATEMENT\n`;
    content += `${'-'.repeat(30)}\n`;
    content += `Wallet Balance: $${data.walletBalance.toFixed(2)}\n`;
    content += `Linked Cards: ${data.linkedCards}\n`;
    content += `Total Transactions: ${data.totalTransactions}\n`;
    content += `Monthly Spent: $${data.monthlySpent.toFixed(2)}\n`;
    return content;
  }
  /**
   * Download Statement as PDF or Text
   */
  downloadStatement(blob, filename) {
    try {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      // Determine file extension based on blob type
      const fileExtension = blob.type.includes('pdf') ? '.pdf' : '.txt';
      link.download = `${filename}-${this.formatDate(new Date())}${fileExtension}`;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      const fileType = fileExtension === '.pdf' ? 'PDF' : 'text document';
      console.log(`✨ Statement download completed successfully! Downloaded as ${fileType}`);
      // Show user notification
      if (fileExtension === '.txt') {
        console.log('💡 Note: PDF generation unavailable. Downloaded as formatted text document.');
      }
    } catch (error) {
      console.error('❌ Error downloading statement:', error);
      // Try alternative download method
      try {
        const dataUrl = URL.createObjectURL(blob);
        window.open(dataUrl, '_blank');
        console.log('📂 Statement opened in new tab as fallback');
      } catch (fallbackError) {
        console.error('❌ Fallback download also failed:', fallbackError);
        alert('Download failed. Please try again or contact support.');
      }
    }
  }
  // Mock data generators
  getAccountStatementData() {
    return {
      accounts: [{
        type: 'Savings Account',
        number: '****4567',
        balance: 15750.50
      }, {
        type: 'Checking Account',
        number: '****4568',
        balance: 8240.25
      }],
      totalBalance: 23990.75
    };
  }
  getTransactionData() {
    return {
      transactions: [{
        description: 'Salary Deposit',
        amount: 3500.00,
        category: 'Income',
        date: new Date()
      }, {
        description: 'Grocery Store',
        amount: -89.45,
        category: 'Food & Dining',
        date: new Date()
      }, {
        description: 'Electric Bill',
        amount: -125.50,
        category: 'Utilities',
        date: new Date()
      }, {
        description: 'ATM Withdrawal',
        amount: -100.00,
        category: 'Cash',
        date: new Date()
      }, {
        description: 'Online Purchase',
        amount: -45.99,
        category: 'Shopping',
        date: new Date()
      }]
    };
  }
  getTaxStatementData(year) {
    return {
      year: year,
      interestEarned: 1245.67,
      taxDeductions: 890.50,
      taxableIncome: 45600.00,
      taxWithheld: 6840.00
    };
  }
  getLoanStatementData() {
    return {
      loanId: 'LOAN001',
      loanType: 'Home Loan',
      principalAmount: 250000.00,
      outstandingBalance: 187500.00,
      monthlyEMI: 2150.00,
      interestRate: 3.75
    };
  }
  getInvestmentData() {
    return {
      investments: [{
        name: 'S&P 500 Fund',
        value: 12500.00,
        change: 5.67
      }, {
        name: 'Tech Stocks',
        value: 8750.00,
        change: -2.34
      }, {
        name: 'Bonds Fund',
        value: 5000.00,
        change: 1.23
      }],
      totalValue: 26250.00
    };
  }
  getWalletData() {
    return {
      walletBalance: 1250.75,
      linkedCards: 3,
      totalTransactions: 45,
      monthlySpent: 567.89
    };
  }
  formatDate(date) {
    return date.toISOString().split('T')[0];
  }
  static {
    this.ɵfac = function PdfStatementService_Factory(t) {
      return new (t || PdfStatementService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PdfStatementService,
      factory: PdfStatementService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 8513:
/*!**********************************************!*\
  !*** ./src/app/services/transfer.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransferService: () => (/* binding */ TransferService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 4796);





class TransferService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
  }
  getAuthHeaders() {
    const token = this.authService.getToken();
    return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }
  // Transfer Operations
  createTransfer(request) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/transfers`, request, {
      headers: this.getAuthHeaders()
    });
  }
  getTransfers() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/transfers`, {
      headers: this.getAuthHeaders()
    });
  }
  getTransfer(transferId) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/transfers/${transferId}`, {
      headers: this.getAuthHeaders()
    });
  }
  getTransfersByStatus(status) {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/transfers`, {
      headers: this.getAuthHeaders(),
      params: {
        status: status.toString()
      }
    });
  }
  cancelTransfer(transferId) {
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/transfers/${transferId}/cancel`, {}, {
      headers: this.getAuthHeaders()
    });
  }
  scheduleTransfer(request) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/transfers/schedule`, request, {
      headers: this.getAuthHeaders()
    });
  }
  getScheduledTransfers() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/transfers/scheduled`, {
      headers: this.getAuthHeaders()
    });
  }
  // Beneficiary Management
  getBeneficiaries() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/beneficiaries`, {
      headers: this.getAuthHeaders()
    });
  }
  addBeneficiary(beneficiary) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/beneficiaries`, beneficiary, {
      headers: this.getAuthHeaders()
    });
  }
  updateBeneficiary(beneficiaryId, beneficiary) {
    return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/beneficiaries/${beneficiaryId}`, beneficiary, {
      headers: this.getAuthHeaders()
    });
  }
  deleteBeneficiary(beneficiaryId) {
    return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/beneficiaries/${beneficiaryId}`, {
      headers: this.getAuthHeaders()
    });
  }
  // Transfer Limits and Validation
  getTransferLimits() {
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/transfers/limits`, {
      headers: this.getAuthHeaders()
    });
  }
  validateTransfer(request) {
    return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/transfers/validate`, request, {
      headers: this.getAuthHeaders()
    });
  }
  // Transfer History
  getTransferHistory(fromDate, toDate) {
    let params = {};
    if (fromDate) params.fromDate = fromDate.toISOString();
    if (toDate) params.toDate = toDate.toISOString();
    return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/transfers/history`, {
      headers: this.getAuthHeaders(),
      params
    });
  }
  static {
    this.ɵfac = function TransferService_Factory(t) {
      return new (t || TransferService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: TransferService,
      factory: TransferService.ɵfac,
      providedIn: 'root'
    });
  }
}


/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api',
  accountServiceUrl: 'http://localhost:8080/api/accounts',
  transferServiceUrl: 'http://localhost:8080/api/transfers',
  billPaymentServiceUrl: 'http://localhost:8080/api/bills',
  notificationServiceUrl: 'http://localhost:8080/api/notifications',
  websocketUrl: 'ws://localhost:8080/ws',
  wsUrl: 'ws://localhost:8080/ws'
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map