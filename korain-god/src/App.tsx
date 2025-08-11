import Styles from "./App.module.css";
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home";
import Symbol from "./pages/projects/Symbol";
import BustPortrait from "./pages/projects/BustPortrait";
import NavBar from "./components/navBar/NavBar";
import Shrine from "./pages/projects/Shrine";
import Temple from "./pages/projects/Temple";

function App() {

  return (
    <div className={Styles.AppView}>

      <NavBar/>
      <main className={Styles.MainView}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/symbol" element={<Symbol/>} />
        <Route path="/portrait" element={<BustPortrait/>} />
        <Route path="/shrine" element={<Shrine/>} />
        <Route path="/temple" element={<Temple/>} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
