import { Component } from "react";
import axios from "axios";
import Login from "./views/Login/Login";
import { navigate, Redirect } from "@reach/router";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: null
        }
    }

    componentDidCatch(error, info) {
        console.log("ErrorBoundary caught this:", error, info);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            navigate("/")
            return (
                <Login />
            )
        } else {
            return this.props.children
        }
    }
}