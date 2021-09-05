import React, { useState, useEffect } from 'react'
import Card from './Card'

const PlayScreen = () => {

    const [openedCard, setOpenedCard] = useState([])
    const [isMatched, setIsMatched] = useState([])
    const [turns, setTurns] = useState(0)

    const cardLetter = [
        { id: 1, letter: 'A' },
        { id: 2, letter: 'B' },
        { id: 3, letter: 'C' },
        { id: 4, letter: 'D' },
        { id: 5, letter: 'E' },
        { id: 6, letter: 'F' },
        { id: 7, letter: 'G' },
        { id: 8, letter: 'H' },
    ]

    const [pairOfLetters, setPairOfLetters] = useState(() => shuffle(cardLetter))


    function shuffle(cardLetter) {
        const pair = [...cardLetter, ...cardLetter]
        for (let i = pair.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));

            [pair[i], pair[j]] = [pair[j], pair[i]]
        }
        return pair
    }

    const flipCard = (index) => {
        if(!(openedCard.includes(index))){
            setOpenedCard(opened => [...opened, index])
        }
    }

    useEffect(() => {

        const firstCard = pairOfLetters[openedCard[0]];
        const secondCard = pairOfLetters[openedCard[1]];
        
            if (secondCard && firstCard.id === secondCard.id) {
                setIsMatched([...isMatched, firstCard.id]);
            }
    
            if (openedCard.length === 2) {
                setTimeout(() => setTurns(prev => prev + 1), 300)
                setTimeout(() => setOpenedCard([]), 1000)
            };
        
    }, [openedCard])

    return (
        <div className="app">
            <p className="turns">Turns: {turns}</p>
            <div className="cards">
                {pairOfLetters.map((card, index) => {
                    let flippedCard;
                    flippedCard = false;

                    if(openedCard.length < 3){
                        if (openedCard.includes(index)) flippedCard = true;
                        if (isMatched.includes(card.id)) flippedCard = true;
                    }
                    return (
                        <div
                            key={index}
                            onClick={() => flipCard(index)}>
                            
                            <Card letter={card.letter} flippedCard={flippedCard} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PlayScreen
