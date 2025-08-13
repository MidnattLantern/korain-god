import Styles from "./Weblog.module.css";

const PortraitWeblog = () => {

    return(
        <div className={Styles.WeblogView}>
            <p>Working with a colour like colour pallete made me a little bit nervous. I normally stick to purple and red colours so this was outside my element.</p>
            <p>The "foundation" layer hold the lineart and shading, set as Multiply. Multiply makes it blend with paint layers underneath while maintinging a dark contrast.</p>
            <p>Folder containing the paint of Korain was masked. This makes it easier to apply individual layers, as the edges are refined just once. Each pixel based editor programs has a "mask" feature, you don't paint directly with colour, you paint what should exist.</p>
            <p>The paint folder has a grey tone as foundation, the same for the "foundation" lineart and shading layer</p>
            <p>Korain's colour palette remain loyal to a copper palette: a spectrum between orange and turqouse.</p>
            <p>In the early stage, I just throw paint with no consideration for the edges, this is to see what balance across the canvas works in the big picture.</p>
            <p>To get into the mood, I listen to dark ambient, such as God Body Disconnect: Existential and transcendental. It helps me get into the right wavelength.</p>
            <p>The actual content for the stone tablet wasn't important, so for the writings, I copy-pasted Lorem ipsum text, mirrored, then rotated and stretched it.</p>
        </div>
    )
};

export default PortraitWeblog;