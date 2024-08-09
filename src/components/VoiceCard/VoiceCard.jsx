import React from "react";
import "./VoiceCard.scss";

function Status() {
  return (
    <div className="bullet">
      <p>Top rated</p>
    </div>
  );
}

function VoiceCard() {
  return (
    <div className="voiceCardContainer">
      <div>
        <div className="flex items-center gap-4">
          <div className="imageContainer">
            <img
              src="/images/profilePlaceholder.jpg"
              alt="voice"
              width="100%"
              height="100%"
            />
          </div>

          <div>
            <p className="name">Sheena</p>
            <Status />
          </div>
        </div>
      </div>
      <div>
        <img src="/icons/arrowRight.svg" />
      </div>
    </div>
  );
}

export default VoiceCard;
