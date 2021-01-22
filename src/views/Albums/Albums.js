import AlbumCover from "../../components/AlbumCover/AlbumCover";
import AlbumSpecifics from "../../components/AlbumSpecifics/AlbumSpecifics";
import FooterNav from "../../components/FooterNav/FooterNav";
import Header from "../../components/Header/Header";
import Headline from "../../components/Headline/Headline";
import ViewAll from "../../components/ViewAll/ViewAll";
import "./Albums.css";

export default function Albums() {
    return (
        <>
        <main className="albums">
            <Header heading="MUSIC" />
            <Headline title="All Albums" />
            <section className="albums__featured">
                <ViewAll title="Featured Albums" />
                <div className="albums__featured__images">
                    <AlbumCover size="130px" image="https://picsum.photos/100" />
                    <AlbumCover size="130px" image="https://picsum.photos/101" />
                    <AlbumCover size="130px" image="https://picsum.photos/102" />
                </div>
            </section>

            <section className="albums__list">
                <ViewAll title="New Releases" />
                <div>
                    <AlbumSpecifics size="50px" image="https://picsum.photos/50" album="Old Town Road" artist="Billy Ray Cyrus" songCount="12" />
                    <AlbumSpecifics size="50px" image="https://picsum.photos/51" album="Old Town Road" artist="Billy Ray Cyrus" songCount="12" />
                    <AlbumSpecifics size="50px" image="https://picsum.photos/52" album="Old Town Road" artist="Billy Ray Cyrus" songCount="12" />
                    <AlbumSpecifics size="50px" image="https://picsum.photos/53" album="Old Town Road" artist="Billy Ray Cyrus" songCount="12" />
                </div>
            </section>
        </main>
        <FooterNav />
        </>
    )
}