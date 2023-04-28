import Head from "next/head";
import styles from "./Home.module.css";
import { Landingpage } from "@/components/Landingpage";
import FormCard from "@/components/FormCard";
import { FormthankYou } from "@/components/FormthankYou";
import { useState } from "react";
import { PotentialBuyers } from "@/components/PotentialBuyers";
import ContactForm from "@/components/ContactForm";
import StepBar from "src/components/stepBar.jsx";
export default function Home() {
  /* konstanten page tjekker hvilken side vi er på med useState */
  const [page, setPage] = useState("landing");

  /* funktion som tjekker siden vi er på, og sætter getActive = den aktive knap på bar efter siden*/
  function getActive() {
    if (page === "landing") {
      return 0;
    }
    if (page === "yourEstate") {
      return 1;
    }
    if (page === "potentialBuyerView") {
      return 2;
    }
    if (page === "contactEDC") {
      return 3;
    }
  }

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      <StepBar activeStep={getActive()}></StepBar>
      {/* definere en if sætning der sætter pagen til landing som standart og bruger null til at gemme alt der ikke er = landing */}
      {page === "landing" ? (
        <Landingpage setPage={setPage}></Landingpage>
      ) : null}

      {/* definere en state til denne side*/}
      {page === "yourEstate" ? <FormCard setPage={setPage} /> : null}
      {page === "potentialBuyerView" ? (
        <PotentialBuyers setPage={setPage} />
      ) : null}
      {page === "contactEDC" ? <ContactForm setPage={setPage} /> : null}
      {page === "thankyou" ? <FormthankYou /> : null}
    </>
  );
}
