import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dinamic-page',
  templateUrl: './dinamic-page.component.html',
  styleUrl: './dinamic-page.component.css'
})
export class DinamicPageComponent {
  public myForm:FormGroup = this.fb.group({
    name:['',[Validators.required,Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Strangin', Validators.required],
    ])
  })

  public newFavorite:FormControl = new FormControl('',[Validators.required])

  constructor(private fb:FormBuilder) {}

  onSubmit():void {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    (this.myForm.controls['favoriteGames'] as FormArray) = this.fb.array([]);
    this.myForm.reset();
  }

  onDelete(index:number):void {
    this.favoriteGames.removeAt(index);
  }

  AddToFavorite():void {
      if(this.newFavorite.invalid) return;
      const newGame =this.newFavorite.value;
      this.favoriteGames.push(this.fb.control(newGame, Validators.required))
      this.newFavorite.reset();
  }

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
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

  isValidFieldInArray(formArray:FormArray, index:number) {
    return formArray.controls[index].errors && formArray.controls[index].touched;
  }
}
