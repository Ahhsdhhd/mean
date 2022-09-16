import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AddCoursesComponent } from './add-courses/add-courses/add-courses.component';
import { GentlemanCadetsComponent } from './gentleman-cadets/gentleman-cadets/gentleman-cadets.component';
import { BankReportComponent } from './bank-reports/bank-report/bank-report.component';
import { ReportsComponent } from './reports/reports/reports.component';
import { CdaComponent } from './cda/cda/cda.component';
import { BillingComponent } from './billing/billing/billing.component';
import { AdministratorComponent } from './administrator/administrator/administrator.component';
import { ReceiptFormComponent } from './billing/receipt-form/receipt-form.component';

const routes: Routes = [
  { path:'login',component:LoginComponent },
  { path:'signup',component:SignupComponent   },
  { path:'addcourse',component:AddCoursesComponent },

  { path:'gc',component:GentlemanCadetsComponent },
  { path:'billing',component:BillingComponent },

  { path:'cda',component:CdaComponent },
  { path:'admin',component:AdministratorComponent },
  { path:'bankreport',component:BankReportComponent },
  { path:'reports',component:ReportsComponent },
  { path:'receipt',component:ReceiptFormComponent},
  { path:'**',component:LoginComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
