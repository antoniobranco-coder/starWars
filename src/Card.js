import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import './Catalog.css'

const Card = () => {
    const [card, setCard] = useState({});
    const [filmsTitle, setFilmsTitle] = useState([])

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response)
                // console.log(response.json())
                return response.json()
            })
            .then(data => {
                console.log(data.films)
                setCard(data)
                let films = data.films
                let filmsTitleVariable = []
                films.map((film) => {
                    fetch(`${film}`)
                        .then(response => response.json())
                        .then(data => {
                            filmsTitleVariable.push(data.title)
                        }
                        )
                })
                console.log(filmsTitleVariable)
                setFilmsTitle(filmsTitleVariable)
            })
    }, filmsTitle)

    console.log(filmsTitle)
    console.log(card)
    return (
        <div className='mainCard'>
            <p className='name' data-cy='card-name'>{card.name}</p>
            <div className='charactersFeatures'>
                <p className='charactersData'>Height:{card.height} cm</p>
                <p className='charactersData'>Eye Color: {card.eye_color}</p>
                <p className='charactersData'>Hair Color: {card.hair_color}</p>
                <p className='charactersData'>Birth Date: {card.birth_year}</p>
            </div>
            <p className='titleMovies'>{card.name} performed in the following {filmsTitle !== [] && filmsTitle.length} {filmsTitle && filmsTitle.length === 1 ? 'film' : 'films'}</p>
            <ul className='moviesBox'>
                {
                    filmsTitle !== [] && filmsTitle.map((element) => <li>{element}</li>)
                }
            </ul>
            <Link data-cy='link-back-home' className='backHomeLink' to='/'>
                Back to Home
            </Link>
        </div>
    )
}

export default Card