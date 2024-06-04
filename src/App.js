import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UploadComponent from './components/UploadComponent';
import DataComponent from './components/DataComponent';
import ProcessComponent from './components/ProcessComponent';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/upload">Upload</Link>
        <Link to="/data">Data</Link>
        <Link to="/process">Process</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UploadComponent />} />
        <Route path="/upload" element={<UploadComponent />} />
        <Route path="/data" element={<DataComponent />} />
        <Route path="/process" element={<ProcessComponent />} />
      </Routes>
    </Router>
  );
}

export default App;