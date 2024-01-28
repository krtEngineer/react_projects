import { useState } from "react";
import texts from "./data";
import Alert from "./Alert";

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const [paraNum, setParaNum] = useState(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(texts.slice(0, amount));
  };

  const handleCopy = async (e) => {
    e.preventDefault();
    setParaNum(parseInt(e.target.dataset.key));
    await navigator.clipboard.writeText(e.target.textContent);
    setTimeout(() => {
      setParaNum(-1);
    }, 500);
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          min={1}
          max={8}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return (
            <p
              key={index}
              data-key={index}
              id="text"
              onClick={(e) => {
                handleCopy(e);
              }}
            >
              {paraNum === index && <Alert msg="Copied" />}
              {item}
            </p>
          );
        })}
      </article>
    </section>
  );
}

export default App;
