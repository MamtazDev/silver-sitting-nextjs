import NoSms from "@/components/Pobox/NoSms";
import PoBox from "@/components/Pobox/PoBox";
import ProfileLayout from "@/layouts/Profile";
import React, { useState } from "react";

const POBOX = () => {
  const [step, setStep] = useState(2);

  return (
    <div className="w-100">
      {step === 1 && <PoBox />}
      {step === 2 && <NoSms />}
    </div>
  );
};

POBOX.PageLayout = ProfileLayout;

export default POBOX;
