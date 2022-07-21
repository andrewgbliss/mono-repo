import type { NextPage } from 'next';
import { useEffect, useState, useRef } from 'react';

const allowedNames = ['Andy'];

const Home: NextPage = () => {
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl?.current?.focus();

    console.log(inputEl?.current?.value);

    if (allowedNames.indexOf(inputEl?.current?.value || '') > -1) {
      setShowLinks(true);
    }
  };

  const messages = [
    <div>Hello World!</div>,
    <div>Welcome to my website.</div>,
    <div>
      <input ref={inputEl} type="text" placeholder="What is your name?" />
    </div>,
    <div>
      <button onClick={onButtonClick}>Focus the input</button>
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
    const interval = setInterval(tick, 5000);
    return () => {
      console.log('Done');
      clearInterval(interval);
    };
  }, []);

  const showableMessages = messages.map((message, i: number) => {
    return i <= messageIndex ? (
      <div key={i}>{message}</div>
    ) : (
      <div key={i}></div>
    );
  });

  console.log('Render');

  return (
    <div>
      {showableMessages}
      {showLinks && (
        <div>
          <h1>
            It Worked! You got past my security. You are a true hacker now.
          </h1>
          <ul>
            <li>
              <a target="_blank" href="/resume">
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
