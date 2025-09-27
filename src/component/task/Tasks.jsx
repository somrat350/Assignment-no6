import TaskResolve from "./TaskResolve";
import TaskStatus from "./TaskStatus";

const Tasks = ({tickets,setTickets,completedTasks,setCompletedTasks,setClickedTasks,clickedTasks,openTasks,setOpenTasks}) => {
  return (
    <div className={`fixed lg:relative ${openTasks?"right-0 w-full":"-right-96"} lg:right-0 top-0 lg:top-0 bg-white rounded-lg p-5 lg:p-0 transition-all duration-1000 h-full overflow-auto block z-50 lg:z-0`}>
      <div className="border-b border-gray-400 pb-5">
        <h2 className="text-2xl font-semibold mb-3">Task Status <span className="lg:hidden text-3xl cursor-pointer float-end text-red-600" onClick={()=>setOpenTasks(false)} title="Close">x</span></h2>
        <p className={`text-[#627382] text-base ${clickedTasks.length?"hidden":"block"}`}>Select a ticket to add to Task Status.</p>

        <div className="p-3 flex flex-col gap-3">
          {
            clickedTasks.map(clickedT=><TaskStatus key={clickedT.id} tickets={tickets} setTickets={setTickets} clickedTasks={clickedTasks} setClickedTasks={setClickedTasks} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} clickedT={clickedT}/>)
          }
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-semibold mb-3">Resolved Task</h2>
        <p className={`text-[#627382] text-base ${completedTasks.length?"hidden":"block"}`}>No resolved tasks yet.</p>
        <div className="p-3 flex flex-col gap-3">
          {
            completedTasks.map(completedT=> <TaskResolve key={completedT.id} completedT={completedT}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default Tasks;