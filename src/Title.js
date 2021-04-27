import { useEffect, useState } from 'react'
import './Catalog.css'

const Title = (props) => {
    const [titleText, setTitleText] = useState("")

    console.log(props.filmLink)

    useEffect(() => {
        // let titlesArr = []

        fetch(`${props.filmLink}`)
            .then(response => response.json())
            .then(data => {
                setTitleText(data.title) // re-render
            })

    }, [])



    return (
        <div className='mainCard'>  
            <ul className='movieBox'>
                <li>{titleText}</li>
            </ul>

        </div>
    )
}
export default Title