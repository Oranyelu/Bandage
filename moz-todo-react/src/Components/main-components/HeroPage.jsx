import React from "react";
import HeroCard from "../Product-cards/HeroCard";
import "./Heropage.css";
function HeroPage() {
  return (
    <>
      <section className="hero">
        <main>
          <HeroCard />
        </main>
        <aside>
          <section>
            <HeroCard />
          </section>

          <section>
            {" "}
            <HeroCard />
            <HeroCard />
          </section>
        </aside>
      </section>
    </>
  );
}

export default HeroPage;
