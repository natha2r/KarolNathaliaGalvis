import React from "react";
import "../styles/AdviceButtons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faDiceFive,
} from "@fortawesome/free-solid-svg-icons";

const AdviceButtons = ({
  handleRandomAdvice,
  handleNextAdvice,
  handlePreviousAdvice,
}) => {
  return (
    <div className="button-container">
      <button className="advice-button" onClick={handlePreviousAdvice}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="advice-button" onClick={handleRandomAdvice}>
        <FontAwesomeIcon icon={faDiceFive} />
      </button>
      <button className="advice-button" onClick={handleNextAdvice}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default AdviceButtons;
