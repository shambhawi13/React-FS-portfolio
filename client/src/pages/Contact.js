import React, { useEffect } from "react";
import SimpleTable from '../components/Table/Table';
import ContactForm from '../components/ContactForm/ContactForm';

function Contact() {
  return (
    <div>
      <SimpleTable></SimpleTable>
      <ContactForm></ContactForm>
    </div>
  );
}

export default Contact;