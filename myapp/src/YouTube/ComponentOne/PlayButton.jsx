import React, { useState } from 'react'

const PlayButton = ({message,children,onButton,onPlay,onPause}) => {
    // const HandleClick=()=>{
    //     onButton()
    // }
    // let playing = false;//Dont use this approach
    const [playing,setPlaying]=useState(false)
    const HandleClick=(e)=>{
        e.stopPropagation()
if(playing) onPause()
else onPlay()
setPlaying(!playing)
    }
  return (
    <div>
      <button className='bg-black border border-yellow-500 p-1 rounded-[5px] text-white pointer w-[100%]' onClick={HandleClick}>{children}  {playing ? '>' : '||'}</button> 
    </div>
  )
}

export default PlayButton
