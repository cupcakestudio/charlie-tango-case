import styles from "src/pages/Home.module.css";

export function FormthankYou() {
  return (
    <>
      <section className={styles.thankYouSection}>
        <article className={styles.formBackground}>
          <div className="grid_thankyou">
            <h1 className={styles.headline}>Thank you</h1>
            <p className={styles.thankYouText}>
              We will be in touch within 2-3 working days
            </p>
            <div className={styles.button_thankYou}>
              <button className={styles.button}>
                <a
                  className="thx_btn"
                  href="https://www.edc.dk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Back to EDC
                </a>
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
