import { Component, output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent {
  visible: boolean = true;
  cancelled = output({ alias: 'onCancel' });
  confirmed = output({ alias: 'onConfirmation' });

  cancel() {
    this.visible = false;
    this.cancelled.emit();
  }

  confirm() {
    this.visible = false;
    this.confirmed.emit();
  }
}
