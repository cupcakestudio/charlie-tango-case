import Head from "next/head";
import styles from "./Home.module.css";
import { Landingpage } from "@/components/Header/landingpage";
import FormCard from "@/components/FormCard";
import { FormthankYou } from "@/components/FormthankYou";
import { useState } from "react";
export default function Home() {
  /* konstanten page tjekker hvilken side vi er på med useState */
  const [page, setPage] = useState("landing");
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <section>
        <Landingpage></Landingpage>
      </section>
      <div className="wrapper">
        <FormCard></FormCard>
      </div>
      <section>
        <FormthankYou></FormthankYou>
      </section>
      {/* definere en if sætning der sætter pagen til landing som standart og bruger null til at gemme alt der ikke er = landing */}
      {page === "landing" ? (
        <Landingpage setPage={setPage}></Landingpage>
      ) : null}

      {/* definere en state til denne side*/}
      {page === "yourEstate" ? (
        <div className="wrapper">
          <FormCard />
        </div>
      ) : null}
    </>
  );
}
