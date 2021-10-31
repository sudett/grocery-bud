import React from "react";

import "./form.styles.css";

const Form = ({ inputValue, changeHandler, submitHandler }) => (
  <form className="form" onSubmit={submitHandler}>
    <input
      className="form-input"
      type="text"
      placeholder="e.g. eggs"
      value={inputValue}
      onChange={changeHandler}
    />
    <button className="btn-blue" type="submit">
      Submit
    </button>
  </form>
);
export default Form;
