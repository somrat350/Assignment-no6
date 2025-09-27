import { use, useEffect } from 'react';
import Ticket from './Ticket';

const Tickets = ({ticketsPromise,completedTasks,tickets,setTickets,clickedTasks,setClickedTasks}) => {
  const ticketsData = use(ticketsPromise);

  useEffect(()=>{
    if(ticketsData){
      setTickets(ticketsData)
    }
  },[ticketsData,setTickets])

  const showTickets = tickets.filter(t=> !completedTasks.includes(t))
  return (
    <div className='col-span-full lg:col-span-3'>
      <h2 className='text-2xl font-semibold'>Customer Tickets</h2>
      <div className="mt-5 grid md:grid-cols-2 gap-5 pb-5">
        {
          showTickets.map(ticket=> <Ticket key={ticket.id} clickedTasks={clickedTasks} setClickedTasks={setClickedTasks} ticket={ticket}/>)
        }
      </div>
    </div>
  );
};

export default Tickets;