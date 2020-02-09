import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-muzima-form',
  templateUrl: './muzima-form.component.html',
  styleUrls: ['./muzima-form.component.css', './bootstrap.min.css', './muzima.css']
})
export class MuzimaFormComponent implements OnInit {

  @Input() form;

  constructor() { }

  ngOnInit() {
  }

  onDrop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log(this.form.fields);
    }
  }

}
