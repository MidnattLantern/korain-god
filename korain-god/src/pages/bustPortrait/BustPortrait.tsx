import Styles from "./BustPortrait.module.css";
import SketchV1Large from "../../assets/portrait/downloadable/korain-bust-portrait-sketch-v1-large.png";

const BustPortrait = () => {
    return (
        <div className={Styles.BustPortraitView}>
            <h1>Bust Portrait</h1>
            <img className={Styles.ImageSize} src={SketchV1Large} alt={"Korain Bust Portrait V1 Large"}/>
            <a href={SketchV1Large} download={"Korain Bust Portrait V1 Large"}>Download as PNG 5,1 MB</a>
        </div>
    )
};

export default BustPortrait;