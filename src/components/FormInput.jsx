import styles from "src/pages/Home.module.css";
export function FormInput(props) {


  function onSubmitPotentialBuyer(e){
    e.preventDefault();
    changePage(); 
  }
  //change page state to potentialBuyers
  function changePage(){
    props.setPage("potentialBuyerView")
  }
  return (
    <>
      <h1 className={styles.headline}>Form Input</h1>
      {/*  redirects to new div */}
      <section className={styles.formBackground}>
        <form
          className={styles.form}
          action="#"
          method="GET"
          id="FormEstateInfo"
           onSubmit={onSubmitPotentialBuyer}
        >
          <label className={styles.label} htmlFor="Price">
            <input name="Price" id="Price" placeholder="Price" required />
          </label>
          <label htmlFor="EstateType">
            <input
              name="Estate Type"
              type="dropdown"
              placeholder="Estate Type"
              id="EstateType"
              required
            />
          </label>
          <label className={styles.size_zip}>
            <label htmlFor="Size">
              <input
                className={styles.size}
                name="Size in m^2"
                id="Size"
                placeholder="Size in m^2"
                required
              />
            </label>
            <label htmlFor="zipCode">
              <input
                name="zipCode"
                id="zipCode"
                placeholder="Zip code"
                required
              />
            </label>
          </label>
          <label htmlFor="Specifications">
            <input
              className={styles.textbox}
              name="Specifications"
              id="Specifications"
              placeholder="Specifications"
              required
            />
          </label>
          <button type="submit">Next</button>
        </form>
      </section>
    </>
  );
}
