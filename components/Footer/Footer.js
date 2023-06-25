import React from "react";
import styles from "@/styles/Footer.module.css";
import footerLogo from "../../public/assets/footer-logo.png";
import Link from "next/link";

const Footer = () => {
  const routes = [
    {
      name: "Conditions",
      path: "/terms-and-conditions",
    },
    {
      name: "Data protection",
      path: "/privacy-statement",
    },
    {
      name: "Imprint",
      path: "",
    },
    {
      name: "Make contact",
      path: "",
    },
    {
      name: "Team",
      path: "",
    },
    {
      name: "Find nanny",
      path: "",
    },
    {
      name: "Become  a childcare worker",
      path: "",
    },
    {
      name: "FAQ from childcare workers",
      path: "",
    },
    {
      name: "FAQ from parents",
      path: "",
    },
    {
      name: "FAQ from parents",
      path: "",
    },
    {
      name: "Feedback",
      path: "",
    },
    {
      name: "How does it work",
      path: "",
    },
    {
      name: "Login / Registration",
      path: "",
    },
    {
      name: "To the blog",
      path: "",
    },
    {
      name: "Interesting for seniors",
      path: "",
    },
    {
      name: "Baby-sitter",
      path: "",
    },
    {
      name: "Babysitter Berlin",
      path: "",
    },
    {
      name: "Babysitter Bonn",
      path: "",
    },
    {
      name: "Babysitter Dusseldorf",
      path: "",
    },
    {
      name: "Babysitter Frankfurt",
      path: "",
    },
    {
      name: "Babysitter Hamburg",
      path: "",
    },
    {
      name: "More cities",
      path: "",
    },
    {
      name: "Childcare",
      path: "",
    },
    {
      name: "Childcare Berlin",
      path: "",
    },
    {
      name: "Childcare Bonn",
      path: "",
    },
    {
      name: "Childcare Dusseldorf",
      path: "",
    },
    {
      name: "Childcare Frankfurt",
      path: "",
    },
    {
      name: "Childcare Hamburg",
      path: "",
    },
    {
      name: "More cities",
      path: "",
    },
    {
      name: "Surrogate",
      path: "",
    },
    {
      name: "Loan Grandma Berlin",
      path: "",
    },
    {
      name: "Leihoma Bonn",
      path: "",
    },
    {
      name: "Loan Grandma Dusseldorf",
      path: "",
    },
    {
      name: "Lease grandmother Frankfurt",
      path: "",
    },
    {
      name: "Lease granmother Hamburg",
      path: "",
    },
    {
      name: "Nanny",
      path: "",
    },
    {
      name: "Nanny Berlin",
      path: "",
    },
    {
      name: "Nanny Bonn",
      path: "",
    },
    {
      name: "Nanny Dusseldorf",
      path: "",
    },
    {
      name: "Nanny Frankfurt",
      path: "",
    },
    {
      name: "Nanny Hamburg",
      path: "",
    },
  ];

  return (
    <footer>
      <div className="container">
        <div className="text-center">
          <img src={footerLogo.src} alt="" />
        </div>
        <p className="content">
          SilverSitting.com is a platform where parents can find seniors to care
          for their children. Parents can search for a suitable childcare worker
          - SilverSitter - independently, contact them and arrange childcare
          services. The operator does not provide childcare, nor are childcare
          providers suggested and selected. It is not possible to check the
          identity of the supervisors; the truthful and correct specification of
          personal data is pointed out in the data protection regulations and
          general terms and conditions. SilverSitting sees itself as a
          meaningful company.
        </p>

        <div className="d-flex flex-wrap justify-content-between">
          <div>
            {routes.slice(0, 4).map((item, index) => (
              <Link href={item?.path}>{item.name}</Link>
            ))}
          </div>
          <div>
            {routes.slice(4, 8).map((item, index) => (
              <Link href="/">{item.name}</Link>
            ))}
          </div>
          <div>
            {routes.slice(9, 13).map((item, index) => (
              <Link href="/">{item.name}</Link>
            ))}
          </div>
          <div>
            {routes.slice(13, 15).map((item, index) => (
              <Link href="/">{item.name}</Link>
            ))}
          </div>
        </div>
        <p className="mid_content">
          SilverSetting sees itself as a meaningful company
        </p>

        <div className="d-flex flex-wrap justify-content-between">
          <div>
            {routes.slice(15, 22).map((item, index) => (
              <Link href="/">{item.name}</Link>
            ))}
          </div>
          <div>
            {routes.slice(22, 29).map((item, index) => (
              <Link href="/">{item.name}</Link>
            ))}
          </div>
          <div>
            {routes.slice(29, 35).map((item, index) => (
              <Link href="/">{item.name}</Link>
            ))}
          </div>
          <div>
            {routes.slice(35, 41).map((item, index) => (
              <Link href="/">{item.name}</Link>
            ))}
          </div>
        </div>
        <p className="hr"></p>
        <p className="copyright">
          © 2022 SilverSitting, Andrea and Daniel Monninger (GbR)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
