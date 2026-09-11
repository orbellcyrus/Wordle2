export type ColorOfBox = "gray" | "yellow" | "green" | "empty" ;

export type Letter =
  | "A" | "B" | "C" | "D" | "E" | "F"
  | "G" | "H" | "I" | "J" | "K" | "L"
  | "M" | "N" | "O" | "P" | "Q" | "R"
  | "S" | "T" | "U" | "V" | "W" | "X"
  | "Y" | "Z" | "empty";

export type LetterboxProps = {color: ColorOfBox, letter: Letter} ;

export type LetterboxRow = [LetterboxProps,LetterboxProps,LetterboxProps,LetterboxProps,LetterboxProps];

type Board = LetterboxProps[][];


function isLetter(key:string): key is Letter{
    const validKeys: Letter[] = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T', 'U',
        'V', 'W', 'X', 'Y', 'Z'
        ];
    return validKeys.includes(key.toUpperCase() as Letter);
}

export function convertToLetter(input: string):Letter | null {
    const upperInput = input.toUpperCase();
    if (isLetter(upperInput)) {
        return upperInput;
    }
    return null;
}

