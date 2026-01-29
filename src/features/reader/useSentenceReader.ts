import { useEffect, useMemo, useRef, useState } from "react";
import type { Props } from "./types";

export function useSentenceReader({ sentences, onNextChapter, onPrevChapter }: Props) {

  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [selectedWord, setSelectedWord] = useState(0);
  const [expandedWord, setExpandedWord] = useState<number | null>(null);

  const words = sentences[sentenceIndex]?.words ?? [];

  const currentImage = useMemo(() => {
    for (let i = sentenceIndex; i >= 0; i--) {
      const img = sentences[i]?.imageUrl;
      if (typeof img === "string" && img.length > 0) return img;
    }
    return undefined;
  }, [sentences, sentenceIndex]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  const goToSentence = (nextIndex: number, nextSelectedWord: number) => {
    setSentenceIndex(nextIndex);
    setExpandedWord(null);
    setSelectedWord(nextSelectedWord);
  };

  const goNextSentence = () => {
    if (sentenceIndex >= sentences.length - 1) return;
    goToSentence(sentenceIndex + 1, 0);
  };

  const goPrevSentence = () => {
    if (sentenceIndex <= 0) return;
    const prevWordsLen = sentences[sentenceIndex - 1]?.words?.length ?? 0;
    goToSentence(sentenceIndex - 1, Math.max(0, prevWordsLen - 1));
  };

  const toggleExpanded = (index: number) => {
    setExpandedWord(prev => (prev === index ? null : index));
  };

  const onClickWord = (index: number) => {
    if (index === selectedWord) toggleExpanded(index);
          else {
            setSelectedWord(index);
            setExpandedWord(null);
          }
  }

  const moveRight = () => {
    const last = Math.max(0, words.length - 1);
    const isLastSentence = sentenceIndex >= sentences.length - 1;
    const isLastWord = selectedWord >= last;

    if (isLastWord) {
      if (!isLastSentence) {
        goNextSentence();
        return;
      }
      onNextChapter?.();
      return;
    }
    setExpandedWord(null);
    setSelectedWord((w) => w + 1);
  };

  const moveLeft = () => {
    const isFirstSentence = sentenceIndex <= 0;
    const isFirstWord = selectedWord <= 0;
    if (isFirstWord) {
      if (!isFirstSentence) {
        goPrevSentence();
        return;
      }
      onPrevChapter?.();
      return;
    }
    setExpandedWord(null);
    setSelectedWord((w) => w - 1);
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      moveRight();
      return;
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      moveLeft();
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      toggleExpanded(selectedWord);
      return;
    }
  };

    return {
        toggleExpanded,
        onClickWord,
        moveRight,
        moveLeft,
        onKeyDown,
        sentenceIndex,
        selectedWord,
        expandedWord,
        words,
        currentImage,
        containerRef,
      };
    }