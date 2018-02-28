import { Component } from '@angular/core';
import { DialogService } from '../_services/confirm.service'

@Component({
  selector: 'confirm-dialog-modal',
  templateUrl: './confirm.component.html'
})
export class ConfirmDialog {
  constructor(public dialogService: DialogService) { }
  confirm() {
    this.dialogService.dialogConfirmation();
  }
  reject() {
    this.dialogService.dialogRejection();
  }
}
