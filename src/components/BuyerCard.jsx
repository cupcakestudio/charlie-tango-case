import styles from "src/pages/Home.module.css";
import { priceFormatter } from "@/data/buyerProfiles";
import { estateTypes } from "@/data/estateTypes";
import { useState } from "react";
export function BuyerCard(props) {
  // props gør vi kan bruge de taget values fra inputfelter

  function toggleBuyer() {
    props.setSellerData((prev) => {
      if (prev.buyers.find((id) => id === props.id)) {
        //hvis props.id findes in sellerdata så skal den væk
        console.log("fandt id, den skal bæk");
        return {
          ...prev,
          buyers: prev.buyers.filter((id) => id !== props.id),
        };
      } else {
        //ellers skal den ind
        return {
          ...prev,
          buyers: prev.buyers.concat(props.id),
        };
      }
    });
  }
  return (
    <>
      <section className={styles.card}>
        <div className={styles.divTakeOver}>
          <p>
            <span>Takeover date: </span>
            {props.takeoverDate}
          </p>
        </div>
        <div className={styles.divEstateInfo}>
          <p>
            <span>Estate type:</span> {estateTypes[props.estateType - 1].name}
          </p>
          <p>
            <span>Min. size:</span> {props.minSize}
          </p>
          <p>
            <span>Max. price:</span> {priceFormatter.format(props.maxPrice)}
          </p>
        </div>
        <div>
          <p>
            <span> {props.adults}</span> Adults
          </p>
          <p>
            <span>{props.children}</span> Children
          </p>
          <p>
            <span>Description:</span> {props.description}
          </p>
        </div>
        <button
          className={
            props.sellerData.buyers.includes(props.id)
              ? styles.selected
              : styles.selectButton
          }
          onClick={toggleBuyer}
        >
          Select
        </button>
      </section>
    </>
  );
}
