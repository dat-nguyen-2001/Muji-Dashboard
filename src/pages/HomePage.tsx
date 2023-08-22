import Banner from "../components/banner";
import Header from "../components/header";
import Slider from "../components/slider";

function HomePage() {
    return (
        <>
            <Header />
            <div className="mt-10">
                <Banner />
                <Slider />
            </div>
        </>
    );
}

export default HomePage;