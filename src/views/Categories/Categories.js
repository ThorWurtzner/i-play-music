import Header from "../../components/Header/Header";
import Headline from "../../components/Headline/Headline";
import FooterNav from "../../components/FooterNav/FooterNav";
import "./Categories.css";
import Category from "../../components/Category/Category";
import Undercategories from "../../components/Undercategories/Undercategories";

export default function Categories(props) {

    function randomHsl() {
        return `hsla(${(Math.random() * 360)}, 80%, 40%, 1`;
    }

    return (
        <main className="categories">
            <Header heading="CATEGORIES" />
            <Headline title="Categories" />

            <section className="categories__container">
                <Category category="Alternative" color={randomHsl()} />
                <Category category="Blues" color={randomHsl()} />
                <Undercategories />
                <Category category="Classical" color={randomHsl()} />
                <Category category="Country" color={randomHsl()} />
                <Category category="Dance" color={randomHsl()} />
                <Category category="Electronic" color={randomHsl()} />
                <Category category="Fitness" color={randomHsl()} />
                <Category category="Hip-Hop/Rap" color={randomHsl()} />
                <Category category="Industrial" color={randomHsl()} />
            </section>

            <FooterNav />
        </main>
    )
}