import { createContext } from 'react'
import { globalReducer } from './helpers.js'
const CONTEXT = createContext()


const globalMemory = {
    geolocation: {
        lat: 0,  // широта
        lon: 0   // долгота
    },
    favoriteJokes: {},
    currentLanguage: "en",
    
    
    
    counter: 0,
    test: "Hello Farzod!",
    // test2: "Hello Farzona!",
    // test3: "Hello Ramiz!",
}



export { CONTEXT, globalMemory, globalReducer }
