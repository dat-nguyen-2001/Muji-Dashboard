import Banner from "../components/banner";
import Header from "../components/header";
import Carousel from "../components/carousel";

function HomePage() {
    return (
        <>
            <Header />
            <div className="mt-10">
                <Banner />
                <Carousel />
            </div>
        </>
    );
}

export default HomePage;