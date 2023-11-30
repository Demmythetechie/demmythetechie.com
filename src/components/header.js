import { Link } from "react-router-dom";
function Header(){
    return (
        <div className="flex flex-row items-center justify-between h-[50px] w-full border border-black bg-black pl-[50px] pr-[50px]">
            <div>
                <img className="w-[30px] h-[30px]" src="logo.png" alt=""/>
            </div>
            <nav className="flex flex-row w-[350px] border border-white justify-between">
                <Link className="text-white font-webfont" to="/portfolio">Portfolio</Link>
                <Link className="text-white font-webfont" to="/resume">Resume</Link>
                <Link className="text-white font-webfont" to="/about">About</Link>
            </nav>
            <div className="w-[200px] flex flex-row justify-between items-center">
                <Link className="text-center text-[15px] w-[100px] h-[30px] text-white bg-[#DD2E3A] rounded-[20px] pt-[5px] pb-[5px]" to="/contact">Let's Talk</Link>
                <div className="flex flex-row gap-x-[20px]">
                    <a>
                        <img className="w-[20px] h-[20px]" src="github.png" alt=""/>
                    </a>
                    <a>
                        <img className="w-[20px] h-[20px]" src="Linkedin.png" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;