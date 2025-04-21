// App.jsx
import React from 'react';
import './index.css';
import AppRoutes from './routes/AppRoutes';
import CustomCursor from './components/common/cursor';

function App() {
  return (
  <>
  <CustomCursor/>
    <AppRoutes />
  </>
  );

}

export default App;
