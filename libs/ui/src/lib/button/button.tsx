import React from 'react';
import StyledButton from './styled';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const Button = ({ label, children, ...otherProps }: ButtonProps) => {
  return <StyledButton {...otherProps}>{label || children}</StyledButton>;
};

export default Button;
