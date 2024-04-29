import React from 'react'
import { AllSaved } from '../../../Icons'

const Tagged = () => {
    const year = new Date().getFullYear()
    console.log('yeAR',year)
  return (
    <div className='text-center mt-20'>
        <div className='text-gray-300 border w-[80px] h-[80px] py-5 rounded-[50%] pl-4 ml-[310px]'>
            <AllSaved/>
        </div>
        <div className='font-black text-[30px] pt-2'>
        Photos of you
        </div>
        <div className='pt-2'>
        When people tag you in photos, they'll appear here.
        </div>
        <div className='mt-28 text-[13px] text-gray-300'>
        © { year} Instagram from Meta
        </div>
    </div>
  )
}

export default Tagged
