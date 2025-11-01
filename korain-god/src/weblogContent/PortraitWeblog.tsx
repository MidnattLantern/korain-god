import Styles from "./Weblog.module.css";
import OrangeAndTealColorSchemeImage from "../assets/portrait/weblog/orange-and-teal-color-scheme.png";
import MultiplyImage from "../assets/portrait/weblog/multiply.png";
import HairSketchImage from "../assets/portrait/weblog/hair-sketch.png";
import TenHandsImage from "../assets/portrait/weblog/ten-hands.png";
import AltScaleImage from "../assets/portrait/weblog/alt-scale.png";
import FinalSketchNotabImage from "../assets/portrait/weblog/final-sketch-notab.png";
import ColorSplashImage from "../assets/portrait/weblog/color-splash.png";
import LoremIpsumImage from "../assets/portrait/weblog/lorem-ipsum.png";
import TealOrangeHairImage from "../assets/portrait/weblog/teal-orange-hair.png";
import NoFilterImage from "../assets/portrait/downloadable/korain-bust-portrait-alt1-small.jpg";

const PortraitWeblog = () => {

    const Chapter = ({ children, id }: { children: React.ReactNode; id?: string }) => {
        return <div id={id} className={Styles.ChapterView}>{children}</div>;
    };

    return(
        <div className={Styles.WeblogView}>
            <h1>MAKING OF THE PORTRAIT</h1>
            <Chapter>
                <p>Korain's design take part inspiration from Hinduism, Tiberian monks, Viegro from League of Legends, and a color palette of copper. He hold items associated with justice and order.</p>
                <p>I normally stick to purple and red colors so this project was outside my comfort zone. I was given this palette as reference:</p>
                <img src={OrangeAndTealColorSchemeImage} alt="OrangeAndTealColorSchemeImage"/>
                <p>Source: <a href="https://www.designerblogs.com/color-love-orange-teal/" target="_blank">designerblogs.com/color-love-orange-teal</a></p>
            </Chapter>

            <Chapter>
                <h1>Sketching</h1>
                <p>I proposed 4 hairstyles: A curly type to contrast the 'stable' elements like a refresher, a straight type would further contribute to his fair and justice-like theme. Neck length would make him feel more liberal, shorter more conservative:</p>
                <img src={HairSketchImage} alt="HairSketchImage"/>
                <p>Initially he was meant to have ten arms rather than eight. This is what the two additional hand would've looked like:</p>
                <img src={TenHandsImage} alt="TenHandsImage"/>
                <p>This is what alternatively the scale could've looked like:</p>
                <img src={AltScaleImage} alt="AltScaleImage"/>
                <p>The requested items for Korain to hold are connected to the theme of justice.</p>
                <p>Before drawing the stone tablet, I sketched the robe, inspired by Tiberian monks.</p>
                <img src={FinalSketchNotabImage} alt="FinalSketchNotabImage"/>
            </Chapter>

            <Chapter>
                <h1>Painting</h1>
                <p>The layer making up the lineart and shading is a grey layer set as "Multiply". A multiply layer makes it blend with paint layers underneath while maintaining a dark contrast. This image show the difference, left as normal, right as multiply:</p>
                <img src={MultiplyImage} alt="MultiplyImage"/>
                <p>In the early stage, I just throw paint with no consideration for the edges, this is to see what balance across the canvas works in the big picture.</p>
                <img src={ColorSplashImage} alt="ColorSplashImage"/>
                <p>The actual content for the stone tablet wasn't important, so for the writings, I copy-pasted Lorem ipsum text, mirrored, then rotated and stretched it.</p>
                <img src={LoremIpsumImage} alt="LoremIpsumImage"/>
                <p>The hair takes inspiration from how copper behaves as it oxidize: orange in early stages, shifting to turquoise as it's being exposed.</p>
                <img src={TealOrangeHairImage} alt="TealOrangeHairImage"/>
                <p>{`I saw a Tiberian attire with two colors and decided to apply that for Korain's design. Working with a divinity and copper as a material for inspiration, I wasn't bound by hard logic and could experiment with shimmering behavior of copper and got a shimmering effect I think looks neat. "Add (glow)" is really effective.`}</p>
                <p>The color balance felt a bit lacking confidence, as it's outside my palette, so I compensated the shy tones with level correction in Affinity Photo 2 to make it more yellow and teal. This is how it looks life before the level adjustments:</p>
                <img src={NoFilterImage} alt="NoFilterImage"/>
            </Chapter>

        </div>
    )
};

export default PortraitWeblog;