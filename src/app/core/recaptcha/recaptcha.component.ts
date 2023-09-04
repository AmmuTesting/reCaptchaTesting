import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.scss']
})
export class RecaptchaComponent {
  
  protected aFormGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnit(){
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  siteKey:string="6Ld37PonAAAAACTWKBZrw-uatdenEjwY6Yj86yQR" ;
}
