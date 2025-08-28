import Styles from "./Weblog.module.css";

const ShringWeblog = () => {

    return (
        <div className={Styles.WeblogView}>
            <p>The feet folow the same style as from Mora's shrine design.</p>
            <p>Given I needed a proper shape of the scale, this was my second shot at doing it right. From the point of doing the vectors and better typology. I also learned the importance of keeping all the parts and components in oragnized collections.</p>
            <p>I learned that you need at least 16 GB RAM to do complex meshes and objects.</p>
            <p>By design of the "fins" and the "wings" they were canonically twisting, but to this point I've only drawn/ moddeled the scale in 2D. This time I had to actually model the scale in 3D. So I have a 2D vector curve, merged to a flat mesh, how do I twist it? By using the "Simple Deform" modifier. There are multiple ways to manipulate and warp a flat plane, but "Simple Deform" fit my current skill level. I recomend holding the mesh as close to its origin point in the Edit Mode as close as possible when starting, then play/ mess around and carefully go from there.</p>
            <p>I combined the small components to four big ones: the pole/ crown, the wings, the left and right cups. In case we ever need the scale to actually tilt, now it can be easily modified. By adding bones and connecting the components to the respective bones, the scale is able to tilt even if you import it as an FBX file to Unity.</p>
            <p>exported as images, I could trace over the render with masked layers that made up thresholds of the shrine. Normally, I would've sorted the parts by the facing direction, but this time I stuck to as few layers as possible to work with every other threshold instead.</p>
            <p>THat makes sense for an uncomplicated shape as the pedestal, but the scale has a lot more complexity</p>
        </div>
    )
};

export default ShringWeblog;