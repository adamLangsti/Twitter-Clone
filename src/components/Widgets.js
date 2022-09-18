import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className='widgets-input'>
                <SearchIcon className='widgets-searchIcon' />
                <input type='text' placeholder='Search Twitter' />
            </div>
            <div className='widgets-widgetContainer'>
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={'541278904204668929'} />
                <TwitterTimelineEmbed
                    sourceType='profile'
                    screenName='adamlang121'
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={'https://www.facebook.com/adam.lang.758'}
                    options={{ text: 'reactjs' }}
                />
            </div>
        </div>
    );
};

export default Widgets;
