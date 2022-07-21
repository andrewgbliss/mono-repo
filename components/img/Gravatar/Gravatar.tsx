import React from 'react';
import md5 from 'md5';
import querystring from 'query-string';
import Image from 'next/image';

type Props = {
  email: string;
  size?: number;
  rating?: string;
  d?: string;
};

const Gravatar: React.FC<Props> = ({
  email,
  size = 50,
  rating = 'g',
  d = 'retro',
}) => {
  const query = querystring.stringify({
    s: size,
    r: rating,
    d,
  });
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: 'binary' });
  const src = `https://www.gravatar.com/avatar/${hash}?${query}`;
  return <Image src={src} alt="" width={size} height={size} priority />;
};

export default Gravatar;
