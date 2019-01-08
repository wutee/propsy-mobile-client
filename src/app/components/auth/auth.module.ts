import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuard} from './auth.guard';
import {AuthService} from './auth.service';
import {NotAuthGuard} from './not-auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    AuthGuard,
    AuthService,
    NotAuthGuard
  ]
})
export class AuthModule { }
