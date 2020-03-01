import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'muzimaFormBuilderNGApp';
  searchText;
  isSearchFocused = false;
  forms = [
    {
      name: 'Form Name',
      description: 'a basic form',
      sections: []
    },
    {
      name: 'Registeration Form',
      description: 'simple registeration form',
      sections: []
    },
    {
      name: 'Encounter Form',
      description: 'first encounter form',
      sections: []
    },
    {
      name: 'Form Name',
      description: 'a basic form',
      sections: []
    },
    {
      name: 'Registeration Form',
      description: 'simple registeration form',
      sections: []
    },
    {
      name: 'Encounter Form',
      description: 'first encounter form',
      sections: []
    }
  ];
  templates = [
    {
      name: 'Form Name',
      description: 'a basic form',
      sections: []
    },
    {
      name: 'Registeration Form',
      description: 'simple registeration form',
      sections: []
    },
    {
      name: 'Encounter Form',
      description: 'first encounter form',
      sections: []
    }
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '600px',
      data: {forms: this.forms, templates: this.templates}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  setSearchText(data) {
    this.searchText = data;
  }

}
