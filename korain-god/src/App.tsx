import Styles from "./App.module.css";
import { Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/home/Home";

function App() {

  return (
    <div className={Styles.AppView}>
      <nav className={Styles.NavBar}>
        <Link className={Styles.NavLink} to="/">Home</Link>
        <Link className={Styles.NavLink} to="/symbol">Symbol</Link>
        <Link className={Styles.NavLink} to="/portrait">Portrait</Link>
        <Link className={Styles.NavLink} to="/shrine">Shrine</Link>
        <Link className={Styles.NavLink} to="/temple">Temple</Link>
      </nav>
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/symbol" element={<h1>Symbol</h1>} />
        <Route path="/portrait" element={<h1>Portrait</h1>} />
        <Route path="/shrine" element={<h1>Shrine</h1>} />
        <Route path="/temple" element={<h1>Temple</h1>} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
