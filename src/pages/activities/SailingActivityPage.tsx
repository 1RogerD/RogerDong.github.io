import React from 'react';
import ImageGallery from '../../components/ImageGallery';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
// Sailing (修正为 HOBIE16亚锦赛 路径与正确扩展名)
import sailingImage1 from '/image/HOBIE16亚锦赛/2025年威海HOBIE16帆船亚锦赛比赛照片1.png';
import sailingImage2 from '/image/HOBIE16亚锦赛/2025年威海HOBIE16帆船亚锦赛比赛照片2.jpg';
import sailingImage3 from '/image/HOBIE16亚锦赛/2025年威海HOBIE16帆船亚锦赛比赛照片3.jpg';
import sailingImage4 from '/image/HOBIE16亚锦赛/2025年威海HOBIE16帆船亚锦赛比赛照片4.png';
import sailingCert1 from '/image/HOBIE16亚锦赛/2025年威海HOBIE16帆船亚锦赛季军.png';

const sailingImages = [
  { src: sailingImage1, alt: 'Sailing competition photo 1' },
  { src: sailingImage2, alt: 'Sailing competition photo 2' },
  { src: sailingImage3, alt: 'Sailing competition photo 3' },
  { src: sailingImage4, alt: 'Sailing competition photo 4' },
  { src: sailingCert1, alt: 'Sailing competition certificate' },
];

const SailingActivityPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-black text-white">
      <header className="bg-red-800/70 py-4 px-6 shadow-lg border-b border-red-600">
        <button onClick={() => navigate(-1)} className="flex items-center text-yellow-300 hover:text-yellow-400">
          <FaArrowLeft className="mr-2" />
          Back
        </button>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Sailing Activities</h1>
        <section className="bg-red-800/50 rounded-2xl p-8 border border-red-700">
          <h2 className="text-2xl font-bold mb-6 text-yellow-300">Media Gallery</h2>
          <ImageGallery images={sailingImages} />
        </section>
      </main>
    </div>
  );
};

export default SailingActivityPage;