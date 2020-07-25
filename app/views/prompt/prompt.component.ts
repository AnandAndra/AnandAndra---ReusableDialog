import { Component, ElementRef,ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { DialogService} from './../../dialog.service/dialog';
@Component({
  selector: 'prompt',
  template: `
 <div>
      <h3>Prompt Dialog</h3>
    </div>
      
	<button class="e-btn" (click)="this.showClick($event)">Show Prompt Dialog</button>
  	<button class="e-btn" (click)="this.hideClick($event)">Close Dialog</button>
    <div id="dialogContainer">
     <div id="promptDialog" #dialogLog></div>
    </div>
  `,
})
export class PromptDialogComponent {
  @ViewChild("dialogLog") dialogLog: ElementRef;
  constructor(private dialogService: DialogService) { 
  }
  
  showClick(e) {
    this.dialogService.showDialog(this.dialogLog.nativeElement, {
      content: `<table style="border-collapse: separate;border-spacing: 10px;width:85%;margin: 0px -5px 0px;">
                <tr>
                    <td>SSID:</td>
                </tr>
                <tr>
                    <td><b>AndroidAP</b></td>
                </tr>
                <tr>
                    <td>Password:</td>
                </tr>
                <tr>
                    <td><span class="e-input-group">
                    <input type="password" #password id="password" (focus)='onFocus()' (blur)='onBlur()' name="Required" class="e-input" />
                    </span></td>
                </tr>
            </table>`,
            header: 'Join Wi-Fi network',
            buttons:  [{ click: this.hideClick.bind(this), buttonModel: { content: 'Connect', isPrimary: true } }, { click: this.hideClick.bind(this), buttonModel: { content: 'Cancel' } }]
    });
  }

  hideClick(e) {
   this.dialogService.hideDialog();
  }
}
