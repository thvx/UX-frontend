import React from 'react';

type TextAreaProps = {
  textareaType?: 'textarea-primary' | 'textarea-secondary' | 'textarea-accent' | 'textarea-success' | 'textarea-warning' | 'textarea-info' | 'textarea-error',
    isDisabled?: boolean,
    size: 'textarea-xs' | 'textarea-sm' | 'textarea-md' | 'textarea-lg',
    placeholder: string
};

const TextArea: React.FC<TextAreaProps> = ({ textareaType = '', isDisabled = false, size, placeholder }) => {
    const TextAreaProps = {
        disabled: isDisabled,
        className: `textarea textarea-bordered w-full max-w-xs ${textareaType} ${size}`
      };
    
      return (
        <textarea {...TextAreaProps} placeholder={placeholder}></textarea>
      );
}

export default TextArea;
