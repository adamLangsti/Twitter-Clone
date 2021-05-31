import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import React, { forwardRef } from 'react';

const Post = forwardRef(
    (
        { displayName, username, verified, timestamp, text, image, avatar },
        ref
    ) => {
        return (
            <div className='post' ref={ref}>
                <div className='post-avatar'>
                    <Avatar src={avatar} className='post-avatar' />
                </div>
                <div className='post-body'>
                    <div className='post-header'>
                        <div className='post-headerText'>
                            <h3>
                                {displayName}
                                <span>
                                    {verified && (
                                        <VerifiedUserIcon className='post-badge' />
                                    )}
                                    {username}
                                </span>
                            </h3>
                        </div>
                        <div className='post-headerDescription'>
                            <p>{text}</p>
                        </div>
                    </div>
                    <img src={image} alt='trump' />

                    <div className='post-footer'>
                        <ChatBubbleOutlineIcon fontSize='small' />
                        <RepeatIcon fontSize='small' />
                        <FavoriteBorderIcon fontSize='small' />
                        <PublishIcon fontSize='small' />
                    </div>
                </div>
            </div>
        );
    }
);

export default Post;
