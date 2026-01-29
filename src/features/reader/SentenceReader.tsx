import clsx from "clsx";
import styles from "./SentenceReader.module.scss";
import type { Props, WordItem } from "./types";
import { useSentenceReader } from "./useSentenceReader";

export default function SentenceReader({
  sentences,
  className,
  onNextChapter,
  onPrevChapter,
}: Props) {

  const {
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
  } = useSentenceReader({ sentences, onNextChapter, onPrevChapter });

  const renderWord = (w: WordItem, idx: number) => {
    const isSelected = idx === selectedWord;
    const isExpanded = expandedWord === idx;
    const content = isExpanded ? (w.s?.join("-") ?? w.t) : w.t;

    return (
      <button
        className={clsx(styles.markup, isSelected && styles.selected)}
        key={`${sentenceIndex}-${idx}-${w.t}`}
        type="button"
        onClick={() => onClickWord(idx)}
        aria-pressed={isSelected}
      >
        {content}
      </button>
    );
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={clsx(styles.sentenceReader, className)}
    >
      <div className={styles.image}>
        {currentImage ? (
          <img src={currentImage} alt="" className={styles.image_img} />
        ) : (
          <div className={styles.image_noImage}>No image</div>
        )}
      </div>

      <div className={styles.sentence}>{words.map(renderWord)}</div>

      <div className={styles.controls}>
        <div className={styles.controls_buttonGroup}>
          <button
            type="button"
            onClick={moveLeft}
            className={styles.controls_button}
            aria-label="Previous word"
          >
            ←
          </button>

          <button
            type="button"
            onClick={moveRight}
            className={styles.controls_button}
            aria-label="Next word"
          >
            →
          </button>

          <button
            type="button"
            onClick={() => toggleExpanded(selectedWord)}
            className={styles.controls_button}
            aria-label="Split selected word into syllables"
            title="Enter"
          >
            ⏎ слоги
          </button>
        </div>

        <div className={styles.hint}>
          {sentenceIndex + 1}/{sentences.length}{" "}
          <span className={styles.hint_inner}>(←/→, Enter)</span>
        </div>
      </div>
    </div>
  );
}
