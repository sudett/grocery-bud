import styled, { css } from "styled-components";

const errorStyles = css`
  background-color: #f8d7da;
  color: #721c24;
`;

const successStyles = css`
  background-color: hsl(134, 41%, 88%);
  color: #155724;
`;

export const MessageContainer = styled.p`
  align-self: stretch;
  padding: 0.5rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  text-align: center;
  opacity: ${({ classList }) => (classList ? 1 : 0)};
  ${({ classList }) => (classList === "error" ? errorStyles : successStyles)}
`;
