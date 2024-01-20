import { books } from "./constant";
import BookComponent from "./book";

const BooksComponent = () => {
  return (
    <>
      <h1 className="heading">Amazon Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <BookComponent {...book} index={index} key={book.id} />;
        })}
      </section>
    </>
  );
};

export default BooksComponent;
