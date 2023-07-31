import React, { useState } from 'react';
import SquareButton from '../UI/SquareButton';

export default function ShortLink({ value }) {
  const [isCopied, setIsCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(value);
    setIsCopied(true);
  }
  return (
    <div className="flex gap-6 rounded-lg">
      <SquareButton name={isCopied ? 'copied' : 'copy'} onClick={copyToClipboard} />
      <input
        type="text"
        placeholder="https://sejw.al/xvf"
        defaultValue={value}
        className="bg-[var(--background-light)] w-full h-[100px] rounded-[11px] placeholder:text-white text-[20px] font-normal px-5"
      />
    </div>
  );
}
