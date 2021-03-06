import "./Header.css";

export default function Header(props) {

    // function goBack() {
    //     window.history.back();
    // }

    return (
        <header className="header">
            <button onClick={() => window.history.back()}><img src="/images/icons/arrow-back.png" alt="back arrow" /></button>
            <h3>{props.heading}</h3>
            <img src="/images/icons/search.png" alt="search icon" style={{visibility: props.visibility}} />
        </header>

        // <header className="header">
        //     <img src={props.leftIcon} alt={props.leftAlt} />
        //     <h3>{props.title}</h3>
        //     <img src={props.rightIcon} alt={props.rightAlt} />
        // </header>
    )
}