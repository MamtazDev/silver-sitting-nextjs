import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/Home/Banner/Banner";
import Known from "@/components/Home/Known/Known";
import About from "@/components/Home/About";
import HowWorks from "@/components/Home/HowWorks";
import Register from "@/components/Home/Register";
import { useSelector } from "react-redux";
import translations from "@/utils/translation";
import { useTranslation } from "react-i18next";

import Cookies from "js-cookie";

export default function Home() {
  const { user } = useSelector((state) => state.register);
  const { i18n } = useTranslation();

  const t =
    i18n.language === "en"
      ? function (str) {
          return translations.en[str];
        }
      : function (str) {
          return translations.de[str];
        };
  return (
    <>
      <Head>
        <title>SilverSitting - Seniors take care of children</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="../styles/Header.css" />
      </Head>
      <main>
        {/* <h1>{t("nachricht")}</h1> */}
        <Banner t={t} />
        <Known />
        <About />
        <HowWorks />
        {!user && <Register />}
      </main>
    </>
  );
}
