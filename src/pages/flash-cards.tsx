import { useState } from 'react';
import type { NextPage } from 'next';

const FlashCards: NextPage = () => {
  const [flip, setFlip] = useState<boolean>(false);
  const handleFlip = () => {
    setFlip(!flip);
  };
  return (
    <div className="full-screen page">
      <div className="pb-32 px-16">
        <div className={`flip-card w-full h-96`}>
          <div
            className={`flip-card-inner w-full h-full ${
              flip ? 'flip-card-flip' : ''
            }`}
          >
            <div className="flip-card-front w-full h-full">
              <div className="w-full h-full rounded-xl bg-white shadow-2xl">
                <div
                  className="w-full h-full overflow-y-auto p-4"
                  onClick={() => handleFlip()}
                >
                  <div className="text-2xl break-words">Front Card</div>
                </div>
              </div>
            </div>
            <div className="flip-card-back w-full h-full">
              <div className="w-full h-full rounded-xl bg-white shadow-2xl">
                <div
                  className="w-full h-full overflow-y-auto p-4"
                  onClick={() => handleFlip()}
                >
                  <div className="text-2xl break-words">Back Card</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-secondary py-5 shadow-2xl">
        <div className="flex justify-center items-center gap-5">
          <button className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline expand">
            Prev
          </button>
          <button className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline expand">
            Hint
          </button>
          <button className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline expand">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
