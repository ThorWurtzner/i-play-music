import "./Walkthrough.css";
import Welcome from "../../components/Welcome/Welcome";
import { Link } from "@reach/router";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";

export default function Walkthrough({data}) {

    if (data === undefined) {
        return null;
    } else {
        data.map(content => console.log(content))
    }

    return (
        <>
        <Welcome />
        <Page1 />
        <Page2 />
        <Page3 />
        </>
    )
}