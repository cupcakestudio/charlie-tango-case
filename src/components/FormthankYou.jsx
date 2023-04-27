import styles from "src/pages/Home.module.css";

export function FormthankYou() {
  return (
    <>
      <article className={styles.formBackground}>
      <h1 className={styles.headline}>Thnak you</h1>
          <p>We will be in touch within 2-3 working days</p>
          <a href="#">Back to EDC &#8594;</a>
      </article>
    </>
  );
}