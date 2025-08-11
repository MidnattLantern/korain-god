import Styles from "./Projects.module.css";
import ProjectDetail from "../../components/projectDetail/ProjectDetail";
import Placeholder from "../../assets/other/placeholder-asset.jpg";

const Temple = () => {
    return (
        <div className={Styles.ProjectView}>
            <h1>This is a placeholder page</h1>
            <ProjectDetail title="Temple" titleAlt1="Placeholder 1" titleAlt2="Placeholder 2"
            smallAsset={Placeholder} largeAsset={Placeholder} smallFileInfo="test s" largeFileInfo="test l"
            smallAssetAlt1={Placeholder} largeAssetAlt1={Placeholder} smallFileInfoAlt1="A" largeFileInfoAlt1="B"
            smallAssetAlt2={Placeholder} largeAssetAlt2={Placeholder} smallFileInfoAlt2="C" largeFileInfoAlt2="D"
            />
        </div>
    )
};

export default Temple;