import { Link } from "react-router-dom";
import { useState } from "react";
function Header(){
    const [bool, updateBool] = useState(false);
    function nav() {
      if (bool) {
        updateBool(false);
      } else {
        updateBool(true);
      }   
    }

    return (
        <div className="flex flex-row items-center justify-between h-[10vh] w-full pl-[8vh] pr-[8vh] max-[800px]:justify-between max-[800px]:pr-[4vh] max-[800px]:pl-[4vh]">
            <img className="w-[30px] h-[30px]" src="logo_white.png" alt=""/>
            <nav className="w-[45%] flex flex-row justify-between items-center max-[1024px]:w-[38%] max-[1024px]:ml-[5%] max-[800px]:hidden">
                <Link className="text-white font-Ubuntu_Medium text-[1vw] max-[1024px]:text-[1.3vw]" to="/">Home</Link>
                <Link className="text-white font-Ubuntu_Medium text-[1vw] max-[1024px]:text-[1.3vw]" to="/service">Services</Link>
                <Link className="text-white font-Ubuntu_Medium text-[1vw] max-[1024px]:text-[1.3vw]" to="/work">Works</Link>
                <Link className="text-white font-Ubuntu_Medium text-[1vw] max-[1024px]:text-[1.3vw]" to="/resume">Resume</Link>
                <div className="max-[1024px]:hidden flex justify-center text-[1vw] items-center w-[90px] h-[28px] text-black font-Ubuntu_Medium bg-[#fff] rounded-[20px] text-center">Contact</div>
            </nav>
            <div className="max-[800px]:hidden hidden max-[1024px]:flex justify-center text-[1.1vw] max-[1024px]:text-[1.3vw] items-center w-[90px] h-[28px] text-black font-Ubuntu_Medium bg-[#fff] rounded-[20px] text-center">Contact</div>
            <div onClick={nav} className="min-[800px]:hidden max-[800px]:flex items-center justify-center w-[4%] h-[45%] max-[480px]:w-[7%]">
                <svg viewBox="0 0 100 100">
                    <line x1="0" y1="25" x2="100" y2="25" stroke="#fff" strokeWidth="7" strokeLinecap="round"/>
                    <line x1="0" y1="50" x2="70" y2="50" stroke="#fff" strokeWidth="7" strokeLinecap="round"/>
                    <line x1="0" y1="75" x2="90" y2="75" stroke="#fff" strokeWidth="7" strokeLinecap="round"/>
                </svg>
            </div>
            <div className={(bool) ? "absolute min-[800px]:hidden max-[800px]:flex flex-row flex-wrap justify-center items-center gap-x-[4.3%] w-[60%] aspect-[1/0.09] rounded-[6px] left-[19%] top-[10%] bg-white bg-opacity-[0.1] max-[640px]:w-[70%] max-[640px]:aspect-[1/0.1] max-[640px]:left-[15%] max-[480px]:w-[75%] max-[480px]:aspect-[1/0.14] max-[480px]:left-[12.5%] max-[340px]:aspect-[1/0.16]" : "hidden"}>
                <Link className="text-white font-Ubuntu_Medium text-[2vw] max-[480px]:text-[2.6vw] max-[340px]:text-[2.9vw] w-[28%] h-[60%] flex flex-col justify-center items-center bg-white text-opacity-[0.8] bg-opacity-[0.2] rounded-[5px]" to="/service">Services</Link>
                <Link className="text-white font-Ubuntu_Medium text-[2vw] max-[480px]:text-[2.6vw] max-[340px]:text-[2.9vw] w-[28%] h-[60%] flex flex-col justify-center items-center bg-white text-opacity-[0.8] bg-opacity-[0.2] rounded-[5px]" to="/work">Works</Link>
                <Link className="text-white font-Ubuntu_Medium text-[2vw] max-[480px]:text-[2.6vw] max-[340px]:text-[2.9vw] w-[28%] h-[60%] flex flex-col justify-center items-center bg-white text-opacity-[0.8] bg-opacity-[0.2] rounded-[5px]" to="/resume">Resume</Link>
            </div>
        </div>
    );
}

export default Header;