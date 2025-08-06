import React from 'react';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MongoViewerEntry from './pages/MongoViewerEntry';
import MongoViewerCollection from './pages/MongoViewerCollection';
import MyPage from './pages/home'
import ProductsPage from './pages/prodcuts'
import JejuPage from './pages/jeju'
import JejuTripPage from './pages/jejuTrip'
import Summer2025Page from './pages/summer2025'
import SurveyPage from './pages/forms'
import Contact from './components/home/Contact'

function App() {
  return (
    <Router>
      <Routes>

        {/* <Route path="/" element={
          <div>
            <p>
              페이지 준비중
            </p>
            <Contact/>
          </div>
        } /> */}
     
        {/* <Route path="/homepage" element={<HomePage />} />
        <Route path="/mongo-viewer" element={<MongoViewerEntry />} />
        <Route path="/mongo-viewer/:collectionName" element={<MongoViewerCollection />} /> */}
        <Route path="/portfolio" element={<MyPage />} />
        <Route path="/products" element={<ProductsPage />} /> 


        <Route path="/jeju" element={<JejuPage />} /> 
        <Route path="/jejuTrip" element={<JejuTripPage />} /> 
        <Route path="/summer2025" element={<Summer2025Page />} /> 
        <Route path="/survey" element={<SurveyPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;