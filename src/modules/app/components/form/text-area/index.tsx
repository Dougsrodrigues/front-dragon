import './styles.scss';

import { forwardRef, type ForwardRefRenderFunction } from 'react';

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ label, error, ...rest }, ref) => {
  return (
    <div>
      <label className="input-label-textarea" htmlFor={rest.name}>
        {label}
      </label>
      <div className={`input-content ${!(error == null) && 'error-input'}`}>
        <textarea ref={ref} className="input-textarea" {...rest} />
      </div>
      {!(error == null) && (
        <span className="input-error-message-textarea">{error}</span>
      )}
    </div>
  );
};

export const TextArea = forwardRef(TextAreaBase);
