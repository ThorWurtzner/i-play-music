// import { Link, Redirect } from "@reach/router";
import React from "react";
import axios from "axios";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            redirect: false
        }
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        axios.post("/.netlify/functions/errorLogging", {
            body: {
                error,
                info
            }
        })
            .then(response => console.log(response))
        // console.error("ErrorBoundary caught and error", error, info);
    }

    // componentDidUpdate() {
    //     if (this.state.hasError) {
    //         setTimeout(() => this.setState({ redirect: true }), 5000);
    //     }
    // }

    render() {
        // if (this.state.redirect) {
        //     return <Redirect to="/playlists" />
        // }

        if (this.state.hasError) {
            return (
                <>
                    <p>{this.props.message}</p>
                </>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;