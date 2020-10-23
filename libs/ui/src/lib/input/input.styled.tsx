import styled from 'styled-components';
import { InputProps } from './input';

export default styled.input<InputProps>`
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
  margin: 8px 0;
  padding: 0.5rem;
  font-size: 1rem;
`;
