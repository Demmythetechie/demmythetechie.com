import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import navigation from "./navfile";
import { boolContext } from "../App";

function Header(){
    const {bool, updateBool} = useContext(boolContext);
    const [option, updateOption] = useState(null);
    function nav() {
      if (bool) {
        updateBool(false);
      } else {
        updateBool(true);
      }
    }

    function clck(page) {
        updateOption(page);
        updateBool(false);
    }

    return (
        <div className="flex flex-row items-center justify-between h-[10vh] w-full pl-[8vh] pr-[8vh] max-[800px]:justify-between max-[800px]:pr-[4vh] max-[800px]:pl-[4vh]">
            <a href="http://localhost:3000"><img className="w-[30px] h-[30px]" src="logo_white.png" alt=""/></a>
            <nav className="w-[45%] flex flex-row justify-between items-center max-[1024px]:w-[38%] max-[1024px]:ml-[5%] max-[800px]:hidden">
                {navigation.map((nav)=>(
                    <Link onClick={()=>clck(nav.page)} className={`text-white font-Ubuntu_Medium text-[1vw] max-[1024px]:text-[1.3vw] ${(nav.page === option) ? 'text-opacity-[0.4]' : ''}`} to={nav.goto}>{nav.page}</Link>
                ))}
                <div className="max-[1024px]:hidden flex justify-center text-[1vw] items-center w-[90px] h-[28px] text-black font-Ubuntu_Medium bg-[#fff] rounded-[20px] text-center">Contact</div>
            </nav>
            <div className="max-[800px]:hidden hidden max-[1024px]:flex justify-center text-[1.1vw] max-[1024px]:text-[1.3vw] items-center w-[90px] h-[28px] text-black font-Ubuntu_Medium bg-[#fff] rounded-[20px] text-center">Contact</div>
            <div onClick={nav} className="min-[801px]:hidden max-[800px]:flex items-center justify-center w-[4%] h-[45%] max-[480px]:w-[7%]">
                <svg viewBox="0 0 100 100">
                    <line x1="0" y1="25" x2="100" y2="25" stroke="#fff" strokeWidth="7" strokeLinecap="round"/>
                    <line x1="0" y1="50" x2="70" y2="50" stroke="#fff" strokeWidth="7" strokeLinecap="round"/>
                    <line x1="0" y1="75" x2="90" y2="75" stroke="#fff" strokeWidth="7" strokeLinecap="round"/>
                </svg>
            </div>
            <div className={(bool) ? "absolute min-[801px]:hidden max-[800px]:flex flex-row flex-wrap justify-between items-center w-[60%] aspect-[1/0.2] rounded-[6px] left-[19%] top-[10%] bg-white bg-opacity-[0.1] pl-[2%] pr-[2%] pt-[1%] pb-[1%] max-[620px]:w-[70%] max-[620px]:aspect-[1/0.2] max-[620px]:left-[15%] max-[480px]:w-[75%] max-[480px]:aspect-[1/0.21] max-[480px]:left-[12%] max-[380px]:w-[78%] max-[380px]:aspect-[1/0.23] max-[380px]:left-[11%] max-[300px]:aspect-[1/0.25]" : "hidden"}>
                {navigation.map((nav)=>(
                    <Link onClick={()=>clck(nav.page)} className={`text-white font-Ubuntu_Medium text-[2vw] max-[620px]:text-[2.3vw] max-[480px]:text-[2.8vw] max-[380px]:text-[3.2vw] max-[300px]:text-[3.9vw] w-[48%] h-[35%] flex flex-col justify-center items-center bg-white text-opacity-[0.7] bg-opacity-[0.1] rounded-[15px] ${(nav.page === option) ? 'border border-white border-opacity-[0.3]' : ''}`} to={nav.goto}>{nav.page}</Link>
                ))}
            </div>
        </div>
    );
}

export default Header;