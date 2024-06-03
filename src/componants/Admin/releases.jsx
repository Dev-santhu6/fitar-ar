import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);
  const [version, setVersion] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://project-fitar-backendss.onrender.com/api/admin/getimages');
        setImages(response.data.images);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      }
    };
    fetchImages();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('version', version);
    formData.append('description', description);

    try {
      const response = await axios.post('https://project-fitar-backendss.onrender.com/api/admin/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImages([...images, response.data.image]);
      setFile(null);
      setVersion('');
      setDescription('');
    } catch (error) {
      console.error('Failed to upload image:', error);
    }
  };

  const handleDelete = async (image) => {
    try {
      await axios.delete('https://project-fitar-backendss.onrender.com/api/admin/deleteimage', {
        data: { url: image.url }
      });
      setImages(images.filter(img => img.public_id !== image.public_id));
    } catch (error) {
      console.error('Failed to delete image:', error);
    }
  };

  return (
    <div className='release'>
    <div className="image-upload-container">
      <div className="uploader">
        <h2>Upload Image</h2>
        <form onSubmit={handleSubmit} className="image-upload-form">
  <div className="form-group">
    <label htmlFor="file" className="form-label">Choose Image:</label>
    <input type="file" id="file" onChange={handleFileChange} className="form-control-file" />
  </div>
  <div className="form-group">
    <label htmlFor="version" className="form-label">Version:</label>
    <input type="text" id="version" value={version} onChange={(e) => setVersion(e.target.value)} className="form-control" />
  </div>
  <div className="form-group">
    <label htmlFor="description" className="form-label">Description:</label>
    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
  </div>
  <button type="submit" className="btn btn-primary">Upload</button>
</form>

      </div>
      <div className="gallery">
        <h2>Images</h2>
        <div className="image-grid">
          {images.map(image => (
            <div key={image.public_id} className="image-item">
              <img src={image.url} alt={image.description} style={{height:"600px"}}/>
              <p>{image.description}</p>
              <button onClick={() => handleDelete(image)} className="btn btn-danger">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default ImageUpload;
