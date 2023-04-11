import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  add() {
    if (this.validateForm.valid) {
      const { name, age, email } = this.validateForm.value;
      alert(`${name} ${age} ${email}`);
    }
    console.log(this.validateForm.controls);
  }
  get ValidName() {
    console.log("Name", this.validateForm.controls['name'].valid);
    return this.validateForm.controls['name'].valid
  }
  get ValidAge() { return this.validateForm.controls['age'].valid }
  get ValidEmail() { return this.validateForm.controls['email'].valid }


  validateForm = new FormGroup({
    name: new FormControl("Full Name", [Validators.minLength(2), Validators.required]),
    age: new FormControl(20, [Validators.min(20), Validators.max(40), Validators.required,]),
    email: new FormControl("mail@example.com", [Validators.email, Validators.required]),
  })
}
