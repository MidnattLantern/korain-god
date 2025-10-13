import Styles from "./Projects.module.css";
import ProjectDetail from "../../components/projectDetail/ProjectDetail";
import Large from "../../assets/temple-exterior/downloadable/korain-temple-exterior-large.png";
import Small from "../../assets/temple-exterior/downloadable/korain-temple-exterior-small.jpg";
import LargeAlt1 from "../../assets/temple-exterior/downloadable/korain-temple-exterior-alt1-large.png";
import SmallAlt1 from "../../assets/temple-exterior/downloadable/korain-temple-exterior-alt1-small.jpg";
//import TempleExteriorWeblog from "../../weblogContent/TempleExteriorWeblog";

const Temple = () => {
    return (
        <div className={Styles.ProjectView}>
            <ProjectDetail title="Temple Exterior" titleAlt1="No filter"
            smallAsset={Small} largeAsset={Large} smallFileInfo="JPG 315 KB" largeFileInfo="PNG 10 MB"
            smallAssetAlt1={SmallAlt1} largeAssetAlt1={LargeAlt1} smallFileInfoAlt1="JPG 300 KB" largeFileInfoAlt1="PNG 12 MB"
            />

        </div>
    )
};

export default Temple;