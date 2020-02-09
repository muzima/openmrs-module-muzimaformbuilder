import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-builder-page',
  templateUrl: './form-builder-page.component.html',
  styleUrls: ['./form-builder-page.component.css']
})
export class FormBuilderPageComponent implements OnInit {

  field = {};

  categories = [
    {
      name: 'General',
      fields: [
        {
          visible: true,
          id: '',
          name: 'input 3',
          text: '',
          dataConcept: '',
          fieldLbl: '',
          defaultTxt: '',
          type: '',
          customCssClass: [],
          readonly: false,
          required: false,
          conditionalLogic: [],
          range: '',
          inputMask: '',
          errorMsg: '',
          description: ''
        }
      ]
    }
  ];

  form = {
    fields: [
      {
        visible: true,
        id: '',
        name: 'input1',
        text: '',
        dataConcept: '',
        fieldLbl: 'Enter Name',
        defaultTxt: '',
        type: 'text',
        customCssClass: [],
        readonly: false,
        required: true,
        conditionalLogic: [],
        range: '',
        inputMask: '',
        errorMsg: '',
        description: ''
      },
      {
        visible: true,
        id: '',
        name: 'input 2',
        text: '',
        dataConcept: '',
        fieldLbl: '',
        defaultTxt: '',
        type: '',
        customCssClass: [],
        readonly: false,
        required: false,
        conditionalLogic: [],
        range: '',
        inputMask: '',
        errorMsg: '',
        description: ''
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  setSelectedField(field) {
    this.field = field;
  }

}
