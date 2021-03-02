import "./Feed.css";
import Headline from "../../components/Headline/Headline";
import Hashtag from "../../components/Hashtag/Hashtag";
import Header from "../../components/Header/Header";
import FeedCard from "../../components/FeedCard/FeedCard";
import FooterNav from "../../components/FooterNav/FooterNav";

export default function Feed({data}) {

    return (
        <>
        <main className="feed">
            <Header />
            <Headline title="Events Feed" />
            <section className="feed__hashtagContainer">
                <Hashtag text="spotify" />
                <Hashtag text="musicworld" />
                <Hashtag text="jazz" />
                <Hashtag text="billboard" />
            </section>
            <FeedCard image="https://picsum.photos/400" title="Coachella 2019 Day Three Hightlights" />
            <FeedCard image="https://picsum.photos/401" title="Coachella 2019 Day Three Hightlights" />
            <FeedCard image="https://picsum.photos/402" title="Coachella 2019 Day Three Hightlights" />
        </main>
        <FooterNav />
        </>
    )
}