import React from 'react';
import Input from '../UI/Input';
import Button from '../UI/Button';

export default function ShortLink() {
  return (
    <div className="flex  ">
      <Input type="text" placeholder="https://sejw.al/xvf" className="mx-5" />
      <Button name="copy" />
    </div>
  );
}
