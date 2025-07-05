import React, { useState } from 'react'

const Second = () => {
    const [total, setTotal] = useState(0)
    const [dice, setDice] = useState(0)
    const [warning, setWarning] = useState("")
    const [diceImage, setDiceImage] = useState('/image/dice1.png')
    const [showRule, setShowRule] = useState('')

    const game = async () => {
        setWarning("")

        if (dice === 0) {
            setWarning("Please select a number")
            return
        }

        let previousRand = 0
        let i = 0

        while (i < 9) {
            const rand = Math.floor(Math.random() * 6) + 1

            if (rand !== previousRand) {
                setDiceImage(`/image/dice${rand}.png`)
                previousRand = rand
                i++
                await new Promise((res) => setTimeout(res, 300))
            }
        }

        const finalRand = Math.floor(Math.random() * 6) + 1
        setDiceImage(`/image/dice${finalRand}.png`)

        if (finalRand === dice) {
            setTotal(total + dice * 4)
        } else {
            setTotal(total - dice)
        }
    }

    const rule = () => {
        if (showRule) {
            setShowRule('')
        } else {
            setShowRule("Suppose you select a random number from 1 to 6. After that you roll the dice, if the number on the dice is equal to the selected number then it will add 4 times of the selected number in your total score. Else it will deduct the selected number from your total score.")
        }
    }

    return (
        <>
            <div className='max-w-screen-xl mx-auto mt-8 px-4'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-6'>

                    <div className='text-center md:text-left'>
                        <div className='text-6xl md:text-8xl font-semibold'>{total}</div>
                        <div className='text-xl md:text-2xl font-semibold'>Total Score</div>
                    </div>

                    <div className='text-center'>
                        <div className='flex flex-wrap justify-center gap-2'>
                            <button onClick={() => setDice(1)} className={`border-2 py-2 px-4 font-semibold ${dice === 1 ? 'bg-black text-white' : ''}`}>1</button>
                            <button onClick={() => setDice(2)} className={`border-2 py-2 px-4 font-semibold ${dice === 2 ? 'bg-black text-white' : ''}`}>2</button>
                            <button onClick={() => setDice(3)} className={`border-2 py-2 px-4 font-semibold ${dice === 3 ? 'bg-black text-white' : ''}`}>3</button>
                            <button onClick={() => setDice(4)} className={`border-2 py-2 px-4 font-semibold ${dice === 4 ? 'bg-black text-white' : ''}`}>4</button>
                            <button onClick={() => setDice(5)} className={`border-2 py-2 px-4 font-semibold ${dice === 5 ? 'bg-black text-white' : ''}`}>5</button>
                            <button onClick={() => setDice(6)} className={`border-2 py-2 px-4 font-semibold ${dice === 6 ? 'bg-black text-white' : ''}`}>6</button>
                        </div>

                        <div className='text-base md:text-xl font-semibold mt-2'>
                            Select Number: {dice ?? '0'}
                            {warning && <p className="text-red-500">{warning}</p>}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center mt-10'>
                    <div>
                        <div className="w-full flex justify-center">
                            <img
                                src={diceImage}
                                alt="Play"
                                onClick={game}
                                className='w-48 md:w-72 cursor-pointer'
                            />
                        </div>


                        <div className='font-semibold text-lg mt-2 text-center'>
                            Click on dice to roll
                        </div>
                    </div>

                    <div>
                        <button onClick={() => setTotal(0)} className='border-2 border-black rounded bg-white text-black px-6 py-1 mt-4'>
                            Reset Score
                        </button>
                    </div>

                    <div>
                        <button onClick={rule} className='border-2 border-black rounded bg-black text-white px-6 py-1 mt-4 mb-4'>
                            Show Rule
                        </button>
                    </div>

                    <div className='text-center bg-gray-300 p-3 rounded max-w-md'>
                        {showRule}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second
