import { Link } from "react-router-dom";
import Styles from "./ProjectCard.module.css";
import { useWindowSize } from "../../../../hooks/useWInidowSize";

type ProjectCardProps = {
    title?: string;
    link: string;
    smallAsset?: string;
    largeAsset?: string;
    largeFileInfo?: string;
};

const ProjectCard = ({title, link, smallAsset, largeAsset, largeFileInfo} : ProjectCardProps) => {
    const { width } = useWindowSize();

    const PhoneView = () => {
        return(<>
            <h1 className={Styles.Title}>{title}</h1>
            <img className={Styles.ImageSize} src={smallAsset} alt={"Work in progress"}/>
            <div className={Styles.ButtonsView}>
                <a href={largeAsset} download={"Large"}><button>{"↓" + (largeFileInfo ? ` as ${largeFileInfo}` : "")}</button></a>
                <Link to={`/${link}`}><button className={Styles.OpenButton}>{"Open →"}</button></Link>
            </div>
        </>)
    };

    const LargeView = () => {
        return(<>
            <div className={Styles.TitleContainer}>
                <h1 className={Styles.Title}>{title}</h1>
            </div>
            <div className={Styles.ImageAndNavigationContainer}>
                <Link to={`/${link}`}><img className={Styles.ImageSize} src={smallAsset} alt={"Work in progress"}/></Link>
                <div className={Styles.ButtonsView}>
                    <a href={largeAsset} download={"Large"}><button className={Styles.ButtonSize}>{"↓" + (largeFileInfo ? ` as ${largeFileInfo}` : "")}</button></a>
                    <Link to={`/${link}`}><button className={`${Styles.OpenButton} ${Styles.ButtonSize}`}>{"Open →"}</button></Link>
                </div>
            </div>
        </>)
    }

    return(
        <div className={Styles.ProjectCardView}>
            {width < 440 ? <PhoneView/> : <LargeView/>}
        </div>
    )
};

export default ProjectCard;