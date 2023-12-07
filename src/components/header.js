import { Link } from "react-router-dom";
function Header(){
    return (
        <div className="flex flex-row items-end justify-between gap-x-[460px] h-[8%] w-full pl-[8vh] pr-[8vh]">
            <div>
                <img className="w-[30px] h-[30px]" src="logo_white.png" alt=""/>
            </div>
            <nav className="flex flex-row gap-x-[65px] justify-between">
                <Link className="text-white font-Ubuntu_Medium" to="/home">Home</Link>
                <Link className="text-white font-Ubuntu_Medium" to="/service">Services</Link>
                <Link className="text-white font-Ubuntu_Medium" to="/work">Works</Link>
                <Link className="text-white font-Ubuntu_Medium" to="/resume">Resume</Link>
                <Link className="flex justify-center items-center w-[90px] h-[28px] text-black font-Ubuntu_Medium bg-[#fff] rounded-[20px] text-center" to="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export default Header;