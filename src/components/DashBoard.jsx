import styles from "src/pages/Home.module.css";
import { DashCard } from "src/components/DashCard.jsx";
import { useState, useEffect } from "react";

export default function DashBoard() {
  const [sellerEDCContact, setSellerEDCContact] = useState([]);

  //fetch Seller form data from supabase
  useEffect(() => {
    // fetcher api med props og læser state data (sellerData) gennem api getSupabaseData
    fetch("/api/getSupabaseData", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((formdata) => {
        /* sorting */
        formdata.data.sort((a, b) => Date(b.inserted_at) - Date(a.inserted_at));

        // roden af dataen vi får ud fra supabase, er et objekt med property 'data', som har et array, som bliver sat til setSellerEDCContact
        setSellerEDCContact(formdata.data);
      });
  }, []);

  return (
    <>
      <h1 className={styles.headline}>Latest contacts</h1>
      <div className={styles.potentialWrapper}>
        <section className={styles.formBackground}>
          <div className={styles.potential_container}>
            <p>amount of contacts: </p>
            <div className={styles.potential_grid}>
              {/* sellerEDCContact bliver sat til staten af formdata som bliver hentet fra DB */}
              {sellerEDCContact.map((formInfo) => (
                // mapper info
                <div className={styles.potential_cards} key={formInfo.id}>
                  <DashCard {...formInfo} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
