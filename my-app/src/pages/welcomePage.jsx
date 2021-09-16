import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory } from 'react-router-dom';
import '../css/welcome.css'

import welcome1 from '../../src/pic/welcomePage1.jpg'
import welcome from '../../src/pic/welcome.png'
import go from '../../src/pic/rightArrow.svg'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }));

const Landing =()=> {
    const history = useHistory();
    const goHomePage=()=>{
        history.push('/Home');
    };
    const classes = useStyles();
    return (
        <div className="body">
            <div class="pic">
                <img src={welcome} alt="" />
            </div>
            {/* <button>
                <div className="yu">More About Me</div>
            
            </button> */}
            <div className="knowMore">
                {/* <Button variant="outlined" onClick={goHomePage} >                 */}
                    <div className="fontK" onClick={goHomePage}>
                        {/* KNOW MORE ABOUT ME &nbsp;&nbsp;&#8594; */}
                        EXPLORE NOW 
                        {/* &nbsp;&nbsp;&#8594; */}
                        {/* <img src={go} className="logo"/> */}
                    </div>
                {/* </Button> */}
            </div>
            {/* <div class="pic"><img src={welcome1} alt="" /></div>
            <div >
                <div className="FadeAway">
                    <div className="welText">
                        Hi! I'm  
                        <span className="yu">
                            Yu
                        </span> 
                    </div>
                </div>
            </div> */}
        </div>
        
    );
}

export default Landing;
