import React from 'react';

export default function Input({
  placeholder,
  type,
  value,
  setValue,
  isValid,
  setIsValid,
  regex,
}) {
  function checkValue() {
    const result = regex.test(value);
    setIsValid(result);
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onFocus={() => setIsValid(true)}
      onBlur={checkValue}
      onChange={(event) => setValue(event.target.value)}
      className="bg-[var(--background-light)] w-full h-[100px] rounded-[11px] placeholder:text-white text-[20px] font-normal px-5"
    />
  );
}
