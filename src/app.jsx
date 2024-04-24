import * as React from 'react';
import { createRoot } from 'react-dom/client';

//Import main component
import Application from './components/Application.jsx';

const root = createRoot(document.querySelector("#reactRoot"));
root.render(<Application/>);