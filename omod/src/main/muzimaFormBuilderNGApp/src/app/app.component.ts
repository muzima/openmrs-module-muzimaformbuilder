import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'muzimaFormBuilderNGApp';
  form = {name: 'form1'};
  categories = {name: 'General', fields: [
  {
  type: 'input'
  },
  {
  type: 'textarea'
  },
  {
  type: ''
  }
  ]};
}
