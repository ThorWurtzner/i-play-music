import "./AlbumDetails.css";
import Header from "../../components/Header/Header";
import Hashtag from "../../components/Hashtag/Hashtag";
import ViewAll from "../../components/ViewAll/ViewAll";
import Song from "../../components/Song/Song";
import FooterNav from "../../components/FooterNav/FooterNav";

export default function AlbumDetails(props) {
    return (
        <main className="albumDetails">
            <Header heading="ALBUM" />
            <section className="albumDetails__topContainer">
                <img src={props.image} alt="Album Cover" />
                <div className="albumDetails__topContainer__overlay"></div>

                <div className="albumDetails__topContainer__content">
                    <div className="albumDetails__topContainer__content__album">
                        <h1>{props.albumTitle}</h1>
                        <h3>{props.songCount} Songs</h3>
                    </div>
                    <div className="albumDetails__topContainer__content__hashtags">
                        <p className="albumDetails__topContainer__content__hashtags__title">genres hashtags</p>
                        <div>
                            <Hashtag text="country" />
                            <Hashtag text="ballad" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="albumDetails__songContainer">
                <ViewAll title="All Songs" visibility="hidden" />
                <div className="albumDetails__songContainer__songs">
                    <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3:58" />
                    <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3:58" />
                    <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3:58" />
                    <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3:58" />
                    <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3:58" />
                    <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3:58" />
                    <Song song="Old Town Road" artist="Billy Ray Cyrus" length="3:58" />
                </div>
            </section>
            <FooterNav />
        </main>
    )
}