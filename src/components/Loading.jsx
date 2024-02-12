import React from 'react'
import ReactLoading from 'react-loading';


const Loading = () => {
  return (
    <div className='flex items-center justify-center'>
        <ReactLoading type='bars' color="rgba(255,95,0,1)" height={250} width={150} />

  </div>
  )
}

export default Loading