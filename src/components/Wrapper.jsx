import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='max-w-[80vw] mx-auto'>
      {children}
    </div>
  )
}

export default Wrapper
