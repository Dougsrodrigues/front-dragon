import './styles.scss';

import { forwardRef, type ForwardRefRenderFunction } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  'data-testid'?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, 'data-testid': dataTestid, ...rest }: InputProps,
  ref,
) => {
  return (
    <div>
      <label className="input-label" htmlFor={rest.name}>
        {label}
      </label>
      <div className={`input-content ${!(error == null) && 'error-input'}`}>
        <input data-testid={dataTestid} ref={ref} className="input" {...rest} />
      </div>
      {!(error == null) && (
        <span
          data-testid={`${dataTestid}-error`}
          className="input-error-message"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export const Input = forwardRef(InputBase);
