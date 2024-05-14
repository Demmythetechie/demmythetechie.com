import { services, skills, guages } from "../../storage.js";
import { boolContext } from "../../App.js";
import { useContext } from "react";

function Service () {
    const {updateBool} = useContext(boolContext);

    function hideNav() {
        updateBool(false);
    }

    return (
        <div onClick={hideNav} className="overflow-hidden flex flex-col justify-center items-center h-[90vh] w-full pl-[2.5%] pr-[2.5%] border border-white">
            <section className="max-[1000px]:hidden w-[100%] aspect-[1/0.1]">
                <Section head="Services" para="Here are some services we provide" cls="section1 flex flex-col pt-[2%] ml-[-20px] opacity-0 w-full aspect-[1/0.05]"/>
                <div className="w-[100%] aspect-[1/0.086] flex flex-row flex-wrap items-center justify-between pl-[1%] pr-[1%]">
                    {services.map((srv)=> (
                        <List name={srv.name} pic={srv.pic}/>
                    ))}
                </div>
            </section>
            <section className="max-[1000px]:hidden w-[100%]">
                <Section head="Skill-set" para="Tools used for executing services" cls="section2 flex flex-col items-end pt-[1%] mr-[-20px] opacity-0 w-[100%] aspect-[1/0.03]"/>
                <div className="trans0 box-border opacity-0 w-[100%] aspect-[1/0.226] max-[1024px]:aspect-[1/0.25] relative overflow-hidden pt-[2%] pb-[1%] pl-[10%] pr-[10%] flex flex-row flex-wrap gap-x-[21%] gap-y-[11.5%] max-[1024px]:gap-x-[19.5%]">
                    {guages.map((guage, index)=>(
                        <Skill cls={guage.clas} percentage={guage.percent} name={skills[index].name} nameCls={skills[index].cls} code={skills[index].code} codeCls={skills[index].cdcls}/>
                    ))}
                </div>
            </section>
            <section className="max-[1000px]:flex h-[45vh] w-[100%] hidden border border-white">
                <Section head="Services" para="Here are some services we provide" cls="section1 flex flex-col pt-[2%] ml-[-20px] opacity-0 w-full aspect-[1/0.05]"/>
            </section>
            <section className="max-[1000px]:flex h-[45vh] w-[100%] hidden border border-white">
                <Section head="Skill-set" para="Tools used for executing services" cls="section2 flex flex-col items-end pt-[1%] mr-[-20px] opacity-0 w-[100%] aspect-[1/0.03]"/>
            </section>
        </div>
    );
}

function List (props) {
    return (
        <div className="list w-[25%] aspect-[1/0.1] max-[1024px]:w-[28%] flex opacity-0 flex-row border-[2px] gap-x-[4%] items-center p-[1%] rounded-[10px]">
            <img className="w-[15%] aspect-square" src={props.pic} alt=""/>
            <p className="text-white text-[1.1vw] max-[1024px]:text-[1.3vw]">{props.name}</p>
        </div>
    );
}

function Section(props) {
    return (
        <div className={props.cls}>
            <p className="text-white text-[2.5vw] font-Ubuntu_Regular leading-tight max-[1024px]:text-[24px] max-[480px]:text-[20px] max-[320px]:text-[5vw]">{props.head}</p>
            <p className="text-white text-[1vw] font-Ubuntu_LightItalic max-[1024px]:text-[14px] max-[480px]:text-[13px] max-[320px]:text-[4.2vw]">{props.para}</p>
            <div className=" animate-[underline_1.5s_ease-out] w-[12%] h-[20%] max-[1024px]:w-[180px] max-[1024px]:h-[70%] max-[480px]:w-[80px] max-[320px]:w-[30%]">
                <svg viewBox="0 0 100 100">
                    <line className="max-[1024px]:stroke-[2px] max-[480px]:stroke-[5px] max-[320px]:stroke-[0.8vw] stroke-[2.5px]" x1="0" y1="0" x2="100" y2="0" fill="#fff" stroke="#fff"/>
                </svg>
            </div>
        </div>
    );
}

function Skill(props) {
    return (
        <div className="relative w-[9%] aspect-[1/1.2] max-[1024px]:w-[10%]">
            <svg viewBox="0 0 100 100" className="flex items-center justify-center rotate-[-90deg]">
                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="7"/>
                <circle className={props.cls} cx="50" cy="50" r="40" fill="none" stroke="#fff" strokeWidth="7" strokeDasharray={props.percentage} strokeDashoffset="0" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute bottom-[0%] flex flex-col items-center justify-between w-[100%] h-[70%]">
                <p className={props.nameCls}>{props.name}</p>
                <p className={props.codeCls}>{props.code}</p>
            </div>
        </div>
    );
}

//style={{maskImage: 'url(circle.png)', WebkitMaskImage: 'url(circle.png)', maskRepeat: 'no-repeat'}}
export default Service;