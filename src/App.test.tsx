import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import appProps from './Projects/projects';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(    
    <App contents={appProps.contents} 
    shareTitle={appProps.shareTitle}
    shareDescription={appProps.shareDescription}
    shareImgSrc={appProps.shareImgSrc}
    />,
    div);
  ReactDOM.unmountComponentAtNode(div);
});
