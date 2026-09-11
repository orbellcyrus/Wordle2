import { LetterboxProps } from "../lib/types";



export default function Letterbox({color , letter}:LetterboxProps){
    const colors = {
        green: "bg-[#538D4E]",
        gray: "bg-[#3A3A3B]",
        yellow: "bg-[#B59F3B]",

    }
    return(
        <div 
            className={`flex flex-col items-center 
            justify-center text-2xl size-15 font-bold
            font-sans 
            ${color === "empty" ? `${letter === "empty" ?  "border-[#3A3A3B]" : "border-[#565758]"} border-2 bg-transparent ` : colors[color]  }
            
            `}
        >
            {letter === "empty" ? " " : letter}
        </div>

    );
    
}