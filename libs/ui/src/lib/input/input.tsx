import React from 'react';
import {
  StyledInputContainer,
  StyledInput,
  StyledLabel,
  StyledLabelContent,
} from './input.styled';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  fullWidth?: boolean;
}

export const Input = ({
  name,
  label,
  fullWidth,
  ...otherProps
}: InputProps) => {
  return (
    <StyledInputContainer fullWidth={fullWidth}>
      <StyledInput name={name} autoComplete='off' {...otherProps} />
      <StyledLabel htmlFor={name}>
        <StyledLabelContent>{label}</StyledLabelContent>
      </StyledLabel>
    </StyledInputContainer>
  );
};

export default Input;
