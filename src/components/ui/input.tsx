import React from 'react';

type InputProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  className = '',
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className={`
        w-72 flex-1 min-w-0
        px-4 py-4
        rounded-[20px]
        bg-[#f3f3e5] backdrop-blur-sm
        border border-gray-300
        text-gray-900 placeholder-gray-600
        focus:outline-none focus:ring-2 focus:ring-black
        transition duration-300 ease-in-out
        ${className}
      `}
    />
  );
};

export default Input;
