import { useEffect } from 'react';
import Tile from './Tile.jsx';
import { useGame } from './useGame.js';
import './Board.css';

function Board() {
  // Obtenemos el estado del juego y las funciones para manipularlo
  const { bag, playerHand, drawTile, dealInitialHand } = useGame();

  // Repartimos las 14 fichas iniciales
  useEffect(() => {
    dealInitialHand();
  }, []);

  return (
    <div className='game-container'>
    
      {/* HEADER: Información del mazo y botón de robar */}
      <div className='header'>
        <span>Fichas restantes: <strong>{bag.length}</strong></span>
        <button className='draw-button' onClick={drawTile}>
          ROBAR FICHA
        </button>
      </div>

      {/* ÁREA DEL TABLERO */}
      <div className='board-area'>
      </div>

      {/* SOPORTE DEL JUGADOR */}
      <div className='player-rack'>
        {/* El SVG de madera */}
        <svg width="600" height="150" className='rack-svg'>
          <rect x="30" y="20" width="540" height="60" fill="#5d2e0a" stroke="#3e1f07" strokeWidth="2" rx="5"/>
          <rect x="30" y="70" width="540" height="60" fill="#8B4513" stroke="#5d2e0a" strokeWidth="2" rx="5"/>
        </svg>

        {/* FICHAS DINÁMICAS (Las que el jugador tiene en la mano) */}
        <div className='hand-container'>
          {/* Renderizamos cada ficha de la mano del jugador usando Tile */}
          {playerHand.map((tile) => (
            <Tile key={tile.id} number={tile.number} color={tile.color} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Board;