import React from "react";
import { Gallery as ReactGridGallery } from "react-grid-gallery";
import "./Gallery.css";
import img1 from "../assets/GalleryImages/1.jpeg";
import img2 from "../assets/GalleryImages/2.jpeg";
import img3 from "../assets/GalleryImages/3.jpeg";
import img4 from "../assets/GalleryImages/4.jpeg";
import img5 from "../assets/GalleryImages/5.jpeg";
import img6 from "../assets/GalleryImages/6.jpeg";
import img7 from "../assets/GalleryImages/7.jpeg";
import img8 from "../assets/GalleryImages/8.jpg";
// import img9 from "../assets/GalleryImages/9.jpg";
// import img10 from "../assets/GalleryImages/10.jpg";
// import img11 from "../assets/GalleryImages/11.jpg";
// import img12 from "../assets/GalleryImages/12.jpg";

const photos = [
  {
    src: img1,
    alt: "some trees",
    width: 800,
    height: 1000,
  },
  {
    src: img2,
    alt: "some trees",
    width: 960,
    height: 720,
  },
  {
    src: img3,
    alt: "some trees",
    width: 960,
    height: 720,
  },
  {
    src: img4,
    alt: "some trees",
    width: 960,
    height: 720,
  },
  {
    src: img5,
    alt: "some trees",
    width: 960,
    height: 720,
  },
  {
    src: img6,
    alt: "some trees",
    width: 960,
    height: 720,
  },
  {
    src: img7,
    alt: "some trees",
    width: 960,
    height: 720,
  },
  {
    src: img8,
    alt: "some trees",
    width: 960,
    height: 720,
  },
  // {
  //   src: img9,
  //   alt: "some trees",
  //   width: 960,
  //   height: 720,
  // },
  // {
  //   src: img10,
  //   alt: "some trees",
  //   width: 960,
  //   height: 720,
  // },
  // {
  //   src: img11,
  //   alt: "some trees",
  //   width: 960,
  //   height: 720,
  // },
  // {
  //   src: img12,
  //   alt: "some trees",
  //   width: 960,
  //   height: 720,
  // },
];

function Gallery() {
  return (
    <>
      <div className="py-8 text-6xl font-bold mb-5 text-white font-rampart text-center custom-blur">
        <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
          Gallery
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 mb-10">
        {photos.map((photo, index) => (
          <div key={index} className="relative group">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-60 object-cover transition-transform duration-500 transform group-hover:scale-110 group-hover:brightness-75"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
