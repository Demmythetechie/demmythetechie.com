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
        <div className="max-[800px]:absolute max-[800px]:z-[1] max-[800px]:top-[0%] flex flex-row items-center justify-between h-[10vh] w-full pl-[8vh] pr-[8vh] max-[800px]:justify-between max-[800px]:pr-[0vh] max-[800px]:pl-[0vh]">
            <a href="http://localhost:3000"><img className="w-[30px] h-[30px] max-[800px]:ml-[4vh]" src="logo_white.png" alt=""/></a>
            <nav className="w-[45%] flex flex-row justify-between items-center max-[1024px]:w-[38%] max-[1024px]:ml-[5%] max-[800px]:hidden">
                {navigation.map((nav)=>(
                    <Link onClick={()=>clck(nav.page)} className={`text-white font-Ubuntu_Medium text-[1vw] max-[1024px]:text-[1.3vw] ${(nav.page === option) ? 'text-opacity-[0.4]' : ''}`} to={nav.goto}>{nav.page}</Link>
                ))}
                <div className="max-[1024px]:hidden flex justify-center text-[1vw] items-center w-[90px] h-[28px] text-black font-Ubuntu_Medium bg-[#fff] rounded-[20px] text-center">Contact</div>
            </nav>
            <div className="max-[800px]:hidden hidden max-[1024px]:flex justify-center text-[1.1vw] max-[1024px]:text-[1.3vw] items-center w-[90px] h-[28px] text-black font-Ubuntu_Medium bg-[#fff] rounded-[20px] text-center">Contact</div>
            <div onClick={nav} className="max-[800px]:mr-[4vh] min-[801px]:hidden max-[800px]:flex items-center justify-center w-[4%] h-[45%] max-[480px]:w-[7%]">
                <svg fill="#fff" viewBox="0 0 100 100">
                    <line x1="0" y1="25" x2="100" y2="25" stroke="#fff" strokeWidth="7" strokeLinecap="round"/>
                    <line x1="0" y1="50" x2="70" y2="50" stroke="#fff" strokeWidth="7" strokeLinecap="round"/>
                    <line x1="0" y1="75" x2="90" y2="75" stroke="#fff" strokeWidth="7" strokeLinecap="round"/>
                </svg>
            </div>
            <div className={(bool) ? "absolute min-[801px]:hidden max-[800px]:flex flex-col justify-around items-center w-[100vw] border-t-[1px] border-b-[1px] border-[#e8e8e80d] backdrop-blur-[10px] backdrop-brightness-[0.2] h-[45vh] top-[90%] pl-[2%] pr-[2%] pt-[1%] pb-[1%]" : "hidden"}>
                {navigation.map((nav)=>(
                    <Link onClick={()=>clck(nav.page)} className={`text-white font-Ubuntu_Medium text-[2vw] max-[620px]:text-[2.3vw] max-[480px]:text-[2.8vw] max-[380px]:text-[3.2vw] max-[300px]:text-[3.9vw] ${(nav.page === option) ? 'text-opacity-[0.3]' : ''}`} to={nav.goto}>{nav.page}</Link>
                ))}
            </div>
        </div>
    );
}

export default Header;