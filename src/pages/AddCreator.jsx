import React, { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

function AddCreator() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('creators')
      .insert([{ name, url, description, imageURL }]);

    if (error) console.error('Error adding creator:', error);
    else navigate('/');
  };

  return (
    <div>
      <h1>Add New Content Creator</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        <input type="url" placeholder="Image URL (optional)" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
}

export default AddCreator;
