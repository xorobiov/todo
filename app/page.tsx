'use client';

import { Checkbox } from '@/components/Checkbox';
import { Input } from '@/components/Input';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useTickets } from '@/features/useTickets';
import { TicketInterface } from '@/types/Ticket';
import { useForceUpdate } from '@/features/useForceUpdate';

const Main: React.FC = () => {
  const {
    tickets,
    write: forceWrite,
    register: onRegisterTicket,
    terminate: onTerminateTicket,
  } = useTickets();

  const forceUpdate = useForceUpdate();

  const onToggleTicket = (ticket: TicketInterface) => {
    ticket.done = !ticket.done;
    forceWrite(tickets);
    forceUpdate();
  };

  return (
    <main className="h-full flex flex-col gap-8 p-4">
      <Input onChange={onRegisterTicket} />
      <ul className="flex flex-col gap-4">
        {tickets.map((ticket) => (
          <li className="flex items-start gap-4" key={ticket.id}>
            <Checkbox
              value={ticket.done!}
              onChange={() => onToggleTicket(ticket)}
            />
            <span>{ticket.title}</span>
            <MdEdit className="shrink-0 text-xl text-gray-300 hover:text-gray-400 cursor-pointer ml-auto" />
            <MdDelete
              className="shrink-0 text-xl text-gray-300 hover:text-red-600 cursor-pointer"
              onClick={() => onTerminateTicket(ticket)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
