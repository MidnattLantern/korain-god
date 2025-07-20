import { Link } from "react-router-dom";
import Styles from "./ProjectCard.module.css";
//import PlaceholderImage from "../../../../assets/other/placeholder-asset.jpg";

type ProjectCardProps = {
    title?: string;
    link: string;
};

const ProjectCard = ({title, link} : ProjectCardProps) => {

    return(
        <div className={Styles.ProjectCardView}>
            <h1>{title}</h1>
            {/*
            <img className={Styles.ImageSize} src={PlaceholderImage} alt=""/>
            */}

            <div className={Styles.ButtonsView}>
                <button>{"Download"}</button>
                <Link className={Styles.NavLink} to={`/${link}`}><button>{"Open"}</button></Link>
            </div>
        </div>
    )
};

export default ProjectCard;