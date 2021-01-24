import "./Featured.css";
import Headline from "../../components/Headline/Headline";
import Header from "../../components/Header/Header";
import FooterNav from "../../components/FooterNav/FooterNav";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";

export default function Featured() {
    return (
        <main className="featured">
            <Header heading="FEATURED" />
            <Headline title="Featured" />

            <div>
                <FeaturedCard image="https://picsum.photos/700" album="The Greatest Showman" type="Soundtrack" />
                <FeaturedCard image="https://picsum.photos/701" album="The Greatest Showman" type="Soundtrack" />
                <FeaturedCard image="https://picsum.photos/702" album="The Greatest Showman" type="Soundtrack" />
                <FeaturedCard image="https://picsum.photos/703" album="The Greatest Showman" type="Soundtrack" />
            </div>

            <FooterNav />
        </main>
    )
}