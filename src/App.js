import React from "react";

import Message from "./components/message/message.component";
import Form from "./components/form/form.component";
import GroceryList from "./components/grocery-list/grocery-list.component";

import "./App.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      groceryList: [],
      alert: {
        classList: "",
        message: "",
      },
      btnText: "submit",
      editIndex: null,
    };
  }

  setTimer = () => {
    const timer = setTimeout(() => {
      this.setState({ alert: { classList: "", message: "" } });
    }, 3000);
    return () => clearTimeout(timer);
  };

  showAlert = (classList = "", message = "") => {
    this.setState({ alert: { classList, message } }, () => this.setTimer());
  };

  submitHandler = (e) => {
    e.preventDefault();

    const { inputValue, btnText, groceryList, editIndex } = this.state;
    // Empty input
    if (inputValue === "") {
      this.showAlert("error", "Please enter value");
      return;
    }

    // Adding item to the list
    if (btnText === "submit") {
      const item = inputValue;
      this.setState({
        groceryList: [...groceryList, item],
        inputValue: "",
      });
      this.showAlert("success", "Item added to the list");
    }

    // Edit item
    if (btnText === "edit") {
      const newGroceryList = groceryList.map((item, index) => {
        if (index === editIndex) return inputValue;
        else return item;
      });
      this.setState({
        groceryList: newGroceryList,
        btnText: "submit",
        inputValue: "",
      });

      this.showAlert("success", "Value changed");
    }
  };

  changeHandler = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  editHandler = (index) => {
    const itemText = this.state.groceryList.find((_, i) => i === index);
    console.log(itemText);
    this.setState({ inputValue: itemText, btnText: "edit", editIndex: index });
  };

  render() {
    return (
      <div className="app">
        <Message alert={this.state.alert} />
        <h1 className="heading">Grocery bud</h1>
        <Form
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
          inputValue={this.state.inputValue}
          btnText={this.state.btnText}
        />
        <GroceryList
          groceryList={this.state.groceryList}
          editHandler={this.editHandler}
        />
      </div>
    );
  }
}
