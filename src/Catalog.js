import React from 'react'
import { Link } from 'react-router-dom'
import './Catalog.css'

class Catalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            charactersInfo: [],
            totalPages: 0,
            currentPage: 1
        }
    }

    componentDidMount = () => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => {
                this.setState({ charactersInfo: data.results })
                let totalPages = Math.ceil(data.count / 10)
                this.setState({ totalPages: totalPages })
            })
    }


    handleNext = () => {
        // event.PreventDefault()
        let nextPage
        if (this.state.currentPage + 1 <= this.state.totalPages) {
            nextPage = this.state.currentPage + 1
            this.setState({ currentPage: nextPage })
        }
        fetch(`http://swapi.dev/api/people/?page=${nextPage}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ charactersInfo: data.results })
            })
    }

    render() {
        return (
            <div className='charactersArea'>
                {/* <Card
                    // charactersInfo={this.state.charactersInfo}
                /> */}
                <h3 className='title'>The Star Wars Characters Catalog</h3>
                <div className='listOfMovies' >
                    {
                        this.state.charactersInfo.map((character) => {
                            let id
                            if (character.url.length === 30) {
                                id = character.url.slice(-2, -1)
                            } else if (character.url.length === 31) {
                                id = character.url.slice(-3, -1)
                            } else if (character.url.length === 32) {
                                id = character.url.slice(-4, -1)
                            }
                            return (
                                <div className='charactersList'>
                                    <Link className='characters' to={`/card/${id}`}>
                                        {character.name}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <button className='buttonLoadMore' type='button' disabled={this.state.currentPage === this.state.totalPages} onClick={() => this.handleNext()}>
                    Load More
                </button>


            </div>
        )
    }
}

export default Catalog