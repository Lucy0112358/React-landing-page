import React from 'react'
import "../styles/card.scss";
import rec from "../assets/Rectangle.png";
import oval from "../assets/Oval.png";


function Card() {
    return (
        <div className='card-item'>
            <img src={rec} alt="main-picture" />
            <p className='red-title'>
            Lifestyle
            </p>
            <p className='big-header'>
            Eat Right For Your Exercise Regime
            </p>
            <div className='small-flex'>
                <span className='author'>Niek Bove</span>
                <img className='oval' src={oval} srcSet={`${oval} 300w`}/>
                <span className='date'>April 8, 2018</span>
                <img className='oval' src={oval} srcSet={`${oval} 300w`}/>
                <span className='date'>3K Views</span>
            </div>
            <p className='main-paragraph'>
            Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…
            </p>
        </div>
    )
}

export default Card
