import React, { useState } from "react";
import Color from "./Color";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <h2>color generator</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>

        <section className="colors">
          {list.map((color, index) => {
            return (
              <Color
                key={index}
                {...color}
                index={index}
                hexColor={color.hex}
              />
            );
          })}
        </section>
      </div>
    </>
  );
}

export default App;
