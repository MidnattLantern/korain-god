import { Link } from "react-router-dom";
import Styles from "./NavBar.module.css";
import { useRef } from "react";

const NavBar = () => {
    const linksRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (linksRef.current) {
            linksRef.current.scrollBy({ left: -50, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (linksRef.current) {
            linksRef.current.scrollBy({ left: 50, behavior: "smooth" });
        }
    };

    return (
        <nav className={Styles.NavBarView}>
            <button className={Styles.ScrollButton} onClick={() => {scrollLeft()}}>←</button>
            <div className={Styles.LinksView} ref={linksRef}>
                <hr className={Styles.HeaderRow}/>
                <Link className={Styles.NavLink} to="/">Home</Link>
                <hr className={Styles.HeaderRow}/>
                <Link className={Styles.NavLink} to="/symbol">Symbol</Link>
                <Link className={Styles.NavLink} to="/portrait">Portrait</Link>
                <Link className={Styles.NavLink} to="/shrine">Shrine</Link>
                <Link className={Styles.NavLink} to="/temple">Temple</Link>
                <hr className={Styles.HeaderRow}/>
            </div>
            <button className={Styles.ScrollButton} onClick={() => {scrollRight()}}>→</button>

        </nav>
    )
};

export default NavBar;