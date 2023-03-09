import React from 'react'
import './style.scss'

const Card = ({name, color, animal, hobbie}) => {
    return (
    <div className='card'>
        <h2 className='card__name'>Hola, {name}</h2>
        <span className='card__info'> El color {color} es muy lindo</span>
        <span className='card__info'>Tambien me entantan los/ el {animal}</span>
        <span className='card__info'>El/ La {hobbie} es fantastico</span>
    </div>
    )
}

export default Card