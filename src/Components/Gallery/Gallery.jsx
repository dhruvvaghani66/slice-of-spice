import React, { useState } from "react";
import "./Gallery.css";
import image1 from "../../assets/gallery11.png";
import image2 from "../../assets/gallery12.png";
import image3 from "../../assets/gallery13.png";
import image4 from "../../assets/gallery14.png";
import image5 from "../../assets/gallery15.png";
import image6 from "../../assets/gallery16.png";
import image7 from "../../assets/gallery17.png";
import image8 from "../../assets/gallery18.png";
import image9 from "../../assets/gallery19.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="gallery-nav">
        <Navbar />
      </div>

      <div className="gall">
        {/* <div className="gallery-nav">
      <Navbar />
      </div> */}
        {/* <div className="gallery1"> */}
        <div className="gallery">
          <div className="gallery-head"></div>
          <div className="text">GALLERY</div>
          {/* <div className="gallery-content"> */}
          <div className="gall1">
            {/* <div className="gallery-content">
          You'll Never Get Tired Of Viewing
          <div className="image-grid">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
        {selectedImageIndex !== null && (
          <div className="modal">
            <button className="prev-btn" onClick={handlePrevImage}>
              &#10094;
            </button>
            <img
              src={images[selectedImageIndex]}
              alt={`Image ${selectedImageIndex + 1}`}
              className="modal-image"
            />
            <button className="next-btn" onClick={handleNextImage}>
              &#10095;
            </button>
            <button className="close-btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        )}
        <div className="gallery-footer">
          <Footer />
        </div> */}
          </div>
        </div>

        {/* </div> */}
        {/* <div className="gallery-content">
        You'll Never Get Tired Of Viewing
        <div className="image-grid">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
      {selectedImageIndex !== null && (
        <div className="modal">
          <button className="prev-btn" onClick={handlePrevImage}>
            &#10094;
          </button>
          <img
            src={images[selectedImageIndex]}
            alt={`Image ${selectedImageIndex + 1}`}
            className="modal-image"
          />
          <button className="next-btn" onClick={handleNextImage}>
            &#10095;
          </button>
          <button className="close-btn" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      )}
      <div className="gallery-footer">
        <Footer />
    </div>       */}
        <div className="gallery-content">
          You'll Never Get Tired Of Viewing
          <div className="image-grid">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
        {selectedImageIndex !== null && (
          <div className="modal">
            <button className="prev-btn" onClick={handlePrevImage}>
              &#10094;
            </button>
            <img
              src={images[selectedImageIndex]}
              alt={`Image ${selectedImageIndex + 1}`}
              className="modal-image"
            />
            <button className="next-btn" onClick={handleNextImage}>
              &#10095;
            </button>
            <button className="close-btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        )}
        <div className="gallery-footer">
          <Footer />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Gallery;
