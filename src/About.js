import {AiFillGithub,AiFillLinkedin,AiFillMail} from "react-icons/ai"


function About() {
    return (

        <>

            <h1 className="font-bold text-xl mt-11 text-center"> About the app</h1>
<div className="  isolation: isolate ">
            <div className=" relative text-lg flex flex-col mt-3 text-center ">

                <p>This is a React App which counts the words and characters in a text as you start typing. </p>
                <p>Styled using Tailwind CSS.</p>
            
            <h1 className="font-bold text-xl mt-9 "> Source Code</h1>
            <div className="mt-3">
                <a  target="_blank" href="https://github.com/ritikahotwani/Word-character-counter">ClickMe!</a>
                    </div>
</div>

</div>

        <footer className="border-t text-l m-auto text-center min-w-[100%] flex flex-col  bottom-0 absolute -z-10 ">
               <div className=" text-[#F2921D]">
                    <h2 className="  text-xl t  my-3  ">Tally- Word Character Counter</h2>
                    </div>
                <p>Greetings, I'm a computer science student studying for my bachelor's degree at Mumbai University.
                I am passionate about web applications. Thank you for visiting.</p>
               
                <div className="flex gap-6 m-auto justify-center pb-2">
                    
                    <a target="_blank" href="https://www.linkedin.com/in/ritika-hotwani-46a651201/"><AiFillLinkedin size={25}/></a>
                    <a target="_blank" href="mailto:ritikahotwani24@gmail.com"><AiFillMail size={25} /></a>
                    <a target="_blank" href="https://github.com/ritikahotwani"><AiFillGithub size={25}/></a>
                </div>

               
                <h1 className=" text-center font-serif  ">© 2023 | Ritika Hotwani</h1>
            </footer>

        </>
    );
}
export default About;