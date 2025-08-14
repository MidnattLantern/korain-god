import Styles from "./ProjectDetail.module.css";
import { useWindowSize } from "../../hooks/useWInidowSize";
import { useState } from "react";

type ProjectDetailProps = {
    title: string;
    smallAsset: string;
    largeAsset: string;
    smallFileInfo: string;
    largeFileInfo: string;

    titleAlt1?: string;
    smallAssetAlt1?: string;
    largeAssetAlt1?: string;
    smallFileInfoAlt1?: string;
    largeFileInfoAlt1?: string;
    
    titleAlt2?: string;
    smallAssetAlt2?: string;
    largeAssetAlt2?: string;
    smallFileInfoAlt2?: string;
    largeFileInfoAlt2?: string;
};

const ProjectDetail = ({
    title, smallAsset, largeAsset, smallFileInfo, largeFileInfo,
    titleAlt1, smallAssetAlt1, largeAssetAlt1, smallFileInfoAlt1, largeFileInfoAlt1,
    titleAlt2, smallAssetAlt2, largeAssetAlt2, smallFileInfoAlt2, largeFileInfoAlt2,
} : ProjectDetailProps) => {
    const { width } = useWindowSize();
    const [previewImage, setPreviewImage] = useState<string>(smallAsset);

    const Wallpaper = () => {
        return(
            <div className={Styles.WallpaperFrame}>
                <div className={Styles.WallpaperOverlay}/>
                <img className={Styles.WallpaperAppearance} src={smallAsset} alt={""}/>
            </div>
        )
    };

    const VariationsView = () => {
        return(<>
            <div className={Styles.VariationSection} onMouseEnter={() => {setPreviewImage(smallAsset)}}>
                <p className={Styles.SmallTitle}>{title}</p>
                <div className={Styles.DownloadButtonsSection}>
                    <a href={largeAsset} download={`Korain God ${title} ${largeFileInfo}`}><button>↓ as {largeFileInfo}</button></a>
                    <a href={smallAsset} download={`Korain God ${title} ${smallFileInfo}`}><button>↓ as {smallFileInfo}</button></a>
                </div>
            </div>

            { smallAssetAlt1 &&
            <div className={Styles.VariationSection} onMouseEnter={() => {setPreviewImage(smallAssetAlt1)}}>
                <p className={Styles.SmallTitle}>{titleAlt1}</p>
                <div className={Styles.DownloadButtonsSection}>
                    <a href={largeAssetAlt1} download={`Korain God ${title} ${largeFileInfoAlt1}`}><button>↓ as {largeFileInfoAlt1}</button></a>
                    <a href={smallAssetAlt1} download={`Korain God ${title} ${smallFileInfoAlt1}`}><button>↓ as {smallFileInfoAlt1}</button></a>
                </div>
            </div>
            }

            { smallAssetAlt2 &&
            <div className={Styles.VariationSection} onMouseEnter={() => {setPreviewImage(smallAssetAlt2)}}>
                <p className={Styles.SmallTitle}>{titleAlt2}</p>
                <div className={Styles.DownloadButtonsSection}>
                    <a href={largeAssetAlt2} download={`Korain God ${title} ${largeFileInfoAlt2}`}><button>↓ as {largeFileInfoAlt2}</button></a>
                    <a href={smallAssetAlt2} download={`Korain God ${title} ${smallFileInfoAlt2}`}><button>↓ as {smallFileInfoAlt2}</button></a>
                </div>
            </div>
            }
        </>)
    };

    const PhoneView = () => {
        return(<>
            <h1 className={Styles.BigTitle}>{title}</h1>
            <img className={Styles.ImageSize} src={previewImage} alt="No image"/>
            <VariationsView/>
        </>)
    };

    const LargeView = () => {
        return(<>
            <div className={Styles.TitleAndVariations}>
                <h1 className={Styles.BigTitle}>{title}</h1>
                <VariationsView/>
            </div>
            <img className={Styles.ImageSize} src={previewImage} alt="No image"/>
        </>)
    };

    return (
        <div className={Styles.ProjectDetailView}>
            <Wallpaper/>
            {width < 1024 ? <PhoneView/> : <LargeView/>}
        </div>
    )
};

export default ProjectDetail;