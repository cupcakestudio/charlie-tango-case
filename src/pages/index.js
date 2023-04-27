import Head from "next/head";
import styles from "./Home.module.css";
import { Landingpage } from "@/components/Header/landingpage";
import FormCard from "@/components/FormCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <section>
        <Landingpage></Landingpage>
      </section>
      <div className="wrapper">
        <FormCard />
      </div>
    </>
  );
}
