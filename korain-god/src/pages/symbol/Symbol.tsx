import Styles from "./Symbol.module.css";
import Large from "../../assets/symbol/downloadable/korain-symbol-large.png";
import Small from "../../assets/symbol/downloadable/korain-symbol-small.jpg";
import ProjectDetail from "../../components/projectDetail/ProjectDetail";
import Placeholder from "../../assets/other/placeholder-asset.jpg";

const Symbol = () => {
    return (
        <div className={Styles.SymbolView}>
            <ProjectDetail title="Symbol" titleAlt1="Placeholder 1" titleAlt2="Placeholder 2"
            smallAsset={Small} largeAsset={Large} smallFileInfo="JPG 123 KB" largeFileInfo="PNG 7,5 MB"
            smallAssetAlt1={Placeholder} largeAssetAlt1={Placeholder} smallFileInfoAlt1="A" largeFileInfoAlt1="B"
            smallAssetAlt2={Placeholder} largeAssetAlt2={Placeholder} smallFileInfoAlt2="C" largeFileInfoAlt2="D"
            />
        </div>
    )
};

export default Symbol;