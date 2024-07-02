import React from 'react';
import InputText from '../../Atoms/Input/text/text';

type FormGroupProps = {
  label: string;
  inputType?: 'text' | 'email' | 'tel' | 'search' | 'password';
  placeholder?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

const FormGroup: React.FC<FormGroupProps> = ({
  label,
  inputType = 'text',
  placeholder,
  size = 'md',
  required = false,
  value = '',
  onChange,
  name,
}) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text text-white font-bold">{label}</span>
      </label>
      <InputText 
        inputType={inputType} 
        placeholder={placeholder} 
        size={size} 
        required={required} 
        value={value} 
        onChange={onChange} 
        name={name}
      />
    </div>
  );
};

export default FormGroup;
