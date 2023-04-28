import Head from "next/head";
import styles from "src/pages/Home.module.css"

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

import {useContext,  useRef } from "react";
import { FormsSellerContext, UpdateSellerContext } from "@/contexts/FormContext";


export default function ContactForm(props) {
//const to get form, using ref to hook up the form
const formEl = useRef(null);
const sellerInfo = useContext(FormsSellerContext);
  //get the context from the form here.
const setSellerInfoState = useContext(UpdateSellerContext);
console.log(setSellerInfoState);

function submitToDB(e) {
    e.preventDefault();
    console.log("prevent", );
    setSellerInfoState((oldstate) => oldstate + 1)
console.log(formEl.current.name.value)
    //create an object entry for supabase.
    const payload = {
      name: "Ting",
      email: "ting0226@stud.kea.dk"
    }
    //send request to local api for buyers before sending whole form to supabase
    fetch("api/find-buyers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            }, 
            body: JSON.stringify(payload),
          }).then(res=> res.json()).then(data=> console.log(data))


}
//change page state to Thank you state
  function changePage(){
    props.setPage("thankyou")
  }
return (  <>
        <Head>
        <title>Your Estate | EDC</title>
      </Head>
      <div className="wrapper">
      <h1>This is a sellers house: {sellerInfo}</h1>
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
            <input name="Name" id="name" placeholder="Name" required />
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
