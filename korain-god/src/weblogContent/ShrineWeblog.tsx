import Styles from "./Weblog.module.css";
import MoraShrineImage from "../assets/other/mora-shrine.jpg";
import TwistingFinsImage from "../assets/shrine/weblog/twisting-fins.jpg";
import MirrorWingImage from "../assets/shrine/weblog/mirror-wing.png";
import FinImage from "../assets/shrine/weblog/fin.png";
import WingSolidifyImage from "../assets/shrine/weblog/wing-solidify.png";
import FrontOfSketchImage from "../assets/shrine/weblog/front-of-sketch.png";
import BoneCanTiltImage from "../assets/shrine/weblog/bone-can-tilt.png";
import TiltedImage from "../assets/shrine/weblog/tilted.png";
import RenditionOptionsImage from "../assets/shrine/weblog/rendition-options.png";
import ScaleTraceImage from "../assets/shrine/weblog/scale-trace.png";
import SymbolSectionsImage from "../assets/shrine/weblog/symbol-sections.png";
import MarkAndShadeImage from "../assets/shrine/weblog/mark-and-shade.png";
import LevelShiftImage from "../assets/shrine/weblog/level-shift.png";
import ShadowSectionImage from "../assets/shrine/weblog/shadow-section.png";
import { Link } from "react-router-dom";

const ShrineWeblog = () => {

    const Chapter = ({ children, id }: { children: React.ReactNode; id?: string }) => {
        return <div id={id} className={Styles.ChapterView}>{children}</div>;
    };

    return (
        <div className={Styles.WeblogView}>
            <h1 className={Styles.WeblogTitle}>Making of the Shrine</h1>
            <Chapter>
                <h1>Modeling the scale</h1>
                <p>Regarding the model design of the scale, I could reuse parts from the one I made for the <Link to="/symbol">symbol</Link>, which contained mistakes and ineffective and performance heavy typology. It was so bad, my M1 8GB-RAM MacBook couldn't even open the document anymore and I had to switch to my beefier Ryzen-5 3600*12 16GB-RAM PC to work on it. I needed to do it from scratch with better typology — on my PC just to be sure. This new reiteration had cleaner typology and better collections management.</p>
                <p>By design, the anatomy of the "fins" and the "wings" are twisting. But that wasn't illustrated up until this point as the previous inclusion featured 2-dimensional renders.</p>
                <img src={TwistingFinsImage} alt="TwistingFinsImage"/>
                <p>I captured the outlines with the curve tool again, merge to a flat mesh, then twist it. My method of twisting included the "Simple Deform" modifier. I recommend holding the mesh as close to its origin point in the Edit Mode as close as possible when starting out, then play around with the X Y Z values, as you carefully go from there.</p>
                <p>With one fin twisted, next, applying mirror:</p>
                <div className={Styles.ShareTwo}>
                    <img src={MirrorWingImage}/>
                    <img src={FinImage} alt="FinImage"/>
                </div>
                <p>After that, I applied a solidify modifier, and repeated the same steps of the other wings/ fins.</p>
                <img src={WingSolidifyImage} alt="WingSolidifyImage"/>
                <p>Each component was formed in front of a sketch.</p>
                <img src={FrontOfSketchImage} alt="FrontOfSketchImage"/>
                <p>The major anatomical components are: the pole/ crown, the wings, the left and right cups. They're linked to individual bones that can be used for tilting it like a functional scale, even if you import it as an FBX file to Unity.</p>
                <div className={Styles.ShareTwo}>
                    <img src={BoneCanTiltImage} alt="BoneCanTiltImage"/>
                    <img src={TiltedImage} alt="TiltedImage"/>
                </div>
                </Chapter>

                <Chapter>
                    <h1>Modeling the shrine</h1>
                    <p>The shrine is described as a pedestal with a functional scale made of copper. To stay true to the theme among the other shrines in the World of Idoria, I did borrow elements from the <a href="https://midnattlantern.github.io/mora-goddess/" target="_blank">shrine design of Mora.</a></p>
                    <img src={MoraShrineImage} alt="MoraShrineImage"/>
                    <p>These are the designs I proposed:</p>
                    <img src={RenditionOptionsImage}/>
                    <p>We went with the first option, but making the table circular as well.</p>
                </Chapter>

                <Chapter>
                <h1>Painting</h1>
                <p>I made renditions,  I could trace over the render with masked layers that made up thresholds of the shrine. I stuck to as few layers as possible by marking out every other threshold, then locking the transparency. The podium just needed two 'threshold' layers, while the scale needed three.</p>
                <div className={Styles.ShareTwo}>
                    <img src={ScaleTraceImage} alt="ScaleTraceImage"/>
                    <img src={ShadowSectionImage} alt="ShadowOutlineImage"/>
                </div>
                <p>The scale itself being more complex was divided into three layers, making it easier to maintain the shading. The following image demonstrates the sections as vibrant colors:</p>
                <img src={SymbolSectionsImage} alt="SymbolSectionsImage"/>
                <p>With the layers set up individually and pixels locked, I can easily shade them with marking tool.</p>
                <img src={MarkAndShadeImage} alt="MarkAndShadeImage"/>
                <p>After making a grayscale render that I'm happy with, I could merge the layers and bring out colors with the "color balance" correction tool, and using "overlay" and "color dodge" layer styles. For the podium I added a rough stone texture layer set to a low opacity and "Multiply".</p>
                <img src={LevelShiftImage} alt="LevelShiftImage"/>
                <p>For the copper scale, I awakened the metallic feel with an "Add glow" overlay layer, it's a helpful layer style for getting vibrant effects such as sunlight or a metallic glow.</p>
            </Chapter>
        </div>
    )
};

export default ShrineWeblog;