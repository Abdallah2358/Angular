import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styles: [
  ]
})
export class StudentsComponent {
  students = [
    { id: 0, name: 'John', age: 34, email: 'john@example.com' },
    { id: 1, name: 'Jane', age: 23, email: 'jane@example.com' },
    { id: 2, name: 'Mary', age: 23, email: 'mary@example.com' },
    { id: 3, name: 'Mike', age: 23, email: 'mike@example.com' },
    { id: 4, name: 'Adam', age: 23, email: 'adam@example.com' },
    { id: 5, name: 'Julie', age: 23, email: 'julie@example.com' },
    { id: 6, name: 'Kate', age: 23, email: 'kate@example.com' },
    { id: 7, name: 'Lisa', age: 23, email: 'lisa@example.com' },
  ]
}
