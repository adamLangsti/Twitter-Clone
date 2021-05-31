import React from 'react';
import Post from './Post';
import Tweetbox from './Tweetbox';

const Feed = () => {
    return (
        <div className='feed'>
            <div className='feed-header'>
                <h2>Home</h2>
            </div>
            <Tweetbox />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
};

export default Feed;
