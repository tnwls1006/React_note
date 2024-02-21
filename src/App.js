import "./App.css";
import React, { Component } from "react";
import Note from "./components/Note";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calendar from "./components/Calendar";
import Diary from "./components/Diary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Note />} />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/Diary" element={<Diary />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
