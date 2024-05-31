import React, { useRef } from 'react'

const Form = ({fetchWeather}) => {

  const searchKey=useRef('')
  return (
    <div className='w-100 d-flex justify-content-center mt-3'>
        <input type='text' ref={searchKey} className='form-control mx-5'
         placeholder='Enter country'/>
         <input type='button' onClick={()=>fetchWeather(searchKey.current.value)} value='Search'
          className=' btn btn-dark ms-2 me-5'/>
    </div>
  )
}

export default Form