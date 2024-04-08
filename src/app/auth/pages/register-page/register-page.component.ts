import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidatorsService} from "../../../shared/service/validators.service";
import {EmailValidatorService} from "../../../shared/validators/email-validator.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern)]],
    email:['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)],[new EmailValidatorService()]],
    username:['', [Validators.required, this.validatorService.canBeStrider]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]],

  },{
    validators: [
      this.validatorService.isFieldOneEqualFieldTwo('pasword', 'password2')
    ]
  })

  constructor(private fb:FormBuilder, private validatorService: ValidatorsService) {

  }

  isValidField(field:string) {
      return this.validatorService.isValidField(field,this.myForm)
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
