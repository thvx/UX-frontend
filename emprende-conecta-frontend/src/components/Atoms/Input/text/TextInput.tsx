import React from 'react';

type TextInputProps = {
  inputType?: 'input-primary' | 'input-secondary' | 'input-accent' | 'input-success' | 'input-warning' | 'input-info' | 'input-error',
    isDisabled?: boolean,
    size: 'input-xs' | 'input-sm' | 'input-md' | 'input-lg',
    placeholder: string
};

const TextInput: React.FC<TextInputProps> = ({ inputType = '', isDisabled = false, size, placeholder }) => {
    const TextInputProps = {
        disabled: isDisabled,
        className: `input input-bordered w-full max-w-xs ${inputType} ${size}`
      };
    
      return (
        <input type="text" placeholder={placeholder} {...TextInputProps} />
      );
}

export default TextInput;
