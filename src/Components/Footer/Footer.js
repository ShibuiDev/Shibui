import React from 'react'
import { FooterS, Social, A } from './Footer.Style'
import { SiGithub, SiInstagram } from "react-icons/si";

const Footer = ()=>{
    return(
        <FooterS id='Contact'>
            <p>Contact us!</p>
            <p>Here are our social networks</p>
            <Social>
                <A href="https://github.com/ShibuiDev" target='_blank'><SiGithub/></A>
                <A><SiInstagram/></A>
            </Social>
            <p>Copyright © By Shibui 渋い</p>
        </FooterS>
    )
}
export default Footer