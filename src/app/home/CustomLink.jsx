import React from 'react';
import SquareButton from '../UI/SquareButton';
import Input from '../UI/Input';
import { Icon } from 'react-icons-kit';
import { sortNumericAsc } from 'react-icons-kit/icomoon/sortNumericAsc';

export default function CustomLink({ setState, value, setValue }) {
  return (
    <div>
      <p className="text-[#949494] my-5">
        <span className="text-[var(--foreground-darkest)]">Create custom link. </span>
        <i>ex: sejw.al/ankit</i>
      </p>
      <div className="flex gap-6">
        <SquareButton
          name={<Icon icon={sortNumericAsc} size={30} />}
          onClick={() => setState((prev) => !prev)}
        />
        <Input type="text" placeholder="sejw.al/john" value={value} setValue={setValue} />
      </div>
    </div>
  );
}
