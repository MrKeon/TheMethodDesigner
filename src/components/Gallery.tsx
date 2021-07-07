import React from 'react';
import Gallery, { GalleryProps } from 'react-photo-gallery';
import './Gallery.css';

export default function PhotoGallery({ photos }:GalleryProps) {
    return(
    <div className="GalleryContainer">
      <Gallery photos={photos} />
    </div>
    );
  }
