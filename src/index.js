import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client'; //React-dom replacement for React 18 version.


import { App } from './app/App';
import store from './app/store';

const root = createRoot(document.getElementById('root'));
const render = () => {
    root.render(
        <App
            state={store.getState()}
            dispatch={store.dispatch}
        />
    )
}

render();
store.subscribe(render)