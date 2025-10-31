import React, { useState } from 'react';
import { X } from 'lucide-react';

interface ImageGalleryProps {
  images: { src: string; alt: string }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer" onClick={() => openModal(image.src)}>
            <img src={image.src} alt={image.alt} className="w-full h-auto rounded-lg shadow-md" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-2xl"
            >
              <X size={32} />
            </button>
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-screen" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;