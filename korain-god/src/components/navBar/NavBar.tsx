import { Link } from "react-router-dom";
import Styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={Styles.NavBarView}>



            <div className={Styles.LinksView}>
                <Link className={Styles.NavLink} to="/">Home</Link>
                <p>|</p>
                <Link className={Styles.NavLink} to="/symbol">Symbol</Link>
                <Link className={Styles.NavLink} to="/portrait">Portrait</Link>
                <Link className={Styles.NavLink} to="/shrine">Shrine</Link>
                <Link className={Styles.NavLink} to="/temple">Temple</Link>
                <p>|</p>
            </div>

        </nav>
    )
};

export default NavBar;