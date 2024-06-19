import { boolContext } from "../../App";
import { useContext } from "react";

function Intro () {

    const {updateBool} = useContext(boolContext);

    function hideNav() {
        updateBool(false);
    }

    return (
        <div onClick={hideNav} className="flex flex-row justify-center items-center h-[90vh] w-[100%] max-[800px]:h-[100vh]">
            <div className="flex flex-col justify-center items-center w-[25%] aspect-[1/1] max-[480px]:w-[55%] max-[1024px]:w-[35%]">
                <div className="rounded-[50%] w-[85%] aspect-[1/1] bg-[url('/public/Naheem.png')] bg-cover bg-no-repeat bg-[top-center] max-[1024px]:w-[70%] max-[600px]:w-[85%]"></div>
                <div className="w-[90%] aspect-[1/0.3] flex flex-col justify-center items-center">
                    <p className="text-white text-[1.7vw] font-Ubuntu_Medium max-[480px]:text-[4vw] max-[600px]:text-[2.8vw] max-[1024px]:text-[2.5vw]">Naheem Okunade</p>
                    <p className="text-white text-[1.5vw] font-Ubuntu_Light max-[480px]:text-[3.8vw] max-[600px]:text-[2.6vw] max-[1024px]:text-[2.3vw]">A Full-Stack web Developer</p>
                </div>
            </div>
            <div className="absolute flex flex-col justify-between items-center w-[2%] aspect-[1/12] z-2 bottom-[0px] right-[10px] max-[1024px]:w-[2.5%] max-[800px]:w-[3%] max-[600px]:w-[3.8%] max-[480px]:w-[6%] max-[300px]:w-[7%] max-[480px]:right-[5px]">
                <img className="w-[75%] aspect-[1/1]" src="github.png" alt=""/>
                <img className="w-[75%] aspect-[1/1]" src="Linkedin.png" alt=""/>
                <img className="w-[75%] aspect-[1/1]" src="twitter.png" alt=""/>
                <div className="w-[100%] h-[60%]">
                    <svg className="" viewBox="0 0 100 550">
                        <line x1="50" y1="0" x2="50" y2="550" stroke="#fff" strokeWidth="2"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Intro;