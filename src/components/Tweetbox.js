import React, { useState } from 'react';
import { Button, Avatar } from '@material-ui/core';
import db from '../firebase';

const Tweetbox = () => {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const getDateTime = () => {
        return new Date().toISOString().slice(0, 19);
    };

    const sendTweet = (event) => {
        event.preventDefault();

        db.collection('posts').add({
            displayName: 'Adam Lang',
            username: '@adamlang121',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://images.unsplash.com/photo-1622151546179-c28774aaa724?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80',
            timestamp: getDateTime(),
        });
        setTweetMessage('');
        setTweetImage('');
    };
    return (
        <div className='tweetbox'>
            <form>
                <div className='tweetbox-input'>
                    <Avatar src='https://images.unsplash.com/photo-1622151546179-c28774aaa724?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80' />
                    <input
                        value={tweetMessage}
                        onChange={(event) =>
                            setTweetMessage(event.target.value)
                        }
                        type='text'
                        placeholder="What's happening?"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(event) => setTweetImage(event.target.value)}
                    className='tweetbox-imageInput'
                    type='text'
                    placeholder='Upload image url'
                />
                <Button
                    type='submit'
                    onClick={sendTweet}
                    className='tweetbox-btn'>
                    Tweet
                </Button>
            </form>
        </div>
    );
};

export default Tweetbox;
