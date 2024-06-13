import React from 'react';

type DropdownProps = {
  buttonText: string;
  items: { label: string, onClick: () => void }[];
};


const Dropdown: React.FC<DropdownProps> = ({ buttonText, items }) => {
    return (
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1 border-custom-yellow bg-custom-blue">
          {buttonText}
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52">
          {items.map((item, index) => (
            <li key={index} onClick={item.onClick}>
            <a className="block py-2 px-4 rounded">{item.label}</a>
              </li>
          ))}
        </ul>
      </div>
    );
  };

export default Dropdown;
