export type WordItem = {
  t: string;
  s?: string[];
};

export type SentenceItem = {
  id?: string;
  words: WordItem[];
  imageUrl?: string;
};

export type Props = {
  sentences: SentenceItem[];
  className?: string;

  onNextChapter?: () => void;
  onPrevChapter?: () => void;
};