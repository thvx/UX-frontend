import React from 'react';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, value, onChange }) => {
  return (
    <input 
      type="text" 
      placeholder={placeholder} 
      value={value}
      onChange={onChange}
      className="input input-bordered min-w-32 w-full mx-8 px-8" 
    />
  );
};

export default SearchInput;
