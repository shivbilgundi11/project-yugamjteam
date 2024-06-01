
import { useEffect } from "react";
import ContactUs from "../components/(contact-us components)/Form&Map";

export default function Contact() {
  useEffect(() => {
    window.document.title = "Contact us";
  });
  return (
    <>
      <section className="w-full h-auto">
        <ContactUs />
      </section>
    </>
  );
}
