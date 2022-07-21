import type { NextPage } from 'next';
import { useEffect, useState, useRef } from 'react';
import { FadeIn } from '../components/animations';

const allowedNames = ['Andy'];

const Home: NextPage = () => {
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    inputEl?.current?.focus();

    console.log(inputEl?.current?.value);

    if (allowedNames.indexOf(inputEl?.current?.value || '') > -1) {
      setShowLinks(true);
    }
  };

  const messages = [
    <div key={0}>
      <FadeIn>
        <p>Hello World!</p>
      </FadeIn>
    </div>,
    <div key={1}>
      <FadeIn>
        <p>Welcome to my website.</p>
      </FadeIn>
    </div>,
    <div key={2}>
      <FadeIn>
        <input
          className="input focus:outline-none focus:shadow-outline"
          ref={inputEl}
          type="text"
          placeholder="What is your name?"
        />
      </FadeIn>
    </div>,
    <div key={3}>
      <FadeIn>
        <button className="btn btn-primary" onClick={onButtonClick}>
          Check Access
        </button>
      </FadeIn>
    </div>,
  ];

  useEffect(() => {
    const tick = () => {
      setMessageIndex((old: number) => {
        const nextIndex = Math.min(old + 1, messages.length);
        if (nextIndex === messages.length) {
          console.log('Done');
          clearInterval(interval);
          return messages.length;
        }
        return nextIndex;
      });
    };
    console.log('Start Tick...');
    const interval = setInterval(tick, 2000);
    return () => {
      console.log('Done');
      clearInterval(interval);
    };
  }, [messages.length]);

  const showableMessages = messages.map((message, i: number) => {
    return i < messageIndex ? (
      <div key={i}>{message}</div>
    ) : (
      <div key={i}></div>
    );
  });

  console.log('Render');

  return (
    <div className="font-mono flex flex-wrap flex-col h-screen">
      <div className="bg-blue-200 flex-grow flex justify-center items-center">
        <div className="w-1/3 bg-white shadow-2xl rounded-lg p-2">
          <FadeIn>
            <div />
          </FadeIn>
          <div className="p-2 flex flex-col gap-2">{showableMessages}</div>
          {showLinks && (
            <div className="p-2 flex flex-col gap-2">
              <FadeIn>
                <h2>
                  It Worked! You got past my security. You are a true hacker
                  now.
                </h2>
                <div className="flex gap-2">
                  <a className="btn btn-primary" target="_blank" href="/resume">
                    Resume
                  </a>
                  <a className="btn btn-primary" target="_blank" href="/music">
                    Music
                  </a>
                </div>
              </FadeIn>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
