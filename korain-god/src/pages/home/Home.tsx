import Styles from "./Home.module.css";
//import PlaceholderAsset from "../../assets/other/placeholder-asset.jpg";
import WallpaperAsset from "../../assets/other/app-wallpaper.png";
import ClientCredits from "./components/clientCredits/ClientCredits";
import ProjectCard from "./components/projectCard/ProjectCard";
import SymbolLarge from "../../assets/symbol/downloadable/korain-symbol-large.png";
import SymbolSmall from "../../assets/symbol/downloadable/korain-symbol-small.jpg";
import BustPortraitSketchV1Large from "../../assets/portrait/downloadable/korain-bust-portrait-large.png";
import BustPortraitSketchV1Small from "../../assets/portrait/downloadable/korain-bust-portrait-small.jpg";
import ShrineLarge from "../../assets/shrine/korain-shrine-large.png";
import ShrineSmall from "../../assets/shrine/korain-shrine-small.png";
import TempleExteriorLarge from "../../assets/temple-exterior/downloadable/korain-temple-exterior-large.png";
import TempleExteriorSmall from "../../assets/temple-exterior/downloadable/korain-temple-exterior-small.jpg";
import { useWindowSize } from "../../hooks/useWInidowSize";

const Home = () => {
    const { width } = useWindowSize();

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
            <ProjectCard title="Portrait" link="portrait" smallAsset={BustPortraitSketchV1Small} largeAsset={BustPortraitSketchV1Large} largeFileInfo="PNG 25,2 MB"/>
            
            <ProjectCard title="Shrine" link="shrine" smallAsset={ShrineSmall} largeAsset={ShrineLarge} largeFileInfo="PNG 3,2 MB"/>
            <ProjectCard title="Exterior" link="temple-exterior" smallAsset={TempleExteriorSmall} largeAsset={TempleExteriorLarge} largeFileInfo="PNG 10 MB" useFullSpace={true}/>
            {width < 440 && <div className={Styles.BottomPadding}/>}

        </div>
    )
};

export default Home;