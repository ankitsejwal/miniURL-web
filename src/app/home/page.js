'use client';

import { useContext, useEffect, useState } from 'react';
import Button from '../UI/Button';
import Header from '../UI/Header';
import InputGroup from '../UI/InputGroup';
import SquareButton from '../UI/SquareButton';
import CustomLength from './CustomLength';
import CustomLink from './CustomLink';
import ShortLink from './ShortLink';
import Context from '../context/Context';
import axios from '../../api/axios';

export default function Home() {
  const [showCustomLength, setShowCustomLength] = useState(true);
  const [showShortLink, setShowShortLink] = useState(false);

  // states related to longurl entered by user
  const [longUrl, setLongUrl] = useState('');
  const [isLongUrlValid, setIsLongUrlValid] = useState(true);
  // state related to shorturl entered by user
  const [miniUrl, setMiniUrl] = useState('');
  // state related to custom length of short link
  const [customLength, setCustomLength] = useState(3);
  const [isLengthValid, setIsLengthValid] = useState(false);
  // state related to custom link
  const [customLink, setCustomLink] = useState('');
  const [urlAlreadyExists, setUrlAlreadyExists] = useState(false);
  // state related to custom url
  const [customUrl, setCustomUrl] = useState(false);
  // state related to custom error messages
  const [errorMessage, setErrorMessage] = useState('');

  const urlRegex =
    /^(http|https):\/\/[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;

  useEffect(() => {
    if (customLink.length > 1) setCustomUrl(true);
    // Todo: set custom length to null or zero
  }, [customLink]);

  // import context
  const { authState } = useContext(Context);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/api/urls',
        JSON.stringify({
          user: authState.user._id,
          customUrl,
          longUrl,
          customLink,
          customLength,
        }),
        { headers: { 'Content-Type': 'application/json', miniUrl_auth_token: authState.token } }
      );
      setMiniUrl('https://sejw.al/' + response.data.miniURL);
      setShowShortLink(true);
    } catch (error) {
      if (!error.response) console.log('No server response');
      else console.log(error.response);
      // setErrorMessage(error.response.data.message);
    }
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
      {errorMessage ? <p>{errorMessage}</p> : ''}
      {showCustomLength ? (
        <CustomLength setState={setShowCustomLength} value={customLength} setValue={setCustomLength} />
      ) : (
        <CustomLink setState={setShowCustomLength} value={customLink} setValue={setCustomLink} />
      )}

      <div className="flex gap-6">
        <SquareButton name="your links" />
        <Button name="create link" />
      </div>

      {showShortLink ? <ShortLink value={miniUrl} setValue={null} /> : ''}
    </form>
  );
}
