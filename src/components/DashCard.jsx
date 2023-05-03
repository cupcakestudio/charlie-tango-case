import styles from "src/pages/Home.module.css";
import { useEffect } from "react";
export function DashCard(props) {
  console.log("buyers  ", props.buyers);
  return (
    <>
      <section className={styles.card}>
        <div className={styles.date_delete}>
          <p>Date: {props.received_at}</p>
          <button>Delete</button>
        </div>

        <div className={styles.divContacts}>
          <div className="contactsLeft">
            <p>Name: {props.fullname}</p>
            <p>
              E-mail:{" "}
              <span>
                <a href="mailto:{props.email}">{props.email}</a>
              </span>
            </p>
            <p>
              Phone:{" "}
              <span>
                <a href="tel:{props.phone}">{props.phone}</a>
              </span>
            </p>
            {/* if seller has checked "#consent checkbox" display yes, else no */}
            <p>
              Consent to be contacted:{" "}
              <span>{props.consent ? "YES" : "NO"}</span>
            </p>
          </div>

          <div className="contactsright">
            <p>Estate: {props.estateType}</p>
            <p>Price: {props.price}</p>
            <p>Size: {props.size}</p>
            <p>Zip code: {props.zipCode}</p>
            <p>Selected Potenial Buyers </p>{" "}
            <ul>
              {" "}
              {props.buyers.map((obj) => (
                <li key={obj.id}>{obj.id}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.contactedCheckBox}>
          <label for="contacted">Contacted</label>
          <input type="checkbox" id="contacted" name="contacted" required />
        </div>
      </section>
    </>
  );
}
