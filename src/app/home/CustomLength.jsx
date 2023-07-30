import React from 'react';
import SquareButton from '../UI/SquareButton';
import Input from '../UI/Input';

export default function CustomLength({ setState, value, setValue }) {
  return (
    <div>
      <p className="text-[#949494] my-5">
        <span className="text-[var(--foreground-darkest)]">Select length. </span>
        Shorter the length, greater the collision.
        <br />
        <a href="/" className="text-[var(--foreground-darkest)] underline">
          learn more
        </a>
      </p>
      <div className="flex gap-6">
        <SquareButton name="custom link" setState={setState} value={value} />
        <Input type="number" placeholder="enter length of your link" value={value} setValue={setValue} />
      </div>
    </div>
  );
}
