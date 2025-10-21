import Styles from "./Weblog.module.css";
import CurvingAWall1Image from "../assets/temple-interior/weblog/curving-a-wall-1.png";
import CurvingAWall2Image from "../assets/temple-interior/weblog/curving-a-wall-2.png";
import CurvingAWall3Image from "../assets/temple-interior/weblog/curving-a-wall-3.png";
import Fence1Image from "../assets/temple-interior/weblog/fence-1.png";
import Fence2Image from "../assets/temple-interior/weblog/fence-2.png";
import FenceAddConstraintImage from "../assets/temple-interior/weblog/fence-add-constraint.png";
import FenceChildOfImage from "../assets/temple-interior/weblog/fence-child-of.png";
import FenceConstraintTargetImage from "../assets/temple-interior/weblog/fence-constraint-target.png";
import ArrayToBoneImage from "../assets/temple-interior/weblog/array-to-bone.png";
import ObjectRelationsImage from "../assets/temple-interior/weblog/object-relations.png";
import UnexpectedParentPositionImage from "../assets/temple-interior/weblog/unexpected-parent-position.png";
import PoseViewImage from "../assets/temple-interior/weblog/pose-view.png";
import SeperateBoneImage from "../assets/temple-interior/weblog/seperate-bone.png";
import ArrayOfChairsImage from "../assets/temple-interior/weblog/array-of-chairs.png";
import ChairArrayCanTwistImage from "../assets/temple-interior/weblog/chair-array-can-twist.png";
import AMillionChairsImage from "../assets/temple-interior/weblog/a-million-chairs.png";
import FullRenditionImage from "../assets/temple-interior/weblog/full-rendition.png";
import FenceRenditionImage from "../assets/temple-interior/weblog/fence-rendition.png";
import CrowdChairsRenditionImage from "../assets/temple-interior/weblog/crowd-chairs-rendition.png";
import CenterRenditionImage from "../assets/temple-interior/weblog/center-rendition.png";

import CurvedWallFile from "../assets/temple-interior/weblog/curved-wall.fbx";
import SingleChairFile from "../assets/temple-interior/weblog/single-chair.fbx";
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

            <Chapter>
                <h1>Single Chair</h1>
                <p>The same armature techinique was used when designing the spindles of a single chair, and making a curved array of chairs.</p>
                <img src={ArrayToBoneImage} alt="ArrayToBoneImage"/>
                <p>Using the spindles as an example, it is worth mentioning how each component knows which bone it should be tied to. When you parent a component to the armature, Blender doesn't know which bone you want to parent.</p>
                <p>Select the component first, then the armature while holding shift. Press strl + P and "Bone". Repeat the same for all the other components on the array. Note that each component are seperate objects.</p>
                <p>Blender will parent to a random bone in the armature, almost never the bone you want it to. If you select the component, then go to the "Object Properties" panel, expand the "Relations" view, you'll see "Parent Bone" and a bone Blender automatically parented. You can click it and change the bone parent there. It is recomended that you name your bones so that they're easy to manage for this purpose.</p>
                <img src={ObjectRelationsImage} alt="ObjectRelationsImage"/>
                <p>As you change the parent bone, you might see unexpected scale and position transformation of any components, you can always track and change its position and size to its proper place.</p>
                <img src={UnexpectedParentPositionImage} alt="UnexpectedParentPositionImage"/>
                <p>The array can be twisted by selecting the armature, going to "Pose Mode" and be twisted as you wish.</p>
                <img src={PoseViewImage} alt="PoseViewImage"/>
                <p>{`If you want to crystalize the transformation and get rid of the armature, you can do that by selecting a component, hit Alt + P (Windows) or Option + P (Mac), the select "Clear and Keep Transformation". This action is irreversible.`}</p>
                <img src={SeperateBoneImage} alt="SeperateBoneImage"/>
                <p>The chair as a single object can be downloaded as an FBX file.</p>
                <a href={SingleChairFile} download={`single-chair.fbx`}><button>{`single-chair.fbx`}</button></a>
            </Chapter>

            <Chapter>
                <h1>Curved Fence</h1>
                <p>Using quick Ctrl P parenting far away from the world origin, on the same project file as every other component revealed to be messy and inconvenient. Dozen objects turned to hundreds, and resizing/ moving back components back to its places costs an insane amount of time and tedious effort. From now on, I decided to design each component on its own Blender project file, then import them to the main project file as FBX. When designing the curving array of the fence, I discovered a better method: using the Object Constraint's "Child Of" feature.</p>
                <p>I designed a component for the fence and its pillars:</p>
                <img src={Fence1Image} alt="Fence1Image"/>
                <p>Then make a continious array of bones. It's very important that they stay at the world origin and that the scale/ rotation transformation is done in "Edit mode", otherwise, the unexpected matrix transformation will happen.</p>
                <img src={Fence2Image} alt="Fence2Image"/>
                <p>With an armature and fence array setup, to use this method, select one component, go to the "Constraints" panel:</p>
                <img src={FenceAddConstraintImage} alt="FenceAddConstraintImage"/>
                <p>Select "Child Of"</p>
                <img src={FenceChildOfImage} alt="FenceChildOfImage"/>
                <p>Set "Target" to the armature with the array of bones, "Bone" to its equivalent, if the matrix warp is still weird, selecting "Set Inverse" may fix that:</p>
                <img src={FenceConstraintTargetImage} alt="FenceConstraintTargetImage"/>
            </Chapter>

            <Chapter>
                <h1>Many chairs</h1>
                <p>The same method for the Curved Fence was applied when making a turning array of chairs.</p>
                <img src={ArrayOfChairsImage} alt="ArrayOfChairsImage"/>
                <img src={ChairArrayCanTwistImage} alt="ChairArrayCanTwistImage"/>
                <img src={AMillionChairsImage} alt="AMillionChairsImage"/>
            </Chapter>

            <Chapter>
                <h1>3D Rendition</h1>
                <p>The camera is positioned faithfully according to the reference screenshot. The lighting is made of a couple Point-lights inside the room for general lighting, and one Sun-light tilted so that it creates cast shadows and cast lighting through the windows.</p>
                <p>I made multiple renditions, from a complete version, to alternatives with a few selected components, such as an empty room. These alternatives will help me tracing elements behind complex shapes, such as the flock of chairs.</p>
                <img src={FullRenditionImage} alt="FullRenditionImage"/>
                <img src={FenceRenditionImage} alt="FenceRenditionImage"/>
                <img src={CrowdChairsRenditionImage} alt="CrowdChairsRenditionImage"/>
                <img src={CenterRenditionImage} alt="CenterRenditionImage"/>
            </Chapter>

        </div>
    )
};

export default TempleInteriorWeblog;