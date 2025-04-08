import React from "react";
import "./ConnectSection.css";

const ConnectSection = () => {
  return (
    <div className="connect-section">
      <div className="connect-section__text-container">
        <p className="connect-section__caption caveat-font">
          Tap this 'tiny' button to highlight your product =)
        </p>
      </div>

      <div className="connect-section__button-wrapper">
        <a
          className="connect-section__button connect-button"
          href="mailto:anil582905@gmail.com"
          target="_blank"
          rel="noopener"
          tabIndex="0"
          data-framer-name="Connect - L"
        >
          <div className="connect-button__outer">
            <div className="connect-button__middle">
              <div className="connect-button__inner">
                <p className="connect-button__text">
                  <span className="connect-button__text-fill">Connect</span>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ConnectSection;
