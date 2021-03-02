import "./Walkthrough.css";
import Welcome from "../../components/Welcome/Welcome";
// import { Link } from "@reach/router";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";
import Page3 from "./Page3/Page3";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import TokenContext from "../../TokenContext";

export default function Walkthrough() {

    var [token] = useContext(TokenContext);
    var [content, setContent] = useState({});

    useEffect(function() {
        axios.get("https://api.spotify.com/v1/me/", {
            headers: {
                "Authorization": "Bearer " + token.access_token
            }
        })
        .then(response => setContent(response.data));
    }, [token, setContent])
    // The array contains stuff that's needed from outside the useEffect, in this case that the token variable and setContent function
    console.log(content);

    return (
        <>
        <Welcome />
        <Page1 />
        <Page2 />
        <Page3 />
        </>
    )
}