import React from 'react';
import Input from '../UI/Input';
import SquareButton from '../UI/SquareButton';

export default function ShortLink({ value }) {
  return (
    <div className="flex">
      <SquareButton name="copy" />
      <input
        type="text"
        placeholder="https://sejw.al/xvf"
        value={value}
        className="bg-[var(--background-light)] w-full h-[100px] rounded-[11px] placeholder:text-white text-[20px] font-normal px-5"
      />
    </div>
  );
}
