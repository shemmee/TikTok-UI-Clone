/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Bubble = ({ className, overlapGroupClassName }) => {
  return (
    <div className={`bubble ${className}`}>
      <div className={`overlap-group ${overlapGroupClassName}`}>
        <div className="text-wrapper">Jacket with Button Placket</div>
        <div className="div">$3,700</div>
        <div className="text-wrapper-2">Dior</div>
      </div>
    </div>
  );
};
