import React from 'react';
import { Button, Avatar } from '@material-ui/core';

const Tweetbox = () => {
    return (
        <div className='tweetbox'>
            <form>
                <div className='tweetbox-input'>
                    <Avatar src='https://images.unsplash.com/photo-1622151546179-c28774aaa724?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80' />
                    <input type='text' placeholder="What's happening?" />
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    );
};

export default Tweetbox;
