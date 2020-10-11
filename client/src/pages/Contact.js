import React, { useEffect } from "react";
import SimpleTable from '../components/Table/Table';
import ContactForm from '../components/ContactForm/ContactForm';

function Contact() {
  return (
    <div>
      <ContactForm></ContactForm>
      <SimpleTable></SimpleTable>    
    </div>
  );
}

export default Contact;