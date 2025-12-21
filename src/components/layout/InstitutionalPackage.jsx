import React from 'react';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import HandshakeIcon from '@mui/icons-material/Handshake';
import EmailIcon from '@mui/icons-material/Email';
import './InstitutionalPackage.css';

// Updated data to focus on Personal/Guest offerings
const offeringsData = [
  {
    id: 1,
    icon: <SchoolIcon className="inst-collab__icon" />,
    title: 'University Guest Lectures',
    description: 'I can visit your campus to deliver industry-focused talks and bridge the gap between theory and practice.',
  },
  {
    id: 2,
    icon: <GroupsIcon className="inst-collab__icon" />,
    title: 'Team Workshops',
    description: 'Hands-on creative sessions designed to upskill your design or development team.',
  },
  {
    id: 3,
    icon: <HandshakeIcon className="inst-collab__icon" />,
    title: 'Curriculum Advisory',
    description: 'Collaborating with faculties to modernize syllabi and project requirements.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const InstitutionalPackage = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:contact@habibasaad.com?subject=Institutional Collaboration Inquiry";
  };

  return (
    <section id="inst-collab">
      <motion.div
        className="inst-collab__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Header */}
        <div className="inst-collab__header">
          <h2 className="inst-collab__title">INSTITUTIONAL COLLABORATIONS</h2>
          <div className="inst-collab__divider"></div>
          <p className="inst-collab__subtitle">
            Empowering the next generation of creatives through academic partnerships and professional training.
          </p>
        </div>

        <div className="inst-collab__content">
          
          {/* Left Column: What You Do */}
          <motion.div className="inst-collab__left" variants={itemVariants}>
            <div className="inst-collab__list">
              {offeringsData.map((item) => (
                <div key={item.id} className="inst-collab__item">
                  <div className="inst-collab__icon-box">{item.icon}</div>
                  <div className="inst-collab__text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Call to Action Card */}
          <motion.div className="inst-collab__right" variants={itemVariants}>
            <div className="inst-collab__cta-card">
              <h3 className="inst-collab__cta-title">Let's Work Together</h3>
              
              <p className="inst-collab__cta-desc">
                Whether you need a semester-long partner, a one-off masterclass, 
                or an on-site corporate training session, I am available to travel 
                or present remotely.
              </p>
              
              <p className="inst-collab__cta-desc">
                Let's discuss how we can bring value to your students or team.
              </p>

              <motion.button
                className="inst-collab__btn"
                onClick={handleEmailClick}
                // Removed framer-motion props here as the CSS transition handles the hover better for glass buttons
              >
                <EmailIcon className="inst-collab__btn-icon" /> 
                Get in Touch
              </motion.button>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default InstitutionalPackage;