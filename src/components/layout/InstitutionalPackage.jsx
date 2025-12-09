import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Icons for the "What We Offer" section
import SchoolIcon from '@mui/icons-material/School'; // For University Programs
import DescriptionIcon from '@mui/icons-material/Description'; // For Comprehensive Curriculum
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'; // For Flexible Delivery
// Icons for the buttons
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';

import './InstitutionalPackage.css';

// Data for the left column offerings, extracted from the image
const offeringsData = [
  {
    id: 1,
    icon: <SchoolIcon />,
    title: 'University Programs',
    description: 'Semester-long courses with structured syllabi and student progress tracking',
  },
  {
    id: 2,
    icon: <DescriptionIcon />,
    title: 'Comprehensive Curriculum',
    description: 'Detailed course materials, projects, and assessments included',
  },
  {
    id: 3,
    icon: <CloudDownloadIcon />,
    title: 'Flexible Delivery',
    description: 'On-site, remote, or hybrid learning options to fit your organization',
  },
];

// Animation variants
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
  // State for form fields
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    emailAddress: '',
    teamSize: '',
    needs: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="institutional-package">
      <motion.div
        className="institutional-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <div className="institutional-header">
          <h2 className="section-title">INSTITUTIONAL & TEAM PACKAGES</h2>
          <p className="section-subtitle">
            Comprehensive learning solutions for organizations, universities, and teams
          </p>
        </div>

        <div className="institutional-content">
          {/* Left Column: What We Offer */}
          <motion.div className="offerings-column" variants={itemVariants}>
            <h3 className="column-title">WHAT WE OFFER ORGANIZATIONS</h3>
            <div className="offerings-list">
              {offeringsData.map((item) => (
                <div key={item.id} className="offering-item">
                  <div className="offering-icon-wrapper">{item.icon}</div>
                  <div className="offering-text">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Request Form Card */}
          <motion.div className="form-column" variants={itemVariants}>
            <div className="form-card">
              <h3 className="form-title">Request Information</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="organizationName">Organization Name</label>
                  <input
                    type="text"
                    id="organizationName"
                    name="organizationName"
                    placeholder="Your organization"
                    value={formData.organizationName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contactPerson">Contact Person</label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    placeholder="Your name"
                    value={formData.contactPerson}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailAddress">Email Address</label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    placeholder="your@email.com"
                    value={formData.emailAddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="teamSize">Team Size</label>
                  <input
                    type="text"
                    id="teamSize"
                    name="teamSize"
                    placeholder=""
                    value={formData.teamSize}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="needs">Tell us about your needs</label>
                  <textarea
                    id="needs"
                    name="needs"
                    rows="4"
                    placeholder="What skills are you looking to develop?"
                    value={formData.needs}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Request Bulk Pricing Button */}
                <motion.button
                  className="request-btn"
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <EmailIcon className="btn-icon" /> Request Bulk Pricing
                </motion.button>

                {/* Download Sample Curriculum Button */}
                <motion.button
                  className="download-btn"
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <DownloadIcon className="btn-icon" /> Download Sample Curriculum (PDF)
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default InstitutionalPackage;