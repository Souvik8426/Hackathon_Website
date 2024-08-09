import React from 'react';
import './Gallery.css';

const photos = [
  {
    source: 'https://cdn.pixabay.com/photo/2021/07/29/20/23/mountains-6508015_960_720.jpg',
    alt: 'some trees'
  },
  {
    source: 'https://cdn.pixabay.com/photo/2021/07/30/20/28/montmartre-6510653_960_720.jpg',
    alt: 'some trees'
  },
  {
    source: 'https://cdn.pixabay.com/photo/2021/06/27/14/32/raspberry-6368999_960_720.png',
    alt: 'some trees'
  },
  {
    source: 'https://cdn.pixabay.com/photo/2019/06/22/18/31/love-4292211_960_720.jpg',
    alt: 'some trees'
  },
  {
    source: 'https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg',
    alt: 'some trees'
  },
  {
    source: 'https://cdn.pixabay.com/photo/2021/07/30/20/28/montmartre-6510653_960_720.jpg',
    alt: 'some trees'
  },
  {
    source: 'https://cdn.pixabay.com/photo/2021/06/27/14/32/raspberry-6368999_960_720.png',
    alt: 'some trees'
  }
];

function Gallery() {
  return (
    <>
      <div className='py-8 text-6xl font-bold mb-5 text-white font-orbitron text-center'>
      <span className="bg-clip-text text-transparent bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500">
      Gallery</span>
      </div>
      <div className="gallery w-screen container px-[2rem]">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo.source} alt={photo.alt} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
