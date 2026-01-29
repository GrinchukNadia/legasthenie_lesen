import { Link } from "react-router-dom";
import SentenceReader from "../features/reader/SentenceReader";
import styles from "./ReaderPage.module.scss";
import useReaderPage from "./useReaderPage";

export default function ReaderPage() {
  const { book, sentences, err, goNextChapter } = useReaderPage();

  if (!book) {
    return (
      <div className={styles.homeLink}>
        <p>Книга не найдена.</p>
        <Link to="/books">← Все книги</Link>
      </div>
    );
  }

  return (
    <div className={styles.reader_page}>
      <div className={styles.reader_page_header}>
        <Link to={`/books/${book.id}`} className={styles.reader_page_link}>
          ← Главы
        </Link>
        <div className={styles.reader_page_title}>{book.title}</div>
      </div>

      {err && <div className={styles.reader_page_error}>{err}</div>}
      {!err && !sentences && (
        <div className={styles.reader_page_loading}>Загрузка…</div>
      )}
      {!err && sentences && (
        <SentenceReader sentences={sentences} onNextChapter={goNextChapter} />
      )}
    </div>
  );
}
