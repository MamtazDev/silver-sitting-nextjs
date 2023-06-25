import AcceptablePolicy from "@/components/TermsConditions/AcceptablePolicy";
import ConclusionContract from "@/components/TermsConditions/ConclusionContract";
import DataProtection from "@/components/TermsConditions/DataProtection";
import General from "@/components/TermsConditions/General";
import ListBanner from "@/components/TermsConditions/ListBanner";
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
      <DataProtection/>
    </div>
  );
};

export default TermsConditions;
