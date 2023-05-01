import styles from "src/pages/Home.module.css";
import { estateTypes } from "@/data/estateTypes";
import { useState } from "react";

export function FormInput(props) {
  const [selectedEstateType, setSelectedEstateType] = useState("");

  function onSubmitPotentialBuyer(e) {
    e.preventDefault();
    props.setSellerData({
      // tjekker input felters value (syntaks for inputfelter - e.taget.elements
      // properties.value kommer fra input name
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

  /* handles the etstateType chance */
  function handleEstateTypeChange(e) {
    setSelectedEstateType(e.target.value);
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
            {/* Dropdown */}
            <select name="estateType" id="EstateType">
              <option value="">Select estate type</option>
              {estateTypes.map((estateType) => (
                <option key={estateType.id} value={estateType.name}>
                  {estateType.name}
                </option>
              ))}
            </select>
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
                minLength="4"
                maxength="4"
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
