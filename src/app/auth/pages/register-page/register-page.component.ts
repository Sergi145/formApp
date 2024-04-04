import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    username:['', [Validators.required]],
    password: ['',[Validators.required, Validators.minLength(6)]],
    password2: ['',[Validators.required]],

  })

  constructor(private fb:FormBuilder) {

  }

  isValidField(field:string) {
      // obterner validacion desde un servicio
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }
}
