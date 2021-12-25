import styled, { css } from "styled-components";

import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const itemStyles = css`
  display: flex;
  text-transform: capitalize;
  transition: all 0.4s ease;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const iconStyles = css`
  width: 1.35rem;
  height: 1.35rem;
  transition: all 0.4s ease;
`;

const editIconStyles = css`
  ${iconStyles}
  fill: var(--clr-green-light);
  margin-right: 1rem;
`;

const trashIconStyles = css`
  ${iconStyles}
  fill: var(--clr-red-light);
`;

const btnTextStyles = css`
  display: ${({ groceryList }) =>
    groceryList.length === 0 ? "none" : "block"};
  border: none;
  outline: none;
  margin: 0 auto;
  color: var(--clr-red-light);
  background-color: transparent;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-size: inherit;
  cursor: pointer;
  transition: all 0.2s;
`;

export const Content = styled.div`
  align-self: stretch;
`;

export const GroceryListContainer = styled.ul`
  margin: 3rem 0;
`;

export const GroceryListItem = styled.li`
  ${itemStyles}:hover {
    background-color: var(--clr-primary-10);
    color: var(--clr-grey-5);
  }
`;

export const Icons = styled.div`
  margin-left: auto;
`;

export const IconButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

export const EditIcon = styled(FaEdit)`
  ${editIconStyles}:hover {
    fill: var(--clr-green-dark);
  }
`;

export const TrashIcon = styled(FaTrash)`
  ${trashIconStyles}:hover {
    fill: var(--clr-red-dark);
  }
`;

export const ButtonText = styled.button`
  ${btnTextStyles}:hover {
    color: var(--clr-red-dark);
  }
`;
