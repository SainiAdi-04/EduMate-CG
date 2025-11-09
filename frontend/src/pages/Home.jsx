import Hero from "@/components/Hero.jsx";
import Header from "../components/Header.jsx";
import HowItWorks from "@/components/HowItWorks.jsx";
import Features from "@/components/Features.jsx";
import Footer from "@/components/Footer.jsx";



const Home = () => {
    return(
        <div className="min-h-screen bg-background">
        <Header/>
        <Hero />
        <Features />
        <HowItWorks />
        <Footer/>
        </div>
    )
}

export default Home;