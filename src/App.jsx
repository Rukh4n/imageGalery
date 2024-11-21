import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const App = () => {
  // Array gambar
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
    '/images/8.jpg',
    '/images/9.jpg',
    '/images/10.jpg',
    '/images/11.jpg',
    '/images/12.jpg',
    '/images/13.jpg',
    '/images/14.jpg',
    '/images/15.jpg',
    '/images/16.jpg',
    '/images/17.jpg',
    '/images/18.jpg',
  ];

  // State untuk modal
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Durasi animasi
      once: true, // Animasi hanya sekali
    });
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Gallery of Images</h1>
        <p className="text-lg">Explore our beautiful collection of images</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {/* Loop through 18 images */}
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up" // Apply animation to the image
              onClick={() => openModal(image)} // Open modal when image is clicked
            >
              {/* Image */}
              <img
                src={image}
                alt={`Gambar ${index + 1}`}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Text Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl font-semibold">Gambar {index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={closeModal} // Close modal when clicking outside
        >
          <motion.div
            className="relative bg-white p-4 rounded-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 text-white bg-red-600 text-2xl rounded-full py-10 px-4"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              Close
            </motion.button>

            {/* Display selected image */}
            <motion.img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-[900px] object-contain mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="bg-blue-600 text-white text-center py-4 mt-6">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
