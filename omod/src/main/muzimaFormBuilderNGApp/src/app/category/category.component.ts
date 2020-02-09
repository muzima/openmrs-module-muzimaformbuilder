import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, copyArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  panelOpenState = false;
  @Input() category: Object;

  constructor() { }

  ngOnInit() {
  }

  onDrop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer !== event.container) {
      console.log(this.category);
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log('dropped');
    }
  }

}
