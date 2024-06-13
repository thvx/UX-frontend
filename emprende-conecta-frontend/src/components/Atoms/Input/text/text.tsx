import React from 'react';

type InputTextProps = {
  inputType: 'text' | 'email' | 'tel' | 'search' | 'password';
  placeholder?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  required?: boolean;
  value?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputText: React.FC<InputTextProps> = ({
  inputType,
  placeholder,
  size,
  required,
  value,
  name,
  onChange,
}) => {
  return (
    <input
      type={inputType}
      placeholder={placeholder}
      className={`input input-bordered ${size}`}
      required={required}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default InputText;