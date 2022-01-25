import React from 'react';

function MiniProfile() {
  return <div className='flex items-center justify-between mt-14 ml-10'>
      <img className='w-16 h-16 rounded-full border p-[2px]' src="https://pbs.twimg.com/profile_images/1482805067900424192/8xm4ZAyk_400x400.jpg" alt="profile photo" />

        <div className='flex-1 mx-4'>
            <h2 className='font-bold'>ruhaimmohammed</h2>
            <h3 className='text-sm'>Welcome to Instagram</h3>
        </div>

        <button className='text-blue-400 text-sm font-semibold ml-5'>
            Sign out
        </button>
  </div>;
}

export default MiniProfile;
