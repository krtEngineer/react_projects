import { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./list";

function App() {
  const [people, setPeople] = useState(data);
  const [content, setContent] = useState("clear all");
  const handleClick = () => {
    setPeople((currPeople) => {
      let newPeople;
      if (currPeople.length > 0) {
        newPeople = [];
        setContent("show birthdays");
      } else {
        newPeople = data;
        setContent("clear all");
      }
      return newPeople;
    });
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => handleClick()}>{content}</button>
      </section>
    </main>
  );
}

export default App;
