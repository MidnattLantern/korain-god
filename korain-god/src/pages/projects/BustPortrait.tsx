import Styles from "./Projects.module.css";
import Large from "../../assets/portrait/downloadable/korain-bust-portrait-large.png";
import Small from "../../assets/portrait/downloadable/korain-bust-portrait-small.jpg";
import LargeAlt1 from "../../assets/portrait/downloadable/korain-bust-portrait-alt1-large.png";
import SmallAlt1 from "../../assets/portrait/downloadable/korain-bust-portrait-alt1-small.jpg";
import LargeAlt2 from "../../assets/portrait/downloadable/korain-bust-portrait-alt2-large.png";
import SmallAlt2 from "../../assets/portrait/downloadable/korain-bust-portrait-alt2-small.jpg";
import ProjectDetail from "../../components/projectDetail/ProjectDetail";
//import PortraitWeblog from "../../weblogContent/PortraitWeblog";

const BustPortrait = () => {
    return (
        <div className={Styles.ProjectView}>
            <ProjectDetail title="Portrait" titleAlt1="No vibrant filter" titleAlt2="No colours"
            smallAsset={Small} largeAsset={Large} smallFileInfo="JPG 393 KB" largeFileInfo="PNG 25,2 MB"
            smallAssetAlt1={SmallAlt1} largeAssetAlt1={LargeAlt1} smallFileInfoAlt1="JPG 381 KB" largeFileInfoAlt1="PNG 14,5 MB"
            smallAssetAlt2={SmallAlt2} largeAssetAlt2={LargeAlt2} smallFileInfoAlt2="JPG 332 KB" largeFileInfoAlt2="PNG 4,2 MB"
            />
{/*
            <PortraitWeblog/>

            <ProjectDetail title="Portrait" titleAlt1="No vibrant filter" titleAlt2="No colours"
            smallAsset={Small} largeAsset={Large} smallFileInfo="JPG 393 KB" largeFileInfo="PNG 25,2 MB"
            smallAssetAlt1={SmallAlt1} largeAssetAlt1={LargeAlt1} smallFileInfoAlt1="JPG 381 KB" largeFileInfoAlt1="PNG 14,5 MB"
            smallAssetAlt2={SmallAlt2} largeAssetAlt2={LargeAlt2} smallFileInfoAlt2="JPG 332 KB" largeFileInfoAlt2="PNG 4,2 MB"
            />
*/}
        </div>
    )
};

export default BustPortrait;