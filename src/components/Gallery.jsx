import React from 'react';
import { Gallery as ReactGridGallery } from 'react-grid-gallery';
import './Gallery.css';

const photos = [
  {
    src: 'https://cdn.pixabay.com/photo/2021/07/29/20/23/mountains-6508015_960_720.jpg',
    alt: 'some trees',
    width: 960,
    height: 720,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/07/30/20/28/montmartre-6510653_960_720.jpg',
    alt: 'some trees',
    width: 960,
    height: 1020,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/06/27/14/32/raspberry-6368999_960_720.png',
    alt: 'some trees',
    width: 960,
    height: 720,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/06/22/18/31/love-4292211_960_720.jpg',
    alt: 'some trees',
    width: 960,
    height: 720,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg',
    alt: 'some trees',
    width: 960,
    height: 720,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/07/30/20/28/montmartre-6510653_960_720.jpg',
    alt: 'some trees',
    width: 960,
    height: 720,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/06/27/14/32/raspberry-6368999_960_720.png',
    alt: 'some trees',
    width: 960,
    height: 720,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/06/22/18/31/love-4292211_960_720.jpg',
    alt: 'some trees',
    width: 960,
    height: 720,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg',
    alt: 'some trees',
    width: 960,
    height: 720,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/07/30/20/28/montmartre-6510653_960_720.jpg',
    alt: 'some trees',
    width: 960,
    height: 720,
  },
  {
    src: 'https://cdn.pixabay.com/photo/2021/06/27/14/32/raspberry-6368999_960_720.png',
    alt: 'some trees',
    width: 960,
    height: 720,
  },
];

function Gallery() {
  return (
    <>
      <div className='py-8 text-6xl font-bold mb-5 text-white font-orbitron text-center'>
        <span className="bg-clip-text text-transparent bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500">
          Gallery
        </span>
      </div>
      <ReactGridGallery images={photos} />
    </>
  );
}

export default Gallery;