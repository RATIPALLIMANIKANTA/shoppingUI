import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MenItemPage = () => {
  const { itemName } = useParams(); // Get the item name from the URL
  const [itemsData, setItemsData] = useState([]); // State to hold all items' data
  const [modalImage, setModalImage] = useState(null); // State to manage modal image
  const [zoomLevel, setZoomLevel] = useState(1); // State for zoom level

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data based on itemName
        const response = await fetch(`http://localhost:8080/api/men/sectionname/${itemName}`);
        const data = await response.json();
        setItemsData(data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Fetch the data
  }, [itemName]); // Re-run the effect if itemName changes

  // Function to convert byte array to Base64
  const convertToBase64 = (byteArray) => {
    const byteArrayBuffer = new Uint8Array(byteArray);
    let binary = '';
    byteArrayBuffer.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return `data:image/jpeg;base64,${window.btoa(binary)}`;
  };

  // Open modal with clicked image
  const openModal = (image) => {
    setModalImage(image);
    setZoomLevel(1); // Reset zoom to default when opening modal
  };

  // Close modal
  const closeModal = () => {
    setModalImage(null);
  };

  // Zoom in
  const zoomIn = () => {
    setZoomLevel(prevZoom => prevZoom + 0.1);
  };

  // Zoom out
  const zoomOut = () => {
    setZoomLevel(prevZoom => (prevZoom > 0.1 ? prevZoom - 0.1 : 0.1)); // Prevent zooming out too much
  };

  return (
    <div className="itemPage">
      <h2>Item: {itemName}</h2>

      {itemsData.length > 0 ? (
        <div className="items-list">
          {/* Loop through the items and render each one */}
          {itemsData.map((item) => (
            <div key={item.sectionname} className="item-box">
              <img
                src={`data:image/jpeg;base64,${item.base64Image}`} // Convert byte array to base64 image
                alt={item.name}
                className="item-image"
                onClick={() => openModal(`data:image/jpeg;base64,${item.base64Image}`)} // Open the modal with the image
              />
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.initialPrice}</p>
                <p>Discounted Price: ${item.offerPrice}</p>
                <p>Sizes: {item.sizes}</p>
                <p>Color: {item.color}</p>
                <p>Ratings: {item.ratingsReviews}</p>
                <p>Highlights: {item.highlights}</p>
                <p>Fabric Details: {item.fabricDetails}</p>
                <p>Return Policy: {item.returnPolicy}</p>
                <p>Delivery Date: {new Date(item.deliveryDate).toLocaleDateString()}</p>

                <div className="action-buttons">
                  <button className="add-to-cart">Add to Cart</button>
                  <button className="add-to-wishlist">Add to Wishlist</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading item details...</p>
      )}

      {/* Modal for the image */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>×</span>
            <div className="imageWrapper">
              <img
                src={modalImage}
                alt="Zoomed"
                className="modalImage"
                style={{ transform: `scale(${zoomLevel})` }} // Apply zoom level
              />
            </div>
            <div>
              <button className="zoom" onClick={zoomIn}>Zoom In</button>
              <button className="zoom" onClick={zoomOut}>Zoom Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenItemPage;
