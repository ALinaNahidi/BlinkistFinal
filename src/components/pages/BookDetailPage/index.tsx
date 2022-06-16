import React from "react";
import Footer from "../../Organisms/Footer";
import NavBar from "../../Organisms/NavBar";
import { useLocation } from "react-router-dom";
import BookDetailComponent from "../../Organisms/BookDetailComponent";
import BookDetailTemplate from "../../template/BookDetailTemplate";

type Book = {
  id: number;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  readTime: string;
  readersCount: string;
  status: string;
};

interface LocationState {
  book: Book;
  bookObject: Array<Book>;
}
const BookDetailPage = () => {
  const { state } = useLocation();
  const { book, bookObject } = state as LocationState;

  return (
    <React.Fragment>
      <NavBar bookObject={bookObject} />
      <BookDetailTemplate
        bookDetailComponent={
          <BookDetailComponent book={book} bookObject={bookObject} />
        }
      />

      <Footer />
    </React.Fragment>
  );
};

export default BookDetailPage;
