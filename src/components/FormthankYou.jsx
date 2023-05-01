import styles from "src/pages/Home.module.css";

export function FormthankYou() {
  return (
    <>
        <section className="thankYouSection">
      <article className={styles.formBackground}>
      <h1 className={styles.headline}>Thnak you</h1>
          <p className="thankYouText">We will be in touch within 2-3 working days</p>
          <div className="button_thankYou">
          <button
            className={styles.button}>Back to EDC
            <a href="https://www.edc.dk/"></a>
            </button>
         </div>
      </article>
      </section>
    
    </>
  );
}