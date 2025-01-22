import React, { useState } from "react";


const PhotoCard = ({ photo, title, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <img src={photo} alt={title} style={{ width: "100%", height: "auto" }} />
      <h3>{title}</h3>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Read More"}
      </button>
      {showDetails && <p>{description}</p>}
  </div>

    
  );
};

export default PhotoCard;
