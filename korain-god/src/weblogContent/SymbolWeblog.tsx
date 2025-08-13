import Styles from "./Weblog.module.css";

const SymbolWeblog = () => {

    return(
        <div className={Styles.WeblogView}>
            <p>Considering Korain's righteous and reliable nature, I didn't just want his symbol to look appealing. I wanted the subconscious mind to <strong>feel</strong> its sense of correctness. So I put extra emphasis on consistency, alignment, and proportion, more than I usually do.</p>
            <p>By adding guidelines and measurements to the elements, I was able to spot where things needed to align perfectly — whether in halves, thirds, or along shared axes.</p>
            <p>You'd only apprechiate this fully if you look at the symbol for an extended period of time, but I believe you can feel it even if you just look at it for an instant.</p>

            <div id={"blender"}>
                <p>The "Curve" tool in Blender works the same way as in Adobe Illustrator and Affinity Designer: nodes connected with lines, and handles determining the sharpness of the curves. The only differences are the buttons and interface, so for me, the only learning curve was figuring out which buttons to press.</p>
                <li>In Object Mode, press Shift + A and select "Bezier" or "Circle".</li>
                <li>Go to Edit Mode, select everything, and delete it to get a blank object.</li>
                <li>You'll find "Draw" and "Curve Pen" in the toolbar. They work like the "Pen" and "Pencil" tools in Affinity Designer. The Select Box is Blender's equivalent of the Node Tool in Illustrator/Designer. Use the G key to move a selected node or handle. Select two nodes and join them with the F key. Toggle between sharp and smooth nodes with the V key while selected: "Vector" makes it sharp, "Aligned" makes it curvy again. To cut a line, select two nodes, press the Y key, then delete it.</li>
                <li>Converting is easy: go back to Object Mode, right-click, and choose "Convert to Mesh".</li>
                <p>I worked with one half. I realized I should have used the Mirror modifier to finish the other half, but I had forgotten about that feature and made the mistake of copying and rotating along the horizontal axis. This is bad practice because when you solidify, the substance will be misaligned and twisted, even with the offset set to zero, and hidden issues will come back to bite me. Remember to use Mirror for such instances — it’s a more elegant solution. Despite everything, I ended up with a visually functional rendering of the object, but the mesh is far more resource-heavy than necessary.</p>
            </div>
        </div>
    )
};

export default SymbolWeblog;