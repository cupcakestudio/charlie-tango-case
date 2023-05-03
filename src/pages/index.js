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
  const [step, setStep] = useState(4);
  //function der returnerer på hver pagenav menuens værdier
  function getActive() {
    if (page === "yourEstate") {
      return 0;
    }
    if (page === "potentialBuyerView") {
      return 1;
    }
    if (page === "contactEDC") {
      return 2;
    }
    if (page === "thankYou") {
      return 3;
    }
  }

  function handleBack() {
    if (page === "yourEstate") {
      setPage("landing");
      setStep(1);
    } else if (page === "potentialBuyerView") {
      setPage("yourEstate");
      setStep(2);
    } else if (page === "contactEDC") {
      setPage("potentialBuyerView");
      setStep(3);
    } else if (page === "thankyou") {
      setPage("contactEDC");
      setStep(4);
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
          <div className={styles.back_next} onClick={handleBack}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-left-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>{" "}
          </div>
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
