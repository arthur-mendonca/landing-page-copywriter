import Bio from "./components/Bio";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Modules from "./components/Modules";
import MarketingLayout from "./layout";

const MarketingPage = () => {
    return (
        <MarketingLayout>
            <Hero />
            <Bio />
            <Modules />
            <Footer />
        </MarketingLayout>
    );
};

export default MarketingPage;