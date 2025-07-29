import Styles from "./Symbol.module.css";
import Large from "../../assets/symbol/downloadable/korain-symbol-large.png";
import Small from "../../assets/symbol/downloadable/korain-symbol-small.jpg";

const Symbol = () => {
    return(
        <div className={Styles.SymbolView}>
            <h1>Korain Symbol</h1>
            <img className={Styles.ImageSize} src={Small} alt={"Korain Symbol Small"}/>
            <a href={Small} download={"Korain Icon Small"}>Download as JPG 123 KB</a>
            <a href={Large} download={"Korain Icon Large"}>Download as PNG 7,5 MB</a>
        </div>
    )
};

export default Symbol;