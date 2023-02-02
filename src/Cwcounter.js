import {useState,useRef,useEffect} from "react";

function Cwcounter()
{
    const[text,setText]=useState("");
    const[ans,setAns]=useState("");

    const hText=(event)=>{setText(event.target.value);
        // let cc=text.l;
        // let wc=0;
        // let t=text.value;
       
    }
    const rText = useRef();
    const count=()=>{

        let cc = text.split("").length;

        let wc;
        // if (cc == 0) {
        //     wc = 0;
        // }
        // else {
        //     wc = text.split(" ").length;
        // }
        cc == 0 ? wc = 0 : wc = text.trim().split(" ").length;

        let res="Characters= "+cc+" Words= "+wc;
       
        setAns(res);
    }
    const clear = (event) => {
		event.preventDefault();
		setText("");
	}

    useEffect(() => {
        rText.current.focus();

    },[])
    useEffect(() => {
        count()
    }, [text])
    return(
        <>
            
			<div className="min-h-[87.5vh]  flex flex-col items-center font-mono">
				<h1 className="text-[#A61F69] darkmode-ignore  font-bold text-3xl my-5">Character Word Counter</h1>
                <form className="flex flex-col items-center font-mono" onSubmit={clear}>
                    <div className="  text-[#A61F69] darkmode-ignore">
                        <textarea value={text} className="   hidden lg:block p-4 my-4 rounded-lg resize-none  border-[#400E32] border-2 bg-[#F2CD5C] " rows={10} cols={70} onChange={hText} ref={rText}></textarea>
                        <textarea value={text} className="hidden sm:block lg:hidden  p-4 my-4 rounded-lg resize-none  border-[#400E32] border-2] bg-[#F2CD5C]" rows={10} cols={50} onChange={hText} ref={rText}></textarea>
                        <textarea value={text} className="sm:hidden p-4 my-4 rounded-lg resize-none  border-[#400E32] border-2 bg-[#F2CD5C] " rows={10} cols={30} onChange={hText} ref={rText}></textarea>
                    </div>
					<input type="submit" value="Clear"
						className="bg-[#A61F69] w-[20%] darkmode-ignore  text-[#F2CD5C] rounded-md my-2 border-2 border-black"></input>
                </form>
                
				<h2 className="text-[#400E32] darkmode-ignore font-bold text-xl my-6">{ans}</h2>
			</div>
        </>
    )
}
export default Cwcounter;