import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import './FAQ.css';

// FAQ Data from your screenshot
const faqData = [
  {
    question: 'How do I enroll in a course?',
    answer: 'Simply click on the course you are interested in, click the "Enroll Now" button, and follow the checkout process. You will get immediate access upon payment.'
  },
  {
    question: 'Do I need previous skills to start learning?',
    answer: 'It depends on the course. Our "Beginner" level courses are designed for complete novices, while "Intermediate" courses assume some prior knowledge.'
  },
  {
    question: 'Can I get a refund?',
    answer: 'Yes, we offer a 30-day money-back guarantee if you are not satisfied with the course content, provided you have not completed more than 30% of the material.'
  },
  {
    question: 'Do you offer certificates?',
    answer: 'Yes! Upon successfully completing a course and its assessments, you will receive a digital certificate of completion to showcase on your portfolio or LinkedIn.'
  },
  {
    question: 'How long do I have access to course materials?',
    answer: 'You have lifetime access to any course you purchase, including all future updates to the content.'
  },
  {
    question: 'Are the courses live or pre-recorded?',
    answer: 'Most courses are pre-recorded so you can learn at your own pace. Private 1-on-1 sessions are live video calls.'
  },
  {
    question: 'What if I need help while learning?',
    answer: 'You can ask questions in the course community forum, or if you purchased a bundle with mentorship, you can message your instructor directly.'
  },
  {
    question: 'Can I switch between courses?',
    answer: 'We typically do not allow direct switching, but reach out to support within 7 days of purchase and we can help you find the right fit.'
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq-section">
      <div className="faq-container">
        
        {/* Header */}
        <div className="faq-header">
          <h2 className="section-title">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="section-subtitle">Everything you need to know about our courses</p>
        </div>

        {/* Accordion List */}
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <span>{item.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? (
                    <RemoveCircleOutlineIcon style={{ fontSize: '1.8rem', color: '#4fc3f7' }} />
                  ) : (
                    <AddCircleOutlineIcon style={{ fontSize: '1.8rem', color: '#263b68' }} />
                  )}
                </span>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="faq-answer-wrapper"
                  >
                    <p className="faq-answer">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom Contact Card */}
        <div className="contact-card">
          <h3>Still have questions?</h3>
          <p>Can't find the answer you're looking for? Our support team is here to help.</p>
          <button className="contact-btn">Contact Support</button>
        </div>

      </div>
    </section>
  );
};

export default FAQ;