import styles from "src/pages/Home.module.css";
export function DashCard() {
  return (
    <>
      <section className={styles.card}>
        <div className={styles.date_delete}>
          <p>Date:</p>
          <button>Delete</button>
        </div>

        <div className={styles.divContacts}>
            <div className="contactsLeft">
                <p>Name:</p>
                <p>E-mail:</p>
                <p>Phone:</p>
            </div>
       
            <div className="contactsright">
                <p>Estate:</p>
                <p>Price:</p>
                <p>Size:</p>
                <p>Zip code:</p>
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