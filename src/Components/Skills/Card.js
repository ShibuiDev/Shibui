import React from 'react';
import { CardContainer, Myh5, Pr, P, Box } from './Card.Style';
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJquery, SiJavascript, SiReact } from "react-icons/si";

const Card = ()=>{
    return(
        <Box>
        <CardContainer>
            <FaHtml5 className='html'/>
            <Myh5>HTML</Myh5>
            <Pr>
                <P>HyperText We create your Web Structure and optimize it, reducing loading time and unnecesary lines of code.</P>
            </Pr>
        </CardContainer>
        <CardContainer>
            <FaCss3Alt className='css'/>
            <Myh5>CSS</Myh5>
            <Pr>
                <P>We costumize your Web according to your style and your client's needs.</P>
            </Pr>
        </CardContainer>
        <CardContainer>
            <SiJavascript className='js'/>
            <Myh5>JAVASCRIPT</Myh5>
            <Pr>
                <P>We run the extra mile adding custom animations and cool features to your wesite allowing you to amaze future costumers/users.</P>
            </Pr>
        </CardContainer>
        <CardContainer>
            <SiJquery className='jq'/>
            <Myh5>JQUERY</Myh5>
            <Pr>
                <P>We go warp speed simplifying your code and making your product faster and easier for any platform you need.</P>
            </Pr>
        </CardContainer>
        <CardContainer>
            <SiReact className='react'/>
            <Myh5>REACT</Myh5>
            <Pr>
                <P>Shake things up by adding some complex functionality to your project always making sure it’s still light and optimized for your users</P>
            </Pr>
        </CardContainer>
        </Box>
    )
}
export default Card