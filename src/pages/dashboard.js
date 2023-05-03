import { DashBoard } from "@/components/DashBoard";
import { DashCard } from "@/components/DashCard";
import styles from "src/pages/Home.module.css";

export default function Dashboard() {
  // return (
  //   <>
  //     <h1 className={styles.headline}>Latest contacts</h1>
  //     <div className={styles.potentialWrapper}>
  //       <section className={styles.formBackground}>
  //         <div className={styles.potential_container}>
  //           <p>amount of contacts: X</p>
  //           <div className={styles.potential_grid}>
  //             <div className={styles.potential_cards}>
  //               <DashCard />
  //             </div>
  //           </div>
  //         </div>
  //       </section>
  //     </div>
  //   </>
  // );
  return <DashBoard></DashBoard>;
}
