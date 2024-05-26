export interface TicketInterface {
  id: string;
  title: string;
  done?: boolean;
  description?: string;
  deadline?: number;
  badgesIds?: Array<number>;
  createdAt: number;
  children?: Array<TicketInterface>;
}

export class Ticket implements TicketInterface {
  public id!: string;
  public description?: string | undefined;
  public badgesIds = [];
  public children = [];
  public done!: boolean;
  public createdAt!: number;

  constructor(public title: string) {
    this.id = crypto.randomUUID();
    this.createdAt = new Date().getTime();
    this.done = false;
  }

  static usingJSON = (value: string) => {
    const ticket = JSON.parse(value) as TicketInterface;
    return Object.assign(new Ticket(ticket.title), ticket);
  };

  toString() {
    return JSON.stringify(this);
  }
}
