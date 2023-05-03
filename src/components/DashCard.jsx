import styles from "src/pages/Home.module.css";
import { useEffect } from "react";
export function DashCard(props) {
  console.log("buyers  ", props.buyers);
  return (
    <>
      <section className={styles.card}>
        <div className={styles.date_delete}>
          <p>Date: {props.inserted_at}</p>
          {/*   <button>Delete</button> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-x-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
          </svg>
        </div>

        <div className={styles.divContacts}>
          <div className="contactsLeft">
            <p>Name: {props.fullname}</p>
            <p>
              E-mail:
              <br />
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
