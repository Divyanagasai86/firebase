import React from 'react';

const Hero = ({handleLogout}) => {
    return (
        <div >
            <div>
            <div align="center">
                <h1 id="dashboard">Hello User</h1>
                
            </div>
            </div>
            <br>
            </br><br></br>
            <button onClick={handleLogout} id="logout">Logout</button>
        </div>
        
    );
};
export default Hero;