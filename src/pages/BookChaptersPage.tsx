import { Link, useNavigate, useParams } from "react-router-dom";
import { getBook } from "../books";
import styles from "./BookChaptersPage.module.scss";

export default function BookChaptersPage() {
  const { bookId } = useParams();
  const nav = useNavigate();
  const book = bookId ? getBook(bookId) : undefined;

  if (!book) {
    return (
      <div className={styles.not_found}>
        <p>Книга не найдена.</p>
        <Link to="/books">← Назад</Link>
      </div>
    );
  }

  return (
    <div className={styles.book}>
      <Link to="/books" className={styles.book_link}>
        ← Все книги
      </Link>

      <div className={styles.cover}>
        <img src={book.coverUrl} alt={book.title} />
        <div>
          <h2>{book.title}</h2>
          <div className={styles.book_tip}>Выбери главу</div>
        </div>
      </div>

      <div className={styles.book_chapters}>
        {book.chapters.map((ch) => (
          <button
            key={ch.id}
            type="button"
            onClick={() => nav(`/books/${book.id}/${ch.id}`)}
            className={styles.book_buttons}
          >
            <div className={styles.book_title}>{ch.title}</div>
            {ch.preview && <div className={styles.book_preview}>{ch.preview}</div>}
          </button>
        ))}
      </div>
    </div>
  );
}
