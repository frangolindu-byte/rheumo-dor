import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Benefits from "@/components/sections/Benefits";
import Ingredients from "@/components/sections/Ingredients";
import HowItWorks from "@/components/sections/HowItWorks";
import ForWhom from "@/components/sections/ForWhom";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import ImageBanner from "@/components/sections/ImageBanner";
import Footer from "@/components/sections/Footer";
import FloatingWA from "@/components/FloatingWA";

export default function HomePage() {
    return (
        <>
            <FloatingWA />
            <main>
                <Hero />
                <TrustBar />
                <Benefits />
                <Ingredients />
                <HowItWorks />
                <ForWhom />
                <Testimonials />
                <FAQ />
                <FinalCTA />
                <ImageBanner />
            </main>
            <Footer />
        </>
    );
}
