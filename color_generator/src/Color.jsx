import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const Color = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className="color"
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className={`percent-value ${index > 10 && "color-light"}`}>
        {weight}%
      </p>
      <p className={`color-value ${index > 10 && "color-light"}`}>{hexValue}</p>
      {alert && (
        <span className={`alert ${index > 10 && "color-light"}`}>copied</span>
      )}
    </article>
  );
};
export default Color;
