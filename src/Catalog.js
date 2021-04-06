import React from 'react'
import { Link } from 'react-router-dom'

class Catalog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            charactersInfo: []
        }
    }

    componentDidMount = () => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => {
                this.setState({ charactersInfo: data.results })
            })
    }

    render() {
        return (
            <div>
                {/* <Card
                    // charactersInfo={this.state.charactersInfo}
                /> */}
                <h3>Stars Catalog</h3>
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
                            <div>
                                <Link to={`/card/${id}`}>
                                    {character.name}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Catalog