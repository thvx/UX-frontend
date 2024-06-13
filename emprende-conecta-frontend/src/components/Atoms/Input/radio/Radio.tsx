import React from 'react';

type RadioProps = {
  radioType?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error',
  isDisabled?: boolean,
  isChecked?: boolean,
  size: 'xs' | 'sm' | 'md' | 'lg',
  name: string,
  text: string,
  marginRight: string,
  onChange: () => void
};

const Radio: React.FC<RadioProps> = ({ radioType = 'accent', isDisabled = false, isChecked = true, size, name, text, marginRight, onChange }) => {
  const radioProps = {
    disabled: isDisabled,
    checked: isChecked,
    name: name,
    className: `radio radio-${radioType} radio-${size}`,
    onChange: onChange
  };

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className={`label-text mr-${marginRight}`}>{text}</span>
        <input type="radio" {...radioProps} />
      </label>
    </div>
  );
};

export default Radio;