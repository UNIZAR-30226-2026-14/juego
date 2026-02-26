import { useState } from 'react';
import './Home.css'

function Home({onStart}) {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

<<<<<<< HEAD
  return (
    <div className='home-screen'>
        <div className='top-menu'>
            <svg width={100} height={100} viewBox='-50 -50 100 100'>
                <circle className='profile' cx={0} cy={-5} r={40}/>
                <circle className='level' cx={35} cy={-30} r={15}/>
            </svg>
            <h1 className='title'>RUMMIPLUS</h1>
            <svg width={100} height={100} viewBox='-50 -50 100 100'>
                <rect className='shop' x={0} y={-30} width={200} height={50} rx={6}/>
            </svg>
=======
    const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

    return (
        <div className='home-screen'>
            <div className='top-menu'>
                <svg width={100} height={100} viewBox='-50 -50 100 100'>
                    <circle class='profile' cx={0} cy={-5} r={40} onClick={toggleProfile}/>
                    <circle class='level' cx={35} cy={-30} r={15}/>
                </svg>
                <h1 className='title'>RUMMIPLUS</h1>
                <svg width={150} height={100} viewBox='0 0 200 50'>
                    <rect class='shop' x={0} y={-13} width={200} height={50} rx={20}/>
                </svg>
            </div>
            {isProfileOpen && (
                <div className="profile-overlay">
                    <div className="profile-content">
                        <h2>Nombre de usuario</h2>
                    </div>
                    <button class='close-button' onClick={toggleProfile}>X</button>
                </div>
            )}
            <button onClick={onStart}>Jugar</button>
>>>>>>> 621fda04bb397fc5533caaf7dc5247a3c9d7f3db
        </div>
    )
}

export default Home;