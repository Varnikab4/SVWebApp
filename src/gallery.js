import React, { useState } from 'react';
import './gallery.css';
import { Link } from 'react-router-dom';

const photos = [
  { src: '/images/img_1.jpeg', category: 'achievement' },
  { src: '/images/img_10celebration.jpg', category: 'celebration' },
  { src: '/images/img_8studenttest.jpg', category: 'exam' },
  { src: '/images/img_2.jpeg', category: 'achievement' },
  { src: '/images/img_7.jpeg', category: 'celebration' },
  { src: '/images/img_9studenttets1.jpg', category: 'exam' },
  { src: '/images/img_scoreboard.jpeg', category: 'achievement' },
  { src: '/images/img_svcolage.png', category: 'celebration' },
  { src: '/images/img_3.jpeg', category: 'exam' },
  { src: '/images/img_6.jpeg', category: 'achievement' },
  { src: '/images/img_12.jpg', category: 'celebration' },
  { src: '/images/img_11office.jpg', category: 'exam' },
  { src: '/images/achievement_a.jpg', category: 'achievement' },
  { src: '/images/celebrate_a.jpg', category: 'celebration' },
  { src: '/images/exam_a.jpg', category: 'exam' },
  { src: '/images/achievement_b.jpg', category: 'achievement' },
  { src: '/images/celebrate_b.jpg', category: 'celebration' },
  { src: '/images/exam_b.jpg', category: 'exam' },
  { src: '/images/celebrate-c.jpg', category: 'celebration' },
  { src: '/images/exam_c.jpg', category: 'exam' },
  { src: '/images/Celebratye-D.jpg', category: 'celebration' },
  { src: '/images/exam_d.jpg', category: 'exam' },
  { src: '/images/exam_e.jpg', category: 'exam' },
  { src: '/images/exam_f.jpg', category: 'exam' },
  { src: '/images/exam_1.jpg', category: 'exam' },
];

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.id);
  };

  const toggleMenu = () => {
    const menu = document.querySelector('.navbar');
    menu.classList.toggle('active');
  };

  return (
    <>
      <header className="header">
        <img src="/images/img_5.jpeg" alt="header image" />
        <nav className="navbar">
          <Link to="/" className="hover-logo">Home</Link>
          <Link to="/about" className="hover-logo">About</Link>
          <Link to="/teachers" className="hover-logo">Teachers</Link>
          <Link to="/review" className="hover-logo">Review</Link>
          <Link to="/gallery" className="hover-logo">Gallery</Link>
          <Link to="/contact" className="hover-logo">Contact</Link>
        </nav>
        <div className="nav-2">
          <button type="button" className="btn">
            <Link to="/contact" className="hover-logo">
              <span className="text text-1">Admission</span>
            </Link>
          </button>
        </div>
        <div className="icons">
          <div className="menu-btn" onClick={toggleMenu}>
            <i className='bx bx-menu'></i>
          </div>
        </div>
      </header>
      <div className="container">
        <h1>Photo Gallery</h1>
        <div className="top-content">
          <input
            type="radio"
            name="Photos"
            id="all"
            checked={selectedCategory === 'all'}
            onChange={handleCategoryChange}
          />
          <label htmlFor="all">All Photos</label>
          <input
            type="radio"
            name="Photos"
            id="achievement"
            checked={selectedCategory === 'achievement'}
            onChange={handleCategoryChange}
          />
          <label htmlFor="achievement">Achievements</label>
          <input
            type="radio"
            name="Photos"
            id="celebration"
            checked={selectedCategory === 'celebration'}
            onChange={handleCategoryChange}
          />
          <label htmlFor="celebration">Celebration</label>
          <input
            type="radio"
            name="Photos"
            id="exam"
            checked={selectedCategory === 'exam'}
            onChange={handleCategoryChange}
          />
          <label htmlFor="exam">Exams</label>
        </div>

        <div className="photo-gallery">
          {photos
            .filter(photo => selectedCategory === 'all' || photo.category === selectedCategory)
            .map((photo, index) => (
              <div key={index} className={`pic-${photo.category}`}>
                <img src={photo.src} alt={photo.category} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
