import React, { useState, useEffect } from 'react';
import db from '../firebase';
import Post from './Post';
import Tweetbox from './Tweetbox';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('desc')
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => doc.data()))
            );
    }, []);

    return (
        <div className='feed'>
            <div className='feed-header'>
                <h2>Home</h2>
            </div>
            <Tweetbox />
            <FlipMove>
                {posts.map((post, index) => (
                    <Post
                        key={index}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                        timestamp={post.timestamp}
                    />
                ))}
            </FlipMove>
        </div>
    );
};

export default Feed;
