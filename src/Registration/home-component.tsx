import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='container mt-5'>
            <h2>Welcome Home</h2>
           <p><Link to="/registration" className="btn btn-primary mt-3">  Go to Registration </Link> </p>
        </div>
    )
}

export default Home;
