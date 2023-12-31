import React from 'react';

export default function Button({ name, onClick }) {
  return (
    <button
      className="bg-[var(--background-lighter)] text-[26px] font-semibold border-4 border-[#045770] rounded-[11px] w-full
h-[100px]"
      type="submit"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
