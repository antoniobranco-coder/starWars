import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'
import Title from './Title'
import './Catalog.css'

const Card = () => {
    const [card, setCard] = useState({});

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response)
                // console.log(response.json())
                return response.json()
            })
            .then(data => {
                console.log(data)
                setCard(data)
            })
    }, card)

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
            {/* <p className='titleMovies'>{card.name} performed in the following {filmsTitle !== [] && filmsTitle.length} {filmsTitle && filmsTitle.length === 1 ? 'film' : 'films'}</p> */}

            <p className='titleMovies'>{card.name} performed in the following {card.films && card.films.length} {card.films && card.films.length > 1 ? 'movies' : 'movie'}</p>

            {
                card.films && card.films.length > 0 && card.films.map((film) => {
                    return (
                        <Title
                            filmLink={film}
                        />
                    )
                })
            }

            <Link data-cy='link-back-home' className='backHomeLink' to='/'>
                Back to Home
            </Link>
        </div>
    )
}

export default Card