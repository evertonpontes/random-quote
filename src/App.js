import Card from "./components/card/card.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "./components/tooltip/tooltip.jsx";
import Title from "./components/title/title.jsx";
import QuoteContent from "./components/quoteContent/quoteContent.jsx";
import { useEffect, useState } from "react";

function App() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    loadQuote();
  }, []);

  const loadQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setQuote(response);
      });
  };

  const tweet = () => {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        quote?.content +
        " ——— by " +
        quote?.author,
      "Tweet Window",
      "width=600",
      "height=300"
    );
  };

  return (
    <div className="w-full h-screen overflow-hidden flex justify-center items-center bg-gradient-to-br from-teal-900 to-cyan-950">
      <Card>
        <div className="flex flex-col items-center">
          <Title>Quote of the day.</Title>
          <QuoteContent>{quote?.content}</QuoteContent>
          <div className="w-full h-[1.5px] bg-white bg-opacity-10 my-5 "></div>
          <div className="w-full flex flex-col">
            <div className="w-full font-mono italic my-4 text-end text-gray-500">
              — {quote?.author}
            </div>
            <div className="flex gap-2">
              <Tooltip text={"tweet"}>
                <button onClick={tweet}>
                  <FontAwesomeIcon
                    className="w-6 h-6 text-gray-500"
                    icon={faSquareXTwitter}
                  />
                </button>
              </Tooltip>
              <Tooltip text={"load"}>
                <button onClick={loadQuote}>
                  <FontAwesomeIcon
                    className="w-6 h-6 text-gray-500"
                    icon={faRotateRight}
                  />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default App;
