import React from 'react';
import { HomeSec, Myh1, Myh3, Myh4 } from './Home.Styled';

const Home = ()=>{
    return(
        <HomeSec>
            <Myh4>Hello, we are</Myh4>
            <Myh1>
                Shi
                <span>
                    bui
                </span>
            </Myh1>
            <Myh3>
                "If better is possible, good is not enough" <br/>
                <br/>
                - <span>Benjamin Frankln</span>
            </Myh3>

        </HomeSec>
    )
} 
export default Home