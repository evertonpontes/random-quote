import Card from "./components/card/card.tsx";
import { ReactComponent as QuoteIcon } from "./assets/quote.svg";

function App() {
  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center bg-background">
      <Card>
        <div className="flex justify-center relative">
          <QuoteIcon className="rotate-180 absolute top-0 left-0" />
          <p className="max-w-lg mx-9 text-justify text-xl font-bold">
            You will never be happy if you continue to search for what happiness
            consists of. You will never live if you are looking for the meaning
            of life.
          </p>
          <QuoteIcon className="absolute bottom-0 right-0" />
        </div>
        <div className="w-full h-[1px] mt-8 bg-cardBorder"></div>
        <div className="w-full h-32 flex items-center justify-end">
          <span>-Albert Camus</span>
        </div>
        <div>
          <button>X</button>
          <button>Reload</button>
        </div>
      </Card>
    </div>
  );
}

export default App;
