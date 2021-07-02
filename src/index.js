import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RatingsMap from './RatingsMap'

ReactDOM.render(
    <RatingsMap />,
    document.getElementById('root')
);
registerServiceWorker();
