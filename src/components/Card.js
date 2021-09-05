import React from 'react'

const Card = (props) => {
    const { letter, flippedCard } = props
    return (
        <div className={`flip-card ${flippedCard && 'flipped'}`}>
        <div className={`flip-card-inner`}>
            <div className="flip-card-front">
            </div>
            <div className="flip-card-back">
                <p>{letter}</p>
            </div>
        </div>
    </div>
    )
}

export default Card
