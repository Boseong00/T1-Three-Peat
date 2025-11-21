import React from 'react';
import './PlayerDetail.css';

const PlayerDetail = ({ player, onClose }) => {
  if (!player) return null;

  return (
    <div className="player-detail-overlay" onClick={onClose}>
      <div className="player-detail" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <div className="detail-header">
          <div className="detail-photo">
            <img src={player.photo} alt={player.name} />
          </div>
          <div className="detail-info">
            <h2>{player.name}</h2>
            <p className="real-name">{player.realName}</p>
            <p className="position">{player.position}</p>
          </div>
        </div>

        <div className="detail-content">
          <div className="info-section">
            <div className="info-item">
              <span className="label">나이</span>
              <span className="value">{player.age}세</span>
            </div>
            <div className="info-item">
              <span className="label">입단 일자</span>
              <span className="value">{player.joinDate}</span>
            </div>
            <div className="info-item">
              <span className="label">우승 횟수</span>
              <span className="value highlight">{player.championships}회</span>
            </div>
          </div>

          <div className="stats-section">
            <h3>롤드컵 전적</h3>
            <div className="stats-grid">
              <div className="stat-box">
                <span className="stat-label">경기 수</span>
                <span className="stat-value">{player.worldsStats.matches}</span>
              </div>
              <div className="stat-box win">
                <span className="stat-label">승리</span>
                <span className="stat-value">{player.worldsStats.wins}</span>
              </div>
              <div className="stat-box loss">
                <span className="stat-label">패배</span>
                <span className="stat-value">{player.worldsStats.losses}</span>
              </div>
              <div className="stat-box winrate">
                <span className="stat-label">승률</span>
                <span className="stat-value">{player.worldsStats.winRate}%</span>
              </div>
            </div>
          </div>

          <div className="champions-section">
            <h3>Most 3 챔피언</h3>
            <div className="champions-grid">
              {player.mostChampions.map((champion, index) => (
                <div key={index} className="champion-card">
                  <div className="champion-image">
                    <img src={champion.image} alt={champion.name} />
                  </div>
                  <h4>{champion.name}</h4>
                  <div className="champion-stats">
                    <div className="champion-stat">
                      <span>픽률</span>
                      <strong>{champion.pickRate}% ({champion.games}게임)</strong>
                    </div>
                    <div className="champion-stat">
                      <span>승률</span>
                      <strong>{champion.winRate}%</strong>
                    </div>
                    <div className="champion-stat">
                      <span>평균 KDA</span>
                      <strong>{champion.kda}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetail;

