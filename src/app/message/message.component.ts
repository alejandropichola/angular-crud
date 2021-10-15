import { Component, OnInit } from '@angular/core';
import { MessageService } from '@/src/app/service/message.service';
import { MessageType } from '@/src/app/models/message';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  displayedColumns: Array<string> = ['msg', 'tags', 'option'];
  data: Array<MessageType> = [];
  id!: string;
  showModal = false;
  message: MessageType = {
    id: '',
    msg: '',
    tags: '',
  };

  constructor(
    private messageService: MessageService,
  ) {}

  openDialog() {
    this.showModal = true;
  }

  closeDialog():void {
    this.showModal = false;
  }

  openDelete(id: string) {
    this.id = id;
  }

  async getAllData(): Promise<void> {
    const response = await this.messageService.getAllMessages();
    this.data = response;
  }

  ngOnInit(): void {
    this.getAllData();
  }
}
