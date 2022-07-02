import './App.css';
import { useState } from 'react';
import {Chessboard} from 'react-chessboard'
import {Chess} from 'chess.js'

function App() {

  const [game, setGame] = useState(new Chess());
  console.log(game);
  return (
    <div className="app">
      <Chessboard />
    </div>
  );
}

export default App;
