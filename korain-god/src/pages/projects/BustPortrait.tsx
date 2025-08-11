import Styles from "./Projects.module.css";
import Large from "../../assets/portrait/downloadable/korain-bust-portrait-sketch-v1-large.png";
import Small from "../../assets/portrait/downloadable/korain-bust-portrait-sketch-v1-large.png";
import ProjectDetail from "../../components/projectDetail/ProjectDetail";

const BustPortrait = () => {
    return (
        <div className={Styles.ProjectView}>
            <h1>This is a placeholder page</h1>
            <ProjectDetail title="Portrait" titleAlt1="Placeholder 1" titleAlt2="Placeholder 2"
            smallAsset={Small} largeAsset={Large} smallFileInfo="JPG 123 KB" largeFileInfo="PNG 7,5 MB"
            />
        </div>
    )
};

export default BustPortrait;