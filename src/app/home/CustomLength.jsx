import React from 'react';
import SquareButton from '../UI/SquareButton';
import Input from '../UI/Input';

export default function CustomLength({ setShowCustomLength }) {
  return (
    <div>
      <p className="text-[#949494] my-5">
        <span className="text-[var(--foreground-darkest)]">select length.</span>
        Shorter the length, more the collisions.
        <a href="" className="text-[var(--foreground-darkest)] underline mx-2">
          read more
        </a>
      </p>
      <div className="flex">
        <SquareButton
          name="create custom link"
          setShowCustomLength={setShowCustomLength}
        />
        <Input type="text" placeholder="3" />
      </div>
    </div>
  );
}
