import styles from "src/pages/Home.module.css";
import { priceFormatter } from "@/data/buyerProfiles";
import { estateTypes } from "@/data/estateTypes";

export function BuyerCard(props) {
  // props gør vi kan bruge de taget values fra inputfelter

  function toggleBuyer() {
    props.setSellerData((prev) => {
      if (prev.buyers.find((obj) => obj.id === props.id)) {
        //hvis obj.id findes i sellerdata så skal den væk
        console.log("fandt id, den skal væk");
        return {
          ...prev,
          buyers: prev.buyers.filter((obj) => obj.id !== props.id),
        };
      } else {
        //ellers skal den tilføjes via concat til buyersarray
        return {
          ...prev,
          buyers: prev.buyers.concat({
            id: props.id,
            takeoverDate: props.takeoverDate,
            estateType: props.estateType,
            maxPrice: props.maxPrice,
            minSize: props.minSize,
          }),
        };
      }
    });
  }

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
        <button
          className={
            // hvis valgt, hvis obj + id er det samme, så for den styles.selected : (ellers) styles.selectButton
            props.sellerData.buyers.find((obj) => obj.id === props.id)
              ? styles.selected
              : styles.selectButton
          }
          onClick={toggleBuyer}
        >
          Select
        </button>
      </section>
    </>
  );
}
