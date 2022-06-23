import React from 'react';
import { render } from 'react-dom';
import App from './App';
require('./index.css');

export default function Application() {
  return (
    <div>
      <App />
    </div>
  );
}

render(<Application />, document.getElementById('root'));
