import React from "react";

import {
  Content,
  GroceryListContainer,
  GroceryListItem,
  Icons,
  IconButton,
  EditIcon,
  TrashIcon,
  ButtonText,
} from "./grocery-list.styles";

const GroceryList = ({
  groceryList,
  editHandler,
  removeHandler,
  clearList,
}) => {
  return (
    <Content>
      <GroceryListContainer>
        {groceryList.map((item, index) => (
          <GroceryListItem key={index}>
            <span>{item}</span>
            <Icons>
              <IconButton onClick={() => editHandler(index)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => removeHandler(index)}>
                <TrashIcon />
              </IconButton>
            </Icons>
          </GroceryListItem>
        ))}
      </GroceryListContainer>
      <ButtonText groceryList={groceryList} onClick={clearList}>
        Clear items
      </ButtonText>
    </Content>
  );
};

export default GroceryList;
