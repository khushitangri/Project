import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Comments, MoreIcons, NotificationIcon,Save,Send } from '../../../Icons'
const Posts = ({Avatar,Id,timepost,Images,Liked}) => {
return (
 <>
 <div className=''>
  <div className='flex gap-2 items-center justify-between mt-6'>
    <div className='flex gap-2 items-center'>
    <div className=''>
  <img className='w-[35px] h-[25px] rounded-[50%] ' src={Avatar} alt="" />
  </div>
  <div className='text-[15px] font-bold'>
    {Id}
  </div>
  <div className='text-[#94a3b8]'>
    .{timepost}
  </div>
    </div>
  <div>
  <div>
  <MoreIcons/>
</div>
  </div>

  </div>
  <div >
    <img className='w-[470px] h-[630px] border px-10 mt-2' src={Images} alt="" />
  </div>
  <div className='flex items-center justify-between mt-2'>
  <div className='flex items-center gap-4 '>
    <div>
<NotificationIcon/>
    </div>
    <div>
      <Comments/>
    </div>
    <div>
      <Send/>
    </div>
  </div>
  <div>
    <Save/>
  </div>
  </div>
  <div className='my-2 font-bold'>
    {Liked}
  </div>
  <div className='border-b pb-2 '>
 <input className='bg-black outline-none' type="text" placeholder='Add a comment...' />
  </div>
 </div>
 </>
  )
}

export default Posts;