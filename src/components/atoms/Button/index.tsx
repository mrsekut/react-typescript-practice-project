import * as React from "react";

interface IProps {
  onClick: () => void;
}

const Button: React.SFC<IProps> = ({ onClick, ...props }: IProps) => (
  <button onClick={onClick}>hello</button>
);

export default Button;
