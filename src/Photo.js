import React from "react";
import PhotoCard from "./PhotoCard";

const photos = [
  {
    id: 1,
    photo: "https://raw.githubusercontent.com/Master-Anku/The-Learning-Palace-/refs/heads/main/assets/images/English-bg.webp",
    title: "Beautiful Beach",
    description: "A beautiful beach with crystal clear water."
  },
  {
    id: 2,
    photo: "https://raw.githubusercontent.com/Master-Anku/The-Learning-Palace-/refs/heads/main/assets/images/English-bg.webp",
    title: "Mountain View",
    description: "A stunning mountain view at sunrise."
  },
  {
    id: 3,
    photo: "https://raw.githubusercontent.com/Master-Anku/The-Learning-Palace-/refs/heads/main/assets/images/English-bg.webp",
    title: "Mountain View",
    description: "A stunning mountain view at sunrise."
  },
];

const Photo = () => {
  return (
    <div>
      <h1>Photo Gallery</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo.photo}
            title={photo.title}
            description={photo.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Photo;
