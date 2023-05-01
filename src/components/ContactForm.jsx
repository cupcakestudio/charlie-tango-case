import Head from "next/head";
import styles from "src/pages/Home.module.css";

//import { FormsSellerContext, UpdateSellerContext } from "@/contexts/FormContext";

// export default function ContactForm(props) {
// //const to get form, using ref to hook up the form
// const formEl = useRef(null);
// const [sellerInfo, setSellerInfoState] = useState(0);
//   //get the context from the form here.
// // const setSellerInfoState = useContext(UpdateSellerContext);
// console.log(setSellerInfoState, setSellerInfoState((oldstate) => oldstate + 1));

// //make state an object
// const {form} = sellerInfo;

// function submitToDB(e) {
//     e.preventDefault();
//     console.log("prevent", );

// console.log(formEl.current.name.value)
//     //create an object entry for supabase.
//     const payload = {
//       name: "Ting",
//       email: "ting0226@stud.kea.dk",
//       //whatever is in state
//       form: form,
//     }
//     //send request to localapi for buyers before sending whole form to supabase
//     fetch("/api/find-buyers", {
//       method: POST,
//       api_key: ""
//     })
//     //send user to next page
//     changePage();
//   }

import { useState, useEffect, useRef } from "react";

export default function ContactForm(props) {
  //const to get form, using ref to hook up the form
  const formEl = useRef(null);

  const [SellerInfo, setSellerInfo] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:3000/api/find-buyers?price=${props.sellerData.price}&estateType=${props.sellerData.estateType}&size=${props.sellerData.size}&zipCode=${props.sellerData.zipCode}&specifications=${props.sellerData.specifications}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSellerInfo(data);
        console.log(data, props.sellerData.price);
      });
  }, []);

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

            <div className={styles.checkbox}>
              <input type="checkbox" className="checkbox" id="checkbox" />
              <label className="checkbox" htmlFor="checkbox">
                Yes please, EDC may contact me with offers and information
                related to the realestate market.
              </label>
            </div>

            <button>Submit</button>
          </form>
        </section>
      </div>
    </>
  );
}
