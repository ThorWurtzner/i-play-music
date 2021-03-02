// import { useEffect } from "react";
import FooterNav from "../../components/FooterNav/FooterNav";
import Header from "../../components/Header/Header";
import Headline from "../../components/Headline/Headline";
import TrendingCard from "../../components/TrendingCard/TrendingCard";
import "./Trends.css";

export default function Trends() {

    // if (data === undefined) {
    //     return null;
    // }

    // Weird bug like theres some kind of lazy scrolling,
    // there's a huge lag spike when scrolling to second card

    return (
        <>
        <main className="trends">
            <Header />
            <Headline title="Latest Trends" />
            {/* <TrendingCard className="trendingCardFirst" props={data[0]}/> */}
            <TrendingCard className="trendingCardFirst" hashtag="45" image="https://picsum.photos/505" people="2,003" title="Country" />
            <div className="trendingNow">
                <h4>Trending <br /> Now</h4>
                <div className="trendingNowCard">
                    <img src="https://picsum.photos/120" alt="" />
                    <h5>Metal</h5>
                </div>
                <div className="trendingNowCard">
                    <img src="https://picsum.photos/121" alt="" />
                    <h5>Classical</h5>
                </div>
            </div>
            {/* {data.slice(1).map(content => <TrendingCard props={content} key={content.title} />)} */}
            <TrendingCard hashtag="45" image="https://picsum.photos/500" title="Country" />
            <TrendingCard hashtag="45" image="https://picsum.photos/501" title="Country" />
            <TrendingCard hashtag="45" image="https://picsum.photos/502" title="Country" />
        </main>
        <FooterNav />
        </>
    )
}