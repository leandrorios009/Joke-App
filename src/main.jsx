// humor API 
// api_key // api_key= 915d1071bc8042c791344a4e83c21b0d
// search // https://api.humorapi.com/memes/search?api-key=915d1071bc8042c791344a4e83c21b0d&number=3&keywords=rocket
// random // https://api.humorapi.com/memes/random?api-key=915d1071bc8042c791344a4e83c21b0d&keywords=rocket

import React from 'react';
import ReactDOM from 'react-dom/client';
import { JokeApp } from './JokeApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JokeApp />
  </React.StrictMode>
)
