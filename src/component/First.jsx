import React from 'react'
import { Link } from 'react-router-dom'


const First = () => {

  return (
    <>
      <div className='flex items-center justify-center mx-auto max-w-screen-xl mt-20 my-auto'>
        <div>
          <img src="image/dices.png" alt="" />
        </div>
        <div>
          <div className='font-bold text-8xl mb-5'>DICE GAME</div>
          <div className='flex justify-end'>
            <Link to="/play">
              <button className='bg-black mx- text-white font-semibold px-15   py-1 border-2 rounded-md hover:bg-slate-700 transition-colors duration-300'>Play Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default First