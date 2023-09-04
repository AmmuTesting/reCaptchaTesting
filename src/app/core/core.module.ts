import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecaptchaComponent } from './recaptcha/recaptcha.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
  declarations: [
    RecaptchaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    FormsModule
  ]
})
export class CoreModule { }
