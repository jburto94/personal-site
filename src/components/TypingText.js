import { useState, useRef, useEffect } from 'react';

const words = ['Web Developer', 'Fullstack engineer', 'UI Developer'];
const firstWord = words[0].split('')

const TypingText = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(firstWord);
  const direction = useRef('backward');
  const letterIndex = useRef();
  const typingInterval = useRef();

  useEffect(() => {
    let pauseCounter = 0;

    const typeLetter = () => {
      if (letterIndex.current >= words[wordIndex].length) {
        direction.current = 'backward';

        pauseCounter = 6;
        return;
      }

      const segment = words[wordIndex].split('');
      setCurrentWord(currentWord.concat(segment[letterIndex.current]));
      letterIndex.current++;
    }

    const backspace = () => {
      if (letterIndex.current === 0) {
        const isLastWord = wordIndex === words.length - 1;

        setWordIndex(isLastWord ? 0 : wordIndex + 1);
        direction.current = 'forward';
        return;
      }

      const segment = currentWord.slice(0, currentWord.length - 1);
      setCurrentWord(segment);
      letterIndex.current = currentWord.length - 1;
    }

    typingInterval.current = setInterval(() => {
      if (pauseCounter > 0) {
        pauseCounter--;
        return;
      }

      if (direction.current === 'forward') {
        typeLetter();
      } else {
        backspace();
      }
    }, 100);

    return () => {
      clearInterval(typingInterval.current);
    }

  }, [wordIndex, currentWord, direction]);

  return (
    <h2 className={`word ${currentWord.length ? 'full' : 'empty'} text-uppercase`}>
      <span>{currentWord.length ? currentWord.join('') : '0'}</span>
    </h2>
  );
};

export default TypingText;