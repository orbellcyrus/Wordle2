export default function GameOverPopup({lost,score,word}:{lost:boolean,score?:number,word:string;}){
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
            <div className="rounded-xl bg-white p-6 text-black">
                {lost && `${word}`}
                {!lost && `Congrats, you got the word in ${score} guesses` }
            </div>
        </div>
    );
}