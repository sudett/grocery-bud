import React, { useState, useEffect } from "react";

import Message from "./components/message/message.component";
import Form from "./components/form/form.component";
import GroceryList from "./components/grocery-list/grocery-list.component";

import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [groceryList, setGroceryList] = useState([]);
  const [alert, setAlert] = useState({ classList: "", message: "" });
  const [btnText, setBtnText] = useState("submit");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => showAlert(), 3000);
    return () => clearTimeout(timer);
  }, [alert]);

  const showAlert = (classList = "", message = "") => {
    setAlert({ classList, message });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Empty input
    if (inputValue === "") {
      showAlert("error", "Please enter value");
      return;
    }

    // Adding item to the list
    if (btnText === "submit") {
      setGroceryList([...groceryList, inputValue]);
      setInputValue("");
      showAlert("success", "Item added to the list");
    }

    // Edit item
    if (btnText === "edit") {
      const newGroceryList = groceryList.map((item, index) => {
        if (index === editIndex) return inputValue;
        else return item;
      });

      setGroceryList(newGroceryList);
      setBtnText("submit");
      setInputValue("");

      showAlert("success", "Value changed");
    }
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const editHandler = (index) => {
    const itemText = groceryList.find((_, i) => i === index);
    setInputValue(itemText);
    setBtnText("edit");
    setEditIndex(index);
  };

  const removeHandler = (index) => {
    const newGroceryList = groceryList.filter((item, i) => i !== index);
    setGroceryList(newGroceryList);
    showAlert("error", "Item removed");
  };

  const clearList = () => {
    setGroceryList([]);
    showAlert("error", "Empty List");
  };

  return (
    <div className="app">
      <Message alert={alert} />
      <h1 className="heading">Grocery bud</h1>
      <Form
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        inputValue={inputValue}
        btnText={btnText}
      />
      <GroceryList
        groceryList={groceryList}
        editHandler={editHandler}
        removeHandler={removeHandler}
        clearList={clearList}
      />
    </div>
  );
};

export default App;
