import { Suspense, useState } from "react";
import "./App.css";
import Tickets from "./component/customerTickets/Tickets";
import Header from "./component/Header";
import Hero from "./component/Hero";
import OpenTasks from "./component/task/OpenTasks";
import Tasks from "./component/task/Tasks";
import Loading from "./component/Loading";
import { ToastContainer } from "react-toastify";
import Footer from "./component/Footer";

const ticketsPromise = fetch("https://raw.githubusercontent.com/somrat350/Assignment-no7/refs/heads/main/public/tickets.json").then((res) => res.json());

function App() {
  const [tickets, setTickets] = useState([]);
  const [clickedTasks, setClickedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [openTasks, setOpenTasks] = useState(false);
  return (
    <>
    <ToastContainer/>
      <div className="max-w-[1440px] mx-auto px-5">
        <Header />
        <Hero clickedTasks={clickedTasks} completedTasks={completedTasks} />
        <div className="mt-10 grid grid-cols-4 gap-5 relative overflow-hidden">
          <Suspense fallback={<Loading/>}>
            <Tickets
              completedTasks={completedTasks}
              tickets={tickets}
              setTickets={setTickets}
              clickedTasks={clickedTasks}
              setClickedTasks={setClickedTasks}
              ticketsPromise={ticketsPromise}
            />
          </Suspense>
          <Tasks
            tickets={tickets}
            setTickets={setTickets}
            completedTasks={completedTasks}
            setCompletedTasks={setCompletedTasks}
            clickedTasks={clickedTasks}
            setClickedTasks={setClickedTasks}
            openTasks={openTasks}
            setOpenTasks={setOpenTasks}
          />
        </div>
        <OpenTasks clickedTasks={clickedTasks} completedTasks={completedTasks} setOpenTasks={setOpenTasks} />
      </div>
      <Footer/>
    </>
  );
}

export default App;