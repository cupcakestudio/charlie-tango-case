import styles from "src/pages/Home.module.css";
import { BuyerCard } from "./BuyerCard";
import { useEffect, useState } from "react";
export function PotentialBuyers() {
  const [potentialBuyer, setpotentialBuyer] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/find-buyers`)
      .then((res) => res.json())
      .then((data) => {
        setpotentialBuyer(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <h1 className={styles.headline}>Potential buyers</h1>
      <div className={styles.potentialWrapper}>
        <section className={styles.formBackground}>
          <div className={styles.potential_container}>
            <p>Select your matches </p>
            <p>Total of matching buyers: X</p>
            <div className={styles.potential_grid}>
              {potentialBuyer.map((seller) => (
                <div className={styles.potential_cards} key={seller.id}>
                  <BuyerCard {...seller} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
