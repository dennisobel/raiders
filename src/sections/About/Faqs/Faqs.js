import React, { useState } from 'react';
import './Faqs.css';

import { PageTitle, FaqItem } from '../../../components';
import { faqsContent } from '../../../constants';



const Faqs = () => { 

  // Get the total count of FAQs
  const faqsCount = faqsContent.length;

  // Calculate the halfway point of the FAQs
  const halfCount = Math.ceil(faqsCount / 2);

  // Split the FAQs into two arrays
  const faqsArray1 = faqsContent.slice(0, halfCount); // First half of FAQs
  const faqsArray2 = faqsContent.slice(halfCount); // Second half of FAQs

  // State to manage the active accordion for container 1
  const [activeAccordionId1, setActiveAccordionId1] = useState(faqsArray1[0].id);

  // Function to handle accordion click event for container 1
  const handleAccordionClick1 = (id) => {
    setActiveAccordionId1((prevId) => (prevId === id ? null : id));
  };

  // State to manage the active accordion for container 2
  const [activeAccordionId2, setActiveAccordionId2] = useState(faqsArray2[0].id);

  // Function to handle accordion click event for container 2
  const handleAccordionClick2 = (id) => {
    setActiveAccordionId2((prevId) => (prevId === id ? null : id));
  };
  
  return (
    <> 
      {/* Page title */}
      <PageTitle title={'FAQS'} page={'faqs'} />

      <section className='faq'>

        {/* Faq Accordion container */}
        <div className='accordion-container-1'>
          {/* Faq items */}
          {faqsArray1.map((faq) => {
            return (            
              <FaqItem
                key={faq.id}
                id={faq.id}
                title={faq.heading}
                content={faq.content}
                isActive={faq.id === activeAccordionId1}
                onAccordionClick={handleAccordionClick1}
              /> )
          })}
        </div>

        {/* Faq Accordion container */}
        <div className='accordion-container-2'>
          {/* Faq items */}
          {faqsArray2.map((faq) => {
            return (
              <FaqItem
                key={faq.id}
                id={faq.id}
                title={faq.heading}
                content={faq.content}
                isActive={faq.id === activeAccordionId2}
                onAccordionClick={handleAccordionClick2}
              /> )
          })}
        </div>
        
      </section>
    </>
  );
};

export default Faqs;