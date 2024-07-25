import { BrowserRouter } from 'react-router-dom'
import AllComponents from "./components/AllComponents"
import 'react-toastify/dist/ReactToastify.css'
import { CONTEXT, globalMemory, globalReducer } from './db'
import { ToastContainer } from 'react-toastify'
import { useReducer } from 'react'


// router   =>  путь к странице
function App() {
  const [state, dispatch] = useReducer(globalReducer, globalMemory)
  state.dispatch = dispatch

  return (
    <CONTEXT.Provider value={state}>
      <ToastContainer />

      <BrowserRouter>
        <AllComponents />
      </BrowserRouter>
    </CONTEXT.Provider>
  )
}
export default App

