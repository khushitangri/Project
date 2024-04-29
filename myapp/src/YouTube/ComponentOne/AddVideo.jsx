import React, { useContext, useEffect, useRef, useState } from "react";
import VideoDispatchContext from "./VideoDispatchContext";
import useDispatch from "./DispatchHook";

const AddVideo = ({ editAbleVideo,UpdateVideo }) => {
  const IntialValue = {
    Views: "",
    years: "10 months ago",
    Channel:'coderDost',
    verified: true,
    title:''
  }
// const dispatch = useContext(VideoDispatchContext)

const dispatch = useDispatch();
  const [video, setVideo] = useState(IntialValue);
  const input = useRef(null)
  const handleClick = (e) => {
    e.preventDefault();
    if(editAbleVideo){
      // UpdateVideo(video)
    dispatch({type:'EDIT',payload: video})

    }
    else{
      // AddVideo(video);
      dispatch({type:'ADD' , payload :video})

    }
    setVideo(IntialValue)
  };
  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };
 useEffect(()=>{
  if(editAbleVideo){
    setVideo(editAbleVideo)
  }
  input.current.focus()
 },[editAbleVideo])




  return (
    <form action="">
      <input
        className="block p-1  border border-black"
        ref={input}
        type="text"
        name="title"
        onChange={handleChange}
        value={video?.title}
        placeholder="title"
      />
      <input
        className="block p-1 m-1 border border-black"
        name="Views"
        value={video?.Views}
        type="text"
        onChange={handleChange}
        placeholder="views"
      />
      <input className="block p-1" type="text" />
      <button onClick={handleClick}>
        
      {editAbleVideo?'Edit':'Add'} Vedio
        </button>
    </form>
  );
};

export default AddVideo;
