import React from 'react';
import Gallery, { GalleryProps } from 'react-photo-gallery';

export default function PhotoGallery({ photos }:GalleryProps) {
    return(<Gallery photos={photos} />);
  }
