import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//nuevis
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './componets/employees/employees.component';
//import { SegundoComponent } from './componets/segundo/segundo.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    //SegundoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
