import styled, { keyframes } from 'styled-components';
import { ButtonProps } from './button';

export default styled.button<ButtonProps>`
  display: inline-block;
  border: none;
  padding: 0.7rem 1rem;
  margin: 0;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover,
  &:focus {
    background: #0053ba;
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }
  &:disabled {
    cursor: ${({ loading }) => (loading ? 'progress' : 'not-allowed')};
    background: #b3d5ff;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;

  box-sizing: border-box;
  position: relative;
  width: 1rem;
  height: 1rem;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 2px solid grey;
  border-top-color: #000;
  margin-left: -0.5rem;
  margin-top: -1rem;
`;
