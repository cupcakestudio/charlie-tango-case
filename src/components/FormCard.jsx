import Head from "next/head";
import styles from "src/pages/Home.module.css";
import { FormInput } from "./FormInput";
import { PotentialBuyers } from "./Header/Potential";
export default function FormCard() {
  return (
    <>
      <Head>
        <title>Your Estate | EDC</title>
      </Head>
      <div className="wrapper">
        <FormInput />
      </div>
      <PotentialBuyers />
    </>
  );
}
