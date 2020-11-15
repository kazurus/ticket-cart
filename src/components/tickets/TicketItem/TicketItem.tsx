import React from 'react';
import Ticket from '../Ticket';

type TicketProp = {
  from: string;
  to: string;
  price: number;
};

interface Props {
  ticket: TicketProp;
}

const TicketItem: React.FC<Props> = ({ ticket }) => (
  <div style={{ marginBottom: 20 }} data-testid='ticket-item'>
    <Ticket price={ticket.price} from={ticket.from} to={ticket.to} />
  </div>
);

export default TicketItem;
