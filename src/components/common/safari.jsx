import React, { useState } from "react";
import "./safari.css";

const Safari = ({ url: initialUrl = "https://habibasaad.com/Home", images = [] }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [url, setUrl] = useState(initialUrl);
  const [isEditingUrl, setIsEditingUrl] = useState(false);

  // update URL dynamically when prop changes
  React.useEffect(() => {
    setUrl(initialUrl);
  }, [initialUrl]);

  return (
    <div
      className={`safari-window ${isExpanded ? "safari-expanded" : ""} ${
        isMinimized ? "safari-minimized" : ""
      }`}
    >
      {/* Header */}
      <div className="safari-header">
        <div className="safari-controls">
          <span
            className="control red"
            title="Reset"
            onClick={() => {
              setIsExpanded(false);
              setIsMinimized(false);
              setUrl(initialUrl);
            }}
          ></span>
          <span
            className="control yellow"
            title={isMinimized ? "Restore" : "Minimize"}
            onClick={() => setIsMinimized(!isMinimized)}
          ></span>
          <span
            className="control green"
            title={isExpanded ? "Shrink" : "Expand"}
            onClick={() => setIsExpanded(!isExpanded)}
          ></span>
        </div>

        {/* URL bar */}
        <div className="safari-url-bar" onClick={() => setIsEditingUrl(true)}>
          {isEditingUrl ? (
            <input
              autoFocus
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onBlur={() => setIsEditingUrl(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") setIsEditingUrl(false);
              }}
            />
          ) : (
            <span>{url}</span>
          )}
        </div>
      </div>

      {/* Content area */}
      {!isMinimized && (
        <div className="safari-content">
          {images.length > 0 ? (
            <img
              src={images[0]}
              alt="Active project"
              className="safari-image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div className="placeholder-content">
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Safari;
