import * as React from "react";

interface IProps {
  onClick: () => void;
}

const Button: React.SFC<IProps> = ({ onClick, ...props }) => (
  <span onClick={onClick}>hello</span>
);

export default Button;
