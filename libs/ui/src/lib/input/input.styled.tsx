import styled from 'styled-components';
import { InputProps } from './input';

export const StyledInputContainer = styled.div<{ fullWidth: boolean }>`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  position: relative;
  height: 50px;
  overflow: hidden;
`;
export const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 100%;
  color: gray;
  padding-top: 20px;
  border: none;
  outline: none;
`;
export const StyledLabel = styled.label`
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  pointer-events: none;
  border-bottom: 2px solid lightgray;
  &::after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid #5fa8d3;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  ${StyledInput}:focus + &::after & {
    transform: translateX(0%);
  }

  ${StyledInput}:valid + &::after & {
    transform: translateX(0%);
  }
`;
export const StyledLabelContent = styled.span`
  position: absolute;
  bottom: 5px;
  left: 0px;
  transition: all 0.3s ease;

  ${StyledInput}:focus + ${StyledLabel} & {
    transform: translateY(-150%);
    font-size: 14px;
    color: #5fa8d3;
  }
  ${StyledInput}:valid + ${StyledLabel} & {
    transform: translateY(-150%);
    font-size: 14px;
    color: #5fa8d3;
  }
`;
