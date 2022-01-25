import React from 'react';
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    PaperAirplaneIcon,
    HeartIcon
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';


function Post({ id, username, userImg, img, caption }) {
    return (
        <div className='bg-white my-7 border-rounded-sm'>
            <div className='flex items-center p-5 '>
                <img className='rounded-full h-12 object-contain border p-1 mr-3' src={userImg} alt="" />
                <p className='flex-1 font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>

            <img className='object-cover w-full' src={img} alt="" />

            <div className='flex justify-between px-4 pt-4'>
                <div className='flex space-x-4'>
                    <HeartIcon className='btn' />
                    <ChatIcon className='btn' />
                    <PaperAirplaneIcon className='btn' />
                </div>

                <BookmarkIcon className='btn'/>
            </div>

            <p className='p-5 truncate'>
                <span className='font-bold mr-1'>{username} </span>
                {caption}
            </p>

            <form className='flex items-center p-4'>
                <EmojiHappyIcon className='btn' />
                <input className='bg-gray-50 mx-4 rounded-full border-none flex-1 focus:ring-0 outline-none' type="text" placeholder='Add a comment...'/>
                <button>Post</button>
            </form>
        </div>
    );
}

export default Post;
