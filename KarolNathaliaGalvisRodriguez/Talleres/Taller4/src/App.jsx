// src/App.jsx
import { useState, useEffect } from "react";
import AdviceCard from "./components/AdviceCard";
import "font-awesome/css/font-awesome.min.css";

import "./styles/App.scss";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState(1);

  const fetchAdvice = async (adviceId) => {
    try {
      const response = await fetch(
        `https://api.adviceslip.com/advice/${adviceId}`
      );
      const data = await response.json();
      setAdvice(data.slip.advice);
      setId(data.slip.id);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleNextAdvice = () => {
    const nextId = id + 1;
    fetchAdvice(nextId);
  };

  const handlePreviousAdvice = () => {
    if (id > 1) {
      const prevId = id - 1;
      fetchAdvice(prevId);
    }
  };

  const handleRandomAdvice = () => {
    const randomId = Math.floor(Math.random() * 224) + 1;
    fetchAdvice(randomId);
  };

  useEffect(() => {
    fetchAdvice(id);
  }, [id]);

  return (
    <div className="app">
      <AdviceCard
        advice={advice}
        id={id}
        handleNext={handleNextAdvice}
        handlePrev={handlePreviousAdvice}
        handleRandom={handleRandomAdvice}
      />
    </div>
  );
};

export default App;
