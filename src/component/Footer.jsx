import facebookImg from "../assets/facebook.png"
import linkedinImg from "../assets/linkedin.png"
import twitterImg from "../assets/twitter.png"
import gmailImg from "../assets/gmail.png"

const Footer = () => {
  return (
    <footer className='bg-black pt-20 pb-8 mt-16'>
      <div className="max-w-[1440px] mx-auto px-5">
        <div className="flex gap-10 sm:gap-5 flex-wrap justify-between">
          <div className="flex flex-col w-full lg:max-w-80">
            <h2 className="text-2xl text-center font-bold text-white">CS — Ticket System</h2>
            <p className="text-[#A1A1AA] text-center mt-3 text-base">The CS — Ticket System simplifies customer support by turning issues into organized, trackable tickets. It assigns tasks to agents, improves communication, and ensures faster resolution through clear status updates.</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl text-white font-medium mb-3">Company</h2>
            <div className="flex flex-col gap-3 text-[#A1A1AA]">
              <a href="">About Us</a>
              <a href="">Our Mission</a>
              <a href="">Contact Saled</a>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl text-white font-medium mb-3">Services</h2>
            <div className="flex flex-col gap-3 text-[#A1A1AA]">
              <a href="">Products & Services</a>
              <a href="">Customer Stories</a>
              <a href="">Download Apps</a>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl text-white font-medium mb-3">Information</h2>
            <div className="flex flex-col gap-3 text-[#A1A1AA]">
              <a href="">Privacy Policy</a>
              <a href="">Terms & Conditions</a>
              <a href="">Join Us</a>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl text-white font-medium mb-3">Social Links</h2>
            <div className="flex flex-col gap-3 text-[#A1A1AA]">
              <div className="flex items-center gap-2">
                <img className="h-5 w-5" src={twitterImg} alt="" />
                <a href=""> @CS — Ticket System</a>
              </div>
              <div className="flex items-center gap-2">
                <img className="h-5 w-5" src={linkedinImg} alt="" />
                <a href=""> @CS — Ticket System</a>
              </div>
              <div className="flex items-center gap-2">
                <img className="h-5 w-5" src={facebookImg} alt="" />
                <a href=""> @CS — Ticket System</a>
              </div>
              <div className="flex items-center gap-2">
                <img className="h-5 w-5" src={gmailImg} alt="" />
                <a href="">support@cst.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-[#E5E7EB] pt-8 mt-10">
          <p className="text-[#FAFAFA] text-base">© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;