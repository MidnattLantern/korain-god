import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <div className={"main-view"}>

      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>

        <h1>Korain God</h1>
      </div>
    </>
  )
}

export default App
