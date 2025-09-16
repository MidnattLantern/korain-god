import Styles from "./Weblog.module.css";
import WingsImage from "../assets/symbol/weblog/wings.png";
import PillarsImage from "../assets/symbol/weblog/pillars.png";
import FeetImage from "../assets/symbol/weblog/feet.png";
import CupsImage from "../assets/symbol/weblog/cups.png";
import FinalDesignGuidelinesImage from "../assets/symbol/weblog/final-design-guidelines.png";
import FinalDesignImage from "../assets/symbol/weblog/final-design.png";
import BlenderDesignerComparisonImage from "../assets/symbol/weblog/blender-designer-comparison.png";
import AwkwardThreeDimensionalImage from "../assets/symbol/weblog/awkward-3d.png";
import ThreeDimensionalComponentsImage from "../assets/symbol/weblog/3d-components.png";
import SketchToThreeDimensionalImage from "../assets/symbol/weblog/sketch-to-3d.png";
import ThreeDimensionalFinalRenderImage from "../assets/symbol/weblog/3d-final-render.png";
import ComponentsImage from "../assets/symbol/weblog/components.png";
import ThreeDimensionalMultiplyImage from "../assets/symbol/weblog/3d-multiply.png";
import NoThreeDimensionalMultiplyImage from "../assets/symbol/weblog/no-3d-multiply.png";
import ShineBlendOptionsImage from "../assets/symbol/weblog/shiny-blend-options.png";
import NoShineImage from "../assets/symbol/weblog/no-shine.png";
import ClipToLayerBelowImage from "../assets/symbol/weblog/clip-to-layer-below.png";
import ClipBelowDemonstrationImage from "../assets/symbol/weblog/clip-below-demonstration.png";
import LensDistortionImage from "../assets/symbol/weblog/lens-distortion.png";
import AffinityChannels from "../assets/symbol/weblog/affinity-channels.png";

const SymbolWeblog = () => {

const Chapter = ({ children, id }: { children: React.ReactNode; id?: string }) => {
    return <div id={id} className={Styles.ChapterView}>{children}</div>;
};

    return(
        <div className={Styles.WeblogView}>
            <h1 className={Styles.WeblogTitle}>Making of the Symbol</h1>
            <Chapter id={"components"}>
                <div className={Styles.CenterContent}>
                    <h1>Sketching the components</h1>
                </div>
                <p>We first had to figure out what design language to go for. I experimented with design elements from heavy to light, uniform to maximalist, sturdy to flow, until we found some good balance in between.</p>
                <div className={Styles.CenterContent}>
                    <p>Design ideas for the wings component:</p>
                    <img src={WingsImage} alt={"Couldn't load image"}/>
                    <p>Design ideas for the pillar component:</p>
                    <img src={PillarsImage} alt={"Couldn't load image"}/>
                    <p>Design ideas for the feet component:</p>
                    <img src={FeetImage} alt={"Couldn't load image"}/>
                    <p>Design ideas for the cups component:</p>
                    <img src={CupsImage} alt={"Couldn't load image"}/>
                </div>
            </Chapter>

            <Chapter id={"sketch"}>
                <div className={Styles.CenterContent}>
                    <h1>Final sketch</h1>
                </div>
                <p>Korain's nature is righteous and reliable, so I attempted a design that subconsciously felt its sense of correctness by putting extra emphasis on consistency, alignment, and proportions.</p>
                <p>By adding guidelines and measurements to the elements, I was able to spot where things needed to align perfectly: in halves, thirds, or along shared axes.</p>
                <div className={`${Styles.CenterContent} ${Styles.ShareTwo}`}>
                    <img src={FinalDesignImage} alt={"Couldn't load image"}/>
                    <img src={FinalDesignGuidelinesImage} alt={"Couldn't load image"}/>
                </div>
                <p>You'd probably only notice this if you look at the symbol for an extended period of time, but I believe you can feel its calculation with an instant.</p>
            </Chapter>

            <Chapter id={"blender"}>
                <div className={Styles.CenterContent}>
                    <h1>Modelling in Blender</h1>
                </div>
                <p>The "Curve" tool in Blender works the same way as in Adobe Illustrator and Affinity Designer: nodes connected with lines, and handles determining the sharpness of the curves. The only differences are the buttons and interface, so for me, the only learning curve was figuring out which buttons to press.</p>
                <li>In Object Mode, press Shift + A and select "Bezier" or "Circle".</li>
                <li>Go to Edit Mode, select everything, and delete it to get a blank object.</li>
                <li>You'll find "Draw" and "Curve Pen" in the toolbar. They work like the "Pen" and "Pencil" tools in Affinity Designer. The Select Box is Blender's equivalent of the Node Tool in Illustrator/Designer. Use the G key to move a selected node or handle. Select two nodes and join them with the F key. Toggle between sharp and smooth nodes with the V key while selected: "Vector" makes it sharp, "Aligned" makes it curvy again. To cut a line, select two nodes, press the Y key, then delete it.</li>
                <img src={BlenderDesignerComparisonImage} alt={"Couldn't load image"}/>
                <li>Converting is easy: go back to Object Mode, right-click, and choose "Convert to Mesh".</li>
                <img src={SketchToThreeDimensionalImage} alt={"Couldn't load image"}/>
                <p>{`I worked with one half. I realized I should've used the Mirror modifier to finish the other half, instead I copied and rotated along the horizontal axis. This is bad practice because when you solidify, the substance will be misaligned and twisted, even with the offset set to zero, and hidden issues will backfire. Remember to use Mirror for such instances — it's a more elegant solution. Despite everything, I ended up with a visually functional rendering of the object, but the mesh is far more resource-heavy than necessary.`}</p>
                <img src={AwkwardThreeDimensionalImage} alt={"Couldn't load image"}/>
                <p>The symbol is split to different components making out the outline, the solid part of the scale, and the surrounding circle.</p>
                <img src={ThreeDimensionalComponentsImage} alt={"Couldn't load image"}/>
                <p>Going through all this provide convenience and flexibility to accurately trace different angles if necessary, for this piece, straight head on did the work. It also auto-generates shadows and dept that will be of use later on.</p>
                <img src={ThreeDimensionalFinalRenderImage} alt={"Couldn't load image"}/>
            </Chapter>

            <Chapter>
                <div className={Styles.CenterContent}>
                    <h1>Painting</h1>
                </div>
                <p>Back in Clip Studio Paint, I could easily trace over the rendition and map out components and parts as layers from it.</p>
                <img src={ComponentsImage} alt={"Couldn't load image"}/>
                <p>The shadows from the Blender rendition could be recycled as a multiply layer over the colors.</p>
                <div className={`${Styles.CenterContent} ${Styles.ShareTwo}`}>
                    <img src={NoThreeDimensionalMultiplyImage} alt={"Couldn't load image"}/>
                    <img src={ThreeDimensionalMultiplyImage} alt={"Couldn't load image"}/>
                </div>
                <p>The blending options "Add (Glow)" and "Glow Dodge" are useful when striving for a shiny metallic effect. Following image demonstrates how it looks like without the effect.</p>
                <div className={`${Styles.CenterContent} ${Styles.ShareTwo}`}>
                    <img src={ShineBlendOptionsImage} alt={"Couldn't load image"}/>
                    <img src={NoShineImage} alt={"Couldn't load image"}/>
                </div>
                <p>CSP's tool "Clip to layer below" can be useful when efficiently scattering paint for the textures and applying metallic effect. The image below demonstrate how it works</p>
                <div className={`${Styles.CenterContent} ${Styles.ShareTwo}`}>
                    <img src={ClipToLayerBelowImage} alt={"Couldn't load image"}/>
                    <img src={ClipBelowDemonstrationImage} alt={"Couldn't load image"}/>
                </div>
            </Chapter>

            <Chapter>
                <div className={Styles.CenterContent}>
                    <h1>Final edits</h1>
                </div>
                <p>Chromatic aberration splits the red, green, and blue channels. When used well, it can enhance the image to look less static and give it an unreal effect.</p>
                <p>Clip Studio Paint (version 1.0) does not have an effective tool to split the channels, but I was able to split them through Affinity Photo.</p>
                <p>{'Affinity Photo has a channels window. By disabling a channel as "editable", you can split and achieve chromatic aberration. This symbol is circular, so I used the "Lens Distortion" effect (Found inside Filters > Distort > Lens Distortion). The image below demonstrates an intense lens distortion effect.'}</p>
                <div className={`${Styles.CenterContent} ${Styles.ShareTwo}`}>
                    <img src={AffinityChannels} alt={"Couldn't load image"}/>
                    <img src={LensDistortionImage} alt={"Couldn't load image"}/>
                </div>
                <p>{`I'd like to encourage you to visit Yviira's project on WordAnvil (Project Idoria), where you can read about the lore behind this symbol.`}</p>
            </Chapter>
        </div>
    )
};

export default SymbolWeblog;