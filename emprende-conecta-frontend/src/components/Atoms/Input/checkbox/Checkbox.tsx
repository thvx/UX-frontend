import React from 'react';

type CheckBoxProps = {
  checkboxType?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'info' | 'error',
    checkedType?: 'defaultChecked' | 'checked',
    isDisabled?: boolean,
    size: 'xs' | 'sm' | 'md' | 'lg'
};

const Checkbox: React.FC<CheckBoxProps> = ({ checkboxType = 'success', checkedType = 'defaultChecked', isDisabled = false, size }) => {
    const checkBoxProps = {
        [checkedType]: true,
        disabled: isDisabled,
        className: `checkbox checkbox-${checkboxType} checkbox-${size}`
      };
    
      return (
        <input type="checkbox" {...checkBoxProps} />
      );
}

export default Checkbox;
