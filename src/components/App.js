import React from "react";
import './App.css';
import Header from './Header';
import KegControl from './KegControl';

function App() {
  return (
    <div className="App">
      <Header> </Header>
      <div className="row">
        <KegControl></KegControl>
      </div>
    </div>
  );
}

export default App;
