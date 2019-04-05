import * as React from 'react';
import YouTube from 'react-youtube';

export class Video extends React.Component {
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                modestbranding: 1
            }
        };

        return (
            <YouTube
                videoId="06Pcjh4KHbs"
                opts={opts}
            />
        );
    }
}
