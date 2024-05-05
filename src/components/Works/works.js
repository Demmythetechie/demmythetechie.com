import { useRef, useContext } from "react";
import { boolContext } from "../../App";

function Works () {

    const {updateBool} = useContext(boolContext);

    function hideNav() {
        updateBool(false);
    }

    const ch = useRef();
    const incr = useRef();
    const inn = ()=> {
        incr.current.setAttribute('height', '55');
        ch.current.setAttribute('y2', '55');
    }

    function out () {
        incr.current.setAttribute('height', '45');
        ch.current.setAttribute('y2', '45');
    }
    

    return (
        <section onClick={hideNav} className="h-[100vh] w-full flex flex-col items-center pl-[30px] pr-[30px] justify-around">
            <div className="w-full flex flex-col justify-start gap-y-[1px] mt-[30px]">
                <div className="animate-[title_1s_ease-in-out_1] delay-75 fill-mode-forwards w-full flex flex-col justify-start opacity-0 ml-[-30px]">
                    <p className="text-[50px] mb-[-10px] text-white font-Ubuntu_Regular">Featured Project</p>
                    <p className="text-white text-[18px] font-Ubuntu_Light">Here are some of my recent work</p>
                </div>
                <svg className="animate-[line_1s_ease-in-out_1] delay-1000 fill-mode-forwards h-[5px] w-[0px]">
                    <line x1="0" y1="0" x2="200" y2="0" stroke="#fff" strokeWidth="5"/>
                </svg>
            </div>
            <div className="flex flex-row h-[350px] justify-around items-center w-full">
                <Slide cls="flex justify-center items-center rotate-[270deg] opacity-70 hover:opacity-100 group"/>
                <section className="flex flex-row h-full w-[1100px] gap-x-[50px] overflow-hidden">
                    <div className="w-[550px]">
                        <div style={{backgroundImage: "url('/obc-preview.png')"}} className="animate-[bg_1s_ease-in-out_1] delay-75 fill-mode-forwards h-full w-[550px] bg-no-repeat bg-cover rounded-[5px] ml-[500px] opacity-0"></div>
                    </div>
                    <div className="flex flex-col justify-center items-end h-full w-[500px] gap-y-[20px] pl-[30px] pr-[20px]">
                        <p className="animate-[para1_1s_ease-in-out_1] fill-mode-forwards delay-1000 text-[27px] opacity-0 mb-[-20px] text-white font-Ubuntu_Medium">OlaBaruwa & Co Audit Firm</p>
                        <div>
                            <p className="animate-[para2_1s_ease-in-out_1] fill-mode-forwards delay-1500 opacity-0 mb-[-30px] text-white text-[20px] font-Ubuntu_Light text-right">
                                OlaBaruwa & Co is company website of an Audit firm that runs several auditing services varying from Statutory Audit, investigation and Forensic Audit ... 
                            </p>
                        </div>
                        <div className="animate-[para3_1s_ease-in-out_1] fill-mode-forwards mb-[-250px] delay-1000 opacity-0 flex flex-row items-center gap-x-[20px]">
                            <img src="github.png" alt="" className="w-[35px] h-[35px]"/>
                            <svg onMouseOver={inn} onMouseOut={out} ref={incr} width="40" height="45" className="flex justify-center items-center rotate-[90deg]">
                                <line ref={ch} x1="20" y1="12" x2="20" y2="45" stroke="#fff" strokeWidth="2"/>
                                <polyline points="13,22 20,12 27,22" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </section>
                <Slide cls="flex justify-center items-center rotate-[90deg] opacity-70 hover:opacity-100 group"/>
            </div>
        </section>
    );
}

function Slide(props) {
    return (
        <svg width="40" height="40" className={props.cls}>
            <g>
                <circle className="group-hover:animate-[rnd_1s_ease-in-out_1] group-hover:delay-0 group-hover:fill-mode-forwards" cx="20" cy="18" r="16" stroke="#fff" fill="none" strokeWidth="2" strokeDasharray="24 4" strokeDashoffset="0"/>
                <polyline points="12,22 20,12 28,22" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="6 4"/>
            </g>
        </svg>
    );
}
//<line x1="15" y1="30" x2="25" y2="15" stroke="#fff" strokeWidth="3"/>
//<line x1="35" y1="30" x2="25" y2="15" stroke="#fff" strokeWidth="3"/>
export default Works;