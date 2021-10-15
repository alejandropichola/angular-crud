import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MessageType } from '@/src/app/models/message';

@Component({
  selector: 'app-modal',
  templateUrl: './modalForm.component.html',
})
export class ModalFormComponent implements OnInit {
  @Input()
  id!: string;
  message: MessageType = {
    id: '',
    msg: '',
    tags: '',
  };

  @Output()
  click = new EventEmitter();

  closeModal():void {
    this.click.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
