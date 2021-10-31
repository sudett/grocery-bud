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

  showAlert = (classList = "", message = "") => {
    this.setState({ alert: { classList, message } }, () => {
      setTimeout(() => {
        this.setState({ alert: { classList: "", message: "" } });
      }, 3000);
    });
  };

  submitHandler = (e) => {
    e.preventDefault();

    // Empty input
    if (this.state.inputValue === "") {
      this.showAlert("error", "Please enter value");
      // this.setState(
      //   { alert: { classList: "error", message: "Please enter value" } },
      //   () => {
      //     setTimeout(() => {
      //       this.setState({ alert: { classList: "", message: "" } });
      //     }, 3000);
      //   }
      // );
      return;
    }

    // Adding item to the list
    const item = this.state.inputValue;

    this.showAlert("success", "Item added to the list");
    this.setState({
      groceryList: [...this.state.groceryList, item],
      inputValue: "",
    });
    // this.setState(
    //   {
    //     groceryList: [...this.state.groceryList, item],
    //     inputValue: "",
    //     alert: {
    //       classList: "success",
    //       message: "Item added to the list",
    //     },
    //   },
    //   () => {
    //     setTimeout(() => {
    //       this.setState({ alert: { classList: "", message: "" } });
    //     }, 3000);
    //   }
    // );
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
