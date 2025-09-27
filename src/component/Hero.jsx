import bgImg from "../assets/vector1.png";

const Hero = ({clickedTasks,completedTasks}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center mt-10">
      
      <div className="h-[220px] sm:h-[240px] w-full rounded-lg text-white bg-linear-to-br from-[#632EE3] to-[#9F62F2] flex justify-center items-center relative"
      >
        <img className="absolute left-0 bottom-0" src={bgImg} alt="" />
        <img className="scale-x-[-1] absolute right-0 bottom-0" src={bgImg} alt="" />
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-2xl font-medium">In-Progress</h2>
        <span className="text-6xl font-semibold">{clickedTasks.length}</span>
        </div>
      </div>

      <div className="h-[220px] sm:h-[240px] w-full rounded-lg text-white bg-linear-to-br from-[#54CF68] to-[#00827A] flex justify-center items-center relative"
      >
        <img className="absolute left-0 bottom-0" src={bgImg} alt="" />
        <img className="scale-x-[-1] absolute right-0 bottom-0" src={bgImg} alt="" />
        <div className="flex flex-col gap-4 justify-center items-center">
          <h2 className="text-2xl font-medium">Resolved</h2>
        <span className="text-6xl font-semibold">{completedTasks.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;