import Styles from "./Projects.module.css";
import Large from "../../assets/symbol/downloadable/korain-symbol-large.png";
import Small from "../../assets/symbol/downloadable/korain-symbol-small.jpg";
import ProjectDetail from "../../components/projectDetail/ProjectDetail";
import SymbolWeblog from "../../weblogContent/SymbolWeblog";
import Footer from "../../components/footer/Footer";

const Symbol = () => {
    return (
        <div className={Styles.ProjectView}>
            <ProjectDetail title="Symbol" titleAlt1="Placeholder 1" titleAlt2="Placeholder 2"
            smallAsset={Small} largeAsset={Large} smallFileInfo="JPG 123 KB" largeFileInfo="PNG 7,5 MB"
            />

            <SymbolWeblog/>

            <ProjectDetail title="Symbol" titleAlt1="Placeholder 1" titleAlt2="Placeholder 2"
            smallAsset={Small} largeAsset={Large} smallFileInfo="JPG 123 KB" largeFileInfo="PNG 7,5 MB"
            />
            <Footer/>
        </div>
    )
};

export default Symbol;