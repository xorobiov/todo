import { useStorage } from './useStorage';
import { type TicketInterface, Ticket } from '@/types/Ticket';

export const useTickets = () => {
  const [tickets, setTickets, write] = useStorage<Array<TicketInterface>>(
    Ticket.name,
    []
  );

  const register = (title: string) => {
    const ticket = new Ticket(title);
    setTickets((tickets) => [ticket, ...tickets]);
  };

  const terminate = (ticketOrId: TicketInterface | string) => {
    setTickets(
      tickets.filter((ticket) =>
        typeof ticketOrId === 'string'
          ? ticket.id !== ticketOrId
          : ticket !== ticketOrId
      )
    );
  };

  return {
    tickets,
    setTickets,
    write,
    register,
    terminate,
  };
};
