import { TicketId } from '../../tickets/types';

export type OrderId = number;

export type OrderCreatedAt = number;

export type Order = {
  id: number;
  ticketId: TicketId;
  createdAt: OrderCreatedAt;
};
