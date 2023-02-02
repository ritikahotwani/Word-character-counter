import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
                <div className="flex items-center justify-between m-auto max-w-[1200px] mt-[2vw] "> 
                    <Link to="/">
                        <div className="flex gap-2 items-center">
                        <h1 className="text-[#F2921D] text-4xl font-serif font-bold  ">Tally</h1>
                    </div>
                        
                    </Link>
            
                    <div className=" relative  flex items-center   gap-4   "> 

                        <Link className="text-[#A61F69]   " to="/">Home</Link>
                        <Link className="  darkmode-ignore  text-[#A61F69]" to="/about">About Us</Link>
                    </div>
                </div>
            
           
</>
    );

}
export default NavBar;