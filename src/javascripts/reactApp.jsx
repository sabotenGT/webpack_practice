import ReactDom from 'react-dom';
import React from 'react';
import Access from './Access.jsx';
import Alert from './Alert.tsx';

const App = () => {
  return (
    <>
      <h1 style={{ color: 'red' }}>Hello,React App!</h1>
      <Access />
      <Alert message='Success!' />
    </>
  );
};

const reactRoot = document.getElementById('root');
if (reactRoot) {
  ReactDom.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    reactRoot
  );
} else {
  console.log('No root element found');
}
