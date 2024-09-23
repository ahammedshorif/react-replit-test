import './App.css'
import { BrowserRouter,Router,Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Header from './components/Header.jsx'
function App() {
  return (
    <>

      <BrowserRouter>
         <Nav />
        <Header />
      </BrowserRouter>

    </>
  )
}

export default App

