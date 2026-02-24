import React from 'react';
import Tile from './Tile.jsx'

function Board() {
  const mockGroups = [
    { id: 1, tiles: [
        { id: 't1', color: 'red', number: 3 },
        { id: 't2', color: 'red', number: 4 },
        { id: 't3', color: 'red', number: 5 },
      ]
    },
    { id: 2, tiles: [
        { id: 't4', color: 'green', number: 7 },
        { id: 't5', color: 'green', number: 8 },
        { id: 't6', color: 'green', number: 9 },
      ]
    }
  ];

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: '#1a5e20', // Verde mesa de juego
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      <div style={{ color: 'white', padding: '10px', textAlign: 'center', opacity: 0.6 }}>
        Rummikub - Área de Tablero
      </div>

      <div style={{ 
        padding: '20px', 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '40px', 
        justifyContent: 'center' 
      }}>
        {mockGroups.map(group => (
          <div key={group.id} style={{ 
            display: 'flex', 
            gap: '5px', 
            padding: '10px', 
            backgroundColor: 'rgba(0,0,0,0.1)', 
            borderRadius: '10px' 
          }}>
            {group.tiles.map(tile => (
              <Tile key={tile.id} number={tile.number} color={tile.color} />
            ))}
          </div>
        ))}
      </div>

      <div style={{ 
        position: 'fixed', 
        bottom: '0', 
        left: '50%', 
        transform: 'translateX(-50%)',
        width: '500px',
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <svg width="500" height="150" style={{ position: 'absolute', zIndex: 1 }}>
          <rect x="50" y="20" width="400" height="60" fill="#5d2e0a" stroke="#3e1f07" strokeWidth="2" rx="5"/>
          <rect x="30" y="70" width="440" height="60" fill="#8B4513" stroke="#5d2e0a" strokeWidth="2" rx="5"/>
        </svg>

        <div style={{ 
          zIndex: 2, 
          display: 'flex', 
          gap: '8px', 
          marginBottom: '10px' // Ajuste para que queden sobre los rectángulos
        }}>
          <Tile number={10} color="blue" />
          <Tile number={11} color="blue" />
          <Tile number={12} color="blue" />
        </div>
      </div>

    </div>
  );
}

export default Board;