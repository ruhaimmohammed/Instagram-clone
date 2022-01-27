import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { db } from '../firebase';
import Post from './Post';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(
        () =>
            onSnapshot(
                query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
                (snapshot) => {
                    setPosts(snapshot.docs);
                }
            )
            [db]
    );


    return (
        <div>
            {posts.map((post) => (
                <div key={post.id}>
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.data().username}
                        userImg={post.data().profileImg}
                        img={post.data().image}
                        caption={post.data().caption}
                    />

                    <Moment className='ml-2 text-s' fromNow>
                        {post.data().timestamp?.toDate()}
                    </Moment>
                </div>
            ))}
        </div>
    );
}

export default Posts;
