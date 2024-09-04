import CardsSection from "@/components/CardSection";
import FAQSection from "@/components/FaqSection";
import SaathisSection from "@/components/Saathis";
import SaathiServices from "@/components/SaathiService";
import ServicesComponent from "@/components/ServiceComponent";
import SubscriptionPage from "@/components/Subscription";
import TestimonialsSection from "@/components/Testimonial";
import React from "react";

function Home() {
  return (
    <div>
      <SaathiServices />
      <CardsSection />
      <SaathisSection />
      {/* <ServicesComponent/> */}
      <SubscriptionPage />

      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}

export default Home;
