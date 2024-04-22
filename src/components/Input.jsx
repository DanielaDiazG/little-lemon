import React from 'react';

function Input({
  id,
  label,
  type = 'text',
  defaultValue,
  required = false,
  ...props
}) {
  return (
    <div className="input" {...props}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        defaultValue={defaultValue}
        required={required}
      />
    </div>
  );
}

export default Input;
