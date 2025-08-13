import Styles from "./Home.module.css";
//import PlaceholderAsset from "../../assets/other/placeholder-asset.jpg";
import WallpaperAsset from "../../assets/other/app-wallpaper.png";
import ClientCredits from "./components/clientCredits/ClientCredits";
import ProjectCard from "./components/projectCard/ProjectCard";
import SymbolLarge from "../../assets/symbol/downloadable/korain-symbol-large.png";
import SymbolSmall from "../../assets/symbol/downloadable/korain-symbol-small.jpg";
//import BustPortraitSketchV1Large from "../../assets/portrait/downloadable/korain-bust-portrait-sketch-v1-large.png";
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
            {/*
            <ProjectCard title="Portrait" link="portrait" smallAsset={BustPortraitSketchV1Large} largeAsset={BustPortraitSketchV1Large} largeFileInfo="PNG 5,1 MB"/>
            <ProjectCard title="Shrine" link="shrine"/>
            <ProjectCard title="Temple" link="temple"/>
            */}
            {width < 440 && <div className={Styles.BottomPadding}/>}

        </div>
    )
};

export default Home;