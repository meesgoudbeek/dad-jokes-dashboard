'use client';

import React, { useState, useEffect } from 'react';

type Joke = {
  joke: string;
};

const Jokes = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadJokes = async () => {
      try {
        const response = await fetch('/api/dadjokes');
        if (!response.ok) {
          throw new Error('Failed to fetch jokes');
        }
        const data = await response.json();
        setJokes(data);
      } catch (error) {
        console.error('Error fetching jokes:', error);
        setError('Failed to load jokes. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadJokes();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto py-6 px-4">
      {loading ? (
        <p className="text-center text-xl">Loading jokes...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="space-y-4">
          {jokes.length === 0 ? (
            <p className="text-center text-xl">
              No jokes available. Try again later!
            </p>
          ) : (
            jokes.map((joke, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-50"
              >
                <p className="text-xl text-gray-800">{joke.joke}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Jokes;
