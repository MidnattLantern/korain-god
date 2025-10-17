import Styles from "./Weblog.module.css";
import { useWindowSize } from "../hooks/useWInidowSize";
import ArchitectureImage from "../assets/temple-exterior/weblog/architecture.png";
import PointArch1Image from "../assets/temple-exterior/weblog/point-arch-1.png";
import PointArch2Image from "../assets/temple-exterior/weblog/point-arch-2.png";
import PointArch3Image from "../assets/temple-exterior/weblog/point-arch-3.png";
import PointArch4Image from "../assets/temple-exterior/weblog/point-arch-4.png";
import PointArch5Image from "../assets/temple-exterior/weblog/point-arch-5.png";
import ShapepressAssetArrayImage from "../assets/temple-exterior/weblog/shapepress-asset-array.png";
import ShapepressIntersectingShapeImage from "../assets/temple-exterior/weblog/shapepress-intersecting-shape.png";
import ShapepressCreatedImage from "../assets/temple-exterior/weblog/shapepress-created.png";
import ShapepressFace1Image from "../assets/temple-exterior/weblog/shapepress-face-1.png";
import ShapepressFace2Image from "../assets/temple-exterior/weblog/shapepress-face-2.png";
import ShapepressFace3Image from "../assets/temple-exterior/weblog/shapepress-face-3.png";
import ShapepressCornerSizeImage from "../assets/temple-exterior/weblog/shapepress-corner-size.png";
import ShapepressUseExampleImage from "../assets/temple-exterior/weblog/shapepress-use-example.png";
import Final3DRenderImage from "../assets/temple-exterior/weblog/final-3d-render.png";

import BeforeAfterImage from "../assets/temple-exterior/weblog/before-after.png";
import UnsanitizedImage from "../assets/temple-exterior/weblog/unsanitized.png";
import NoShiftImage from "../assets/temple-exterior/weblog/no-shift.png";
import ShiftImage from "../assets/temple-exterior/weblog/shift.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const TempleExteriorWeblog = () => {
    const { width } = useWindowSize();
    const [showUserInputCode, setShowUserInputCode] = useState<boolean>(false);
    const [showRotateCameraCode, setShowRotateCameraCode] = useState<boolean>(false);
    const [showCameraCode, setShowCameraCode] = useState<boolean>(false);

    const Chapter = ({ children, id }: { children: React.ReactNode; id?: string }) => {
        return <div id={id} className={Styles.ChapterView}>{children}</div>;
    };

    return (
        <div className={Styles.WeblogView}>
            <h1>MAKING OF THE EXTERIOR</h1>
            <Chapter>
                <p>Korain doesn't have his own temple, his worship takes place in locations associated with law and justice within the culture of the world of Idoria.</p>
                <p>For Korain's place of worship, we decided to portray him within a courthouse.</p>
                <p>Korain doesn't boast himself as other gods, he remain blending into everyday life, to encourage people focus more of his mission in justice and less in divine worship. Hence the design decision more so feature Korain blending in to a justice setting, than taking the center of the spotlight.</p>
            </Chapter>

            <Chapter>
                <h1>3D Layout</h1>
                <p>The scope would cover both an outside and inside point of view. I could resume the current low detailed model and start applying details.</p>
                <p>For this revision, I applied a grid by grid layout, breaking the architecture down to repeating chunks.</p>
                <img src={ArchitectureImage} alt="ArchitectureImage"/>
            </Chapter>

            <Chapter>
                <h1>Pointed Arch</h1>
                <p>A common architectural element for this scene, providing support for tall buildings, I believe this gothic design fits well for Idoria's high fantasy setting.</p>
                <div className={Styles.CenterContent}>
                    <p>A pointed arch can be generated from a circle mesh.</p>
                    <img src={PointArch1Image} alt="PointArch1Image" className={Styles.SmallHeight}/>
                    <p>In edit mode, use vertices, select the bottom section and the couple most centered vertices, then delete.</p>
                    <img src={PointArch2Image} alt="PointArch2Image" className={Styles.SmallHeight}/>
                    <p>Two arch frames are left, move them close until the top vertices intersect, select the two, press M, then "At Center"</p>
                    <img src={PointArch3Image} alt="PointArch3Image" className={Styles.SmallHeight}/>
                    <p>Still in edit mode, use the "Extrude Region", don't mind if the handle follow a bad direction, the shape can still be extruded to any direction.</p>
                    <img src={PointArch4Image} alt="PointArch4Image" className={Styles.SmallHeight}/>
                    <p>The pointed arch is finished and can be solidified when ready using the solidify modifier.</p>
                    <img src={PointArch5Image} alt="PointArch5Image" className={Styles.SmallHeight}/>
                </div>
            </Chapter>

            <Chapter>
                <h1>Shape Press</h1>
                <img src={ShapepressAssetArrayImage} alt="ShapepressAssetArrayImage" className={Styles.SmallHeight}/>
                <p>Certain array components have a shape facing from one side. But when the array turns at a corner, the shape needs to face from two sides.</p>
                <p>Using Boolean, I could create a shape press and shape the face for a corner component.</p>
                <div className={Styles.CenterContent}>
                    <p>Intersecting a larger cube with one face, then giving the larger cube a difference Boolean modifier, referencing the face:</p>
                    <img src={ShapepressIntersectingShapeImage} alt="ShapepressIntersectingShapeImage" className={Styles.SmallHeight}/>
                    <p>Applying the Boolean creates the shape press:</p>
                    <img src={ShapepressCreatedImage} alt="ShapepressCreatedImage" className={Styles.SmallHeight}/>
                    <p>Add a new cube with the same dimensions as the component, this will be the corner component:</p>
                    <img src={ShapepressCornerSizeImage} alt="ShapepressCornerSizeImage" className={Styles.SmallHeight}/>
                    <p>Intersect the shape presser on one side, give the block a Boolean difference modifier, referencing the shape press, then applying the boolean:</p>
                    <img src={ShapepressFace1Image} alt="ShapepressFace1Image" className={Styles.MediumHeight}/>
                    <p>Finally repeat for the second face:</p>
                    <img src={ShapepressFace2Image} alt="ShapepressFace2Image" className={Styles.MediumHeight}/>
                </div>
                <p>This creates the corner asset so that the array pattern can turn around corners:</p>
                <img src={ShapepressFace3Image} alt="ShapepressFace3Image"/>
                <img src={ShapepressUseExampleImage} alt="ShapepressUseExampleImage"/>
            </Chapter>

            <Chapter>
                <h1>Shooting an Angle</h1>
                <p>The Blender project was exported as an .fbx file, allowing it to be imported and used for a Unity project.</p>
                { width > 1024 && <>
                <p>I wrote three scripts:</p>
                <ul>For moving the camera</ul>
                <button onClick={() => {setShowUserInputCode(!showUserInputCode)}}>{showUserInputCode ? "Hide" : "Show"}</button>
                {showUserInputCode &&
                    <pre className={Styles.CodeBlock}>
                        <code>{`
using UnityEngine;

public class UserInput : MonoBehaviour
{
    int originX = 0;
    int originY = 0;
    int originZ = 0;
    public Vector3 Transform3DPosition()
    {
        Vector3 inputVector = new Vector3(originX, originY, originZ);
        
        if (Input.GetKey(KeyCode.W))
        {
            inputVector.x++;
        }
        if (Input.GetKey(KeyCode.S))
        {
            inputVector.x--;
        }
        if (Input.GetKey(KeyCode.A))
        {
            inputVector.z++;
        }
        if (Input.GetKey(KeyCode.D))
        {
            inputVector.z--;
        }
        if (Input.GetKey(KeyCode.Space))
        {
            inputVector.y++;
        }
        if (Input.GetKey(KeyCode.LeftShift))
        {
            inputVector.y--;
        }
        return inputVector;
    }
}
                        `}</code>
                    </pre>
                }
                <ul>For Rotating the Camera</ul>
                <button onClick={() => {setShowRotateCameraCode(!showRotateCameraCode)}}>{showRotateCameraCode ? "Hide" : "Show"}</button>
                {showRotateCameraCode &&
                    <pre className={Styles.CodeBlock}>
                        <code>{`
using System.Runtime.InteropServices.WindowsRuntime;
using UnityEngine;

public class RotateCameraInput : MonoBehaviour
{
    int originX = 0;
    int originY = 0;
    int originZ = 0;
    public Vector3 Transform3DRotation()
    {
        Vector3 inputVector = new Vector3(originX, originY, originZ);

        if (Input.GetKey(KeyCode.UpArrow)) inputVector.x++;
        if (Input.GetKey(KeyCode.DownArrow)) inputVector.x--;
        if (Input.GetKey(KeyCode.RightArrow)) inputVector.y++;
        if (Input.GetKey(KeyCode.LeftArrow)) inputVector.y--;
        if (Input.GetKey(KeyCode.Q)) inputVector.z++;
        if (Input.GetKey(KeyCode.E)) inputVector.z--;

        return inputVector;
    }
}

                        `}</code>
                    </pre>
                }
                <ul>For making the camera itself able to listen to inputs</ul>
                <button onClick={() => {setShowCameraCode(!showCameraCode)}}>{showCameraCode ? "Hide" : "Show"}</button>
                {showCameraCode &&
                    <pre className={Styles.CodeBlock}>
                        <code>
                        {`
using UnityEngine;

public class Camera : MonoBehaviour
{
    [SerializeField] private UserInput userInputFunction;
    [SerializeField] private RotateCameraInput rotateCameraInputFunction;

    float moveSpeed = 0.25f;
    float rotateSpeed = 1f;
    void Start()
    {
        
    }

    void Update()
    {
        Vector3 inputVector = userInputFunction.Transform3DPosition();
        inputVector = inputVector.normalized;
        transform.position += inputVector * moveSpeed;

        Vector3 inputRotation = rotateCameraInputFunction.Transform3DRotation();
        transform.Rotate(inputRotation * rotateSpeed);
    }
}
                        `}
                        </code>
                    </pre>
                }
                <p>The code for moving and rotating are connected to the camera through the code of the camera's serializer fields:</p>
                <pre>
                    <code>
                        {`
// Camera.cs
    [SerializeField] private UserInput userInputFunction;                 // Move camera
    [SerializeField] private RotateCameraInput rotateCameraInputFunction; // Rotate camera
                        `}
                    </code>
                </pre>
</>}
                <p>I deployed the Unity project as a static WebGL web page hosted on GitHub Pages, and sent the link to my client, where she could move around and find camera shots she liked, then screenshot it.</p>
                <p>The camera moves with the keys: WASD, left shift and space.</p>
                <p>The camera rotates with the arrow keys, Q and E.</p>
                <p>You can see it for yourself via <a href="https://midnattlantern.github.io/display-korain-temple/" target="_blank">{`this link (new tab)`}</a></p>

                <p>There are a couple of mistakes I learned:</p>
                <ul>I realized such controls are not a problem for Windows users, where you screenshot using the Print Screen key, but Mac users screenshot using Cmd + Shift + 3, interfering with the move camera down key and ruining the shot.</ul>
                <ul>The move camera controls is not relative to the rotation, meaning when you for instance rotate the camera 90 or 180 degrees, W does not move forward or D does not go right as the user would expect. I'm not sure if hardcoded GetKey methods even is an appropriate to build an intuitive control system, but if you use transform.position and transform.rotation methods instead, you can build a fine camera control system from that.</ul>

                <p>The project diverges from this point, the rest of this page will be about the exterior. To read about the interior, <Link to="/temple-interior">click here.</Link></p>
            </Chapter>

            <Chapter>
                <h1>Rendering Image</h1>
                <p>The render is actually done via Blender using a screenshot from the webpage as a reference.</p>
                <p>I applied two sun light sources, one main source revealing drop shadows, another source strong enough to counter completely black shadows, but weak enough to not compete with the main source.</p>
                <img src={Final3DRenderImage} alt="Final3DRenderImage"/>
            </Chapter>

            <Chapter>
                <h1>Painting</h1>
                <p>Given the heavy architecture and shadows of the rendition, I decided to use it as a core foundation component of the painting, rather than something I'd abandon once I've replaced it with traced layers.</p>
                <p>{`First, textures. Clip Studio offer a marketplace with assets anyone with a Clip Studio license can use. The main texture turning stone into stone, is "playground floor 2", featured on the "Texture Pack Vol. 2-1" package (ID: 2089580). The texture layer appears above the 3D rendition layer with low opacity.`}</p>
                <p>{`The second major material is "Marble Floor" from the same package, tuned with more contrast. The marble material adds variation to the courthouse building with its sleeker texture and lighter color.`}</p>
                <p>Above the rendition and texture layer, are a highlights and a shadows layers, manually painted with my best brush. The intention is to emphasize the shapes and lighting and break the renditions sanitized feel, making it feel more handcrafted.</p>
                <img src={BeforeAfterImage} alt="BeforeAfterImage"/>
                <p>I shifted away from grayscale with a level correction layer. The rendition was slowly shifting away from its initial sanitized 3D feel, from here, I needed to apply more asset overlays and hand drawn details.</p>
                <img src={UnsanitizedImage} alt="UnsanitizedImage"/>
                <p>{`The sky reflection on the windows is actually a photo asset: "Emo fish-eye lens Sky Set 1" (ID: 2068184). The asset clips to the main window layer with a fading gradient.`}</p>
                <p>To separate each architectural component from each other, such as the left plateau, or the right bridge underneath the courthouse, I added a soft mist where they are least connected to each other. This makes each component more independent.</p>
                <div className={Styles.CenterContent}>
                    <img src={NoShiftImage} alt="NoShiftImage"className={Styles.MediumHeight} />
                    <img src={ShiftImage} alt="ShiftImage"className={Styles.MediumHeight} />
                </div>
            </Chapter>
            <Chapter>
                <p>The final results showcase the courthouse, the vocal point with more vibrancy and variation in colors, leaving the environment with less details.</p>
            </Chapter>
        </div>
    )
};

export default TempleExteriorWeblog;