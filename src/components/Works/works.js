import { useRef, useContext, useEffect, useState, useReducer } from "react";
import { boolContext } from "../../App";
import axios from "axios";

function Works () {
    const workref = useRef(null);
    const [works, updateWork] = useReducer(reducer, null);
    const [bgn, updateBgn] = useState(null);
    const [end, updateEnd] = useState(null);

    function reducer(state, action) {
        if (action.type === 'prev') {
            const prevState = [...state];
            if (workref.current === null) {
                const roll = prevState.pop();
                prevState.unshift(roll);
                state = prevState;
            } else {
                const roll = prevState.pop();
                workref.current.push(roll);
                prevState.unshift(workref.current.shift());
                state = prevState;
            }
        } else if(action.type === 'next') {
            const prevState = [...state];
            if (workref.current === null) {
                const roll = prevState.shift();
                prevState.push(roll);
                state = prevState;
            } else {
                const roll = prevState.shift();
                workref.current.unshift(roll);
                prevState.push(workref.current.pop());
                state = prevState;
            }
        } else {
            if ((action.value).length  % 2 === 0) {
                state = (action.value).splice(0, 3);
                workref.current = action.value;
            } else {
                state = action.value;
            }
        }
        return state;
    }

    
    
    useEffect(()=> {
        (async () => {
            try {
                await axios.get('http://localhost:4000/work')
                .then(function (response) {
                    console.log(response.data)
                    updateWork({type: 'intialState', value: response.data});
                })
                .catch(function(err) {
                    console.log(err);
                })
            } catch (error) {
                console.log(`Error from getting data at all ${error}`)
            }
        })()
    }, []);

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

    function prev() {
        updateBgn(0);
        updateWork({type: 'prev'});
        setTimeout(()=>{
            updateBgn(null);
        }, 200); 
    }

    function next () {
        console.log(works.length);
        updateEnd(works.length - 1);
        updateWork({type: 'next'});
        setTimeout(() => {
            updateEnd(null);
        }, 200);
    }
    
    
 
    return (
        <section onClick={hideNav} className="h-[100vh] w-full flex flex-col items-center pl-[3vw] pr-[3vw] justify-around">
            <div className="w-full flex flex-col justify-start gap-y-[1px] mt-[1vh]">
                <div className="animate-[title_1s_ease-in-out_1] delay-75 fill-mode-forwards w-full flex flex-col justify-start opacity-0 ml-[-1vw]">
                    <p className="text-[50px] mb-[-10px] text-white font-Ubuntu_Regular">Featured Project</p>
                    <p className="text-white text-[18px] font-Ubuntu_Light">Here are some of my recent work</p>
                </div>
                <div className="w-[50vw] h-[2vh]">
                    <svg className="animate-[line_1s_ease-in-out_1] w-[0px] delay-1000 fill-mode-forwards" viewBox="0 0 200 10">
                        <line x1="0" y1="0" x2="200" y2="0" stroke="#fff" strokeWidth="5"/>
                    </svg>
                </div>
            </div>
            <div className="flex flex-row h-[55vh] justify-around items-center w-full">
                <div className="w-[2.5vw] aspect-[1/1]" onClick={prev}>
                    <svg viewBox="0 0 40 40" className="flex justify-center items-center rotate-[270deg] opacity-70 hover:opacity-100 group">
                        <g>
                            <circle className="group-hover:animate-[rnd_1s_ease-in-out_1] group-hover:delay-0 group-hover:fill-mode-forwards" cx="20" cy="20" r="16" stroke="#fff" fill="none" strokeWidth="2" strokeDasharray="24 4" strokeDashoffset="0"/>
                            <polyline points="12,22 20,12 28,22" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="6 4"/>
                        </g>
                    </svg>
                </div>
                <div className="flex flex-col flex-wrap content-center w-[85%] h-full overflow-hidden">
                    {works && works.map((work, index)=>(
                        <section className={(bgn === index) ? 'slideIncr flex flex-row h-full w-[0%] gap-x-[3%]' : (end === index) ? 'slideDecr flex flex-row h-full w-[100%] gap-x-[3%]' : 'flex flex-row h-full w-[100%] gap-x-[3%]'}>
                            <div className="w-[52%]">
                                <div style={{backgroundImage: `url(${work.imagePath})`}} className="hover:bg-[length:56vw_70vh] animate-[bg_1s_ease-in-out_1] delay-75 fill-mode-forwards h-full w-full bg-no-repeat bg-cover rounded-[5px] ml-[500px] opacity-0"></div>
                            </div>
                            <div className="flex flex-col justify-center items-end h-full w-[45%] gap-y-[20px] pl-[2%] pr-[1.2%]">
                                <p className="animate-[para1_1s_ease-in-out_1] fill-mode-forwards delay-1000 text-[27px] opacity-0 text-white font-Ubuntu_Medium">{work.name}</p>
                                <div>
                                    <p className="animate-[para2_1s_ease-in-out_1] fill-mode-forwards delay-1500 opacity-0 text-white text-[20px] font-Ubuntu_Light text-right">{work.summary} ... </p>
                                </div>
                                <div className=" w-full justify-end animate-[para3_1s_ease-in-out_1] fill-mode-forwards delay-1000 opacity-0 flex flex-row items-center gap-x-[7%]">
                                    <img href={work.githubLink} src="github.png" alt="" className="w-[7%] aspect-[1/1]"/>
                                    <div href={work.website} className="w-[8%] aspect-square">
                                        <svg onMouseOver={inn} onMouseOut={out} ref={incr} viewBox="0 0 40 45" className="flex justify-center items-center rotate-[90deg]">
                                            <line ref={ch} x1="20" y1="12" x2="20" y2="45" stroke="#fff" strokeWidth="2"/>
                                            <polyline points="13,22 20,12 27,22" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
                <div className="w-[2.5vw] aspect-[1/1]" onClick={next}>
                    <svg viewBox="0 0 40 40" className="flex justify-center items-center rotate-[90deg] opacity-70 hover:opacity-100 group">
                        <g>
                            <circle className="group-hover:animate-[rnd_1s_ease-in-out_1] group-hover:delay-0 group-hover:fill-mode-forwards" cx="20" cy="20" r="16" stroke="#fff" fill="none" strokeWidth="2" strokeDasharray="24 4" strokeDashoffset="0"/>
                            <polyline points="12,22 20,12 28,22" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeDasharray="6 4"/>
                        </g>
                    </svg>
                </div>
            </div>
        </section>
    );
}
//<line x1="15" y1="30" x2="25" y2="15" stroke="#fff" strokeWidth="3"/>
//<line x1="35" y1="30" x2="25" y2="15" stroke="#fff" strokeWidth="3"/>
export default Works;