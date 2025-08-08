import Styles from "./ClientCredits.module.css";

const ClientCredits = () => {

    return(
        <div className={Styles.ClientCreditsView}>
            <h1 className={Styles.Title}>{"Korain God"}</h1>
            <p className={Styles.Text}>{"Visit Yviira's project Idoria on WordAnvil: "}<br/><a target="_blank" href="https://www.worldanvil.com/w/idoria-yviira">{"worldanvil.com/w/idoria-yviira"}</a></p>
        </div>
    )
};

export default ClientCredits;