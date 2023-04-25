// import styles from "./Home.module.css";

export function FormInput() {

  return (
    <>
    <h1>Form Input</h1>
  {/*  redirects to new div */}
   <form action="#" method="GET" id="FormEstateInfo"> 
   <label for="Price">
      <span>Price</span>
      <input name="Price" id="Price" required />
    </label>
   <label for="EstateType">
      <span>Estate Type</span>
      <input name="Estate Type" type="dropdown" id="EstateType"required />
    </label>
   <label for="Size">
      <span>Size in m^2</span>
      <input name="Size in m^2" id="Size"required />
    </label>
   <label for="zipCode">
      <span>Zip Code</span>
      <input name="zipCode" id="zipCode"required />
    </label>
     <label for="Specifications">
      <span>Specifications</span>
      <input name="Specifications" id="Specifications" required />
    </label>
    <button>Submit</button>
  </form>
  </>
  );
}
