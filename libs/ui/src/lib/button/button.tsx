import React, { MouseEvent } from 'react';
import StyledButton from './styled';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Label of button, can be used instead of wrapping children.
   */
  label?: string;
  /**
   * Determines if button is disabled and unusable.
   */
  disabled?: boolean;
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
  loading,
  disabled,
  ...otherProps
}: ButtonProps) => {
  const [asyncSuccess, setAsyncSuccess] = React.useState<string | undefined>();
  const [asyncError, setAsyncError] = React.useState<string | undefined>();
  const clearMessages = () => {
    setAsyncError(undefined);
    setAsyncSuccess(undefined);
  };
  const [asyncLoading, setAsyncLoading] = React.useState(false);
  return (
    <>
      <StyledButton
        loading={loading || asyncLoading}
        disabled={disabled || asyncLoading}
        {...otherProps}
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
      >
        {label || children}
      </StyledButton>
      {asyncSuccess && <div>{asyncSuccess}</div>}
      {asyncError && <div>{asyncError}</div>}
    </>
  );
};

export default Button;
