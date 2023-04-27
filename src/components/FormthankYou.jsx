import styles from "src/pages/Home.module.css";

export function FormthankYou() {
  return (
    <>
        <section className="thankYouSection">
      <article className={styles.formBackground}>
      <h1 className={styles.headline}>Thnak you</h1>
          <p className="thankYouText">We will be in touch within 2-3 working days</p>
          <button className="thankYouLink">
            <a className="a_link" href="#">Back to EDC &#8594;</a>
          </button>
        
      </article>
      </section>
    
    </>
  );
}