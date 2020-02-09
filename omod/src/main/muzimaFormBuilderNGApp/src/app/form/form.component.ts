import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  color = 'primary';
  bgcolor = 'accent';
  @Input() form;

  constructor() { }

  ngOnInit() {
  }

}
