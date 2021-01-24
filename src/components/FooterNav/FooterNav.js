import { Link } from "@reach/router";
import "./FooterNav.css";

export default function FooterNav(props) {
    return (
        <nav className="footerNav" style={{backgroundColor: props.color}}>
            <Link to="/albums"><img src="./images/icons/pulse.png" alt="Navigation" /></Link>
            <Link to="/featured"><img src="./images/icons/mic.png" alt="Navigation" /></Link>
            <Link to="/feed"><img src="./images/icons/mainNavBtn.png" alt="Navigation" /></Link>
            <Link to="/playlists"><img src="./images/icons/lightMode.png" alt="Navigation" /></Link>
            <img src="./images/icons/coq.png" alt="Navigation" />
        </nav>
    )
}