import styles from "src/pages/Home.module.css";

export function FormthankYou() {
  return (
    <>
        <section className="thankYouSection">
      <article className={styles.formBackground}>
    
      <h1 className={styles.headline}>Thank you</h1>
          <p className="thankYouText">We will be in touch within 2-3 working days</p>
<<<<<<< HEAD
          <button className="thankYouLink">
            <a className="a_link" href="#">Back to EDC</a>
          </button>
        
=======
          <div className="button_thankYou">
          <button
            className={styles.button}>Back to EDC
            <a href="https://www.edc.dk/"></a>
            </button>
         </div>
>>>>>>> styling-thank-you
      </article>
      </section>
    
    </>
  );
}