import { Link } from "@reach/router";
import "./FooterNav.css";

export default function FooterNav() {
    return (
        <nav class="footerNav">
            <Link to="/"><img src="./images/icons/pulse.png" /></Link>
            <Link to="/"><img src="./images/icons/mic.png" /></Link>
            <Link to="/"><img src="./images/icons/mainNavBtn.png" /></Link>
            <Link to="/"><img src="./images/icons/lightMode.png" /></Link>
            <Link to="/"><img src="./images/icons/coq.png" /></Link>
        </nav>
    )
}