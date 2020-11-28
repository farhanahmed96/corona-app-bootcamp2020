import React, {useState} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import InfoPanel from './components/InfoPanel';
import FootNav from './components/FootNav';

function App() {
  const screenConfig = useState(0);

  return (
    <div>
      <NavBar />
      <InfoPanel currentScreen={screenConfig[0]} />
      <FootNav screenConfig={screenConfig} />
    </div>
  );
}

export default App;
