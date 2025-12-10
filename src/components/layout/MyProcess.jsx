import React from 'react';

const MyProcess = () => {
  const steps = [
    { num: "01", title: "Discovery", text: "We identify the core problem and goals." },
    { num: "02", title: "Strategy", text: "I map out the user journey or narrative arc." },
    { num: "03", title: "Creation", text: "Coding, Designing, or Filming begins." },
    { num: "04", title: "Refinement", text: "Iterative feedback loops to polish the work." },
  ];

  return (
    <section className="section my-process">
      <div className="container">
        <h2 className="section-title">My Process</h2>
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <span className="step-num">{step.num}</span>
              <h4>{step.title}</h4>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProcess;