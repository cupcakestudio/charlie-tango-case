import styles from "@/pages/Home.module.css";
export function Landingpage(props) {
  return (

    <section>
      <header className="header_landing"></header>
      <main className="main_landing">
        <div className="grid_col">
          <h2>Find potential buyers for your property</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            aliquam vero ea voluptate unde corrupti natus laboriosam error quae
            at maiores dolorum incidunt, expedita nisi aut inventore ducimus
            fugiat quaerat.
          </p>
          <button
            className={styles.button}
            /* props henter indholdet ind til component og sætter page til et nyt state */
            onClick={() => props.setPage("yourEstate")}
          >
            Find a buyer
          </button>
        </div>
        <div className="grid_col2">
          <h2>Criterias for finding buyers</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            accusantium labore odit, maiores asperiores nemo iusto nihil quam
            distinctio doloribus officia saepe facilis totam ab et reiciendis
            dolore veritatis ullam!
          </p>
        </div>
      </main>
    </section>
  );
}
