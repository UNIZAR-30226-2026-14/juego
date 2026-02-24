const Tile = ({ number, color }) => (
  <div style={{
    width: '45px',
    height: '65px',
    backgroundColor: '#fdfcf0', // Color marfil
    color: color === 'green' ? '#27ae60' : color, // Ajuste de verde para que se vea mejor
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '22px',
    fontWeight: 'bold',
    boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    border: '1px solid #d1d1d1',
    cursor: 'pointer',
    userSelect: 'none'
  }}>
    {number}
  </div>
);

export default Tile;