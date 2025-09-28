import Styles from "./Weblog.module.css";
import PointArch1Image from "../assets/temple-exterior/weblog/point-arch-1.png";
import PointArch2Image from "../assets/temple-exterior/weblog/point-arch-2.png";
import PointArch3Image from "../assets/temple-exterior/weblog/point-arch-3.png";
import PointArch4Image from "../assets/temple-exterior/weblog/point-arch-4.png";
import PointArch5Image from "../assets/temple-exterior/weblog/point-arch-5.png";

const TempleExteriorWeblog = () => {

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
        </div>
    )
};

export default TempleExteriorWeblog;