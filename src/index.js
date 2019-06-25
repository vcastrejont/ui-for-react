import React from "react";
// import "../style/style.css";
import "../style/style.css";

export const UIcontainer = props => {
  return <div className="grid admin">{props.children}</div>;
};

export const UIheader = props => {
  return <header role="banner">{props.children}</header>;
};

export const UImain = props => {
  return <main>{props.children}</main>;
};

export const UIaside = props => {
  return <aside>{props.children}</aside>;
};
