import styles from "@/pages/Home.module.css";
import AnImage from "src/components/AnImage.jsx";
export function Landingpage(props) {
  return (
    <section>
      <header className="header_landing">
        <AnImage></AnImage>
      </header>
      <main className="main_landing">
        <div className="grid_col">
          <h2>Find potential buyers for your property</h2>
          <p>
            Hos os bestemmer du selv, hvordan du vil sælge. Du kan vælge mellem
            flere forskellige løsninger, afhængig af hvor meget du selv vil stå
            for, og hvor meget vi skal tage os af. I de fleste af vores butikker
            har du også mulighed for at vælge 'Solgt eller gratis'.
          </p>
          <button
            className={styles.button}
            /* props henter indholdet ind til component og sætter page til et nyt state */
            onClick={() => {
              props.setPage("yourEstate");
            }}
          >
            Find a buyer
          </button>
        </div>
        <div className="grid_col2">
          <h2>Criterias for finding buyers</h2>
          <p>
            Som sælger får du adgang til Mit EDC, så du kan følge dit boligsalg
            på nettet, når du har lyst. Så kan du i løbet af processen nemt få
            overblik over de mange forskellige aktiviteter vedrørende salget af
            din bolig - også inden, den officielt er sat til salg.
          </p>
        </div>
      </main>
    </section>
  );
}
