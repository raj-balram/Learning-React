import React from 'react'
import Card from './Card.jsx'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-4 w-2/3 gap-5 overflow-x-auto flex flex-nowrap'>
      {props.users.map(function(elem,idx){
        return <Card key={idx} id={idx+1} img={elem.img} tag={elem.tag} intro={elem.intro} color={elem.color} />
      })}
    </div>
  )
}

export default RightContent
