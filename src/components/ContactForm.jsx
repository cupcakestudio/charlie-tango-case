import Head from "next/head";
import styles from "src/pages/Home.module.css";

import { useState, useEffect, useRef } from "react";

export default function ContactForm(props) {
  //const to get form, using ref to hook up the form
  const formEl = useRef(null);

  function removeBuyer(id) {
    props.sellerData((prev) => {
      if (prev.buyers.find((obj) => obj.id === id)) {
        return {
          ...prev,
          buyers: prev.buyers.filter((obj) => obj.id !== id),
        };
      }
    });
  }

  function submitToDB(e) {
    e.preventDefault();
    console.log("prevent");
    //create an object entry for supabase.
    const payload = {
      fullname: formEl.current.name.value,
      email: formEl.current.email.value,
      phone: formEl.current.phone.value,
      address: formEl.current.address.value,
      //from here the props are taken from the previous filled out form about the estate
      price: props.sellerData.price,
      estateType: props.sellerData.estateType,
      size: props.sellerData.size,
      zipCode: props.sellerData.zipCode,
      buyers: props.sellerData.buyers,
      consent: formEl.current.consent.checked,
      specifications: props.sellerData.specifications,
    };

    console.log(payload);
    //send request to local api for sellers before sending whole form to supabase
    fetch("/api/form-filled", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log("data", data, payload));

    changePage();
  }

  //change page state to Thank you state
  function changePage() {
    props.setPage("thankyou");
  }

  return (
    <>
      <Head>
        <title>Your Estate | EDC</title>
      </Head>
      <div className="wrapper">
        <h1 className={styles.headline}>Form Input</h1>
        {/*  redirects to new div */}
        <section className={styles.formBackground}>
          <form
            className={styles.form}
            action="#"
            method="GET"
            id="Contact"
            ref={formEl}
            onSubmit={submitToDB}
          >
            <section className={styles.contactForm}>
              <article className={styles.contact_left}>
                <h2 className={styles.contact_h2}>Contact info</h2>

                <label className={styles.label} htmlFor="Name">
                  <input name="Name" id="name" placeholder="Name" required />
                </label>

                <label htmlFor="Email">
                  <input
                    name="Email"
                    type="email"
                    placeholder="Email"
                    id="email"
                    required
                  />
                </label>

                <label htmlFor="Phone">
                  <input
                    className={styles.size}
                    name="Phone"
                    id="phone"
                    placeholder="Phone"
                    required
                  />
                </label>
                <label htmlFor="Address">
                  <input
                    className={styles.label}
                    name="Address"
                    id="address"
                    placeholder="Address"
                    required
                  />
                </label>

                <div className={styles.checkbox_square}>
                  <input type="checkbox" className="checkbox" id="consent" />
                  <label className="checkbox" htmlFor="checkbox">
                    Yes please, EDC may contact me with offers and information
                    related to the realestate market.
                  </label>
                </div>
              </article>

              <article className={styles.contact_right}>
                <h2 className={styles.contact_h2}>Chosen buyers</h2>
                <div className={styles.checkbox}>
                  {props.sellerData.buyers.map((buyer) => (
                    <>
                      <div className={styles.optinalByers}>
                        <p key={buyer.id}>{buyer.id}</p>
                        <svg
                          className={styles.optinalByers}
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
                    </>
                  ))}
                </div>
              </article>
              <button className={styles.button}>Submit</button>
            </section>
          </form>
        </section>
      </div>
    </>
  );
}
