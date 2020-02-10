import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {

  color = 'primary';
  bgcolor = 'accent';
  htmlCode = '';
  @Input() form;
  @Output() selectedField = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  select(field) {
    this.selectedField.emit(field);
  }

  selHtmlCode(htmlCode) {
    this.htmlCode = htmlCode;
  }

}
