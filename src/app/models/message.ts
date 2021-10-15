export interface MessageType {
  id: string;
  msg: string;
  tags: string;
}

export class Message {
  public id: string;
  public msg: string;
  public tags: string;

  constructor(id: string, msg: string, tags: string) {
    this.id = id;
    this.msg = msg;
    this.tags = tags;
  }
}
