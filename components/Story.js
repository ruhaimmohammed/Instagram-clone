import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function Story( props ) {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(
        Math.random() * 1000
    ))
}, []);

  return (
  <div>
      <img className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 object-contain cursor-pointer' src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt={props.username + "image"} />
      <p className='text-xs w-14 truncate lowercase text-center'>{props.username}</p>
  </div>);
}

export default Story;