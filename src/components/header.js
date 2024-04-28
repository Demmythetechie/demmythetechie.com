import { Link } from "react-router-dom";
function Header(){
    return (
        <div className="flex flex-row items-center justify-between h-[10vh] w-full pl-[8vh] pr-[8vh] max-[800px]:justify-between max-[800px]:pr-[4vh] max-[800px]:pl-[4vh]">
            <img className="w-[30px] h-[30px]" src="logo_white.png" alt=""/>
            <nav className="w-[45%] flex flex-row justify-between items-center max-[1024px]:w-[38%] max-[1024px]:ml-[5%] max-[800px]:hidden">
                <Link className="text-white font-Ubuntu_Medium text-[1vw] max-[1024px]:text-[1.3vw]" to="/">Home</Link>
                <Link className="text-white font-Ubuntu_Medium text-[1vw] max-[1024px]:text-[1.3vw]" to="/service">Services</Link>
                <Link className="text-white font-Ubuntu_Medium text-[1vw] max-[1024px]:text-[1.3vw]" to="/work">Works</Link>
                <Link className="text-white font-Ubuntu_Medium text-[1vw] max-[1024px]:text-[1.3vw]" to="/resume">Resume</Link>
                <Link className="max-[1024px]:hidden flex justify-center text-[1vw] items-center w-[90px] h-[28px] text-black font-Ubuntu_Medium bg-[#fff] rounded-[20px] text-center" to="/contact">Contact</Link>
            </nav>
            <Link className="max-[800px]:hidden hidden max-[1024px]:flex justify-center text-[1.1vw] max-[1024px]:text-[1.3vw] items-center w-[90px] h-[28px] text-black font-Ubuntu_Medium bg-[#fff] rounded-[20px] text-center" to="/contact">Contact</Link>
            <div className="min-[800px]:hidden max-[800px]:flex items-center justify-center w-[4%] h-[45%] max-[480px]:w-[7%]">
                <svg viewBox="0 0 100 100">
                    <line x1="0" y1="25" x2="100" y2="25" stroke="#fff" strokeWidth="7" strokeLinecap="round"/>
                    <line x1="0" y1="50" x2="70" y2="50" stroke="#fff" strokeWidth="7" strokeLinecap="round"/>
                    <line x1="0" y1="75" x2="90" y2="75" stroke="#fff" strokeWidth="7" strokeLinecap="round"/>
                </svg>
            </div>
        </div>
    );
}

export default Header;