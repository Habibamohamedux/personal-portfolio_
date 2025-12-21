import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import './FAQ.css';
/* --- FAQ DATA --- */
const faqData = [
  {
    question: 'What services do you offer?',
    answer: 'I offer UI/UX design, website design, front-end development (HTML, CSS, basic React), branding basics, motion graphics, and design support for student or startup projects. I also help with redesigns, portfolios, and concept development.'
  },
  {
    question: 'Are you a student or a professional designer?',
    answer: 'I am a senior Digital Arts student with strong practical experience. This means I work professionally on real projects while still learning, experimenting, and growing as a junior designer.'
  },
  {
    question: 'Do you offer courses or learning packages?',
    answer: 'Yes. I offer beginner-friendly design and creative courses. The course package starts at $25 and is designed to be affordable, practical, and easy to follow.'
  },
  {
    question: 'How does your project pricing work?',
    answer: 'Project pricing depends on the size, timeline, and type of work needed. Smaller tasks are more affordable, while larger or more complex projects are priced accordingly after discussing requirements.'
  },
  {
    question: 'How long does it usually take to finish a project?',
    answer: 'Small tasks usually take 1–3 days, while full design or website projects can take 1–2 weeks depending on complexity and feedback speed.'
  },
  {
    question: 'Can you collaborate with other designers or developers?',
    answer: 'Yes! I enjoy collaborating with other designers and developers, whether on school projects, passion projects, or real client work.'
  },
  {
    question: 'Who do you usually work with?',
    answer: 'I usually work with students, small businesses, startups, content creators, and anyone who needs thoughtful design without agency-level pricing.'
  },
  {
    question: 'Why should I work with you?',
    answer: 'You get a designer who is detail-oriented, flexible, up-to-date with design trends, and genuinely invested in learning and delivering quality work — not just finishing a task.'
  }
];
/* --- Animation Variants --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
  }),
  hover: {
    scale: 1.02,
    transition: { duration: 0.3 }
  }
};

const childVariants = {
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hover: {
    color: "#3b82f6", // Blue accent on hover
    y: -5,
    transition: { duration: 0.2 }
  }
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const formatIndex = (i) => (i + 1).toString().padStart(2, '0');

  // Helper to animate text
  const AnimatedText = ({ text }) => {
    // Split text into letters
    const letters = Array.from(text);

    return (
      <motion.div
        style={{ display: "inline-block", overflow: "hidden", whiteSpace: "nowrap" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: true }}
      >
        {letters.map((letter, index) => (
          <motion.span 
            key={index} 
            variants={childVariants} 
            style={{ display: "inline-block" }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <section id="faq-section">
      <div className="faq-container">
        
        {/* LEFT: Animated Gothic Title */}
        <div className="faq-title-col">
          <div className="sticky-wrapper">
            <div className="gothic-title-wrapper">
              <AnimatedText text="FREQUENTLY" />
              <br />
              <AnimatedText text="ASKED" />
              <br />
              <AnimatedText text="QUESTIONS" />
            </div>
            
            <motion.div className="title-decoration-line"></motion.div>

            <motion.p 
              className="faq-intro"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Curated answers to help you master your learning journey.
            </motion.p>
          </div>
        </div>

        {/* RIGHT: List */}
        <div className="faq-list-col">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question-row">
                <span className="faq-number">{formatIndex(index)}</span>
                <h3 className="faq-question-text">{item.question}</h3>
                <span className="faq-icon-wrapper">
                  <AddIcon className="faq-trigger-icon" />
                </span>
              </div>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="faq-answer-container"
                  >
                    <p className="faq-answer-text">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;