import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PromptDialogComponent } from './views/prompt/prompt.component';
import { ConfirmDialogComponent } from './views/confirm/confirm.component';
import { AlertDialogComponent } from './views/alert/alert.component';

@NgModule({
  declarations: [ 
    PromptDialogComponent, ConfirmDialogComponent, AlertDialogComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'prompt', component: PromptDialogComponent },
      { path: 'confirm', component: ConfirmDialogComponent },
      { path: 'alert', component: AlertDialogComponent },
      { path: '**', redirectTo: 'confirm' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


