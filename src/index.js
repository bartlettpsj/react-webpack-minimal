import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello'

window.React = React;

render(<Hello title='Hello React-Webpack-Babel-Sass Minimal World'/>, document.getElementById('react-container'));
