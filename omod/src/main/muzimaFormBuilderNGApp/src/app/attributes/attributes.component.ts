import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  @Input() field;

  // field = {
  //   visible: true,
  //   id: 'patient.idd',
  //   name: 'input1',
  //   text: '',
  //   dataConcept: '',
  //   fieldLbl: 'Enter Name',
  //   defaultTxt: '',
  //   type: 'select',
  //   customCssClass: ['class', 'class2'],
  //   readonly: false,
  //   required: true,
  //   conditionalLogic: [],
  //   range: '',
  //   inputMask: '',
  //   errorMsg: '',
  //   description: '',
  //   options: [
  //     {
  //       value: 'female',
  //       selected: true
  //     },
  //     {
  //       value: 'male',
  //       selected: false
  //     }
  //   ]
  // };

  dataConcepts = [
      'data',
      'concept'
  ];

  fontSizeControl = new FormControl(13);

  constructor() { }

  ngOnInit() {
  }

  addOption() {
    if (this.field.type === 'select') {
      this.field.options.push({
        value: 'val',
        label: 'lbl'
      });
    } else {
      // for fieldset option
      this.field.options.push({
        label: 'LBL',
        value: 'value',
        checked: false,
        hasFreeTxt: false,
        onlyChoice: false
      });
    }
  }

}
