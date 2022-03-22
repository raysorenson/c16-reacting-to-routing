import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Films from "./components/Films";
import People from "./components/People";


const App = () => {
  return (
    <BrowserRouter>
      <main className="container">
        <section className="row justify-content-center">
          <div className="col-md-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/films" element={<Films />} />
              <Route path='/people' element={<People />} />
              <Route path="*" element={<h1>404 Not Found :(</h1>} />
            </Routes>
          </div>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;