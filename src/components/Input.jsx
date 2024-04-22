import React from 'react';

function Input({ id, label, type = 'text' }) {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} />
    </div>
  );
}

export default Input;
