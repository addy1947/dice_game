import React, { useState } from 'react'

const Second = () => {
    const [total, setTotal] = useState(0)
    const [dice, setDice] = useState(0)
    const [warning, setWarning] = useState("")
    const [diceImage, setDiceImage] = useState('/image/dice1.svg')
    const [showRule, setShowRule] = useState('')
    const [isRolling, setIsRolling] = useState(false)
    const [animateDice, setAnimateDice] = useState(false)
    const [shakeDice, setShakeDice] = useState(false)

    const game = async () => {
        setWarning("")

        // Prevent rolling if already rolling
        if (isRolling) {
            return
        }

        if (dice === 0) {
            setWarning("Please select a number")
            // Add shake animation for warning
            setShakeDice(true)
            setTimeout(() => setShakeDice(false), 300)
            return
        }

        // Start rolling animation
        setIsRolling(true)
        setAnimateDice(true)

        let previousRand = 0
        let i = 0

        while (i < 9) {
            const rand = Math.floor(Math.random() * 6) + 1

            if (rand !== previousRand) {
                setDiceImage(`/image/dice${rand}.svg`)
                previousRand = rand
                i++
                await new Promise((res) => setTimeout(res, 200))
            }
        }

        const finalRand = Math.floor(Math.random() * 6) + 1
        setDiceImage(`/image/dice${finalRand}.svg`)

        // Stop rolling animation after a brief delay
        setTimeout(() => {
            setIsRolling(false)
            setAnimateDice(false)
        }, 500)

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
                            <button onClick={() => setDice(1)} className={`border-2 border-black dark:border-white py-2 px-4 font-semibold transition-all duration-200 hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700 ${dice === 1 ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>1</button>
                            <button onClick={() => setDice(2)} className={`border-2 border-black dark:border-white py-2 px-4 font-semibold transition-all duration-200 hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700 ${dice === 2 ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>2</button>
                            <button onClick={() => setDice(3)} className={`border-2 border-black dark:border-white py-2 px-4 font-semibold transition-all duration-200 hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700 ${dice === 3 ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>3</button>
                            <button onClick={() => setDice(4)} className={`border-2 border-black dark:border-white py-2 px-4 font-semibold transition-all duration-200 hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700 ${dice === 4 ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>4</button>
                            <button onClick={() => setDice(5)} className={`border-2 border-black dark:border-white py-2 px-4 font-semibold transition-all duration-200 hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700 ${dice === 5 ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>5</button>
                            <button onClick={() => setDice(6)} className={`border-2 border-black dark:border-white py-2 px-4 font-semibold transition-all duration-200 hover:scale-110 hover:bg-gray-200 dark:hover:bg-gray-700 ${dice === 6 ? 'bg-black text-white dark:bg-white dark:text-black' : ''}`}>6</button>
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
                                className={`w-48 md:w-72 cursor-pointer dice-image ${isRolling ? 'dice-rolling' : ''
                                    } ${animateDice ? 'dice-bounce' : ''
                                    } ${shakeDice ? 'dice-shake' : ''
                                    }`}
                                style={{
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    transform: isRolling ? 'scale(1.1)' : 'scale(1)',
                                    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                                }}
                            />
                        </div>


                        <div className='font-semibold text-lg mt-2 text-center'>
                            Click on dice to roll
                        </div>
                    </div>

                    <div>
                        <button onClick={() => setTotal(0)} className='border-2 border-black dark:border-white rounded bg-white text-black px-6 py-1 mt-4 hover:bg-gray-100 dark:hover:bg-gray-200 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md'>
                            Reset Score
                        </button>
                    </div>

                    <div>
                        <button onClick={rule} className='border-2 border-black dark:border-white rounded bg-black text-white dark:bg-white dark:text-black px-6 py-1 mt-4 mb-4 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md'>
                            Show Rule
                        </button>
                    </div>

                    <div className='text-center bg-gray-300 dark:bg-gray-700 p-3 rounded max-w-md'>
                        {showRule}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second
