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
import { Icon } from 'react-icons-kit';
import { ic_content_paste } from 'react-icons-kit/md/ic_content_paste';
import { ic_format_list_numbered } from 'react-icons-kit/md/ic_format_list_numbered';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [showCustomLength, setShowCustomLength] = useState(true);
  const [showShortLink, setShowShortLink] = useState(false);

  // states related to longurl entered by user
  const router = useRouter();
  const [longUrl, setLongUrl] = useState('');
  const [isValidLongUrl, setIsValidLongUrl] = useState(true);
  const longUrlRegex =
    /^(http|https):\/\/[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;

  // state related to shorturl entered by user
  const [miniUrl, setMiniUrl] = useState('');
  // state related to custom length of short link
  const [customLength, setCustomLength] = useState(3);
  const [isValidCustomLength, setIsValidCustomLength] = useState(true);
  const customLengthRegex = /^(?!0$)\d+$/g;
  // state related to custom link
  const [customLink, setCustomLink] = useState('');
  const [isValidCustomLink, setIsValidCustomLink] = useState(true);
  const customLinkRegex = /^[a-zA-Z0-9]+$/g;
  // state related to custom url
  const [customUrl, setCustomUrl] = useState(false);
  // state related to custom error messages
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (customLink.length > 1) setCustomUrl(true);
    else setCustomUrl(false);
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
        { headers: { 'Content-Type': 'application/json', authorization: `Bearer ${authState.token}` } }
      );
      setMiniUrl('https://sejw.al/' + response.data.miniURL);
      setShowShortLink(true);
    } catch (error) {
      if (!error?.response) setErrorMessage('No server response');
      else if (error.response?.status === 400) setErrorMessage(error.response.data?.message);
      else if (error.response?.status === 401) setErrorMessage(error.response.data?.message);
      else setErrorMessage('Login failed');
    }
  };

  const handlePaste = async () => {
    setLongUrl(await navigator.clipboard.readText());
  };

  return (
    <form className="p-14 flex flex-col space-y-6" onSubmit={handleFormSubmit}>
      <Header />
      <div className="flex gap-6 items-end">
        <InputGroup
          label="Paste long url here"
          placeholder="https://paste-a-long-link-here"
          errorMessage="enter valid URL"
          value={longUrl}
          setValue={setLongUrl}
          isValid={isValidLongUrl}
          setIsValid={setIsValidLongUrl}
          regex={longUrlRegex}
        />
        <SquareButton name={<Icon icon={ic_content_paste} size={30} />} onClick={handlePaste} />
      </div>

      <p>{errorMessage ? errorMessage : ''}</p>
      {showCustomLength ? (
        <CustomLength
          setState={setShowCustomLength}
          value={customLength}
          setValue={setCustomLength}
          isValid={isValidCustomLength}
          setIsValid={setIsValidCustomLength}
          regex={customLengthRegex}
        />
      ) : (
        <CustomLink
          setState={setShowCustomLength}
          value={customLink}
          setValue={setCustomLink}
          isValid={isValidCustomLink}
          setIsValid={setIsValidCustomLink}
          regex={customLinkRegex}
        />
      )}

      <div className="flex gap-6">
        <SquareButton
          name={<Icon icon={ic_format_list_numbered} size={30} onClick={() => router.push('links')} />}
        />
        <Button name="create link" />
      </div>

      {showShortLink ? <ShortLink value={miniUrl} setValue={null} /> : ''}
    </form>
  );
}
