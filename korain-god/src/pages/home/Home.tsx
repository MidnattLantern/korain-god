import Styles from "./Home.module.css";
import WallpaperAsset from "../../assets/other/placeholder-asset.jpg";
import ClientCredits from "./components/clientCredits/ClientCredits";
import ProjectCard from "./components/projectCard/ProjectCard";

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
            <ProjectCard title="Symbol" link="symbol"/>
            <ProjectCard title="Portrait" link="portrait"/>
            <ProjectCard title="Shrine" link="shrine"/>
            <ProjectCard title="Temple" link="temple"/>
        </div>
    )
};

export default Home;