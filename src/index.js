import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorkerRegistration';
import App from './App';

//TODO: change the render method if using react-snap
ReactDOM.render(<App />, document.getElementById('app'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
/*
const rootElement = document.getElementById('app');
if (rootElement.hasChildNodes()) {
    ReactDOM.hydrate(<App />, rootElement);
} else {
    ReactDOM.render(<App />, rootElement);
}*/
serviceWorker.register();