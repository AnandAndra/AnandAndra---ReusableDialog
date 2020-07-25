import { Component, ElementRef,ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { DialogService} from './../../dialog.service/dialog';

@Component({
  selector: 'confirm',
  template: `
    <div>
      <h3>Confirm Dialog</h3>
    </div>
    
	<button class="e-btn" (click)="this.showBtnClick($event)">Show Confirm Dialog</button>
  	<button class="e-btn" (click)="this.hideBtnClick($event)">Close Dialog</button>
    <div id="dialogContainer">
     <div id="cofirmDialog" #dialog></div>
     </div>
  `,
})
export class ConfirmDialogComponent {
  users;
@ViewChild("dialog") dialog: ElementRef;
  constructor(private dialogService: DialogService) { 
  }
  
  showBtnClick(e) {
    this.dialogService.showDialog(this.dialog.nativeElement, {
      content: 'Are you sure you want to permanently delete these items ?',
      header: "Delete Multiple Items",
      buttons:  [{ click: this.hideBtnClick.bind(this), buttonModel: { content: 'Yes', isPrimary: true } }, { click: this.hideBtnClick.bind(this), buttonModel: { content: 'No' } }]
    });
  }

  hideBtnClick(e) {
   this.dialogService.hideDialog();
  }
 
}
