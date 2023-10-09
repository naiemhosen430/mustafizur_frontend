import React from "react";
import PageHeader from "../components/ReUseableComponents/PageHeader";
import Image from "next/image";
import OurStory from "../components/About/OurStory";
import OurMission from "../components/About/OurMission";
import OurGelary from "../components/About/OurGelary";
import OurCustomers from "../components/About/OurCustomers";
import OurStory2 from "../components/About/OurStory2";

export default function page() {
  return (
    <>
      <div>
        <PageHeader pagename={"about"} />
        <div className="lg:w-10/12 w-12/12 m-auto">
          <Image
            className="w-full h-full"
            height={0}
            width={0}
            src={
              "data:image/jpeg;base64,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"
            }
          />
        </div>
        <OurStory />
        <OurMission />
        <OurGelary />
        <OurCustomers />
        <OurStory2 />
      </div>
    </>
  );
}