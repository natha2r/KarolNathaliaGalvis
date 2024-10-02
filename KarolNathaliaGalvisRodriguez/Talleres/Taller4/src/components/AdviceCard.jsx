import React from "react";
import AdviceButtons from "./AdviceButtons";
import "../styles/AdviceCard.scss";
import desktopDivider from "../images/pattern-divider-desktop.svg";
import mobileDivider from "../images/pattern-divider-mobile.svg";

const AdviceCard = ({ advice, id, handleRandom, handleNext, handlePrev }) => {
  return (
    <div className="advice-card">
      <h2 className="advice-number">ADVICE #{id}</h2>
      <p className="advice-text">"{advice}"</p>

      <picture>
        <source media="(min-width: 768px)" srcSet={desktopDivider}></source>
        <img src={mobileDivider} alt="Divider" />
      </picture>

      <AdviceButtons
        handleRandomAdvice={handleRandom}
        handleNextAdvice={handleNext}
        handlePreviousAdvice={handlePrev}
      />
    </div>
  );
};

export default AdviceCard;
