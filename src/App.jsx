import React from 'react';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
      <BrowserRouter>
         <Routes>
          <Route exact path="/" element={ <AddForm/> } />
          <Route exact path="/edit" element={ <EditForm/> } />
         </Routes>
      </BrowserRouter>
  )
}

export default App;