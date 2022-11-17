import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, PhonePipe } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MainComponent } from './main/main.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    PhonePipe,
    DashboardComponent,
    MainComponent,
    EmployeeDetailComponent,
    EmployeeFormComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
