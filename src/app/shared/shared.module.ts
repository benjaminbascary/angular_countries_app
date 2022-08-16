// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Developer's
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../router/app-routing.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
