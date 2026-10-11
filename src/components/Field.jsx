import { forwardRef, useId } from 'react';

const Field = forwardRef(function Field({ label, error, as: Tag = 'input', children, className = '', ...props }, ref) {
  const id = useId();
  return (
    <div className={`field ${error ? 'has-error' : ''} ${className}`}>
      <label htmlFor={id}>{label}</label>
      {children ? (
        <Tag id={id} ref={ref} aria-invalid={!!error} {...props}>
          {children}
        </Tag>
      ) : (
        <Tag id={id} ref={ref} aria-invalid={!!error} {...props} />
      )}
      {error && (
        <span className="field-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
});

export default Field;
