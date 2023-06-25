import AcceptablePolicy from "@/components/TermsConditions/AcceptablePolicy";
import ConclusionContract from "@/components/TermsConditions/ConclusionContract";
import DataProtection from "@/components/TermsConditions/DataProtection";
import Declaration from "@/components/TermsConditions/Declaration";
import Disclosure from "@/components/TermsConditions/Disclosure";
import Dispute from "@/components/TermsConditions/Dispute";
import FinalProvision from "@/components/TermsConditions/FinalProvision";
import General from "@/components/TermsConditions/General";
import Liability from "@/components/TermsConditions/Liability";
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
      <Liability />
      <FinalProvision />
      <Dispute />
    </div>
  );
};

export default TermsConditions;
