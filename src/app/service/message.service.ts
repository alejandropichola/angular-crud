import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Message, MessageType } from 'src/app/models/message';
import { ResponseType } from '../types';
const env = environment ? environment.development : '';
const route = env ? env.api : '';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  async getAllMessages(): Promise<Array<MessageType>> {
    const { response } = await this.http
      .get<ResponseType<Array<MessageType>>>(`${route}/message`)
      .toPromise();
    return response as Array<MessageType>;
  }
}
