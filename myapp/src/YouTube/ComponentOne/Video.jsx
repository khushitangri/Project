import React, { useEffect } from "react";
import { useState,useContext } from "react";
import useDispatch from "./DispatchHook";

const Video = ({title,Views,years,children,verified,Channel='CodderDost',id,EditVideo}) => {

//  let ChannelJsx;
//  if(verified){
//   ChannelJsx=<div>{Channel} {"👍"} </div>
//  }
//  else{
//   ChannelJsx=<div>{Channel} </div>

//  }

const dispatch = useDispatch();
  return (
    <div >
      <button  className='bg-black border border-yellow-500 p-1 rounded-[5px] text-white pointer w-[40%] 'onClick={()=>   dispatch({type:'DELETE' , payload :id})
}>X</button>
      <button className='bg-black border border-yellow-500 p-1 rounded-[5px] text-white pointer w-[40%] ' onClick={()=> EditVideo(id)}>Edit</button>
      <img className="w-[150px] h-[190px]"
        src="https://cdn.mindmajix.com/blog/images/reactjs-tutorial-2907.png"
        alt=""
       
      />
    
      <div>{title}</div>
      <div>{Views}.<span>{years}</span></div>
    <div>
      {/* {verified? <div>{Channel} {"👍"} </div>: <div>{Channel} </div>} */}

      {/* {Channel} {verified ? "👍" : null} */}
      {Channel} {verified && "👍"}
    </div>
    <div>
      {children}
    </div>
    </div>
  );
};

export default Video;
