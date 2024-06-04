import "./styles/App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Socials from "./Components/Socials";
import HeroPage from "./Components/main-components/HeroPage";
import BestSeller from "./Components/main-components/BestSeller";
import FeaturedPosts from "./Components/main-components/FeaturedPosts";

function App() {
  return (
    <>
      <Socials />
      <NavBar />{" "}
      <section className="Final-display">
        <HeroPage />
      </section>
      <section>
        <BestSeller />
      </section>
      <section className="perks">
        <header>
          <p>Featured Products</p>
          <b>THE BEST SERVICES</b>
          <p>Problems trying to resolve the conflict between</p>
        </header>
        <main>
          <div>
            <img src="" />
            <b>Easy Wins</b>
            <p>Get your best looking smile now!</p>
          </div>
          <div>
            <img src="https://www.figma.com/design/dTZt6OIl9jm2OQPklVNEz2/Front-End-Standardization-Test-Design?node-id=540-981&t=IeRTpcB6mOsPPFYM-4" />
            <b>Concrete</b>
            <p>
              Defalcate is most focused in helping you discover your most
              beautiful smile.
            </p>
          </div>
          <div>
            <img src="" />
            <b>Hack Growth</b>
            <p>Overcome any hurdle or any other problem.</p>
          </div>
        </main>
      </section>
      <section>
        <FeaturedPosts />
      </section>
      <section>
        <main>
          <h1>What the </h1>
        </main>
        <main></main>
</section>

      <Footer />
    </>
  );
}

export default App;
