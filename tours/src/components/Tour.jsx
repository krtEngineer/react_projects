import { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [isReadMoreOpted, setIsReadMoreOpted] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt="tour image" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {isReadMoreOpted ? info : `${info.substring(0, 200)}...s`}
          <button onClick={() => setIsReadMoreOpted(!isReadMoreOpted)}>
            {isReadMoreOpted ? "show less" : "  read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};
export default Tour;
