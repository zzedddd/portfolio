import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStackParallax from "@/components/TechStack";
import Work from "@/components/Work";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <TechStackParallax />
            <Work />
            <Testimonials />
        </main>
    );
}
