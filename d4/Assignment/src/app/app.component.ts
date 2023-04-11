import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  Students: { name: string, age: string }[] = [];

  reg(data: any) {
    this.Students.push(data);
  }
}
