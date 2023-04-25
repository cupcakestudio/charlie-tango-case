 import styles from "src/pages/Home.module.css";
export function FormInput() {

  return (
    <>
    <h1 className={styles.headline}>Form Input</h1>
  {/*  redirects to new div */}
   <section className={styles.formBackground}>
    <form className={styles.form} action="#" method="GET" id="FormEstateInfo"> 
   <label className={styles.label} htmlFor="Price">
      
      <input  name="Price" id="Price" placeholder="Price" required />
    </label>
   <label htmlFor="EstateType">
   
      <input name="Estate Type" type="dropdown" placeholder="Estate Type" id="EstateType"required />
    </label>
    <div className={styles.size_zip}>
   <label htmlFor="Size">
    
      <input name="Size in m^2" id="Size" placeholder="Size in m^2" size="4" required />
    </label>
   <label htmlFor="zipCode">
  
      <input name="zipCode" id="zipCode" placeholder="Zip code" required />
    </label>
    </div>
     <label  htmlFor="Specifications">
      <input className={styles.textbox} name="Specifications" id="Specifications" placeholder="Specifications" required />
    </label>
    <button>Submit</button>
  </form></section>
  </>
  );
}
