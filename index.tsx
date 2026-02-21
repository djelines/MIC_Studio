
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { TooltipProvider } from './src/components/ui/tooltip';
import './src/styles.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <TooltipProvider>
      <App />
    </TooltipProvider>
  </React.StrictMode>
);
