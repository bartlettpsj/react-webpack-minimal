import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello'

window.React = React;

render(<Hello title='Hello React-Webpack-Babel World!'/>, document.getElementById('react-container'));
