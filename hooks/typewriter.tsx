import { useState, useEffect } from 'react';

export const useTypewriter = (words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const handleType = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCharIndex(prev => prev - 1);
          setText(currentWord.substring(0, charIndex - 1));
        } else {
          setIsDeleting(false);
          setWordIndex(prev => prev + 1);
        }
      } else {
        if (charIndex < currentWord.length) {
          setCharIndex(prev => prev + 1);
          setText(currentWord.substring(0, charIndex + 1));
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};
