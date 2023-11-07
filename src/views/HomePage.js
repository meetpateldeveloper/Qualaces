import FooterBar from "../components/FooterBar";
import Hero from "../components/Hero";
import NavigationBar from "../components/NavigationBar";
import SecondHero from "../components/SecondHero";
import ThirdHero from "../components/ThirdHero";

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <SecondHero />
      <ThirdHero />
      <FooterBar />
    </div>
  );
};

export default HomePage;
