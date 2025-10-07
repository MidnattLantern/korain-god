import Styles from "./Weblog.module.css";
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
import { useState } from "react";

const TempleExteriorWeblog = () => {

    const [showUserInputCode, setShowUserInputCode] = useState<boolean>(false);
    const [showRotateCameraCode, setShowRotateCameraCode] = useState<boolean>(false);
    const [showCameraCode, setShowCameraCode] = useState<boolean>(false);

    const Chapter = ({ children, id }: { children: React.ReactNode; id?: string }) => {
        return <div id={id} className={Styles.ChapterView}>{children}</div>;
    };

    return (
        <div className={Styles.WeblogView}>
            <Chapter>
                <p>Korain doesn't have his own temple, his worship takes place in locations associated with law and justice within the culture of the world of Idoria.</p>
                <p>For Korain's place of worship, we decided to portray him within a courthouse.</p>
                <p>Korain doesn't boast himself as other gods, he remain blending into everyday life, to encourage people focus more of his mission in justice and less in divine worship. Hence the design desicion moreso feature Korain blending in to a justice setting, than taking the center of the spotlight.</p>
            </Chapter>

            <Chapter>
                <h1>3D layout</h1>
                <p>I mapped out the architecture in Blender. Before deciding whether we should go for an outside or inside shot, the overall shapes and layout was done minimally.</p>
                <p>For a potential outdoors scene, I made the courthouse off-centereed in a asymetrical high fantasy city setting, to shift away the boasting elements and highlight Korain's desire to blend in and fade into everyday life.</p>
                <p>The mesh was exported as an FBX file, imported to a Unity project, where I made a couple scripts controlling the camera.</p>
                <p>The Unity project was exported to a WebGL format, the format used to deploy to a web page.</p>
            </Chapter>

            <Chapter>
                <h1>Outside model</h1>
                <p>The scope would cover both an outside and inside point of view. I could resume the current low detailed model and start applying details.</p>
                <p>For this revision, I applied a grid by grid layout, breaking the architecture down to repeating chunks.</p>
            </Chapter>

            <Chapter>
                <h1>Pointed arch</h1>
                <p>A common architectual element for this scene, providing support for tall buildings, I believe this gothic design fits well for Idoria's high fantasy setting.</p>
                <div className={Styles.CenterContent}>
                    <p>A pointed arch can be generated from a circle mesh.</p>
                    <img src={PointArch1Image} alt="PointArch1Image" className={Styles.SmallHeight}/>
                    <p>In edit mode, use vertices, select the bottom section and the couple most centered vertices, then delete.</p>
                    <img src={PointArch2Image} alt="PointArch2Image" className={Styles.SmallHeight}/>
                    <p>Two arch frames are left, move them close until the top vertices intersect, select the two, press M, then "At Center"</p>
                    <img src={PointArch3Image} alt="PointArch3Image" className={Styles.SmallHeight}/>
                    <p>Still in edit mode, use the "Exrude Region", don't mind if the handle follow a bad direction, the shape can still be extruded to any direction.</p>
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
                <h1>Shooting an angle</h1>
                <p>The Blender project was exported as an .fbx file, allowing it to be imported and used for a Unity project.</p>
                <p>I wrote three scripts:</p>
                <ul>For moving the camera</ul>
                <button onClick={() => {setShowUserInputCode(!showUserInputCode)}}>toggle code</button>
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
                <ul>For rotating the camera</ul>
                <button onClick={() => {setShowRotateCameraCode(!showRotateCameraCode)}}>toggle code</button>
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
                <button onClick={() => {setShowCameraCode(!showCameraCode)}}>toggle code</button>
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
                <p>I deployed the Unity project as a static WebGL web page and sent the link to my client, where she could move around and find camera shots she liked, then screenshot it.</p>
                <p>The camera moves with the keys: WASD, left shift and space.</p>
                <p>The camera rotates with the arrow keys, Q and E.</p>
                <p>You can see it for yourself via <a href="https://midnattlantern.github.io/display-korain-temple/" target="_blank">{`this link (new tab)`}</a></p>

                <p>There are a couple of mistakes I learned:</p>
                <ul>I realized such controls are not a problem for Windows users, where you screenshot using the Print Screen key, but Mac users screenshot using Cmd + Shift + 3, interfering with the move camera down key and ruining the shot.</ul>
                <ul>The move camera controls is not relative to the rotation, meaning when you for instance rotate the camera 90 or 180 degrees, W does not move forward or D does not go right as the user would expect. I'm not sure if hardcoded GetKey methods even is an appropriate to build an intuitive control system, but if you use transform.position and transform.rotation methods instead, you can build a fine camera control system from that.</ul>
            </Chapter>

            <Chapter>
                <h1>Rendering image</h1>
                <p>The render is actually done via Blender using a screenshot from the webpage as a reference.</p>
                <p>I applied two sun light sources, one main source revealing drop shadows, another source strong enough to counter completely black shadows, but weak enough to not compete with the main source.</p>
                <img src={Final3DRenderImage} alt="Final3DRenderImage"/>
            </Chapter>
        </div>
    )
};

export default TempleExteriorWeblog;