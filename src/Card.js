import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'

const Card = () => {
    const [card, setCard] = useState({});

    const { id } = useParams();


    useEffect(() => {
        console.log(fetch(`https://swapi.dev/api/people/${id}`))
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                console.log(response)
                // console.log(response.json())
                return response.json()
            })
            .then(data => {
                console.log(data)
                return setCard(data)
            })
    }, [])

    // console.log(card)
    // console.log(id)
    // initial render --> render with the initial state
    // card --> []
    return (
        <div>
            <p>{card.name}</p>
            <p>Height:{card.height}</p>
            <p>Eye Color: {card.eye_color}</p>
            <p>Hair Color: {card.hair_color}</p>
            <p>Birth Date: {card.birth_year}</p>
            <p>{card.films && card.films.length} films</p>

            <ul>
                {
                    card.films && card.films.map((film) => {
                        return <li>{film}</li>
                    })
                }
            </ul>
            <Link to='/'>
                Back to Home
            </Link>
        </div>
    )
}

export default Card