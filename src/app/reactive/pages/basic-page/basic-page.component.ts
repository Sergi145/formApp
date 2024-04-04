import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent implements OnInit{

    public myForm:FormGroup = this.fb.group({
        name:['',[Validators.required,Validators.minLength(3)]],
        price:[0,[Validators.required,Validators.min(0)]],
        inStorage:[0, [Validators.required,Validators.min(0)]],
    })

    constructor(private fb:FormBuilder) {
    }

    ngOnInit():void {
    //this.myForm.reset({price:20,inStorage:20})
    }

    isValidField(field:string):boolean | null {
      return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
    }

  getFieldError(field:string):string| null{
    if(!this.myForm.controls[field]) return null;
    const errors = this.myForm.controls[field].errors || {};

    for(const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo ${errors['minlength'].requiredLength } caracteres`;
      }
    }

    return 'hola mundo';
  }

  onSave():void {
      if(this.myForm.invalid) {
        this.myForm.markAllAsTouched();
        return;
      }
      console.log(this.myForm.value);
      this.myForm.reset({price:0,inStorage:0});
     }
}
