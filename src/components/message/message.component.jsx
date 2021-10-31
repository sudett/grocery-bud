import React from "react";

import "./message.styles.css";

const Message = ({ alert: { classList, message } }) => (
  <p className={`${classList} message`}>{message}</p>
);

export default Message;
