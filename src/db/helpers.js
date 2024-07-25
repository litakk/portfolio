function globalReducer(state, action) {
    // state = {}
    // action = {type: 'SET', payload: "..."}

    switch (action.type) {
        case "CHANGE_LANG":
            return { ...state, currentLanguage: action.currentLanguage }
        case "setJoke":
            return { ...state, favoriteJokes: { ...state.favoriteJokes, [action.key]: action.payload } }
        case "setFarzod":
            return { ...state, test: action.payload }
        case "setFarzona":
            return { ...state, test: action.payload }
        case "inc":
            return { ...state, counter: state.counter + 1 }
        case "dec":
            return { ...state, counter: state.counter - 1 }
    }
}


export { globalReducer }

