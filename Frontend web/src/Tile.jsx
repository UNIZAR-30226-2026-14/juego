import './Tile.css'

const Tile = ({ number, color }) => (
  <div className='tile' style={{color: color}}>
    {number === 'J' ? '🃟🃏︎' : number}
  </div>
);

export default Tile;