import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  const { name, job, image, text } = people[index];
  return (
    <article className="review">
      <ReviewImg image={image} name={name} />
      <ReviewPerosn name={name} job={job} text={text} />
      <ReviewControlBtns prevPerson={prevPerson} nextPerson={nextPerson} />
      <RandomPerosnbtn randomPerson={randomPerson} />
    </article>
  );
};

const ReviewImg = ({ image, name }) => {
  return (
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
  );
};

const ReviewPerosn = ({ name, job, text }) => {
  return (
    <>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
    </>
  );
};

const ReviewControlBtns = ({ prevPerson, nextPerson }) => {
  return (
    <div className="button-container">
      <ReviewControlBtn
        btnClass="prev-btn"
        controlFun={prevPerson}
        isNext={false}
      />
      <ReviewControlBtn
        btnClass="next-btn"
        controlFun={nextPerson}
        isNext={true}
      />
    </div>
  );
};

const ReviewControlBtn = ({ btnClass, controlFun, isNext }) => {
  return (
    <button className={btnClass} onClick={controlFun}>
      {isNext ? <FaChevronRight /> : <FaChevronLeft />}
    </button>
  );
};

const RandomPerosnbtn = ({ randomPerson }) => {
  return (
    <button className="random-btn" onClick={randomPerson}>
      surprise me
    </button>
  );
};

export default Review;
