import styles from "src/pages/Home.module.css";
import { BuyerCard } from "./BuyerCard";
export function PotentialBuyers() {
  return (
    <>
      <h1 className={styles.headline}>Potential buyers</h1>
      <div className={styles.potentialWrapper}>
        <section className={styles.formBackground}>
          <div className={styles.potential_container}>
            <p>Select your matches </p>
            <p>Total of matching buyers: X</p>
            <div className={styles.potential_grid}>
              <div className={styles.potential_cards}>
                <BuyerCard />
              </div>
              <div className={styles.potential_cards}>
                <BuyerCard />
              </div>
              <div className={styles.potential_cards}>
                <BuyerCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
