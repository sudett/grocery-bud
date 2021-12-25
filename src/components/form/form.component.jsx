import React from "react";

// import "./form.styles.css";
import { FormContainer, FormInput, ButtonBlue } from "./form.styles";

const Form = ({ inputValue, btnText, changeHandler, submitHandler }) => (
  <FormContainer onSubmit={submitHandler}>
    <FormInput
      type="text"
      placeholder="e.g. eggs"
      value={inputValue}
      onChange={changeHandler}
    />
    <ButtonBlue type="submit">{btnText}</ButtonBlue>
  </FormContainer>
);
export default Form;
