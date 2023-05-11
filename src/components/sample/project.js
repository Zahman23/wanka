import React from 'react'

const project = ({item}) => {
  return (
    <div 
    key={item.id}
    className='flex flex-col items-center text-center'
    >
      <img 
      className='rounded-2xl bg-center h-[20rem] w-[20rem]'
      src={item.image}
      alt=''
      />
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
    </div>
  )
}

export default project