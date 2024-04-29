import React from 'react'
import Suggestion from './Suggestion';
import SuggestImg from '../../Images/girl4.jpg';
import Img2 from '../../Images/man3.webp';
import img3 from '../../Images/mn.avif';
import img4 from '../../Images/cute.avif'

const RightGram = () => {
  return (
    <div className=''>
        <div className='right-gram ml-40 mt-10'>
    <div  className='flex justify-between'>
      <div className='text-slate-400 font-bold text-[14px]'>
        Suggested for you
      </div>
      <div className='font-bold text-[14px]'>
        See All
      </div>
    </div>
    </div>
      <Suggestion Image={SuggestImg} Name={'nasa'} Recomnede={'Instagram recommended'} Follow={'Follow'}/>
      <Suggestion Image={Img2} Name={'roberto_calavli'} Recomnede={'Instagram recommended'} Follow={'Follow'}/>
      <Suggestion Image={img3} Name={'nba'} Recomnede={'Instagram recommended'} Follow={'Follow'}/>
      <Suggestion Image={img4} Name={'j.xofficial'} Recomnede={'Instagram recommended'} Follow={'Follow'}/>
    </div>
  )
}

export default RightGram;
