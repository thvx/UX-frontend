import React from 'react';

type TextInputSearchProps = {
  inputType?: 'input-primary' | 'input-secondary' | 'input-accent' | 'input-success' | 'input-warning' | 'input-info' | 'input-error',
    isDisabled?: boolean,
    size: 'input-xs' | 'input-sm' | 'input-md' | 'input-lg',
    placeholder: string
};

const TextInputSearch: React.FC<TextInputSearchProps> = ({ inputType = '', isDisabled = false, size, placeholder }) => {
    const TextInputSearchProps = {
        className: `input input-bordered ${inputType} w-full max-w-xs flex items-center gap-2 ${size}`
      };
    
      return (
        <label {...TextInputSearchProps}>
            <input type="text" className="grow" placeholder={placeholder} disabled={isDisabled} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      </label>
      );
}

export default TextInputSearch;