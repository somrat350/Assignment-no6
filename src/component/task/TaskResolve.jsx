const TaskResolve = ({completedT}) => {
  return (
    <div className="bg-[#E0E7FF] rounded-sm p-3 shadow-xs shadow-gray-400">
      <h2 className='text-base font-medium'>{completedT.title}</h2>
    </div>
  );
};

export default TaskResolve;