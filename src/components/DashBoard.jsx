import styles from "src/pages/Home.module.css";
import { DashCard } from "src/components/DashCard.jsx";
export function DashBoard() {
  return (
    <>
      <h1 className={styles.headline}>Latest contacts</h1>
      <div className={styles.potentialWrapper}>
        <section className={styles.formBackground}>
          <div className={styles.potential_container}>
            <p>amount of contacts: X</p>
            <div className={styles.potential_grid}>
              <div className={styles.potential_cards}>
                <DashCard />
              </div>
              <div className={styles.potential_cards}>
                <DashCard />
              </div>
              <div className={styles.potential_cards}>
                <DashCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}