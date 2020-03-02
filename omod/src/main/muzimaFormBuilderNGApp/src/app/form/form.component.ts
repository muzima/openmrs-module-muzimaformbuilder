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
  @Input() sectionIds;
  @Output() selectedField = new EventEmitter();
  @Output() sectionIdsEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  select(field) {
    this.selectedField.emit(field);
  }

  selHtmlCode(htmlCode) {
    this.htmlCode = htmlCode;
    this.cleanHtmlFromNG();
  }

  cleanHtmlFromNG() {
    // keep it in this order it's important!
    this.htmlCode = this.htmlCode.replace(new RegExp('novalidate=""', 'g'), '');
    this.htmlCode = this.htmlCode.replace(new RegExp('"ng-[^"]+": "[^"]*"', 'g'), '');
    this.htmlCode = this.htmlCode.replace(new RegExp('_ngcontent-.[0-9]{2}=""', 'g'), '');
    this.htmlCode = this.htmlCode.replace(new RegExp('ng-[^"]+="[^"]*"', 'g'), '');
    this.htmlCode = this.htmlCode.replace(new RegExp('ng-[^ "]+', 'g'), '');
    this.htmlCode = this.htmlCode.replace(new RegExp('cdk[^=-]*="[^"]*"', 'g'), '');
    this.htmlCode = this.htmlCode.replace(new RegExp('cdk-[^ "]+', 'g'), '');
    this.htmlCode = this.htmlCode.replace(new RegExp('style="[^"]*"', 'g'), '');
    this.htmlCode = this.htmlCode.replace(new RegExp('id="formFieldsList#[0-9]+"', 'g'), '');
    this.htmlCode = this.htmlCode.replace(new RegExp('fields-list', 'g'), '');
    this.htmlCode = this.htmlCode.replace(new RegExp('<div *class="icon((?!<\/div>).)*<\/div>', 'g'), '');
    this.htmlCode = this.htmlCode.replace(new RegExp('<!--bindings={[^}]*}-->', 'g'), '');
    this.htmlCode = this.htmlCode.replace(new RegExp('<!---->', 'g'), '');
  }

  copyMessage() {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.htmlCode;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
