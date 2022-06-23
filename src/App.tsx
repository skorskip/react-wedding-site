import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { routes } from './utils/router';

function App() {
  return (
    <div className="App App-header">
      <BrowserRouter>
        <Routes>
          {
              routes.map((route, i) => (
                  <Route
                      key={i}
                      path={route.path}
                      element={<route.component/>}>
                  </Route>
              )
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
