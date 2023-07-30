import React from 'react';
import SquareButton from '../UI/SquareButton';
import Input from '../UI/Input';

export default function CustomLink({ setState, value }) {
  return (
    <div>
      <p className="text-[#949494] my-5">
        <span className="text-[var(--foreground-darkest)]">create custom link. </span>
        <i>ex: sejw.al/ankit</i>
      </p>
      <div className="flex">
        <SquareButton name="select length" setState={setState} value={value} />
        <Input type="text" placeholder="sejw.al/john" />
      </div>
    </div>
  );
}
