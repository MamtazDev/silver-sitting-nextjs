import AcceptablePolicy from "@/components/TermsConditions/AcceptablePolicy";
import ConclusionContract from "@/components/TermsConditions/ConclusionContract";
import DataProtection from "@/components/TermsConditions/DataProtection";
import Declaration from "@/components/TermsConditions/Declaration";
import Disclosure from "@/components/TermsConditions/Disclosure";
import General from "@/components/TermsConditions/General";
import ListBanner from "@/components/TermsConditions/ListBanner";
import Responsibilities from "@/components/TermsConditions/Responsibilities";
import ServiceDescription from "@/components/TermsConditions/ServiceDescription";
import React from "react";

const TermsConditions = () => {
  return (
    <div>
      <ListBanner />
      <General />
      <AcceptablePolicy />
      <ServiceDescription />
      <ConclusionContract />
      <DataProtection />
      <Disclosure />
      <Declaration />
      <Responsibilities />
    </div>
  );
};

export default TermsConditions;
