import React from "react";
import styles from "@/styles/Footer.module.css";
import footerLogo from "../../public/assets/footer-logo.png";
import Link from "next/link";

const Footer = () => {
  const routes = [
    {
      name:"Conditions",
      path:""
    },
    {
      name:"Data protection",
      path:""
    },
    {
      name:"Imprint",
      path:""
    },
    {
      name:"Make contact",
      path:""
    },
    {
      name:"Team",
      path:""
    },
    {
      name:"Find nanny",
      path:""
    },
    {
      name:"Become  a childcare worker",
      path:""
    },
    {
      name:"FAQ from childcare workers",
      path:""
    },
    {
      name:"FAQ from parents",
      path:""
    },
    {
      name:"Feedback",
      path:""
    },
    {
      name:"How does it work",
      path:""
    },
    {
      name:"Login / Registration",
      path:""
    },
    {
      name:"To the blog",
      path:""
    },
    {
      name:"Interesting for seniors",
      path:""
    },
    {
      name:"Baby-sitter",
      path:""
    },
    {
      name:"Babysitter Berlin",
      path:""
    },
    {
      name:"Babysitter Bonn",
      path:""
    },
    {
      name:"Babysitter Dusseldorf",
      path:""
    },
    {
      name:"Babysitter Frankfurt",
      path:""
    },
    {
      name:"Babysitter Hamburg",
      path:""
    },
    {
      name:"More cities",
      path:""
    },
    {
      name:"",
      path:""
    },
    {
      name:"",
      path:""
    },
    {
      name:"",
      path:""
    },
    {
      name:"",
      path:""
    },
    {
      name:"",
      path:""
    },
    {
      name:"",
      path:""
    },
    {
      name:"",
      path:""
    },
    {
      name:"",
      path:""
    },
    {
      name:"",
      path:""
    },
    {
      name:"",
      path:""
    },
    {
      name:"",
      path:""
    },
    {
      name:"",
      path:""
    },
    {
      name:"",
      path:""
    },
    {
      name:"",
      path:""
    },
  ]
  return (
    <footer>
      <div className="container">
        <div className="text-center">
          <img src={footerLogo.src} alt="" />
        </div>
        <p>
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
            <Link href="/">Conditions</Link>
            <Link href="/">Data protection</Link>
            <Link href="/">Imprint</Link>
            <Link href="/">Make contact</Link>
          </div> 
          <div>
            <Link href="/">Team</Link>
            <Link href="/">Find nanny</Link>
            <Link href="/">Become a childcare worker</Link>
            <Link href="/">FAQ from childcare workers</Link>
          </div>
          <div>
            <Link href="/">FAQ from parents</Link>
            <Link href="/">Feedback</Link>
            <Link href="/">How does it work</Link>
            <Link href="/">Login / Registration</Link>
          </div>
          <div>
            <Link href="/">To the blog</Link>
            <Link href="/">Interesting for seniors</Link>
          </div>
        </div>
        <div className="d-flex flex-wrap justify-content-between">
          <div>
            <Link href="/">Baby-sitter</Link>
            <Link href="/">Babysitter Berlin</Link>
            <Link href="/">Babysitter Berlin</Link>
            <Link href="/">Babysitter Dusseldorf</Link>
            <Link href="/">Babysitter Frankfurt</Link>
            <Link href="/">Babysitter Hamburg</Link>
            <Link href="/">More cities</Link>
      
          </div> 
          <div>
            <Link href="/">Childcare</Link>
            <Link href="/">Childcare Berlin</Link>
            <Link href="/">Childcare Bonn</Link>
            <Link href="/">Childcare Dusseldorf</Link>
            <Link href="/">Childcare Frankfurt</Link>
            <Link href="/"></Link>
            <Link href="/"></Link>
            <Link href="/"></Link>
          </div>
          <div>
            <Link href="/">FAQ from parents</Link>
            <Link href="/">Feedback</Link>
            <Link href="/">How does it work</Link>
            <Link href="/">Login / Registration</Link>
          </div>
          <div>
            <Link href="/">To the blog</Link>
            <Link href="/">Interesting for seniors</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
