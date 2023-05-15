'use client';
import React, { useState } from 'react';

const HomePage = () => {
  const [text, setText] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetch('/api/sendText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
        <h1>Hello</h1>
        <form onSubmit={handleSubmit}>
        <textarea
            value={text}
            onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default HomePage;
