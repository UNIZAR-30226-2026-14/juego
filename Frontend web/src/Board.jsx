import { useEffect } from 'react';
import Tile from './Tile.jsx';
import { useGame } from './useGame.js';

function Board() {
  // Obtenemos el estado del juego y las funciones para manipularlo
  const { bag, playerHand, drawTile, dealInitialHand } = useGame();

  // Repartimos las 14 fichas iniciales
  useEffect(() => {
    dealInitialHand();
  }, []);

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#1a5e20', 
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Arial, sans-serif'
    }}>
    
      {/* HEADER: Información del mazo y botón de robar */}
      <div style={{ 
        color: 'white', 
        padding: '15px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        gap: '20px',
        backgroundColor: 'rgba(0,0,0,0.2)' 
      }}>
        <span>Fichas restantes: <strong>{bag.length}</strong></span>
        <button 
          onClick={drawTile}
          style={{
            padding: '8px 16px',
            backgroundColor: '#f39c12',
            border: 'none',
            borderRadius: '5px',
            color: 'white',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px #d35400'
          }}
          onMouseDown={(e) => e.target.style.transform = 'translateY(2px)'}
          onMouseUp={(e) => e.target.style.transform = 'translateY(0)'}
        >
          ROBAR FICHA
        </button>
      </div>

      {/* ÁREA DEL TABLERO */}
      <div style={{ 
        padding: '20px', 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '40px', 
        justifyContent: 'center' 
      }}>
      </div>

      {/* SOPORTE DEL JUGADOR */}
      <div style={{ 
        position: 'fixed', 
        bottom: '0', 
        left: '50%', 
        transform: 'translateX(-50%)',
        width: '1000px',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* El SVG de madera */}
        <svg width="600" height="150" style={{ position: 'absolute', zIndex: 1 }}>
          <rect x="30" y="20" width="540" height="60" fill="#5d2e0a" stroke="#3e1f07" strokeWidth="2" rx="5"/>
          <rect x="30" y="70" width="540" height="60" fill="#8B4513" stroke="#5d2e0a" strokeWidth="2" rx="5"/>
        </svg>

        {/* FICHAS DINÁMICAS (Las que el jugador tiene en la mano) */}
        <div style={{ 
          zIndex: 2, 
          display: 'flex', 
          gap: '5px', 
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '520px',
          marginBottom: '15px' 
        }}>
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