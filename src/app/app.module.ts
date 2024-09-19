import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SubhanallahComponent } from './subhanallah/subhanallah.component';
import { AlhamdhulillahComponent } from './alhamdhulillah/alhamdhulillah.component';
import { AllahuakbarComponent } from './allahuakbar/allahuakbar.component';
import { CounterComponent } from './counter/counter.component';
import { OtherDikhrComponent } from './other-dikhr/other-dikhr.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubhanallahComponent,
    AlhamdhulillahComponent,
    AllahuakbarComponent,
    CounterComponent,
    OtherDikhrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
