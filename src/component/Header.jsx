import { useState } from "react";

const Header = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
  return (
    <>
      <header className="sticky top-0 bg-white py-5 z-40">
        <div className="relative flex justify-between items-center flex-wrap">
          <div className="w-full sm:w-fit justify-between flex gap-5 sm:gap-10 items-center">
            <div className="flex lg:hidden items-center">
              <i onClick={()=>{
                toggleMenu?setToggleMenu(false):setToggleMenu(true)
              }} className={`fa-solid ${!toggleMenu?"fa-bars-staggered":"fa-xmark"} cursor-pointer text-2xl`}></i>
            </div>
            <h1 className="text-2xl font-bold">CS — Ticket System</h1>
          </div>
          <div className="flex w-full sm:w-fit mt-3 sm:mt-0 items-center gap-8">
            <div className="hidden lg:flex gap-8 text-base font-normal">
              <a href="">Home</a>
              <a href="">FAQ</a>
              <a href="">Changelog</a>
              <a href="">Blog</a>
              <a href="">Download</a>
              <a href="">Contact</a>
            </div>
            <div className="w-full">
              <button className="w-full text-base font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-4 py-3 rounded-sm cursor-pointer">
                + New Ticket
              </button>
            </div>
          </div>
          <div className={`lg:hidden w-[240px] absolute top-24 sm:top-16 rounded-lg p-5 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white text-xl transform transition-transform duration-300 ease-in-out ${toggleMenu?"translate-x-0 left-0" : "-translate-x-full -left-5"}`}>
            <div className="flex justify-end">
              <i onClick={()=>setToggleMenu(false)} className="fa-solid fa-xmark cursor-pointer text-2xl"></i>
            </div>
            <div className="mt-10 flex flex-col items-center gap-5">
              <a className="w-full hover:text-gray-400 text-center border-b border-gray-400 pb-2" href="">Home</a>
              <a className="w-full hover:text-gray-400 text-center border-b border-gray-400 pb-2" href="">FAQ</a>
              <a className="w-full hover:text-gray-400 text-center border-b border-gray-400 pb-2" href="">Changelog</a>
              <a className="w-full hover:text-gray-400 text-center border-b border-gray-400 pb-2" href="">Blog</a>
              <a className="w-full hover:text-gray-400 text-center border-b border-gray-400 pb-2" href="">Download</a>
              <a className="w-full hover:text-gray-400 text-center border-b border-gray-400 pb-2" href="">Contact</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
