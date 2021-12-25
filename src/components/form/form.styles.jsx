import styled, { css } from "styled-components";

const inputStyles = css`
  flex: 1;
  border: none;
  outline: none;
  background-color: var(--clr-grey-10);
  padding: 0.75rem 1.5rem;
  color: var(--clr-grey-5);
  font-size: inherit;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

const btnStyles = css`
  border: none;
  outline: none;
  width: 8rem;
  text-align: center;
  text-transform: capitalize;
  padding: 0.75rem 0;
  letter-spacing: inherit;
  background-color: var(--clr-primary-8);
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease;
`;

export const FormContainer = styled.form`
  align-self: stretch;
  display: flex;
`;

export const FormInput = styled.input`
  ${inputStyles}::placeholder {
    color: var(--clr-grey-5);
  }
`;

export const ButtonBlue = styled.button`
  ${btnStyles}:hover {
    color: #fff;
    background-color: var(--clr-primary-5);
  }
`;
