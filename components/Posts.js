import React from 'react';
import Post from './Post';

const posts = [
    {
        id: "123",
        username: "ruhaimmohammed",
        userImg: "https://pbs.twimg.com/profile_images/1482805067900424192/8xm4ZAyk_400x400.jpg",
        img: "https://pbs.twimg.com/profile_images/1482805067900424192/8xm4ZAyk_400x400.jpg",
        caption: "HELLO EVERYONE",
    },
    {
        id: "123",
        username: "ruhaimmohammed",
        userImg: "https://pbs.twimg.com/profile_images/1482805067900424192/8xm4ZAyk_400x400.jpg",
        img: "https://pbs.twimg.com/profile_images/1482805067900424192/8xm4ZAyk_400x400.jpg",
        caption: "HELLO EVERYONE",
    }
]

function Posts() {
    return (
        <div>
            { posts.map((post) => (
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    );
}

export default Posts;
