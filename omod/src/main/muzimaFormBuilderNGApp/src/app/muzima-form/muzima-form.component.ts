import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-muzima-form',
  templateUrl: './muzima-form.component.html',
  styleUrls: ['./muzima-form.component.css', './bootstrap.min.css', './muzima.css']
})
export class MuzimaFormComponent implements OnInit {

  @Input() form;
  @Output() selectedField = new EventEmitter();
  @Output() htmlCodeEmitter = new EventEmitter();

  selected = {};

  elRef: ElementRef;
  htmlCode = '';

  constructor(elRef: ElementRef) {
    this.elRef = elRef;
   }

  ngOnInit() {
    this.htmlCode = this.elRef.nativeElement.innerHTML;
    this.htmlCodeEmitter.emit(this.htmlCode);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(this.createCopy(event.previousContainer.data),
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log(this.form.fields);
    }
  }

  select(field) {
    console.log('selected: ' + field);
    this.selected = field;
    this.selectedField.emit(field);
  }

  deleteField({fields}, index) {
    fields.splice(index, 1);
    this.selectedField.emit({});
  }

  createCopy(data) {
    return JSON.parse(JSON.stringify(data));
  }

}
