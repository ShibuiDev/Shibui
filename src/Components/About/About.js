import React from 'react';
import { SectionAbout, ArticleMain, ImgContainer, Divider, AboutText, Myh2, Myh5, MyP, Button } from './About.Styles';
import KenImg from '../../Images/Pablo_profile-min.png'
import FelipeImg from "../../Images/Felipe_profile-min.png"
const About = ()=>{
    return(
        <SectionAbout id='About'>
            <ArticleMain>
                <ImgContainer>
                <img src={FelipeImg} alt="Felipe-photo" />
                <Divider/>
                </ImgContainer>

                <AboutText>

                    <Myh2>About us</Myh2>
                    <Myh5>
                        Web Developers  
                        <span>
                            UX/UI Designers
                        </span>
                    </Myh5>
                    <MyP>
                        We are a partners of Web Development, based in Medellín, Colombia. Our goal is to help you design & develop your idea at any stage, bringing your projects come to life. Tell us your idea and lets get started!
                    </MyP>
                    <Button href='#Contact'>Let's Talk</Button>

                </AboutText>

                <ImgContainer>
                <img src={KenImg} alt="Ken-photo" />
                <Divider/>
                </ImgContainer>

            </ArticleMain>
        </SectionAbout>
    )
}
export default About