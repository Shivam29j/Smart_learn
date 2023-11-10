import React from "react";

import "./css/InputControl.css";

const  InputControl=(props)=> {
  return (
    <div className="container11">
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

export default InputControl;