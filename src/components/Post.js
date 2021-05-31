import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import React from 'react';

const Post = ({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar,
}) => {
    return (
        <div className='post'>
            <div className='post-avatar'>
                <Avatar
                    src='https://images.unsplash.com/photo-1622151546179-c28774aaa724?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80'
                    className='post-avatar'
                />
            </div>
            <div className='post-body'>
                <div className='post-header'>
                    <div className='post-headerText'>
                        <h3>
                            Adam Lang
                            <span>
                                <VerifiedUserIcon className='post-badge' />
                                @adam123
                            </span>
                        </h3>
                    </div>
                    <div className='post-headerDescription'>
                        <p>
                            I challenge you to build a Twitter clone with React
                        </p>
                    </div>
                </div>
                <img
                    src='https://media2.giphy.com/media/DJsXEMm8GS5PJ3Za00/giphy.gif?cid=ecf05e47fxdb0e1ueoosx5d2368dzsmc5e7imkbz93786upu&rid=giphy.gif&ct=g'
                    alt='trump'
                />

                <div className='post-footer'>
                    <ChatBubbleOutlineIcon fontSize='small' />
                    <RepeatIcon fontSize='small' />
                    <FavoriteBorderIcon fontSize='small' />
                    <PublishIcon fontSize='small' />
                </div>
            </div>
        </div>
    );
};

export default Post;
