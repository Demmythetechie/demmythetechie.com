import { Link } from "react-router-dom";
function Header(){
    return (
        <div className="flex flex-row items-center justify-between h-[50px] w-full border border-black bg-black pl-[50px] pr-[50px]">
            <div>
                <img className="w-[30px] h-[30px]" src="logo_white.png" alt=""/>
            </div>
            <nav className="flex flex-row w-[350px] justify-between">
                <Link className="text-white font-ChakraPetch_Regular" to="/portfolio">Porfolio</Link>
                <Link className="text-white font-ChakraPetch_Regular" to="/resume">Resume</Link>
                <Link className="text-white font-ChakraPetch_Regular" to="/about">About</Link>
            </nav>
            <Link className="text-center font-ChakraPetch_SemiBold text-[15px] w-[100px] h-[30px] text-black bg-white rounded-[20px] pt-[5px]" to="/contact">Let's Talk</Link>
        </div>
    );
}

export default Header;