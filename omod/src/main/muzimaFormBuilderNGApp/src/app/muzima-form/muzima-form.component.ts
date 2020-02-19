import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-muzima-form',
  templateUrl: './muzima-form.component.html',
  styleUrls: ['./muzima-form.component.css', './bootstrap.min.css', './muzima.css']
})
export class MuzimaFormComponent implements OnInit {

  private changes: MutationObserver;
  private elRef: ElementRef;

  @Input() form;
  @Input() sectionIds;
  @Output() selectedField = new EventEmitter();
  @Output() htmlCodeEmitter = new EventEmitter();

  selected = {};
  htmlCode = '';

  constructor(elRef: ElementRef) {
    this.elRef = elRef;

    this.changes = new MutationObserver((mutations: MutationRecord[]) => {
      this.htmlCode = this.elRef.nativeElement.innerHTML;
      this.htmlCodeEmitter.emit(this.htmlCode);
    });

    this.changes.observe(this.elRef.nativeElement, {
      attributes: true,
      childList: true,
      subtree: true,
      characterData: true
    });

  }

  ngOnInit() { }

  onDrop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(this.createCopy(event.previousContainer.data),
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onDropSection(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const id = this.addSection();
      event.previousContainer.data[event.previousIndex]['id'] = id;
      console.log(event.previousContainer.data[event.previousIndex]);
      copyArrayItem(this.createCopy(event.previousContainer.data),
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }

  select(field) {
    console.log('selected: ' + field);
    this.selected = field;
    this.selectedField.emit(field);
  }

  deleteField({ fields }, index) {
    fields.splice(index, 1);
    if (!fields.includes(this.selected)) {
      this.selectedField.emit({});
      this.selected = {};
    }
  }

  createCopy(data) {
    return JSON.parse(JSON.stringify(data));
  }

  addSection() {
    const id = 'formFieldsList#' + this.sectionIds.length;
    this.sectionIds.push(id);
    console.log(this.sectionIds);
    return id;
  }
}
