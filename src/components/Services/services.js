import { services, skills, guages } from "../../storage.js";

function Service () {
    return (
        <div className="overflow-hidden flex flex-col h-[90vh] pl-[30px] pr-[30px]">
            <section className="w-[100%] h-[35%]">
                <Section head="Services" para="Here are some services we provide" cls="section1 flex flex-col pt-[3%] ml-[-20px] opacity-0"/>
                <div className="h-[60%] flex flex-row flex-wrap items-center justify-between pl-[20px] pr-[20px]">
                    {services.map((srv)=> (
                        <List name={srv.name} pic={srv.pic}/>
                    ))}
                </div>
            </section>
            <section className="w-[100%] h-[65%]">
                <Section head="Skill-set" para="Tools used for executing services" cls="section2 flex flex-col items-end pt-[3%] mr-[-20px] opacity-0"/>
                <div className="trans0 opacity-0 h-[299px] relative overflow-hidden mt-[30px] pl-[150px] pr-[150px] pt-[10px] flex flex-row flex-wrap gap-x-[200px] gap-y-[5px]">
                    {guages.map((guage)=>(
                        <Skill cls={guage.clas} percentage={guage.percent}/>
                    ))}
                    {skills.map((skill)=>(
                        <>
                            <p className={skill.cls}>{skill.name}</p>
                            <p className={skill.cdcls}>{skill.code}</p>
                        </>
                    ))}
                </div>
            </section>
        </div>
    );
}

function List (props) {
    return (
        <div className="list mt-[-100px] w-[350px] flex opacity-0 flex-row border-[2px] gap-x-[20px] items-center p-[10px] rounded-[10px]">
            <img className="w-[50px] h-[50px]" src={props.pic} alt=""/>
            <p className="text-white text-[17px]">{props.name}</p>
        </div>
    );
}

function Section(props) {
    return (
        <div className={props.cls}>
            <p className="text-white text-[35px] h-[45px] font-Ubuntu_Regular">{props.head}</p>
            <p className="text-white text-[15px] font-Ubuntu_LightItalic">{props.para}</p>
            <svg x="0px" y="0px" width="200px" height="5px">
                <path fill="#fff" stroke-width="5" stroke="#fff" d="M0 0 l1120 0"/>
            </svg>
        </div>
    );
}

function Skill(props) {
    return (
        <svg className="flex items-center justify-center w-[100px] h-[100px] rotate-[-90deg]">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="7"/>
            <circle className={props.cls} cx="50" cy="50" r="40" fill="none" stroke="#fff" strokeWidth="7" strokeDasharray={props.percentage} strokeDashoffset="0" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

//style={{maskImage: 'url(circle.png)', WebkitMaskImage: 'url(circle.png)', maskRepeat: 'no-repeat'}}
export default Service;