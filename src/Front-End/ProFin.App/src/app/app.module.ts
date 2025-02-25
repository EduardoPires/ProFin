import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { BaseChartDirective } from 'ng2-charts';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationModule } from './navegation/navegation.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CategoryService } from './category/services/categories.service';
import { BudgetService } from './budget/services/budget.service';
import { FinancialTransactionService } from './financial-transaction/services/financial-transaction.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PanelService } from './panel/services/panel.service';
import { AuthInterceptor } from './Utils/AuthInterceptor ';


// export const httpInterceptorProviders = [
//   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
// ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavegationModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BaseChartDirective,
    MatTableModule,
    MatPaginatorModule,
    MatPaginatorModule
  ],
  providers: [
    CategoryService,
    BudgetService,
    CategoryService,
    FinancialTransactionService,
    PanelService,
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, // Registra o interceptor

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
