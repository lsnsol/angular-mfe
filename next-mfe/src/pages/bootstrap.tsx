import React from 'react';

import { createRoot } from 'react-dom/client';
import Home from './index';

if (typeof window !== 'undefined') {
  class Mfe4Element extends HTMLElement {
    connectedCallback() {
      console.log('http-mfe-react-element connectedCallback from DOM');

      window.React = React;
      const root = createRoot(this);
      root.render(<Home />);
    }

    disconnectedCallback() {
      console.log('http-mfe-react-element disconnectedCallback from DOM');
    }
  }

  customElements.define('http-mfe-react-element', Mfe4Element);
}

const Dummy = () => <></>;

export default Dummy;