import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ShareModule } from '../share/share.module';
import { LazySubComponent } from './lazy-sub/lazy-sub.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShareModule
  ],
  declarations: [
    LoginComponent,
    LazySubComponent
  ]
})
export class LoginModule { }
