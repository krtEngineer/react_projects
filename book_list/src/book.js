const BookComponent = ({ img, title, author, index }) => {
  return (
    <article className="book">
      <IndexComponent index={index} />
      <ImageComponent img={img} title={title} />
      <TitleComponent title={title} />
      <AuthorComponent author={author} />
    </article>
  );
};

const ImageComponent = ({ img, title }) => {
  return <img src={img} alt={title} />;
};

const TitleComponent = ({ title }) => {
  return <h2>{title}</h2>;
};

const AuthorComponent = ({ author }) => {
  return <h4>{author}</h4>;
};

const IndexComponent = ({ index }) => {
  return <div className="index">{index + 1}</div>;
};

export default BookComponent;
