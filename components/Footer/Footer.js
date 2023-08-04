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
      path: "/imprint",
    },
    {
      name: "Make contact",
      path: "/contact",
    },
    {
      name: "Team",
      path: "/whoWeAre",
    },
    {
      name: "Find nanny",
      path: "/child-care",
    },
    {
      name: "Become  a childcare worker",
      path: "#",
    },
    {
      name: "FAQ from childcare workers",
      path: "/ChildrenProviderFaq",
    },
    {
      name: "FAQ from parents",
      path: "/faq",
    },
    {
      name: "FAQ from parents",
      path: "/faq",
    },
    {
      name: "Feedback",
      path: "/feedback",
    },
    {
      name: "How does it work",
      path: "#",
    },
    {
      name: "Login / Registration",
      path: "/login",
    },
    {
      name: "To the blog",
      path: "/blogs",
    },
    {
      name: "Interesting for seniors",
      path: "#",
    },
    {
      name: "Baby-sitter",
      path: "https://www.silversitting.com/suche",
    },
    {
      name: "Babysitter Berlin",
      path: "https://www.silversitting.com/suche?Suchort=Berlin",
    },
    {
      name: "Babysitter Bonn",
      path: "https://www.silversitting.com/suche?Suchort=Bonn",
    },
    {
      name: "Babysitter Dusseldorf",
      path: "https://www.silversitting.com/suche?Suchort=Duesseldorf",
    },
    {
      name: "Babysitter Frankfurt",
      path: "https://www.silversitting.com/suche?Suchort=Frankfurt",
    },
    {
      name: "Babysitter Hamburg",
      path: "https://www.silversitting.com/suche?Suchort=Hamburg",
    },
    {
      name: "More cities",
      path: "#",
    },
    {
      name: "Childcare",
      path: "https://www.silversitting.com/suche",
    },
    {
      name: "Childcare Berlin",
      path: "https://www.silversitting.com/suche?Suchort=Berlin",
    },
    {
      name: "Childcare Bonn",
      path: "https://www.silversitting.com/suche?Suchort=Bonn",
    },
    {
      name: "Childcare Dusseldorf",
      path: "https://www.silversitting.com/suche?Suchort=Duesseldorf",
    },
    {
      name: "Childcare Frankfurt",
      path: "https://www.silversitting.com/suche?Suchort=Frankfurt",
    },
    {
      name: "Childcare Hamburg",
      path: "https://www.silversitting.com/suche?Suchort=Hamburg",
    },
    {
      name: "More cities",
      path: "#",
    },
    {
      name: "Surrogate",
      path: "https://www.silversitting.com/suche",
    },
    {
      name: "Loan Grandma Berlin",
      path: "https://www.silversitting.com/suche?Suchort=Berlin",
    },
    {
      name: "Leihoma Bonn",
      path: "https://www.silversitting.com/suche?Suchort=Bonn",
    },
    {
      name: "Loan Grandma Dusseldorf",
      path: "https://www.silversitting.com/suche?Suchort=Duesseldorf",
    },
    {
      name: "Lease grandmother Frankfurt",
      path: "https://www.silversitting.com/suche?Suchort=Frankfurt",
    },
    {
      name: "Lease granmother Hamburg",
      path: "https://www.silversitting.com/suche?Suchort=Hamburg",
    },
    {
      name: "Nanny",
      path: "https://www.silversitting.com/suche",
    },
    {
      name: "Nanny Berlin",
      path: "https://www.silversitting.com/suche?Suchort=Berlin",
    },
    {
      name: "Nanny Bonn",
      path: "https://www.silversitting.com/suche?Suchort=Bonn",
    },
    {
      name: "Nanny Dusseldorf",
      path: "https://www.silversitting.com/suche?Suchort=Duesseldorf",
    },
    {
      name: "Nanny Frankfurt",
      path: "https://www.silversitting.com/suche?Suchort=Frankfurt",
    },
    {
      name: "Nanny Hamburg",
      path: "https://www.silversitting.com/suche?Suchort=Hamburg",
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

        <div className="d-flex gap-4 flex-wrap flex-column flex-md-row justify-content-between">
          <div>
            {routes.slice(0, 4).map((item, index) => (
              <Link href={item?.path}>{item.name}</Link>
            ))}
          </div>
          <div>
            {routes.slice(4, 8).map((item, index) => (
              <Link href={item?.path}>{item.name}</Link>
            ))}
          </div>
          <div>
            {routes.slice(9, 13).map((item, index) => (
              <Link href={item?.path}>{item.name}</Link>
            ))}
          </div>
          <div>
            {routes.slice(13, 15).map((item, index) => (
              <Link href={item?.path}>{item.name}</Link>
            ))}
          </div>
        </div>
        <p className="mid_content">
          SilverSetting sees itself as a meaningful company
        </p>

        <div className="d-flex gap-4 flex-wrap flex-column flex-md-row justify-content-between">
          <div>
            {routes.slice(15, 22).map((item, index) => (
              <Link target="_blank" href={item.path}>
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            {routes.slice(22, 29).map((item, index) => (
              <Link target="_blank" href={item.path}>
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            {routes.slice(29, 35).map((item, index) => (
              <Link target="_blank" href={item.path}>
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            {routes.slice(35, 41).map((item, index) => (
              <Link target="_blank" href={item.path}>
                {item.name}
              </Link>
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
