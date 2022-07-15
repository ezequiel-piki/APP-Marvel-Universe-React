import React from 'react'

const Heroe = ({heroe}:any) => {
  const {name,description,modified,thumbnail}=heroe;

    return (
    <div
    className='col-md-4 mb-2'
    >
        <div
        className='card'
        >
            <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`imagen-${name}`} className='card-img-top' />
            <div className='card-body'>
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Heroe