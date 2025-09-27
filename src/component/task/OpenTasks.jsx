const OpenTasks = ({setOpenTasks,clickedTasks,completedTasks}) => {
  return (
    <div onClick={()=>setOpenTasks(true)} title="Show Task Status" className="fixed bottom-20 right-5 bg-[#02A53B] w-16 h-16 rounded-[50%] flex lg:hidden justify-center items-center p-5 cursor-pointer hover:scale-110 transition-all duration-300">
      <i className="fa-regular fa-chart-bar text-white text-3xl"></i>
      <div className="absolute -top-3 -right-3 w-10 h-10 bg-linear-to-br from-[#632EE3] to-[#9F62F2] rounded-full flex justify-center items-center">
        <span className="text-white font-medium text-sm">{clickedTasks.length}/{completedTasks.length}</span>
      </div>
    </div>
  );
};

export default OpenTasks;