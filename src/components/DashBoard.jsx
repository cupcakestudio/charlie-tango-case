import styles from "src/pages/Home.module.css";
import { DashCard } from "src/components/DashCard.jsx";
import { useState, useEffect } from "react";
export default function DashBoard() {
const [SellerEDCContact, setSellerEDCContact] = useState();
  useEffect(() => {
    fetch(
      // fetcher api med props og læser state data (sellerData)
      'https://gdbpieovhxbltmbhyctf.supabase.co/rest/v1/sellers?select=id'
    )
      .then((res) => res.json())
      .then((data) => {
        // setpotentialBuyer(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <h1 className={styles.headline}>Latest contacts</h1>
      <div className={styles.potentialWrapper}>
        <section className={styles.formBackground}>
          <div className={styles.potential_container}>
            <p>amount of contacts: X</p>
            <div className={styles.potential_grid}>
              <div className={styles.potential_cards}>
                <DashCard />
              </div>
              <div className={styles.potential_cards}>
                <DashCard />
              </div>
              <div className={styles.potential_cards}>
                <DashCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}