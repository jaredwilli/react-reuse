import React from 'react';
import ReactDOM from 'react-dom';

import Docs from './docs/Docs';
import './index.css';
import '../node_modules/highlight.js/styles/monokai-sublime.css';

ReactDOM.render(
    <Docs />,
    document.getElementById('root')
);
