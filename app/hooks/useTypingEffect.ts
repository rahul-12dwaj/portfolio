import { useState, useEffect } from 'react';

export function useTypingEffect(
  texts: string[],
  typingSpeed: number = 150,
  deletingSpeed: number = 100,
  delayBetweenTexts: number = 1000
) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentTextIndex];

    const typeText = () => {
      setCurrentText((current) =>
        isDeleting
          ? fullText.substring(0, current.length - 1)
          : fullText.substring(0, current.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        // Wait before starting to delete
        setTimeout(() => setIsDeleting(true), delayBetweenTexts);
      } else if (isDeleting && currentText === '') {
        // Move to the next text
        setIsDeleting(false);
        setCurrentTextIndex((current) => (current + 1) % texts.length);
      }
    };

    const timeout = setTimeout(
      typeText,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [currentText, isDeleting, texts, currentTextIndex, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return currentText;
}
