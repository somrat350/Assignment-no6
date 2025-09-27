import { toast } from "react-toastify";

const TaskStatus = ({
  clickedT,
  clickedTasks,
  setClickedTasks,
  completedTasks,
  setCompletedTasks,
}) => {
  const completedTasksFun = (clickedCT) => {
    const completedTasksExist = completedTasks.find(
      (exist) => exist.id === clickedCT.id
    );
    if (!completedTasksExist) {
      setCompletedTasks([...completedTasks, clickedCT]);

      const SCT = clickedTasks.filter((ct) => ct.id !== clickedCT.id);
      setClickedTasks(SCT);

      toast.success("Task completed!")
    }
  };

  return (
    <div className="flex flex-col gap-2 shadow-lg shadow-gray-400 p-1 rounded-sm bg-white">
      <h2 className="text-lg font-medium">{clickedT.title}</h2>
      <button
        className="text-base text-white font-semibold rounded-sm cursor-pointer hover:scale-95 transition-all duration-300 bg-[#02A53B] px-4 py-2"
        onClick={() => completedTasksFun(clickedT)}
      >
        Complete
      </button>
    </div>
  );
};

export default TaskStatus;
