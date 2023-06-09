import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import Rotas from 'Rotas';
import ScrollToTop from 'components/ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <RecoilRoot>
        <Rotas />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);


