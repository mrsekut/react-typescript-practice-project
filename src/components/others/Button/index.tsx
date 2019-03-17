import * as React from 'react';

interface IProps {
  children: any;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
