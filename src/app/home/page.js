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
  const [showCustomLength, setShowCustomLength] = useState(true);
  const [showShortLink, setShowShortLink] = useState(false);

  // states related to longurl entered by user
  const [longUrl, setLongUrl] = useState('');
  const [isLongUrlValid, setIsLongUrlValid] = useState(true);
  // state related to shorturl entered by user
  const [shortUrl, setShortUrl] = useState('');
  // state related to custom length of short link
  const [customLength, setCustomLength] = useState(3);
  // state related to custom link
  const [customLink, setCustomLink] = useState('');

  const urlRegex =
    /^(http|https):\/\/[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="p-14 flex flex-col space-y-6" onSubmit={handleFormSubmit}>
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
        <CustomLength setState={setShowCustomLength} value={customLength} />
      ) : (
        <CustomLink setState={setShowCustomLength} value={customLink} />
      )}

      <div className="flex">
        <SquareButton name="your links" />
        <Button name="create link" />
      </div>

      {showShortLink ? <ShortLink /> : ''}
    </form>
  );
}
