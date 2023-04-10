import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  name = "";
  age = "";
  @Output("reg") myEvent = new EventEmitter();

  add() {
    let newStudent = { name: this.name, age: this.age };
    if (+this.age <= 50) {
      // this.Students.push(newStudent);
      this.name = "";
      this.age = "";
      this.myEvent.emit(newStudent);
    }
  }
}
