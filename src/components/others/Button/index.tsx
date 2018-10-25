import * as React from "react";

interface IProps {
  children: any;
  onClick?: () => void;
}

const Button: React.SFC<IProps> = ({ onClick, children, ...props }: IProps) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;