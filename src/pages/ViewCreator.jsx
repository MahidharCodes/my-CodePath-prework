import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';

function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) console.error('Error fetching creator:', error);
      else setCreator(data);
    }

    fetchCreator();
  }, [id]);

  if (!creator) return <p>Loading...</p>;

  return (
    <div>
      <h1>{creator.name}</h1>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Channel</a>
      <p>{creator.description}</p>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
      <Link to={`/creator/edit/${creator.id}`}>Edit</Link>
    </div>
  );
}

export default ViewCreator;
