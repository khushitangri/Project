import React from 'react';
import Dp from '../../../Images/dp.jpg';
import Navigation from '.';
import {SettingsIcon,} from '../../../Icons';
import { Link, Outlet } from 'react-router-dom';
const PostsInsta = ({posts,togle}) => {
console.log('sgyghj',posts)

  return (
    <div>
    
      {togle ? (
       <div className='text-white bg-black  flex '>
     
       <div className='fixed h-[100%] bg-black opacity-40'>
   
   <Navigation/>
       </div>
   <div className='mx-60 pl-60 mt-10 bg-black'>
   <div className='flex  gap-10'>
   <div >
   <img className='w-[150px] h-[150px] rounded-[50%] mt-4 object-contain' src={Dp} alt="" />
   </div>
   <div>
   <div className='flex gap-4'>
   <div className='text-[20px]'>
     k_tangri
   </div>
   <buton className="bg-[#363636] px-2 flex items-center justify-center py-2 rounded-[5%] text-[14px]">
   Edit Profile
   </buton>
   <button className="bg-[#363636] px-2 rounded-[5%] text-[14px]">
   View Archeive
   </button>
   <button>
     <SettingsIcon/>
   </button>
   </div>
   <div className='flex gap-8 pt-6'>
   <div>
     <span className='font-medium text-[19px]'>{posts?.length}</span> posts
   </div>
   <div>
   <span className='font-medium text-[19px]'>22</span> followers
   </div>
   <div>
   <span className='font-medium text-[19px]'>22</span> following
   </div>
   </div>
   <div>
   <div className='mt-5 font-bold'>
     khushi Tangri
   </div>
   <div className='pt-2'>
   ❣ ਮਨ ਨੀਵਾਂ  ਮੱਤ ਉੱਚੀ ❣
   </div>
   </div>
   </div>
   </div>
   <div className='mt-14 border-t '>
   <div className='mx-40 flex gap-20 pt-4 text-[15px] font-medium'>
     <Link to={'/'}>
     <div>
   Posts
   </div>
     </Link>
   <Link to={'/reels'}>
   <div>
   Reels
   </div>
   </Link>
 <Link to={'/saved'}>
 <div>
   Saved
   </div>
 </Link>
<Link to={'/tagged'}>
<div>
   Tagged
   </div>
</Link>
   </div>
   <Outlet/>
   <div>
   </div>
   </div>
   </div>
     </div>
      ):
            (<div className='text-white bg-black  flex'>
    <div className='fixed h-[100%] bg-black'>

<Navigation/>
    </div>
<div className='mx-60 pl-60 mt-10 bg-black'>
<div className='flex  gap-10'>
<div >
<img className='w-[150px] h-[150px] rounded-[50%] mt-4 object-cover' src={Dp} alt="" />
</div>
<div>
<div className='flex gap-4'>
<div className='text-[20px]'>
  k_tangri
</div>
<buton className="bg-[#363636] px-2 flex items-center justify-center py-2 rounded-[5%] text-[14px]">
Edit Profile
</buton>
<button className="bg-[#363636] px-2 rounded-[5%] text-[14px]">
View Archeive
</button>
<button>
  <SettingsIcon/>
</button>
</div>
<div className='flex gap-8 pt-6'>
<div>
  <span className='font-medium text-[19px]'>{posts?.length}</span> posts
</div>
<div>
<span className='font-medium text-[19px]'>22</span> followers
</div>
<div>
<span className='font-medium text-[19px]'>22</span> following
</div>
</div>
<div>
<div className='mt-5 font-bold'>
  khushi Tangri
</div>
<div className='pt-2'>
❣ ਮਨ ਨੀਵਾਂ  ਮੱਤ ਉੱਚੀ ❣
</div>
</div>
</div>

</div>

<div className='mt-14 border-t '>
<div className='mx-40 flex gap-20 pt-4 text-[15px] font-medium'>
  <Link to={'/profile/'}>
  <div>
Posts
</div>
  </Link>
<Link to={'/profile/reels'}>
<div>
Reels
</div>
</Link>
<Link to={'/profile/saved'}>
<div>
Saved
</div>
</Link>
<Link to={'/profile/tagged'}>
<div>
Tagged
</div>
</Link>

</div>
<Outlet/>

<div>


</div>


</div>
</div>
  </div>)}
    </div>

  )
}

export default PostsInsta
