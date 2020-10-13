import React from "react";
import SimpleTable from '../components/Table/Table';
import ContactForm from '../components/ContactForm/ContactForm';

function Contact() {
  return (
    <div className="pattern-bgc">
      <ContactForm></ContactForm>
      <SimpleTable></SimpleTable>    
    </div>
  );
}

export default Contact;