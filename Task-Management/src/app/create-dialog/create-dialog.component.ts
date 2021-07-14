import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {
  @Input() dialogTitle = "Dialog";
  @Input() showCrossButton = false;
  @Input() okButtonText = "Save";
  @Input() showOkButton = false;
  @Output() closeDialogSubscriber = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.closeDialogSubscriber.emit('true');

  }

}
