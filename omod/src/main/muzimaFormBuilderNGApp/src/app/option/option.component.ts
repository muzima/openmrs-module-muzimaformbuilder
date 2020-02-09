import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  @Input() option;
  // option = {
  //   value: 'female',
  //   id: 'idddd',
  //   selected: true,
  //   hasFreeTxt: false,
  //   onlyChoice: true
  // };
  panelOpenState = true;

  constructor() { }

  ngOnInit() {
  }

  deleteOption() {
    delete this.option;
  }

}
