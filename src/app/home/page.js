'use client';

import { useState } from 'react';
import Button from '../UI/Button';
import Header from '../UI/Header';
import InputGroup from '../UI/InputGroup';
import SquareButton from '../UI/SquareButton';
import CustomLength from './CustomLength';
import CustomLink from './CustomLink';

export default function Home() {
  const [showCustomLength, setShowCustomLength] = useState(true);
  return (
    <div className="p-14 flex flex-col space-y-6">
      <Header />
      <InputGroup label="Paste long url here" placeholder="https://longlink" />
      {showCustomLength ? (
        <CustomLength setShowCustomLength={setShowCustomLength} />
      ) : (
        <CustomLink setShowCustomLength={setShowCustomLength} />
      )}

      <div className="flex">
        <SquareButton name="link created by you" />
        <Button name="create link" />
      </div>
    </div>
  );
}
