import Head from "next/head";
import styles from "src/pages/Home.module.css"
import {useContext,  useRef } from "react";
import { formsSellerContext } from "@/contexts/FormContext";
export default function ContactForm() {

//const to get form, using ref to hook up the form
const formEl = useRef(null);
const formContext = useContext(formsSellerContext);
  //get the context from the form here.
console.log(formContext)

function submitToDB(e) {
    e.preventDefault();
    console.log("prevent");

    //create an object entry for supabase.
    const payload = {
      name: "Ting",
      formContext: "HEJSA"
    }
  }
  
return (  <>
        <Head>
        <title>Your Estate | EDC</title>
      </Head>
      <div className="wrapper">
        <h1>YOYO</h1>
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
          <label className={styles.label} htmlFor="Price">
            <input name="Name" id="Name" placeholder="Name" required />
          </label>
           <label htmlFor="Email">
            <input
              name="Email"
              type="email"
              placeholder="Email"
              id="Email"
              required
            />
          </label>
          {/*<label className={styles.size_zip}>
            <label htmlFor="Size">
              <input
                className={styles.size}
                name="Size in m^2"
                id="Size"
                placeholder="Size in m^2"
                required
              />
            </label>
            <label htmlFor="zipCode">
              <input
                name="zipCode"
                id="zipCode"
                placeholder="Zip code"
                required
              />
            </label>
          </label>
          <label htmlFor="Specifications">
            <input
              className={styles.textbox}
              name="Specifications"
              id="Specifications"
              placeholder="Specifications"
              required
            />
          </label> */}
           <button >Submit</button>
        </form>
      </section>
      </div>
      </>
)
}
