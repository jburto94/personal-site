import { useState, useRef, useEffect } from 'react';
import { typedWords } from '../data';

const firstWord = typedWords[0].split('')

const TypingText = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(firstWord);
  const direction = useRef('backward');
  const letterIndex = useRef();
  const typingInterval = useRef();

  useEffect(() => {
    let pauseCounter = 0;

    const typeLetter = () => {
      if (letterIndex.current >= typedWords[wordIndex].length) {
        direction.current = 'backward';

        pauseCounter = 10;
        return;
      }

      const segment = typedWords[wordIndex].split('');
      setCurrentWord(currentWord.concat(segment[letterIndex.current]));
      letterIndex.current++;
    }

    const backspace = () => {
      if (letterIndex.current === 0) {
        const isLastWord = wordIndex === typedWords.length - 1;

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
    }, 80);

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