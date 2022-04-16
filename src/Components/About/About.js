import React from 'react';
import { SectionAbout, ArticleMain, ImgContainer, Divider, AboutText, Myh2, Myh5, MyP, Button } from './About.Styles';
import KenImg from '../../Images/Ken-min.png'
import FelipeImg from "../../Images/Felipe-min.png"
const About = ()=>{
    return(
        <SectionAbout id='About'>
            <ArticleMain>
                <ImgContainer>
                <img src={FelipeImg} alt="Felipe-photo" />
                </ImgContainer>

                <AboutText>

                    <Myh2>Our team</Myh2>
                    <Myh5>
                        Web Developers  
                        <span>
                             UX/UI Designers
                        </span>
                    </Myh5>
                    <MyP>
                    We are a couple of Web Developers based in Medellín, Colombia. Our goal is to help you design & develop your idea at any stage, bringing that beloved project to life. Tell us your idea and lets get started!
                    </MyP>
                    <Button href='#Contact'>Let's Talk</Button>

                </AboutText>

                <ImgContainer>
                <img src={KenImg} alt="Ken-photo" />
                </ImgContainer>

            </ArticleMain>
        </SectionAbout>
    )
}
export default About