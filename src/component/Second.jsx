import React, { useState } from 'react'

const Second = () => {
    const [total, setTotal] = useState(0)

    const [dice, setDice] = useState(0)
    const [warning, setWarning] = useState("")

    const [diceImage, setDiceImage] = useState('/image/dice1.png')

    const game = async () => {
        setWarning("");

        if (dice === 0) {
            setWarning("Please select a number");
            return;
        }

        // Dice rolling animation loop
        let previousRand = 0;
        let i = 0;

        while (i < 9) {
            const rand = Math.floor(Math.random() * 6) + 1;

            if (rand !== previousRand) {
                setDiceImage(`/image/dice${rand}.png`);
                previousRand = rand;
                i++;
                await new Promise((res) => setTimeout(res, 300));
            }
        }


        // Final roll
        const finalRand = Math.floor(Math.random() * 6) + 1;
        setDiceImage(`/image/dice${finalRand}.png`);


        if (finalRand === dice) {
            setTotal(total + dice * 4);
        } else {
            setTotal(total - dice);
        }
    };

    const [showRule, setShowRule] = useState('')


    const rule = () => {
        if (showRule) {
            setShowRule('');
        } else {
            setShowRule("Suppose you select a random number from 1 to 6. After that you roll the dice, if the number on the dice is equal to the selected number then it will add 4 times of the selected number in your total score. Else it will deduct the selected number from your total score.");

        };

    }



    return (
        <>
            <div className=' max-w-screen-xl mx-auto mt-8'>
                <div className='flex items-center justify-between'>

                    <div>
                        <div className='text-8xl font-semibold'>{total}</div>
                        <div className='text-2xl font-semibold'>Total Score</div>
                    </div>


                    <div>
                        <div>
                            <button onClick={() => setDice(1)} className={`border-2 py-3 px-5 font-semibold mr-3 ${dice === 1 ? 'bg-black text-white' : ''}`}>1</button>
                            <button onClick={() => setDice(2)} className={`border-2 py-3 px-5 font-semibold mr-3 ${dice === 2 ? 'bg-black text-white' : ''}`}>2</button>
                            <button onClick={() => setDice(3)} className={`border-2 py-3 px-5 font-semibold mr-3 ${dice === 3 ? 'bg-black text-white' : ''}`}>3</button>
                            <button onClick={() => setDice(4)} className={`border-2 py-3 px-5 font-semibold mr-3 ${dice === 4 ? 'bg-black text-white' : ''}`}>4</button>
                            <button onClick={() => setDice(5)} className={`border-2 py-3 px-5 font-semibold mr-3 ${dice === 5 ? 'bg-black text-white' : ''}`}>5</button>
                            <button onClick={() => setDice(6)} className={`border-2 py-3 px-5 font-semibold mr-3 ${dice === 6 ? 'bg-black text-white' : ''}`}>6</button>
                        </div>

                        <div className='text-xl font-semibold flex justify-end items-end'>
                            Select Number: {dice ?? '0'}

                            {warning && <p className="text-red-500">{warning}</p>}


                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img src={diceImage} alt="Play" onClick={game} style={{ cursor: 'pointer' }} />


                        <div className='font-semibold text-xl pt-2 items-center justify-center flex '>
                            Click on dice to roll
                        </div>
                    </div>
                    <div>
                        <button onClick={() => setTotal(0)} className='border-2 border-black rounded-xs bg-white text-black px-7 mt-4'>
                            Reset Score
                        </button>
                    </div>
                    <div>
                        <button onClick={rule} className='border-2 border-black rounded-xs bg-black text-white px-8 mt-4 mb-4'>
                            Show Rule

                        </button>

                    </div>
                    <div className='text-center bg-gray-400 '>
                        {showRule}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Second
