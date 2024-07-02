import React from 'react';

type DropdownItem = {
  text: string;
  link: string;
};

type DropdownProps = {
  buttonText: string;
<<<<<<< HEAD
  items: { label: string, onClick: () => void }[];
};

=======
  items: DropdownItem[];
}
>>>>>>> 387965c95a1be5809c1130a6879f2a602405ef93

const Dropdown: React.FC<DropdownProps> = ({ buttonText, items }) => {
    return (
      <div className="dropdown dropdown-hover">
        <div tabIndex={0} role="button" className="btn m-1 border-custom-yellow bg-custom-blue">
          {buttonText}
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52">
          {items.map((item, index) => (
<<<<<<< HEAD
            <li key={index} onClick={item.onClick}>
            <a className="block py-2 px-4 rounded">{item.label}</a>
              </li>
=======
            <li key={index}>
              <a href={item.link} className={'block py-2 px-4 rounded'}
              >{item.text}
              </a>
            </li>
>>>>>>> 387965c95a1be5809c1130a6879f2a602405ef93
          ))}
        </ul>
      </div>
    );
  };

export default Dropdown;