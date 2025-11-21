import React, { useState } from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard';
import PlayerDetail from './components/PlayerDetail';
import { playersData } from './data/playersData';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  const handleCloseDetail = () => {
    setSelectedPlayer(null);
  };

  return (
    <div className="App">
      <div className="background-overlay"></div>
      
      <header className="app-header">
        <div className="logo-container">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/T1_esports_logo.svg/2560px-T1_esports_logo.svg.png" 
            alt="T1 Logo" 
            className="t1-logo"
          />
        </div>
        <div className="trophy-container">
          <span className="trophy">⭐️</span>
          <span className="trophy">⭐️</span>
          <span className="trophy">⭐️</span>
          <span className="trophy">⭐️</span>
          <span className="trophy">⭐️</span>
          <span className="trophy highlight-trophy">🌟</span>
        </div>
        <p className="subtitle">T1의 쓰리핏을 축하합니다!</p>
      </header>

      <main className="main-content">
        <div className="players-lineup">
          {/* 왼쪽 2명 */}
          <div className="side-players left">
            <PlayerCard
              player={playersData.find(p => p.name === "Doran")}
              onClick={() => handlePlayerClick(playersData.find(p => p.name === "Doran"))}
              isSelected={selectedPlayer?.name === "Doran"}
              size="small"
            />
            <PlayerCard
              player={playersData.find(p => p.name === "Oner")}
              onClick={() => handlePlayerClick(playersData.find(p => p.name === "Oner"))}
              isSelected={selectedPlayer?.name === "Oner"}
              size="small"
            />
          </div>
          
          {/* 중앙 Faker */}
          <div className="center-player">
            <PlayerCard
              player={playersData.find(p => p.name === "Faker")}
              onClick={() => handlePlayerClick(playersData.find(p => p.name === "Faker"))}
              isSelected={selectedPlayer?.name === "Faker"}
              size="large"
            />
          </div>
          
          {/* 오른쪽 2명 */}
          <div className="side-players right">
            <PlayerCard
              player={playersData.find(p => p.name === "Gumayusi")}
              onClick={() => handlePlayerClick(playersData.find(p => p.name === "Gumayusi"))}
              isSelected={selectedPlayer?.name === "Gumayusi"}
              size="small"
            />
            <PlayerCard
              player={playersData.find(p => p.name === "Keria")}
              onClick={() => handlePlayerClick(playersData.find(p => p.name === "Keria"))}
              isSelected={selectedPlayer?.name === "Keria"}
              size="small"
            />
          </div>
        </div>
      </main>

      {selectedPlayer && (
        <PlayerDetail 
          player={selectedPlayer} 
          onClose={handleCloseDetail}
        />
      )}
    </div>
  );
}

export default App;

