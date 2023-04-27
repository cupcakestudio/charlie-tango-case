import Head from "next/head";
import { FormInput } from "./FormInput";
import { PotentialBuyers } from "./PotentialBuyers";
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
