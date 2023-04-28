import Head from "next/head";
import styles from "./Home.module.css";
import { Landingpage } from "@/components/Landingpage";
import FormCard from "@/components/FormCard";
import { FormthankYou } from "@/components/FormthankYou";
import { useState } from "react";
import { PotentialBuyers } from "@/components/PotentialBuyers";
import ContactForm from "@/components/ContactForm";
export default function Home() {
  /* konstanten page tjekker hvilken side vi er på med useState */
  const [page, setPage] = useState("landing");
  // Tager formInput data og gemmer deres states, så vi videre kan bruge dem
  const [sellerData, setSellerData] = useState({});
  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>

      {/* definere en if sætning der sætter pagen til landing som standart og bruger null til at gemme alt der ikke er = landing */}
      {page === "landing" ? (
        <Landingpage setPage={setPage}></Landingpage>
      ) : null}

      {/* definere en state til denne side*/}
      {page === "yourEstate" ? (
        <FormCard setPage={setPage} setSellerData={setSellerData} />
      ) : null}
      {page === "potentialBuyerView" ? <PotentialBuyers /> : null}
      {page === "ContactEDC" ? <ContactForm /> : null}
    </>
  );
}
