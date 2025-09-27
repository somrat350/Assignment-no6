import { toast } from "react-toastify";
import calendarImg from "../../assets/ri_calendar-line.png";

const Ticket = ({ ticket, clickedTasks, setClickedTasks }) => {

  const clickedATask = (ticket) => {

    toast.info("Ticket in-progress")
    
    const existTask = clickedTasks.find(exist=> exist.id === ticket.id);
    
    if(!existTask){
      setClickedTasks([...clickedTasks,ticket]);
    }
  };

  const statusColors = {
    "Open":{bc:"#87CEEB",c:"#1E90FF"},
    "In Progress":{bc:"#F8F3B9",c:"#FEBB0C"},
    "Resolved":{bc:"#B9F8CF",c:"#02A53B"}
  }

  const priorityColors = {
    High:"#F83044",
    Medium:"#FEBB0C",
    Low:"#02A53B"
  }



  return (
    <div
      onClick={() => clickedATask(ticket)}
      className="border border-gray-300 rounded-lg p-3 flex flex-col gap-2 shadow-lg shadow-gray-400 cursor-pointer hover:scale-95 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h2 className="text-lg font-medium">{ticket.title}</h2>
        <div
          style={{ backgroundColor: statusColors[ticket.status].bc }}
          className="rounded-[400px] px-3 py-1 flex items-center gap-4 sm:gap-1 w-full sm:w-fit justify-center"
        >
          <span
            style={{ backgroundColor: statusColors[ticket.status].c }}
            className="w-4 h-4 rounded-[50%]"
          ></span>
          <span style={{ color: statusColors[ticket.status].c }} className="text-base font-medium">
            {ticket.status}
          </span>
        </div>
      </div>
      <p className="line-clamp-2 text-base">{ticket.description}</p>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-0">
        <div className="flex justify-between sm:justify-normal items-center gap-2 text-sm font-medium">
          <span className="text-[#627382]">#100{ticket.id}</span>
          <span style={{color:priorityColors[ticket.priority]}}>{ticket.priority} Priority</span>
        </div>
        <div className="flex justify-between sm:justify-normal items-center gap-2 text-[#627382] text-sm font-medium">
          <span>{ticket.customer}</span>
          <div className="flex items-center gap-1">
            <img className="h-5 w-5" src={calendarImg} alt="" />
            <span>{ticket.createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;