import Head from "next/head";
import { FormInput } from "./FormInput";
export default function FormCard(props) {
  return (
    <>
      <Head>
        <title>Your Estate | EDC</title>
      </Head>
      <div className="wrapper">
        <FormInput
          setPage={props.setPage}
          setSellerData={props.setSellerData}
        />
      </div>
    </>
  );
}
