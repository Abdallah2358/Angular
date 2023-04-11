import { Component } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent {
  student = { id: 0, name: 'John', age: 34, email: 'john@example.com' }
}
