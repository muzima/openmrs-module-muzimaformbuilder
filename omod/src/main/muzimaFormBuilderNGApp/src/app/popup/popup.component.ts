import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openBlankFormDialog(): void {
    const dialogRef = this.dialog.open(BlankFormDialogComponent, {
      width: '600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The Blank Form dialog was closed');
    });
  }

}

@Component({
  selector: 'app-blank-form-dialog',
  templateUrl: 'blank-form-dialog.html',
  styleUrls: ['./popup.component.css']
})
export class BlankFormDialogComponent {

  name: String;
  description: String;

  constructor(
    public dialogRef: MatDialogRef<BlankFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  openFormBuilder(): void {
    // route to form builder
  }

}
