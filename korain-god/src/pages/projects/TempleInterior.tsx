import Styles from "./Projects.module.css";
import { useWindowSize } from "../../hooks/useWInidowSize";
import ProjectDetail from "../../components/projectDetail/ProjectDetail";
import Large from "../../assets/temple-interior/downloadable/korain-temple-interior-large.png";
import Small from "../../assets/temple-interior/downloadable/korain-temple-interior-small.jpg";
import TempleInteriorWeblog from "../../weblogContent/TempleInteriorWeblog";

const TempleInterior = () => {
    const { width } = useWindowSize();
    return (
        <div className={Styles.ProjectView}>
            <ProjectDetail title="Temple Interior"
            smallAsset={Small} largeAsset={Large} smallFileInfo="JPG 268 KB" largeFileInfo="PNG 12 MB"
            />
            { width > 1024 && <img src={Small} alt="Full image for Temple Interior" className={Styles.FullImageSize}/>}
            <TempleInteriorWeblog/>
            <ProjectDetail title="Temple Interior"
            smallAsset={Small} largeAsset={Large} smallFileInfo="JPG 268 KB" largeFileInfo="PNG 12 MB"
            />
        </div>
    )
};

export default TempleInterior;