import Styles from "./Footer.module.css";
import { useWindowSize } from "../../hooks/useWInidowSize";

const Footer = () => {
    const { width } = useWindowSize();

    const AlignLargeScreen = () => {
        return (
            <table>
                <tr>
                    <td><a href="https://www.worldanvil.com/w/idoria-yviira" target="_blank">worldanvil.com/w/idoria-yviira</a></td>
                    <td><a href="https://www.patreon.com/c/MidnattLantern" target="_blank">patreon.com/c/MidnattLantern</a></td>
                    <td><a href="https://github.com/MidnattLantern" target="_blank">github.com/MidnattLantern</a></td>
                </tr>
                <tr>
                    <td><a href="https://bsky.app/profile/midnatt-lantern.bsky.social" target="_blank">bsky.app/profile/midnatt-lantern.bsky.social</a></td>
                    <td><a href="https://www.artstation.com/midnight_lantern" target="_blank">artstation.com/midnight_lantern</a></td>
                    <td></td>
                </tr>
            </table>
        )
    };

    const AlignSmallScreen = () => {
        return (
            <div className={Styles.Vertical}>
                <td><a href="https://www.worldanvil.com/w/idoria-yviira" target="_blank">worldanvil.com/w/idoria-yviira</a></td>
                <td><a href="https://www.patreon.com/c/MidnattLantern" target="_blank">patreon.com/c/MidnattLantern</a></td>
                <td><a href="https://github.com/MidnattLantern" target="_blank">github.com/MidnattLantern</a></td>
                <td><a href="https://bsky.app/profile/midnatt-lantern.bsky.social" target="_blank">bsky.app/profile/midnatt-lantern.bsky.social</a></td>
                <td><a href="https://www.artstation.com/midnight_lantern" target="_blank">artstation.com/midnight_lantern</a></td>
            </div>
        )
    }

    return(
        <div className={Styles.FooterView}>

        {width > 1024 ? <>
            <AlignLargeScreen/>
        </> : <>
            <AlignSmallScreen />
        </>}
        </div>
    )
};

export default Footer;