import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import BookChaptersPage from "./pages/BookChaptersPage";
import ReaderPage from "./pages/ReaderPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/books" replace />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:bookId" element={<BookChaptersPage />} />
        <Route path="/books/:bookId/:chapterId" element={<ReaderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

