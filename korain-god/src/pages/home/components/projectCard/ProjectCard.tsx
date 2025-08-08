import { Link } from "react-router-dom";
import Styles from "./ProjectCard.module.css";

type ProjectCardProps = {
    title?: string;
    link: string;
    smallAsset?: string;
    largeAsset?: string;
    largeFileInfo?: string;
};

const ProjectCard = ({title, link, smallAsset, largeAsset, largeFileInfo} : ProjectCardProps) => {

    return(
        <div className={Styles.ProjectCardView}>
            <h1 className={Styles.Title}>{title}</h1>
            
            <img className={Styles.ImageSize} src={smallAsset} alt={"Work in progress"}/>
            
            <div className={Styles.ButtonsView}>
                <a href={largeAsset} download={"Large"}><button>{"↓" + (largeFileInfo ? ` as ${largeFileInfo}` : "")}</button></a>
                <Link to={`/${link}`}><button className={Styles.OpenButton}>{"Open →"}</button></Link>
            </div>
        </div>
    )
};

export default ProjectCard;