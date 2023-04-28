import styles from "src/pages/Home.module.css";
export function FormInput(props) {
  function onSubmitPotentialBuyer(e) {
    e.preventDefault();
    props.setSellerData({
      price: e.target.elements.price.value,
      estateType: e.target.elements.estateType.value,
      size: e.target.elements.size.value,
      zipCode: e.target.elements.zipCode.value,
      specifications: e.target.elements.specifications.value,
    });
    changePage();
  }
  //change page state to potentialBuyers
  function changePage() {
    props.setPage("potentialBuyerView");
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
            <input name="price" id="Price" placeholder="Price" required />
          </label>
          <label htmlFor="EstateType">
            <input
              name="estateType"
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
                name="size"
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
            <textarea
              className={styles.textbox}
              name="specifications"
              id="Specifications"
              placeholder="Specifications"
              required
            ></textarea>
          </label>
          <button type="submit">Next</button>
        </form>
      </section>
    </>
  );
}
