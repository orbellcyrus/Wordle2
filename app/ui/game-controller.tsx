"use client";
import { useState } from "react";
import { useEffect } from 'react';
import { Letter, LetterboxRow,convertToLetter} from "../lib/types";
import GameOverPopup from "./game-over-popup";
import SixRows from "./six-rows"
import Keyboard from "./keyboard";


export default function GameController({inputWord}:{inputWord:string}){
    const word = inputWord.split("").map(letter => convertToLetter(letter));

    const EMPTY_ROW: LetterboxRow = [
        { color: "empty", letter: "empty" },
        { color: "empty", letter: "empty" },
        { color: "empty", letter: "empty" },
        { color: "empty", letter: "empty" },
        { color: "empty", letter: "empty" }
    ];
    const createEmptyBoard = (): LetterboxRow[] =>
        Array.from({ length: 6 }, () => [...EMPTY_ROW]);

    const [input,setInput] = useState<LetterboxRow>([...EMPTY_ROW]);
    const [currentRow,setCurrentRow] = useState(1);
    const [board,setBoard] = useState<LetterboxRow[]>(createEmptyBoard)
    const [gameLost, setGameLost] = useState<boolean | null>(null);
    const inputPosition = input.findIndex(box => box.letter === "empty");
    function handleInput(letter:Letter){
        setInput(prev => {
                const newInput = [...prev] as LetterboxRow;
                newInput[inputPosition] = {color:"empty", letter:letter};
                return newInput;
            })
    } 
    function handleBackSpace(){
        if(inputPosition > 0 ){
            setInput(prev => {
                const newInput = [...prev] as LetterboxRow;
                newInput[inputPosition-1] = {color:"empty", letter:"empty"};
                return newInput;
            })
        }
        if(inputPosition === -1 ){
            setInput(prev => {
                const newInput = [...prev] as LetterboxRow;
                newInput[4] = {color:"empty", letter:"empty"};
                return newInput;
            })
        }
    }

    function handleEnter(){
        if(inputPosition === -1){
            setBoard(prev=> {
                const newBoard = [...prev];
                let score = 0;
                const updatedInput = input.map((letterbox,index) => {
                    if( word[index] === letterbox.letter){
                        score++;
                        return { ...letterbox, color: "green" };
                    }
                    else if (word.includes(letterbox.letter)) {
                        return { ...letterbox, color: "yellow" };
                    }
                    return{ ...letterbox, color: "gray" };
                }) as LetterboxRow;

                newBoard[currentRow-1] =  updatedInput;
                if(score === 5){
                    setGameLost(false);
                }
                return newBoard;

            })
            setCurrentRow(currentRow+1);
            if(currentRow<6){

                setInput([{color:"empty", letter:"empty"},{color:"empty", letter:"empty"},{color:"empty", letter:"empty"},{color:"empty", letter:"empty"},{color:"empty", letter:"empty"}]);
            }else{
                setGameLost(true);
            }
        }
    }

    //detect key innputs
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if(event.key === "Backspace"){
                handleBackSpace();
            } 
            else if(event.key === "Enter"){
                handleEnter();
            }
            else{
                const customKey = convertToLetter(event.key)
                    if(customKey != null){
                        handleInput(customKey);
                    }
            }
        
                
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleInput]); 

    return(
        <div>
            {(gameLost != null) && <GameOverPopup lost = {gameLost} score = {currentRow-1} word = {word.toString().replace(/,/g, "")}></GameOverPopup>}
             <div className="flex flex-col items-center gap-4">
        
                <SixRows
                    row1={currentRow === 1 ? input : board[0]}
                    row2={currentRow === 2 ? input : board[1]}
                    row3={currentRow === 3 ? input : board[2]}
                    row4={currentRow === 4 ? input : board[3]}
                    row5={currentRow === 5 ? input : board[4]}
                    row6={currentRow === 6 ? input : board[5]}
                    >
                </SixRows>

                <Keyboard
                    handleQ={() => handleInput("Q")}
                    handleW={() => handleInput("W")}
                    handleE={() => handleInput("E")}
                    handleR={() => handleInput("R")}
                    handleT={() => handleInput("T")}
                    handleY={() => handleInput("Y")}
                    handleU={() => handleInput("U")}
                    handleI={() => handleInput("I")}
                    handleO={() => handleInput("O")}
                    handleP={() => handleInput("P")}

                    handleA={() => handleInput("A")}
                    handleS={() => handleInput("S")}
                    handleD={() => handleInput("D")}
                    handleF={() => handleInput("F")}
                    handleG={() => handleInput("G")}
                    handleH={() => handleInput("H")}
                    handleJ={() => handleInput("J")}
                    handleK={() => handleInput("K")}
                    handleL={() => handleInput("L")}

                    handleZ={() => handleInput("Z")}
                    handleX={() => handleInput("X")}
                    handleC={() => handleInput("C")}
                    handleV={() => handleInput("V")}
                    handleB={() => handleInput("B")}
                    handleN={() => handleInput("N")}
                    handleM={() => handleInput("M")}
                    
                    
                    handleBackSpace={() => handleBackSpace()}
                    handleEnter={() => handleEnter()}
                >
                </Keyboard>
                
            </div>

        </div>
       
        

    );
    
}

