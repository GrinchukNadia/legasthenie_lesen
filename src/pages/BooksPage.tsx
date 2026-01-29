import { BOOKS } from "../books";
import { useNavigate } from "react-router-dom";
import styles from "./BooksPage.module.scss";

export default function BooksPage() {
  const nav = useNavigate();

  return (
    <div className={styles.books}>
      <h1 className={styles.books_title}>Книги</h1>

      <div className={styles.book}>
        {BOOKS.map((b) => (
          <button
            key={b.id}
            type="button"
            onClick={() => nav(`/books/${b.id}`)}
            className={styles.book_btn}
          >
            <img src={b.coverUrl} alt={b.title} className={styles.book_img} />
            <div className={styles.book_info}>
              <div className={styles.book_img_title}>{b.title}</div>
              <div className={styles.book_img_count}>
                Глав: {b.chapters.length}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}


