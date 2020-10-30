import React from 'react';
import StyledInput from './input.styled';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

export const Input = ({ ...otherProps }: InputProps) => {
  return <StyledInput {...otherProps} />;
};

export default Input;
