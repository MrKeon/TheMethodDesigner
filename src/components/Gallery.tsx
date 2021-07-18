import React, { useCallback, useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery, { GalleryProps } from 'react-photo-gallery';
import './Gallery.css';

export default function PhotoGallery({ photos }:GalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

    return(
    <div className="GalleryContainer" >
      <Gallery photos={photos} margin={15} onClick={openLightbox} targetRowHeight={360} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.alt,
                source: x.src ?? x.srcSet
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
    );
  }
