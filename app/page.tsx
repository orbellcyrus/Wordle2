import GameController from "./ui/game-controller";
import { randomWord } from "./lib/words";
export default function Home() {
  const inputWord = randomWord();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-[#121214] text-white">
      <main className="">
          <GameController inputWord={inputWord}></GameController>
  
      </main>
    </div>
  );
}
