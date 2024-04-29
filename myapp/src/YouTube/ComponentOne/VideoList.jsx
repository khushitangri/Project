import React, { useContext } from 'react';
import Video from './Video';
import PlayButton from './PlayButton';
import VideoContext from './VideoContext';
import VideoDispatchContext from './VideoDispatchContext';
import useVideosHooks from './VideosHook';

const VideoList = ({EditVideo}) => {
  const videos = useVideosHooks()
  return (
    <div className='flex'>
        {videos?.map((video) => (
        <Video
        key={video?.id}
          title={video?.title}
          Views={video?.Views}
          years={video?.years}
          Channel={video?.Channel}
          verified={video?.verified}
          id={video?.id}
          EditVideo={EditVideo}
        >
          <PlayButton
            onPlay={() => console.log("Play", video.title)}
            onPause={() => console.log("Pause", video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  )
}

export default VideoList
