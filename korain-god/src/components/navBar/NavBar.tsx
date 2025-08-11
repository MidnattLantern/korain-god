import { Link } from "react-router-dom";
import Styles from "./NavBar.module.css";
import { useRef } from "react";
import { useWindowSize } from "../../hooks/useWInidowSize";

const NavBar = () => {
    const linksRef = useRef<HTMLDivElement>(null);
    const { width } = useWindowSize();

    const scrollLeft = () => {
        if (linksRef.current) {
            linksRef.current.scrollBy({ left: -80, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (linksRef.current) {
            linksRef.current.scrollBy({ left: 80, behavior: "smooth" });
        }
    };

    return (
        <nav className={Styles.NavBarView}>

            {width < 1024 && <button className={Styles.ScrollButton} onClick={() => {scrollLeft()}}>←</button> }
            <div className={Styles.LinksView} ref={linksRef}>
                <hr className={Styles.HeaderRow}/>
                <Link className={Styles.NavLink} to="/"><strong>Home</strong></Link>
                <hr className={Styles.HeaderRow}/>
                <Link className={Styles.NavLink} to="/symbol">Symbol</Link>
                <Link className={Styles.NavLink} to="/portrait">Portrait</Link>
                <Link className={Styles.NavLink} to="/shrine">Shrine</Link>
                <Link className={Styles.NavLink} to="/temple">Temple</Link>
                <hr className={Styles.HeaderRow}/>
                <a className={Styles.NavLink} href="https://www.worldanvil.com/w/idoria-yviira" target="_blank">Project Idoria</a>
                <a className={Styles.NavLink} href="https://github.com/MidnattLantern" target="_blank">Developer's GitHub</a>
                <a className={Styles.NavLink} href="https://www.artstation.com/midnight_lantern" target="_blank">Illustrator's ArtStation</a>
                <a className={Styles.NavLink} href="https://github.com/MidnattLantern/korain-god" target="_blank">Source Code</a>
                <hr className={Styles.HeaderRow}/>
            </div>
            {width < 1024 && <button className={Styles.ScrollButton} onClick={() => {scrollRight()}}>→</button>}

        </nav>
    )
};

export default NavBar;