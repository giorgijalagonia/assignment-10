import React from 'react';
import './App.css';
import profileImage from './kobaxidze.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profileImage} alt="Profile" style={{width: '150px', height: '150px' }} />
        <h1>ირაკლის პორტფოლიო</h1>
<p style={{ color: 'yellow' }}>მოღალატე მონის პროექტები:</p>
        <p>გააუქმა ევროკავშირთან მოლაპარაკებები.</p>
                <p>მოიგონა გლობალური ომის პარტია.</p>
                        <p>დაემუქრა ამერიკას.</p>
		<p>უარგუმენტო ბრალდებები წაუყენა ევროკავშირის დელეგატებს ბორიას ფულის ხათრით.</p>
      </header>
    </div>
  );
}

export default App;

