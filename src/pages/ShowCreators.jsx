import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import CreatorCard from '../components/CreatorCard';
import { Link } from 'react-router-dom';

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase
        .from('creators')
        .select('*');

      if (error) console.error('Error fetching creators:', error);
      else setCreators(data);
    }

    fetchCreators();
  }, []);

  return (
    <div>
      <h1>Content Creators</h1>
      <Link to="/creator/add">Add New Creator</Link>
      <div className="creator-list">
        {creators.length > 0 ? (
          creators.map(creator => <CreatorCard key={creator.id} creator={creator} />)
        ) : (
          <p>No content creators found.</p>
        )}
      </div>
    </div>
  );
}

export default ShowCreators;
