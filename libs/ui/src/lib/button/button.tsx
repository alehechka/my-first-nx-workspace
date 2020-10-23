import React, { MouseEvent } from 'react';
import StyledButton, { Spinner } from './button.styled';

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
  loading?: boolean;
}

export const Button = ({
  label,
  children,
  onClick,
  onAsyncClick,
  loading = false,
  disabled,
  ...otherProps
}: ButtonProps) => {
  const [asyncSuccess, setAsyncSuccess] = React.useState<string | undefined>();
  const [asyncError, setAsyncError] = React.useState<string | undefined>();
  const clearMessages = () => {
    setAsyncError(undefined);
    setAsyncSuccess(undefined);
  };
  const [asyncLoading, setAsyncLoading] = React.useState<boolean>(loading);
  return (
    <>
      <StyledButton
        loading={asyncLoading}
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
        {...otherProps}
      >
        {label || children}
        {asyncLoading && <Spinner />}
      </StyledButton>
      {asyncSuccess && <div>{asyncSuccess}</div>}
      {asyncError && <div>{asyncError}</div>}
    </>
  );
};

export default Button;
