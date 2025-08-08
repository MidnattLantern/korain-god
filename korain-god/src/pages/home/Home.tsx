import Styles from "./Home.module.css";
//import PlaceholderAsset from "../../assets/other/placeholder-asset.jpg";
import WallpaperAsset from "../../assets/other/app-wallpaper.png";
import ClientCredits from "./components/clientCredits/ClientCredits";
import ProjectCard from "./components/projectCard/ProjectCard";
import SymbolLarge from "../../assets/symbol/downloadable/korain-symbol-large.png";
import SymbolSmall from "../../assets/symbol/downloadable/korain-symbol-small.jpg";

const Home = () => {

    const Wallpaper = () => {
        return(
            <div className={Styles.WallpaperFrame}>
                <div className={Styles.WallpaperOverlay}/>
                <img className={Styles.WallpaperAppearance} src={WallpaperAsset} alt={""}/>
            </div>
        )
    };

    return(
        <div className={Styles.HomeView}>
            <Wallpaper/>
            <ClientCredits/>
            <ProjectCard title="Symbol" link="symbol" smallAsset={SymbolSmall} largeAsset={SymbolLarge} largeFileInfo="PNG 7,5 MB"/>
            <ProjectCard title="Portrait" link="portrait"/>
            <ProjectCard title="Shrine" link="shrine"/>
            <ProjectCard title="Temple" link="temple"/>
        </div>
    )
};

export default Home;