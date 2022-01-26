import { useEffect, useState } from 'react';
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    PaperAirplaneIcon,
    HeartIcon
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';


function Post({ id, username, userImg, img, caption }) {
    const { data: session } = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, 'posts', id, 'comments'),
                    orderBy('timestamp', 'desc')
                ), (snapshot) => setComments(snapshot.docs)
            )
            [db]
    );

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment('');

        await addDoc(collection(db, 'posts', id, 'comments'), {
            comment: commentToSend,
            username: session?.user?.username,
            userImage: session?.user?.image,
            timestamp: serverTimestamp(),
        });
    }

    return (
        <div className='bg-white my-7 border-rounded-sm'>
            <div className='flex items-center px-4 py-2 md:p-4'>
                <img className='rounded-full h-12 object-contain border p-1 mr-3' src={userImg} alt="" />
                <p className='flex-1 font-bold'>{username}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>

            <img className='object-cover w-full' src={img} alt="" />

            {session && (
                <div className='flex justify-between px-4 pt-4'>
                    <div className='flex space-x-4'>
                        <HeartIcon className='btn' />
                        <ChatIcon className='btn' />
                        <PaperAirplaneIcon className='btn' />
                    </div>

                    <BookmarkIcon className='btn' />
                </div>
            )}

            <p className='p-5 truncate'>
                <span className='font-bold mr-1'>{username} </span>
                {caption}
            </p>

                <Comments />

            {session && (
                <form className='flex items-center p-4'>
                    <EmojiHappyIcon className='btn' />
                    <input className='bg-gray-50 mx-4 rounded-full border-none flex-1 focus:ring-0 outline-none' value={comment} onChange={e => setComment(e.target.value)} type="text" placeholder='Add a comment...' />
                    <button type='submit' disabled={!comment.trim()} onClick={sendComment} className="font-semibold text-blue-400">Post</button>
                </form>
            )}
        </div>
    );
}

export default Post;
