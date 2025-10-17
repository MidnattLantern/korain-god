import Styles from "./Weblog.module.css";
import CurvingAWall1Image from "../assets/temple-interior/weblog/curving-a-wall-1.png";
import CurvingAWall2Image from "../assets/temple-interior/weblog/curving-a-wall-2.png";
import CurvingAWall3Image from "../assets/temple-interior/weblog/curving-a-wall-3.png";

import CurvedWallFile from "../assets/temple-interior/weblog/curved-wall.fbx";
import { Link } from "react-router-dom";

const TempleInteriorWeblog = () => {

    const Chapter = ({ children, id }: { children: React.ReactNode; id?: string }) => {
        return <div id={id} className={Styles.ChapterView}>{children}</div>;
    };

    return (
        <div className={Styles.WeblogView}>
            <h1>MAKING OF THE INTERIOR</h1>
            <Chapter>
                <p>The interior follow the same story as the exterior, until the point where a camera shot were shot from inside through the WebGL app.</p>
                <p>This page will only focus from the point of moddeling the architecture in detail. To read about the proccess from nothing to a camera angle snapshot of a low-poly landscape, read about <Link to="/temple-exterior">the making of the exterior.</Link></p>
            </Chapter>
            <Chapter>
                <h1>Curved Wall</h1>
                <p>Reusing assets for an array, where every other component is a window and a pillar. An array of six windows and seven pillars would make a perfect 180 degree curve.</p>
                <img src={CurvingAWall1Image} alt="CurvingAWall1Image"/>
                <p>Creating an armature for each component, parenting each component to a bone, then parenting every bone to a spine.</p>
                <img src={CurvingAWall2Image} alt="CurvingAWall2Image"/>
                <p>Finally, the bones can be twisted evenly to make a 180 degree curve. To 'solidify' the curved wall itself so that it turns into one unified mesh, independent from bones, I could mark them all, joing with shift + J, then deleting the armatrue and its bones</p>
                <img src={CurvingAWall3Image} alt="CurvingAWall3Image"/>
                <p>The curved wall component can be downloaded as an FBX file, then used for 3D softwares such as Blender or Unity.</p>
                <a href={CurvedWallFile} download={`curved-wall.fbx`}><button>{`curved-wall.fbx`}</button></a>
            </Chapter>
        </div>
    )
};

export default TempleInteriorWeblog;