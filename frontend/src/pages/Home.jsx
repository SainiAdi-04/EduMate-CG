import Hero from "@/components/Hero.jsx";
import Header from "../components/Header.jsx";
import HowItWorks from "@/components/HowItWorks.jsx";


const Home = () => {
    return(
        <div className="min-h-screen bg-background">
        <Header/>
        <Hero />
        <HowItWorks />
        </div>
    )
}

export default Home;