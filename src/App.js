import React from 'react';
import { Container } from 'react-bootstrap';
import DynamoView from './components/DynamoView';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Deal the cards one at a time, or display the whole deck. Shuffle, and deal again!
        </p>
      </header>
      <Container>
        <DynamoView />
      </Container>
    </div>
  );
}

export default App;
