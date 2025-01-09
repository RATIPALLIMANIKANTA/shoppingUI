import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import { Gents } from '../data';

const MenCollectionPage = (props) => {
  const { title, image1, image2, image3, image4, image5, image6, name1, name2, name3, name4, name5, name6 } = props.gentsFashion;

  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle image click and navigate to the new page
  const handleImageClick = (itemName) => {
    navigate(`/men/${itemName}`);
  };

  return (
    <div className='menPage'>
      <h1 className='menPageTitle'>
        <i className='fas fa-user-tie' style={{ marginRight: '10px', color: '#333' }}></i>Men's Collection
      </h1>
      <div className='menPageImages'>
        <div className="pageImageWrapper" onClick={() => handleImageClick(name1)}>
          <img src={image1} alt={title} />
          <p>{name1}</p>
        </div>
        <div className="pageImageWrapper" onClick={() => handleImageClick(name2)}>
          <img src={image2} alt={title} />
          <p>{name2}</p>
        </div>
        <div className="pageImageWrapper" onClick={() => handleImageClick(name3)}>
          <img src={image3} alt={title} />
          <p>{name3}</p>
        </div>
        <div className="pageImageWrapper" onClick={() => handleImageClick(name4)}>
          <img src={image4} alt={title} />
          <p>{name4}</p>
        </div>
        <div className="pageImageWrapper" onClick={() => handleImageClick(name5)}>
          <img src={image5} alt={title} />
          <p>{name5}</p>
        </div>
        <div className="pageImageWrapper" onClick={() => handleImageClick(name6)}>
          <img src={image6} alt={title} />
          <p>{name6}</p>
        </div>
      </div>
    </div>
  );
}

export default MenCollectionPage;
