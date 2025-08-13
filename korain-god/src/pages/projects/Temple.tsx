import Styles from "./Projects.module.css";
import ProjectDetail from "../../components/projectDetail/ProjectDetail";
import Placeholder from "../../assets/other/placeholder-asset.jpg";

const Temple = () => {
    return (
        <div className={Styles.ProjectView}>
            <h1>This is a placeholder page</h1>
            <ProjectDetail title="Temple" titleAlt1="Placeholder 1" titleAlt2="Placeholder 2"
            smallAsset={Placeholder} largeAsset={Placeholder} smallFileInfo="test s" largeFileInfo="test l"
            />
        </div>
    )
};

export default Temple;