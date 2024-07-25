import { memo } from 'react'
import { CONTEXT } from '../../db'
import { useContext } from 'react'

function Test(props) {
    const state = useContext(CONTEXT)


    console.log("Компонент Test запущен")
    return (
        <>
            <h1>Test</h1>

            {
                Object.keys(state.favoriteJokes).map((key, index) => {
                    return (
                        <ul key={index}>
                            <li>{key}</li>
                            <li>{state.favoriteJokes[key]}</li>
                            <li>
                                <hr />
                            </li>
                        </ul>
                    )
                })
            }
        </>
    )
}

export default memo(Test);