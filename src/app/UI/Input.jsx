import React from 'react';

export default function ({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-[var(--background-light)] w-full h-[100px] rounded-[11px] placeholder:text-white text-[20px] font-normal px-5"
    />
  );
}
