import React from 'react';
import { BounceLoader } from 'react-spinners';
import './Spinner.css'

const Loader = () => {
  return (
    <div className='w-full h-screen flex jusfity-center items-center'>
        <BounceLoader color='#09f' size={60} />
    </div>
  )
}

export default Loader;