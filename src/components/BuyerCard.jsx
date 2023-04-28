import styles from "src/pages/Home.module.css";
export function BuyerCard() {
  return (
    <>
      <section className={styles.card}>
        <div className={styles.divTakeOver}>
          <p>Take over date:</p>
        </div>
        <div className={styles.divEstateInfo}>
          <p>Estate type:</p>
          <p>Min. size:</p>
          <p>Max. price:</p>
        </div>
        <div>
          <p>Adults:</p>
          <p>Children:</p>
          <p>Description:</p>
        </div>
      </section>
    </>
  );
}
