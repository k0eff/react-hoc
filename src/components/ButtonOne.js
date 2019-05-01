import React from "react";
import styles from "../styles/commonStyles.js";
import StyleWrapper from "../HOC/styleWrapper";

const ButtonOne = props => {
  return <button style={props.styles}>I am ButtonOne</button>;
};
export default StyleWrapper(ButtonOne);
