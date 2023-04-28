import styles from "src/pages/Home.module.css";
export function BuyerCard(props) {
  return (
    <>
      <section className={styles.card}>
        <div className={styles.divTakeOver}>
          <p>Takeover date: {props.takeoverDate}</p>
        </div>
        <div className={styles.divEstateInfo}>
          <p>Estate type: {props.estateType}</p>
          <p>Min. size: {props.minSize}</p>
          <p>Max. price: {props.maxPrice}</p>
        </div>
        <div>
          <p>Adults: {props.adults}</p>
          <p>Children: {props.children}</p>
          <p>Description: {props.description}</p>
        </div>
      </section>
    </>
  );
}

/* export async function getStaticProps() {
  const api = "http://localhost:3000/api/find-buyers";
  const res = await fetch(api);
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
} */
