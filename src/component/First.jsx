import React from 'react'
import { Link } from 'react-router-dom'

const First = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-center mx-auto max-w-screen-xl mt-10 px-4 md:px-8'>
        <div className='mb-8 md:mb-0 md:mr-10'>
          <img src="image/dices.png" alt="Dice" className='w-60 md:w-80 lg:w-96' />
        </div>
        <div className='text-center md:text-left'>
          <div className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-6'>DICE GAME</div>
          <div className='flex justify-center md:justify-end'>
            <Link to="/play">
              <button className='bg-black text-white font-semibold px-6 py-2 border-2 rounded-md hover:bg-slate-700 transition-colors duration-300'>
                Play Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default First
