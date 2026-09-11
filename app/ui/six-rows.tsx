import FiveLetters from "./five-letters"; 
import { LetterboxRow } from "../lib/types";

type SixRowsProps = {
    row1: LetterboxRow
    row2: LetterboxRow
    row3: LetterboxRow
    row4: LetterboxRow
    row5: LetterboxRow
    row6: LetterboxRow
}


export default function SixRows({row1,row2,row3,row4,row5,row6}:SixRowsProps){
    return(
        <div className="flex flex-col jusitfy-between gap-1">
            <FiveLetters row={row1}></FiveLetters>
            <FiveLetters row={row2}></FiveLetters>
            <FiveLetters row={row3}></FiveLetters>
            <FiveLetters row={row4}></FiveLetters>
            <FiveLetters row={row5}></FiveLetters>
            <FiveLetters row={row6}></FiveLetters>


            



        </div>
    );
}