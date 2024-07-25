import './style.scss'
import { CONTEXT } from '../../db'
import { useContext, useEffect, useState } from 'react'
import Heading from '../common/Heading'
import SpinnerDiamond from '../common/SpinnerDiamond'
import { toast } from 'react-toastify';
import Test from './Test'

// useEffect =>  is a hook that is for controlling The Lifecycle of a component
// RU: useEffect => это хук, который предназначен для управления жизненным циклом компонента

// ex:  when the component starts, ends, working etc...
// например:  когда компонент начинает работать, заканчивает, работает и т. д.

// SYNTAX:  useEffect(callback, dependencies)

function JokeContent({ joke }) {
    return (
        <>
            <h2>{joke.setup}</h2>
            <h3>{joke.punchline}</h3>
        </>
    )
}


function Products(props) {
    const state = useContext(CONTEXT)
    const [joke, setJoke] = useState({})
    const [loaded, setLoaded] = useState(true)

    function uploadJoke(e) {
        // Use fetch to upload a new joke from url
        setLoaded(false)
        const url = "https://official-joke-api.appspot.com/random_joke"

        try {
            // send a request to the URL 
            fetch(url).then(response => response.json()).then(data => setJoke(data))
        } catch (error) {
            console.error(error)
        }
        setTimeout(() => {
            setLoaded(true)
        }, 1500)
    }

    function saveJoke(e) {
        state.dispatch({
            type: "setJoke",
            key: joke.setup,
            payload: joke.punchline
        })
        toast.success(`Successfully saved the joke!`, { theme: "dark" })
    }


    useEffect(() => {
        uploadJoke()
    }, [])


    return (
        <div id="products-wrapper">

            <Heading size={1.5}>Random Joke</Heading>

            <div className="container">
                <div className="action-buttons">
                    <button className="warning-btn" onClick={uploadJoke}>Get new joke</button>
                    <button className="warning-btn" onClick={saveJoke}>Save joke</button>
                </div>
                <div className="joke-content">
                    {
                        loaded
                            ? <JokeContent joke={joke} />
                            : <SpinnerDiamond />
                    }
                </div>
            </div>


            <hr />
            <hr />
            <br />
            <br />

            <Test />
        </div>
    );
}

export default Products;
