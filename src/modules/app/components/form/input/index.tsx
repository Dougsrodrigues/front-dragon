import './styles.scss';

import { forwardRef, type ForwardRefRenderFunction } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error, ...rest }: InputProps,
  ref,
) => {
  return (
    <div>
      <label className="input-label" htmlFor={rest.name}>
        {label}
      </label>
      <div className="input-content">
        <input ref={ref} className="input" {...rest} />
      </div>
      {!(error == null) && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export const Input = forwardRef(InputBase);