import styles from "src/pages/Home.module.css";
import { BuyerCard } from "./BuyerCard";
import { useEffect, useState } from "react";
export function PotentialBuyers(props) {
  const [potentialBuyer, setpotentialBuyer] = useState([]);

  useEffect(() => {
    fetch(
      // fetcher api med props og læser state data (sellerData)
      `http://localhost:3000/api/find-buyers?price=${props.sellerData.price}&estateType=${props.sellerData.estateType}&size=${props.sellerData.size}&zipCode=${props.sellerData.zipCode}&specifications=${props.sellerData.specifications}`
    )
      .then((res) => res.json())
      .then((data) => {
        setpotentialBuyer(data);
        console.log(data);
      });
  }, [props.sellerData]);

  return (
    <>
      <h1 className={styles.headline}>Potential buyers</h1>
      <div className={styles.potentialWrapper}>
        <section className={styles.formBackground}>
          <div className={styles.potential_container}>
            <h2>Select your matches</h2>
            <p>Total of matching buyers: {props.sellerData.buyers.length}</p>
            <div className={styles.potential_grid}>
              {potentialBuyer.map((seller) => (
                // sender id med så den kan kende forskel
                <div className={styles.potential_cards} key={seller.id}>
                  <BuyerCard
                    {...seller}
                    setSellerData={props.setSellerData}
                    sellerData={props.sellerData}
                  />
                </div>
              ))}
            </div>
            <button
              className={styles.button}
              onClick={() => props.setPage("contactEDC")}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
