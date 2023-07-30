import React from 'react';
import SquareButton from '../UI/SquareButton';
import Input from '../UI/Input';

export default function CustomLink({ setState, value, setValue }) {
  return (
    <div>
      <p className="text-[#949494] my-5">
        <span className="text-[var(--foreground-darkest)]">create custom link. </span>
        <i>ex: sejw.al/ankit</i>
      </p>
      <div className="flex gap-6">
        <SquareButton name="select length" setState={setState} />
        <Input type="text" placeholder="sejw.al/john" value={value} setValue={setValue} />
      </div>
    </div>
  );
}
