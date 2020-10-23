import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ContainerProps {
  hidden?: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-color: red;
  border-style: dashed;
  display: ${({ hidden }) => (hidden ? 'hide' : 'inherit')};
  /* flex-direction: column; */
`;

export default Container;
