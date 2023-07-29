'use client';

import { useContext, useState } from 'react';
import Button from '../UI/Button';
import Header from '../UI/Header';
import InputGroup from '../UI/InputGroup';
import SquareButton from '../UI/SquareButton';
import CustomLength from './CustomLength';
import CustomLink from './CustomLink';
import ShortLink from './ShortLink';
import Context from '../context/Context';

export default function Home() {
  const authContext = useContext(Context);

  const [showCustomLength, setShowCustomLength] = useState(true);
  const [showShortLink, setShowShortLink] = useState(false);

  const [longUrl, setLongUrl] = useState('');
  const [isLongUrlValid, setIsLongUrlValid] = useState(true);

  const urlRegex =
    /^(http|https):\/\/[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;

  console.log(authContext.authState);

  return (
    <div className="p-14 flex flex-col space-y-6">
      <Header />
      <InputGroup
        label="Paste long url here"
        placeholder="https://longlink"
        errorMessage="enter valid URL"
        value={longUrl}
        setValue={setLongUrl}
        isValid={isLongUrlValid}
        setIsValid={setIsLongUrlValid}
        regex={urlRegex}
      />
      {showCustomLength ? (
        <CustomLength setState={setShowCustomLength} />
      ) : (
        <CustomLink setState={setShowCustomLength} />
      )}

      <div className="flex">
        <SquareButton name="link created by you" />
        <Button name="create link" />
      </div>

      {showShortLink ? <ShortLink /> : ''}
    </div>
  );
}
