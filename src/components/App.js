
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Item1 from "./Item";
import ItemList from "./ItemList";
import Item from "./Item";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Do not remove the main div */}

        <Routes>
          <Route path="/" element={<ItemList />}></Route>
          <Route path="/item/:id" element={<Item />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
