import React,{useState} from 'react'

const Input = () => {
    const [input,setInput]=useState([])
const ChangeInput=(e)=>{
  if(e.key==="Enter"){
    const arr = e?.target?.value;
    setInput([...input,arr])
    console.log(arr)}
}
  return (
    <>
        <div className='bg-black p-10'>
      <input className='' type="text"  onKeyDown={ ChangeInput} />
      <div>
      </div>
    </div>
    <div>

        {input?.map((v)=> (
          <div>

            {v}
          </div>
          ))}
    </div>
    </>

  )
}

export default Input
