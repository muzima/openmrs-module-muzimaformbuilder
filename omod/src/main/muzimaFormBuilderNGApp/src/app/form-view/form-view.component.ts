import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {

  @Input() form: any;

  constructor() { }

  ngOnInit() { }

  delete() {}
}
