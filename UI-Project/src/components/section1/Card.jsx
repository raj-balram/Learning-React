import React from 'react'

const card = (props) => {
  return (
    <div className='h-full w-60 shrink-0 rounded-4xl overflow-hidden relative'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-bold rounded-full h-10 w-10 flex justify-center items-center '>{props.id}</h2>
        <div>
            <p className='text-shadow-2xs leading-normal text-white mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat inventore corporis magni, numquam id ipsam.</p>
        </div>
        <div className='flex justify-between'>
            <button style={{backgroundColor:props.color}} className='text-white font-small px-8 py-2 rounded-full'>{props.tag}</button>
            <button style={{backgroundColor:props.color}} className='text-white font-small px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
        </div>
      </div>
    </div>
  )
}

export default card
