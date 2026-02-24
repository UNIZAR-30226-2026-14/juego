const Tile = ({ number, color }) => (
  <div style={{
    width: '45px',  // Anchura de la ficha
    height: '65px', // Altura de la ficha
    backgroundColor: '#fdfcf0', // Color del fondo de la ficha
    color: color,   // Color 
    borderRadius: '6px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '22px', // 
    fontWeight: 'bold', // 
    boxShadow: '2px 2px 4px rgba(0,0,0,0.3)', //
    border: '1px solid #d1d1d1',
    cursor: 'pointer',
    userSelect: 'none'
  }}>
    {number}
  </div>
);

export default Tile;