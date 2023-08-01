import React, { useState } from 'react';
import SquareButton from '../UI/SquareButton';
import { Icon } from 'react-icons-kit';
import { ic_file_copy_outline } from 'react-icons-kit/md/ic_file_copy_outline';
import { ic_file_copy } from 'react-icons-kit/md/ic_file_copy';

export default function ShortLink({ value }) {
  const [isCopied, setIsCopied] = useState(false);

  function copyToClipboard() {
    navigator.clipboard.writeText(value);
    setIsCopied(true);
  }
  return (
    <div className="flex gap-6 rounded-lg">
      <SquareButton
        name={
          isCopied ? <Icon icon={ic_file_copy} size={30} /> : <Icon icon={ic_file_copy_outline} size={30} />
        }
        onClick={copyToClipboard}
      />
      <input
        type="text"
        placeholder="https://sejw.al/xvf"
        defaultValue={value}
        className="bg-[var(--background-light)] w-full h-[100px] rounded-[11px] placeholder:text-white text-[20px] font-normal px-5"
      />
    </div>
  );
}
