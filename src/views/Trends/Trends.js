import { useEffect } from "react";
import Header from "../../components/Header/Header";
import Headline from "../../components/Headline/Headline";
import TrendingCard from "../../components/TrendingCard/TrendingCard";
import "./Trends.css";

export default function Trends({data}) {

    if (data === undefined) {
        return null;
    }

    return (
        <main className="trends">
            <Header />
            <Headline />
            {data.map(content => <TrendingCard props={content} key={content.title} />)}
        </main>
    )
}