import React from "react";
import { useNavigate } from "react-router-dom"; // Import this for navigation
import "./Portfolioweb.css";
import PortfolioText from "../common/PortfolioText"; 

const Portfolioweb = () => {
  const navigate = useNavigate();

  return (
    <section className="web-section">
      
      {/* --- Decorative Chrome Shapes --- */}
      <div className="web-shapes">
        <img 
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" 
          alt="Chrome Shape Top Right" 
          className="web-shape-tr floating-slow" 
        />
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
          alt="Chrome Shape Bottom Left" 
          className="web-shape-bl floating-fast" 
        />
      </div>

      <div className="web-container">
        
        <PortfolioText 
          subtitle="Transforming Designs Into Interactive Reality"
          title="WEB & APP DEVELOPMENT PROJECTS"
          description="Transforming designs into clean, responsive, and accessible digital experiences. Focused on delivering seamless usability and consistent performance across all devices."
          btnGradient="linear-gradient(90deg, #22d3ee 0%, #0ea5e9 100%)"
          subtitleColor="#a8ddec"
          // Add this so the button works!
          onBtnClick={() => navigate('/projects/web')} 
        />

        {/* --- RIGHT COLUMN: Device Mockups --- */}
        <div className="web-visuals-column">
          <div className="devices-group">
            
            {/* 1. Laptop (Back Layer) */}
            <div className="device-laptop">
              <img 
                src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=2574&auto=format&fit=crop" 
                alt="Laptop Website" 
              />
              <div className="screen-overlay"></div>
            </div>

            {/* 2. Tablet (Middle Layer - Left) */}
            <div className="device-tablet">
              <img 
                src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2671&auto=format&fit=crop" 
                alt="Tablet Website" 
              />
            </div>

            {/* 3. Phone (Front Layer - Center) */}
            <div className="device-phone">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop" 
                alt="Mobile Website" 
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolioweb;