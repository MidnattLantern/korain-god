import Styles from "./Projects.module.css";
import ProjectDetail from "../../components/projectDetail/ProjectDetail";
import Placeholder from "../../assets/other/placeholder-asset.jpg";
import TempleInteriorWeblog from "../../weblogContent/TempleInteriorWeblog";
import Footer from "../../components/footer/Footer";

const TempleInterior = () => {
    return (
        <div className={Styles.ProjectView}>
            <h1>Under development</h1>
            <ProjectDetail title="placeholder" titleAlt1="placeholder"
            smallAsset={Placeholder} largeAsset={Placeholder} smallFileInfo="small file info" largeFileInfo="large file info"
            />

            <TempleInteriorWeblog />
            <Footer/>
        </div>
    )
};

export default TempleInterior;