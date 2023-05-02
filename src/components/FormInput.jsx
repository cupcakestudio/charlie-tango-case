import styles from "src/pages/Home.module.css";
import { estateTypes } from "@/data/estateTypes";
import Cleave from "cleave.js/react";

export function FormInput(props) {
  function onSubmitPotentialBuyer(e) {
    e.preventDefault();
    props.setSellerData({
      // tjekker input felters value (syntaks for inputfelter - e.taget.elements
      // properties.value kommer fra input name
      price: e.target.elements.price.rawValue,
      estateType: e.target.elements.estateType.value,
      size: e.target.elements.size.value,
      zipCode: e.target.elements.zipCode.value,
      specifications: e.target.elements.specifications.value,
      buyers: [],
    });
    changePage();
  }
  //change page state to potentialBuyers
  function changePage() {
    props.setPage("potentialBuyerView");
  }

  return (
    <>
      <h1 className={styles.headline}>About your estate</h1>
      {/*  redirects to new div */}
      <section className={styles.formBackground}>
        <form
          className={styles.form}
          action="#"
          method="GET"
          id="FormEstateInfo"
          onSubmit={onSubmitPotentialBuyer}
        >
          {/* <label className={styles.label} htmlFor="Price">
            <input name="price" id="Price" placeholder="Price" required />
          </label> */}
          <Cleave
            placeholder="Price"
            options={{
              numericOnly: true,
              delimiters: [".", "."],
              blocks: [1, 3, 3],
            }}
            className="form-field"
            name="price"
          />

          <label htmlFor="EstateType">
            Estate type
            {/* Dropdown */}
            <select name="estateType" id="EstateType">
              <option value="">Select estate type</option>
              {estateTypes.map((estateType) => (
                <option key={estateType.id} value={estateType.id - 1}>
                  {estateType.name}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.size_zip}>
            {" "}
            Size in m^2
            <label htmlFor="Size">
              <input
                className={styles.size}
                name="size"
                id="Size"
                placeholder="Size in m^2"
                maxLength="3"
                required
              />
            </label>
            <label htmlFor="zipCode">
              {" "}
              Zip code
              <input
                name="zipCode"
                id="zipCode"
                placeholder="Zip code"
                required
                minLength="4"
                maxLength="4"
              />
            </label>
          </label>
          <label htmlFor="Specifications">
            <textarea
              className={styles.textbox}
              name="specifications"
              id="Specifications"
              placeholder="Specifications"
            ></textarea>
          </label>
          <button type="submit">Next</button>
        </form>
      </section>
    </>
  );
}
