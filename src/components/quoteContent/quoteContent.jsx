import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function QuoteContent({ children }) {
  return (
    <div className="w-full flex flex-col gap-4 text-gray-400">
      <div className="w-full">
        <FontAwesomeIcon className="w-7 h-7" icon={faQuoteLeft} />
      </div>
      <p className="text-xl text-center font-semibold font-serif mx-6">
        {children}
      </p>
      <div className="w-full flex justify-end">
        <FontAwesomeIcon className="w-7 h-7" icon={faQuoteRight} />
      </div>
    </div>
  );
}

export default QuoteContent;
