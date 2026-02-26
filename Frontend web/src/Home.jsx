import './Home.css'

function Home({onStart}) {

  return (
    <div className='home-screen'>
        <div className='top-menu'>
            <svg width={100} height={100} viewBox='-50 -50 100 100'>
                <circle class='profile' cx={0} cy={-5} r={40}/>
                <circle class='level' cx={35} cy={-30} r={15}/>
            </svg>
            <h1 className='title'>RUMMIPLUS</h1>
            <svg width={100} height={100} viewBox='-50 -50 100 100'>
                <rect class='shop' x={0} y={-30} width={200} height={50} rx={6}/>
            </svg>
        </div>
        <button onClick={onStart}>Jugar</button>
    </div>
  )
}

export default Home;