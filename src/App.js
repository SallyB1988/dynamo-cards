import React from 'react';
import { Container } from 'react-bootstrap';
import DynamoView from './components/DynamoView';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Deal the cards
        </p>
      </header>
      <body>
      <Container>
        <DynamoView />
      </Container>
      </body>
    </div>
  );
}

export default App;
