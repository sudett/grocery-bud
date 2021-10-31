import React from "react";

import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import "./grocery-list.styles.css";

const GroceryList = ({ groceryList, editHandler, trashHandler }) => {
  return (
    <div className="content">
      <ul className="list">
        {groceryList.map((item, index) => (
          <li className="list-item" key={index}>
            <span>{item}</span>
            <div className="icons">
              <button className="icon-btn" onClick={() => editHandler(index)}>
                <FaEdit className="icon-edit" />
              </button>
              <button className="icon-btn">
                <FaTrash className="icon-trash" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className={`${groceryList.length === 0 && "hidden"} btn-text`}>
        Clear items
      </button>
    </div>
  );
};

export default GroceryList;
