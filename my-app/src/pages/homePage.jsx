import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom';

// import welcome from '../../src/pic/welcomePage.png'
// import welcome from '../../src/pic/welcomePage1.jpg'

const Landing =()=> {
    const history = useHistory();
    // const goHomePage=()=>{
    //     history.push('/Home');
    // };
    return (
        <div class="welcomePage" >
            Home
        </div>
    );
}

export default Landing;
