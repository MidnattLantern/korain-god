import Styles from "./App.module.css";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import Symbol from "./pages/symbol/Symbol";
import BustPortrait from "./pages/bustPortrait/BustPortrait";
import NavBar from "./components/navBar/NavBar";

function App() {

  return (
    <div className={Styles.AppView}>

      <NavBar/>
      <main className={Styles.MainView}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/symbol" element={<Symbol/>} />
        <Route path="/portrait" element={<BustPortrait/>} />
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
