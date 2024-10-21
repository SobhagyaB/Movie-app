import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import GetMovie from "./Pages/GetMovies";
import SingleMovie from "./Pages/SingleMovie";
import "./App.css"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<GetMovie/>}/>
        <Route path="/specificMovie" element={<SingleMovie/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App