import React from 'react';
import './PlayerCard.css';

const PlayerCard = ({ player, onClick, isSelected, size = 'small' }) => {
  if (!player) return null;
  
  return (
    <div 
      className={`player-card ${isSelected ? 'selected' : ''} ${size}`}
      onClick={onClick}
    >
      <div className="player-photo">
        <img src={player.photo} alt={player.name} />
      </div>
      <div className="player-name">
        <h3>{player.name}</h3>
      </div>
    </div>
  );
};

export default PlayerCard;

