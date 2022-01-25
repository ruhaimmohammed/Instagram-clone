import React, { useEffect, useState } from 'react';

function Suggestion({ id, username, email }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(
            Math.random() * 1000
        ))
    }, []);

    return (
    <div className='flex items-center justify-between mt-3'>
        <img className='w-10 h-10 rounded-full border p-[2px]' src={`https://avatars.dicebear.com/api/human/${seed}.svg`} alt={username} />

        <div className='flex-1 mx-4'>
            <h2 className='font-semibold text-sm lowercase'>{username}</h2>
            <h3 className='text-xs text-gray-400 lowercase'>{email}</h3>
        </div>

        <button className='text-blue-400 text-xs font-bold'>Follow</button>
    </div>
    );
}

export default Suggestion;
