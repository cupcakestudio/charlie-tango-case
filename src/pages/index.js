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
  const [page, setPage] = useState("landing");
  // Definere state, sellerData, så vi længere nede kan sende staten videre
  const [sellerData, setSellerData] = useState({
    buyers: [],
  });

  //function der returnerer på hver pagenav menuens værdier
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

  function handleBack() {
    if (page === "yourEstate") {
      setPage("landing");
    } else if (page === "potentialBuyerView") {
      setPage("yourEstate");
    } else if (page === "contactEDC") {
      setPage("potentialBuyerView");
    } else if (page === "thankyou") {
      setPage("contactEDC");
    }
  }

  return (
    <>
      <Head>
        <title>Find buyer | EDC</title>
      </Head>
      {/* gør at stepbar og back knap ikke vises på landingpage */}
      {page !== "landing" && <StepBar activeStep={getActive()} />}
      {page !== "landing" && (
        <div className={styles.back_next_buttons}>
          <button className={styles.button_back_next} onClick={handleBack}>
            Back
          </button>
        </div>
      )}
      {page === "landing" ? <Landingpage setPage={setPage} /> : null}
      {page === "yourEstate" ? (
        <FormCard setPage={setPage} setSellerData={setSellerData} />
      ) : null}
      {page === "potentialBuyerView" ? (
        <PotentialBuyers
          setPage={setPage}
          sellerData={sellerData}
          setSellerData={setSellerData}
        />
      ) : null}
      {page === "contactEDC" ? (
        <ContactForm setPage={setPage} sellerData={sellerData} />
      ) : null}
      {page === "thankyou" ? <FormthankYou /> : null}
      <div style={{ display: "flex", justifyContent: "space-between" }}></div>
    </>
  );
}
