import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { SentenceItem } from "../features/reader/types";
import { getBook } from "../books";

function useReaderPage() {
  const { bookId, chapterId } = useParams();
  const book = bookId ? getBook(bookId) : undefined;

  const [sentences, setSentences] = useState<SentenceItem[] | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const nav = useNavigate();

  useEffect(() => {
    let alive = true;

    async function load() {
      setSentences(null);
      setErr(null);

      if (!bookId || !chapterId) {
        setErr("Книга или глава не найдены.");
        return;
      }

      const book = getBook(bookId);
      if (!book) {
        setErr("Книга не найдена.");
        return;
      }

      const chapterExists = book.chapters.some((c) => c.id === chapterId);
      if (!chapterExists) {
        setErr("Глава не найдена.");
        return;
      }

      try {
        const data = await book.loadChapter(chapterId as never);

        if (alive) setSentences(data);
      } catch {
        if (alive) setErr("Не удалось загрузить главу.");
      }
    }

    load();
    return () => {
      alive = false;
    };
  }, [book, chapterId, bookId]);

  const goNextChapter = () => {
    if (!book || !chapterId) return;

    const idx = book.chapters.findIndex((c) => c.id === chapterId);
    if (idx === -1) return;

    const next = book.chapters[idx + 1];
    if (!next) return;

    nav(`/books/${book.id}/${next.id}`);
  };

  return { book, sentences, err, goNextChapter };
}

export default useReaderPage;
