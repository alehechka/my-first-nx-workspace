import React, { MouseEvent } from 'react';
import StyledButton, { Spinner, AsyncMessage } from './button.styled';
import { Container } from '../container';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Label of button, can be used instead of wrapping children.
   */
  label?: string;
  /**
   * Callback function to run when button is clicked.
   */
  onClick?: (event: MouseEvent) => void;
  /**
   * Asynchronous callback function to resolve when button is clicked.
   */
  onAsyncClick?: (event: MouseEvent) => Promise<string>;
  /**
   * Override to onAsyncClick loading state to render loading button from state.
   */
  isLoading?: boolean;
  /**
   * When true, any async messages will not be displayed.
   */
  hideAsyncMessage?: boolean;
  align?: 'left' | 'right';
}

export const Button = ({
  label,
  children,
  onClick,
  onAsyncClick,
  isLoading = false,
  disabled,
  hideAsyncMessage = false,
  align = 'right',
  hidden,
  ...otherProps
}: ButtonProps) => {
  const [asyncSuccess, setAsyncSuccess] = React.useState<string | undefined>();
  const [asyncError, setAsyncError] = React.useState<string | undefined>();
  const clearMessages = () => {
    setAsyncError(undefined);
    setAsyncSuccess(undefined);
  };
  const [asyncLoading, setAsyncLoading] = React.useState<boolean>(isLoading);
  return (
    <Container hidden={hidden}>
      <StyledButton
        isLoading={asyncLoading}
        disabled={disabled || asyncLoading}
        onClick={
          onAsyncClick
            ? (e: MouseEvent) => {
                clearMessages();
                setAsyncLoading(true);
                onAsyncClick(e)
                  .then((res) => setAsyncSuccess(res))
                  .catch((err: string) => setAsyncError(err))
                  .finally(() => setAsyncLoading(false));
              }
            : onClick
        }
        align={align}
        {...otherProps}
      >
        {label || children}
        {asyncLoading && <Spinner />}
      </StyledButton>
      {!hideAsyncMessage && (
        <>
          {asyncSuccess && (
            <AsyncMessage align={align}>{asyncSuccess}</AsyncMessage>
          )}
          {asyncError && (
            <AsyncMessage align={align}>{asyncError}</AsyncMessage>
          )}
        </>
      )}
    </Container>
  );
};

export default Button;
