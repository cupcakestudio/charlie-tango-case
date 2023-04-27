import styles from "src/pages/Home.module.css";

export function FormThankYou() {
  return (
    <>
    <article className={styles.formBackground}>
    <h1 className={styles.headline}>Thnak you</h1>
        <p>We will be in touch within 2-3 working days</p>
        <button class="back_to_edc">Back to EDC</button>
    </article>
    </>
  );
}