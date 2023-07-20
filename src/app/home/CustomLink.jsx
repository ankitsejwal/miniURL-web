import React from 'react';
import SquareButton from '../UI/SquareButton';
import Input from '../UI/Input';

export default function CustomLink({ setShowCustomLength }) {
  return (
    <div>
      <p className="text-[#949494] my-5">
        <span className="text-[var(--foreground-darkest)]">
          create custom link.
        </span>
        example: sejw.al/ankit
      </p>
      <div className="flex">
        <SquareButton
          name="select length instead"
          setShowCustomLength={setShowCustomLength}
        />
        <Input type="text" placeholder="sejw.al/john" />
      </div>
    </div>
  );
}
