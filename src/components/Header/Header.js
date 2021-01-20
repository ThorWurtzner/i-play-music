import "./Header.css";
import { Link } from "@reach/router";

export default function Header(props) {

    function goBack() {
        window.history.back();
    }

    return (
        <header className="header">
            <button onClick={goBack}><img src="./images/icons/arrow-back.png" alt="back arrow" /></button>
            <h3></h3>
            <img src="./images/icons/search.png" alt="search icon" />
        </header>

        // <header className="header">
        //     <img src={props.leftIcon} alt={props.leftAlt} />
        //     <h3>{props.title}</h3>
        //     <img src={props.rightIcon} alt={props.rightAlt} />
        // </header>
    )
}