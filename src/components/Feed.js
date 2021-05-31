import React from 'react';
import Tweetbox from './Tweetbox';

const Feed = () => {
    return (
        <div className='feed'>
            <div className='feed-header'>
                <h2>Home</h2>
            </div>
            <Tweetbox />
        </div>
    );
};

export default Feed;
