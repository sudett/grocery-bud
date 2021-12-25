import React from "react";

// import "./message.styles.css";
import { MessageContainer } from "./message.styles";

const Message = ({ alert: { classList, message } }) => (
  <MessageContainer classList={classList}>{message}</MessageContainer>
);

export default Message;
