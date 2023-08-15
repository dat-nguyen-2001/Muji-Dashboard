import Banner from "../components/banner";
import Header from "../components/header";

function HomePage() {
    return (
        <>
            <Header />
            <div className="mt-10">
                <Banner />
            </div>
        </>
    );
}

export default HomePage;