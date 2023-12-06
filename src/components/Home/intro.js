function Intro () {
    return (
        <div className="flex flex-row justify-center h-[90%] w-full pl-[8vh] pr-[8vh]">
            <div className="flex flex-col justify-center items-center w-[600px]">
                <img className="rounded-[50%] w-[237px] h-[235px]" src="Naheem.png" alt=""/>
                <p className="text-white text-[37px] font-Ubuntu_Medium">Naheem Okunade</p>
                <p className="text-white text-[20px] font-Ubuntu_Light">A Full-Stack web Developer</p>
            </div>
            <div className="absolute flex flex-col justify-end gap-y-[40px] w-[20px] z-2 bottom-[70px] right-[15px]">
                <img className="w-[20px] h-[20px]" src="github.png" alt=""/>
                <img className="w-[20px] h-[20px]" src="linkedin.png" alt=""/>
                <img className="w-[20px] h-[20px]" src="twitter.png" alt=""/>
                <div className="h-[50px] w-[0px] border border-white"></div>
            </div>
        </div>
    );
}

export default Intro;