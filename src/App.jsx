import './App.css'
import { BrowserRouter,Router,Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
function App() {
  return (
    <>

      <BrowserRouter>
         <Nav />
      </BrowserRouter>

    </>
  )
}

export default App

