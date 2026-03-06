import React, { useEffect, useState, useSyncExternalStore } from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] =useState([]);

  const [index, setIndex] =useState(1);

  const getdata= async ()=>{
    const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);

    setUserData(response.data);
    console.log(response.data);
    
  }

  useEffect(function(){
    getdata()
  },[index])

  let printuserdata= <h3 className='text-gray-300 font-semibold text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>;

  if(userData.length>0){
    printuserdata= userData.map(function(elem,idx){
      return (
        <div key={idx}>
          <a href={elem.url} target='_blank'>
            <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
              <img className='h-full w-full object-cover' src={elem.download_url} />
            </div>
            <h2 className='font-bold text-lg'>{elem.author}</h2>
          </a>
        </div>
      )
    })
  }

  return (
    <div className='bg-black text-white overflow-auto h-screen p-4'>
      <div className='flex flex-wrap h-[82%] gap-4'>
        {printuserdata}
      </div>

      <div className='flex justify-center items-center p-4 gap-6'>
        <button style={{opacity: index==1? 0.5: 1}} className='bg-amber-400 text-black px-3 py-2 text-sm cursor-pointer active:scale-95 font-semibold rounded' onClick={()=>{
          if(index>1){
            setUserData([])
            setIndex(index-1)
          }
          
        }} >Prev</button>

        <h4>Page {index}</h4>

        <button className='bg-amber-400 text-black px-3 py-2 text-sm cursor-pointer active:scale-95 font-semibold rounded' onClick={()=>{
          setUserData([])
          setIndex(index+1)
        }} >Next</button>
      </div>
    </div>
  )
}

export default App