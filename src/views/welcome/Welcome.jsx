import React from 'react';
import { Link } from 'react-router-dom';

export default function welcome() {
  return (
    <Link to="/list">
      <div>Welcome To The Rick and Morty API. CLICK ME TO ENTER!!!</div>
    </Link>
  );
}
