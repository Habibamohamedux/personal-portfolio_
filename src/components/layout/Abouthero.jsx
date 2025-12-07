import React from "react";
import "./Abouthero.css";
import threeDlogo from "../../assets/3dmodels/logo.gltf";
import Aurora from "./Aurora";

const Abouthero = () => {
  return (
    <>
      <Aurora
        colorStops={["#0d1b3d", "#1e3a8a", "#60a5fa"]}
        blend={1.0}
        amplitude={1.0}
        speed={1.0}
      />

      <div className="about-hero-container">
        {/* LEFT SIDE */}
        <div className="left-section">
          <model-viewer
            src={threeDlogo}
            className="threeD-logo"
            camera-controls
            auto-rotate
            rotation-per-second="60deg"
            auto-rotate-delay="1"
            field-of-view="30deg"
            shadow-intensity="0.75"
            exposure="0.59"
            shadow-softness="1"
          ></model-viewer>

          <p className="about-text">
            I am Habiba Saad, a penultimate-year student pursuing a Bachelor's
            degree in Digital Arts with a focus on UX/UI design. I am expanding
            my skill set by studying full-stack development, allowing me to
            build responsive and user-friendly web applications.
            <br />
            <br />I am proficient in industry-standard design tools like Adobe
            XD, Figma, Sketch, and Illustrator, as well as development languages
            including HTML, CSS, JavaScript, and ReactJS. My fluency in English
            and Arabic, along with working knowledge of German, allows me to
            communicate effectively and adapt to new challenges.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-section glass-box">
          <h1 className="glass-title">Welcome User,</h1>

          <p className="glass-paragraph">
            Let me introduce myself, I am a person, a Learner, an artist, a
            writer, a front-end developer, a filmmaker, a graphic designer, a
            video editor and most importantly a UX/UI designer.
            <br />
            <br />I seem to be a person with a lot of interests—and it's
            true—but that never makes me incapable of mastering none. I think
            what makes me the way I am is I will always make any vision come
            true.
          </p>

          <p className="curious">Curious?</p>

          <button className="glass-btn">Get Started ↓</button>
        </div>
      </div>
    </>
  );
};

export default Abouthero;
