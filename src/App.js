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
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
  };

  changeHandler = (e) => {
    this.setState({ inputValue: e.target.value });
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
        />
        <GroceryList groceryList={this.state.groceryList} />
      </div>
    );
  }
}
