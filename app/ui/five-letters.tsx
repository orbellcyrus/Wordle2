import Letterbox from "./letterbox";
import { LetterboxRow } from "../lib/types";

type FiveLettersProps = {
    row: LetterboxRow;
}
export default function FiveLetters({row}:FiveLettersProps){
    
    return(
        <div className="flex justify-between gap-1">
            <Letterbox color = {row[0].color} letter={row[0].letter} ></Letterbox>
            <Letterbox color = {row[1].color} letter={row[1].letter} ></Letterbox>
            <Letterbox color = {row[2].color} letter={row[2].letter} ></Letterbox>
            <Letterbox color = {row[3].color} letter={row[3].letter} ></Letterbox>
            <Letterbox color = {row[4].color} letter={row[4].letter} ></Letterbox>
            
            
        </div>
    );
} 