import React, { useEffect } from 'react';

export default function Input({ placeholder, type, style, value, setValue, isValid, setIsValid, regex }) {
  useEffect(() => {
    if (value) setIsValid(regex.test(value));
  }, [value]);

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={style}
      className="bg-[var(--background-light)] w-full h-[100px] rounded-[11px] placeholder:text-white text-[20px] font-normal px-5"
    />
  );
}
