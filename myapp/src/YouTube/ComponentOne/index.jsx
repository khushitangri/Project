import React, { useContext, useReducer, useState } from "react";
import VideoDb from "./VideoDb";
import AddVideo from "./AddVideo";
import VideoList from "./VideoList";
import Context from "./Context";
import VideoContext from "./VideoContext";
import VideoDispatchContext from "./VideoDispatchContext";
const ComponentOne = () => {
  const [editAbleVideo, setEditAbleVideo] = useState(null);

  const videoReducer = (videos, action) => {
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case "DELETE":
        return videos.filter((vdo) => vdo.id !== action.payload);
      case "EDIT":
        const index = videos?.findIndex((veo) => veo.id == action.payload.id);
        const newVdo = [...videos];
        newVdo.splice(index, 1, action.payload);
        setEditAbleVideo(null);
        return newVdo;
      default:
        return videos;
    }
  };
  const [videos, dispatch] = useReducer(videoReducer, VideoDb);
  // const [videos, setVideos] = useState(VideoDb);

  const themeContext = useContext(Context);
  console.log({ themeContext });

  const addvdo = (video) => {
    //action : {type:'ADD' , payload :'video'}
    dispatch({ type: "ADD", payload: video });
    // setVideos([
    //   ...videos,
    //  {...video, id: videos.length+1}
    // ])
  };
  const deleteVideo = (id) => {
    dispatch({ type: "DELETE", payload: id });

    // setVideos()
  };
  const EditVideo = (id) => {
    setEditAbleVideo(videos.find((vdo) => vdo.id === id));
  };

  const UpdateVideo = (video) => {
    dispatch({ type: "EDIT", payload: video });
    //    const index =  videos?.findIndex(veo=> veo.id==video.id)
    // const newVdo = [...videos]
    // newVdo.splice(index,1,video)
    // setVideos(newVdo)
  };
  return (
    <VideoContext.Provider value={videos}>
      <VideoDispatchContext.Provider value={dispatch}>
      <div
        className={`flex gap-4${themeContext}`}
        onClick={() => console.log("app")}
      >
        <AddVideo editAbleVideo={editAbleVideo}  />
        <VideoList   EditVideo={EditVideo} />

        <div style={{ clear: "both" }}>
          {/* <PlayButton  message={'play-msg'} onButton={()=>console.log('Play')}>PLAY</PlayButton>
<PlayButton message={'pause-msg'} onButton={()=>alert('PAUSE')}>PAUSE</PlayButton> */}
        </div>
      </div>
      </VideoDispatchContext.Provider>
    </VideoContext.Provider>
  );
};

export default ComponentOne;
