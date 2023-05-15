import React, { useEffect } from 'react';

export default function BadPathPage() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'http://localhost:3000';
    }, 1500);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Bad Path, Redirecting to Home Page...</h1>
    </div>
  );
}
