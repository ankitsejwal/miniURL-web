import React from 'react';
import SquareButton from '../UI/SquareButton';
import Input from '../UI/Input';
import { Icon } from 'react-icons-kit';
import { ic_link } from 'react-icons-kit/md/ic_link';

export default function CustomLength({ setState, value, setValue, setIsValid, regex }) {
  return (
    <div>
      <p className="text-[#949494] my-5">
        <span className="text-[var(--foreground-darkest)]">Select length. </span>
        Shorter the length, greater the collision.
      </p>
      <div className="flex gap-6">
        <SquareButton
          name={<Icon icon={ic_link} size={30} />}
          onClick={() => setState((prev) => !prev)}
          value={value}
        />
        <Input
          type="number"
          placeholder="enter length of your link"
          style={{ textAlign: 'center' }}
          value={value}
          setValue={setValue}
          setIsValid={setIsValid}
          regex={regex}
        />
      </div>
    </div>
  );
}
