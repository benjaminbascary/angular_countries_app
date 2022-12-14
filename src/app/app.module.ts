// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
// Routing
import { AppRoutingModule } from './router/app-routing.module';
// Developer's
import { AppComponent } from './app.component';
import { CountriesModule } from './countries/countries.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CountriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
