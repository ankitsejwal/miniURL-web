import React from 'react';
import Input from './Input';

export default function InputGroup({
  label,
  type,
  placeholder,
  value,
  setValue,
  isValid,
  setIsValid,
  regex,
  errorMessage,
}) {
  return (
    <div className="w-full">
      {!isValid && <p className="text-pink-800 my-2">{errorMessage}</p>}
      <label className="text-[18px] font-medium  my-3">{label}</label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        setValue={setValue}
        isValid={isValid}
        setIsValid={setIsValid}
        regex={regex}
      />
    </div>
  );
}
