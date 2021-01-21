import { Link } from "@reach/router";
import "./FooterNav.css";

export default function FooterNav() {
    return (
        <nav className="footerNav">
            <Link to="/"><img src="./images/icons/pulse.png" alt="Navigation" /></Link>
            <Link to="/"><img src="./images/icons/mic.png" alt="Navigation" /></Link>
            <Link to="/"><img src="./images/icons/mainNavBtn.png" alt="Navigation" /></Link>
            <Link to="/"><img src="./images/icons/lightMode.png" alt="Navigation" /></Link>
            <Link to="/"><img src="./images/icons/coq.png" alt="Navigation" /></Link>
        </nav>
    )
}