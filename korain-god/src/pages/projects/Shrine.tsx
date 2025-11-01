import Styles from "./Projects.module.css";
import ProjectDetail from "../../components/projectDetail/ProjectDetail";
import Large from "../../assets/shrine/korain-shrine-large.png"
import Small from "../../assets/shrine/korain-shrine-small.png";
import LargeAlt1 from "../../assets/shrine/korain-shrine-empty-large.png";
import SmallAlt1 from "../../assets/shrine/korain-shrine-empty-small.png";
import ShrineWeblog from "../../weblogContent/ShrineWeblog";

const Shrine = () => {
    return (
        <div className={Styles.ProjectView}>
            <ProjectDetail title="Shrine" titleAlt1="Empty"
            smallAsset={Small} largeAsset={Large} smallFileInfo="PNG 325 KB" largeFileInfo="PNG 3,2 MB"
            smallAssetAlt1={SmallAlt1} largeAssetAlt1={LargeAlt1} smallFileInfoAlt1="PNG 319 KB" largeFileInfoAlt1="PNG 3,1 MB"
            />

            <ShrineWeblog />

            <ProjectDetail title="Shrine" titleAlt1="Empty"
            smallAsset={Small} largeAsset={Large} smallFileInfo="PNG 325 KB" largeFileInfo="PNG 3,2 MB"
            smallAssetAlt1={SmallAlt1} largeAssetAlt1={LargeAlt1} smallFileInfoAlt1="PNG 319 KB" largeFileInfoAlt1="PNG 3,1 MB"
            />
        </div>
    )
};

export default Shrine;