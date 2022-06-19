import React from "react";
import Button from "./Button";

export default {
  title: "Common Components/Button",
  component: Button,
};

export const WithShortText = (args) => <Button {...args}>Button</Button>;

export const WithLongText = (args) => (
  <Button {...args}>Welcome to Dev Launchers</Button>
);

export const Customizable = (args) => <Button {...args}>{args.text}</Button>;

Customizable.args = {
  text: "",
  bgColor: "",
  textColor: "",
  fontSize: 1.2,
};
