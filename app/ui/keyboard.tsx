import { Undo } from "lucide-react";
type KeyboardProps = {
    handleQ: () => void;
    handleW: () => void;
    handleE: () => void;
    handleR: () => void;
    handleT: () => void;
    handleY: () => void;
    handleU: () => void;
    handleI: () => void;
    handleO: () => void;
    handleP: () => void;

    handleA: () => void;
    handleS: () => void;
    handleD: () => void;
    handleF: () => void;
    handleG: () => void;
    handleH: () => void;
    handleJ: () => void;
    handleK: () => void;
    handleL: () => void;

    handleZ: () => void;
    handleX: () => void;
    handleC: () => void;
    handleV: () => void;
    handleB: () => void;
    handleN: () => void;
    handleM: () => void;
    
    
    
    handleBackSpace: () => void;
    handleEnter: () => void;
}
export default function Keyboard({handleBackSpace,handleQ,handleW,handleE,handleI,handleO,handleP,handleR,handleT,handleU,handleY,handleA,handleD,handleF,handleG,handleH,handleJ,handleK,handleL,handleS,handleB,handleC,handleEnter,handleM,handleN,handleV,handleX,handleZ}:KeyboardProps){
    return(
        <div className="text-2xl font-bold flex flex-col items-center gap-2 ">
            <div className="[&>*]:rounded-xl [&>*]:bg-[#818384] [&>*]:w-10  [&>*]:h-15 flex gap-2">
                <button onClick={handleQ}> Q </button>
                <button onClick={handleW}> W </button>
                <button onClick={handleE}> E </button>
                <button onClick={handleR}> R </button>
                <button onClick={handleT}> T </button>
                <button onClick={handleY}> Y </button>
                <button onClick={handleU}> U</button>
                <button onClick={handleI}> I </button>
                <button onClick={handleO}> O </button>
                <button onClick={handleP}> P </button>
            </div>
            <div className="[&>*]:rounded-xl [&>*]:bg-[#818384] [&>*]:w-10  [&>*]:h-15 flex gap-2 ">
                <button onClick={handleA}> A </button>
                <button onClick={handleS}> S </button>
                <button onClick={handleD}> D </button>
                <button onClick={handleF}> F </button>
                <button onClick={handleG}> G </button>
                <button onClick={handleH}> H </button>
                <button onClick={handleJ}> J</button>
                <button onClick={handleK}> K </button>
                <button onClick={handleL}> L </button>    
            </div>

            <div className="flex gap-2">
                <button className = "bg-[#818384] rounded-xl"onClick={handleEnter}>ENTER</button>
                <div className="[&>*]:rounded-xl [&>*]:bg-[#818384] [&>*]:w-10  [&>*]:h-15 flex gap-2 ">
                    
                    <button onClick={handleZ}> Z </button>
                    <button onClick={handleX}> X </button>
                    <button onClick={handleC}> C </button>
                    <button onClick={handleV}> V </button>
                    <button onClick={handleB}> B </button>
                    <button onClick={handleN}> N </button>
                    <button onClick={handleM}> M </button>
                    <button onClick={handleBackSpace}><Undo></Undo></button>
                
                </div>
            </div>
            

        </div>
    );
}
