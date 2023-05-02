import styles from "src/pages/Home.module.css";
import { useEffect } from "react";
export function DashCard(props) {
  return (
    <>
      <section className={styles.card}>
        <div className={styles.date_delete}>
          <p>Date: {props.inserted_at}</p>
          <button>Delete</button>
        </div>

        <div className={styles.divContacts}>
            <div className="contactsLeft">
                <p>Name: {props.fullname}</p>
                <p>E-mail: {props.email}</p>
                <p>Phone: {props.phone}</p>
                {/* if seller has checked "#consent checkbox" display yes, else no */}
                <p>Consent to be contacted: </p> <span>{props.consent ? "Yes": "No"}</span>

            </div>
       
            <div className="contactsright">
                <p>Estate: {props.estateType}</p>
                <p>Price: {props.price}</p>
                <p>Size: {props.size}</p>
                <p>Zip code: {props.zipCode}</p>
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