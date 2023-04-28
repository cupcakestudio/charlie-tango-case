import styles from "src/pages/Home.module.css";
import { DashContactCard } from "src/components/DashContatCard.jsx";
export function Dashboard() {
  return (
    <>
      <h1 className={styles.headline}>Latest contacts</h1>
      <div className={styles.potentialWrapper}>
        <section className={styles.formBackground}>
          <div className={styles.potential_container}>
            <p>amount of contacts: X</p>
            <div className={styles.potential_grid}>
              <div className={styles.potential_cards}>
                <DashContactCard />
              </div>
              <div className={styles.potential_cards}>
                <DashContactCard />
              </div>
              <div className={styles.potential_cards}>
                <DashContactCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}