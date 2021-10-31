import React from "react";

import "./form.styles.css";

const Form = ({ inputValue, btnText, changeHandler, submitHandler }) => (
  <form className="form" onSubmit={submitHandler}>
    <input
      className="form-input"
      type="text"
      placeholder="e.g. eggs"
      value={inputValue}
      onChange={changeHandler}
    />
    <button className="btn-blue" type="submit">
      {btnText}
    </button>
  </form>
);
export default Form;
