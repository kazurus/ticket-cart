import React from 'react';
import { useSelector } from 'react-redux';
import TicketItem from '../../components/tickets/TicketItem';
import TicketsList from '../../components/tickets/TicketsList';
import { getTickets } from '../../store/tickets/selectors';
import type { RootState } from '../../store/reducers';

const TicketsContainer: React.FC = () => {
  const tickets = useSelector((state: RootState) => getTickets(state));

  return (
    <TicketsList>
      {tickets.map((ticket) => (
        <TicketItem key={ticket.id} ticket={ticket} />
      ))}
    </TicketsList>
  );
};

export default TicketsContainer;
