export type TicketId = number;

export type TicketDirection = string;

export type TicketPrice = number;

export type Ticket = {
  id: TicketId;
  from: TicketDirection;
  to: TicketDirection;
  price: TicketPrice;
};

export type Temp = {
  id: number;
};

export type Temp1 = {
  id: number;
};
