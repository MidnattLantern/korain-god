import Styles from "./Weblog.module.css";

const ShringWeblog = () => {

    const Chapter = ({ children, id }: { children: React.ReactNode; id?: string }) => {
        return <div id={id} className={Styles.ChapterView}>{children}</div>;
    };

    return (
        <div className={Styles.WeblogView}>
            <Chapter>
                <p>The shrine is described as a pedestal with a functional scale made of copper. To stay true to the theme among the other shrines in the World of Idoria, I did borrow elements from the <a href="https://midnattlantern.github.io/mora-goddess/" target="_blank">shrine design of Mora.</a></p>            
                <p>Regarding the model design of the scale, I could reuse parts from the one I made for the symbol, which contained mistakes and ineffective and performance heavy typology. It was so bad, my M1 8GB MacBook couldn't even open it anymore and I had to switch to my beefier Ryzen 7 16 GB PC to work on it. No, I needed to do it from scratch and get decent typology — on my PC just to be sure. This reiteration had clearner typology and better collections management.</p>
                <p>By design of the "fins" and the "wings", they were twisting. But that wasn't illustrated up until this point as the previous includation featured 2-dimensional renders.</p>
                <p>I captured the outlines with the curve tool again, merget to a flat mesh, then twist it. My method of twisting included the "Simple Deform" modifier. I recoment holding the mest as clsoe to its origin point in the Edit Mode as close as possible when starting out, then play and mess around with the X Y Z values, as you carefully go from there.</p>
                <p>The major components are: the pole/ crown, the wings, the left and right cups. They're linked to individual bones that can be used for tilting it like a functional scale, even if you import it as an FBX file to Unity.</p>
                <p>Exported as images, I could trace over the render with masked layers that made up thresholds of the shrine. I stuck to as few layers as possible by marking out every other threshold, then locking the transparency. The podium just needed two 'threshold' layers, while the scale needed three.</p>
                <p>I don't outline the shaped with vector or shape tools, I do it by hand with a 'rough' non-pixel-perfect pencil. Stabilizer helps me get smooth lines for this sort of task. This saves some human element.</p>
                <p>With the layers set up individually and pixels locked, I can easily shade them with marking tool.</p>
                <p>After making a greyscale render that I'm happy with, I could merge the layers and bring out colors with the "color balance" correction tool, and using "overlay" and "color dodge" layer styles. For the podium I added a rough stone texture layer set to a low opacity and "Multiply".</p>
                <p>For the copper scale, I awakened the metalic feel with an "Add glow" overlay layer, it's a helpful layer style for getting vibrant effects such as sunlight or a metalic glow.</p>
            </Chapter>
        </div>
    )
};

export default ShringWeblog;