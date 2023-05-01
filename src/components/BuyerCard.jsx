import styles from "src/pages/Home.module.css";
import { priceFormatter } from "@/data/buyerProfiles";
import { estateTypes } from "@/data/estateTypes";
export function BuyerCard(props) {
  // props gør vi kan bruge de taget values fra inputfelter
  return (
    <>
      <section className={styles.card}>
        <div className={styles.divTakeOver}>
          <p>
            <span>Takeover date: </span>
            {props.takeoverDate}
          </p>
        </div>
        <div className={styles.divEstateInfo}>
          <p>
            <span>Estate type:</span> {estateTypes[props.estateType - 1].name}
          </p>
          <p>
            <span>Min. size:</span> {props.minSize}
          </p>
          <p>
            <span>Max. price:</span> {priceFormatter.format(props.maxPrice)}
          </p>
        </div>
        <div>
          <p>
            <span> {props.adults}</span> Adults
          </p>
          <p>
            <span>{props.children}</span> Children
          </p>
          <p>
            <span>Description:</span> {props.description}
          </p>
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
