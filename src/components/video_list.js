import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) =>{
    // props are passed on creation in JSX(look index.js)
    const videoItems = props.videos.map((video) =>{
        return (<VideoListItem 
                    onVideoSelect = {props.onVideoSelect} // passing callback from root App to all children ListItem
                    key={video.etag} 
                    video={video} 
                />)
    })
    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;