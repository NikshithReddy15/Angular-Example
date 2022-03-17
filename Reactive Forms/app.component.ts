import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { ValidatorsService, validatePassword } from "./validators.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Example-ReactiveForms';
  form: FormGroup = new FormGroup({});
  validatorsService: ValidatorsService = new ValidatorsService();
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, validatePassword()])
    });
    /*this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.validatorsService.validatePassword()]]
    });*/
  }
  check(form: FormGroup) {
    !(form.get('email')?.valid) ? alert('Inalid Email') : (form.get('password')?.valid) ? alert('Valid Details') : alert('Invalid Password');
  }
}
