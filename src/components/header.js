import { Link } from "react-router-dom";
function Header(){
    return (
        <div className="flex flex-row items-end justify-start gap-x-[460px] h-[8%] w-full pl-[8vh] pr-[8vh]">
            <div>
                <img className="w-[30px] h-[30px]" src="logo_white.png" alt=""/>
            </div>
            <nav className="flex flex-row w-[350px] justify-between">
                <Link className="text-white font-Ubuntu_Medium" to="/portfolio">Porfolio</Link>
                <Link className="text-white font-Ubuntu_Medium" to="/resume">Resume</Link>
                <Link className="text-white font-Ubuntu_Medium" to="/about">About</Link>
                <Link className="text-white font-Ubuntu_Medium" to="/about">Contact</Link>
            </nav>
        </div>
    );
}

export default Header;