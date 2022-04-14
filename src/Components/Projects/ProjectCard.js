import React from 'react'
import { Container, CardContainer, Bk, LogoC, Myh6, Desc, Btn } from './ProjectCard.Style'
import Depression from '../../Images/porfolio-img-2.png'
import Andres from '../../Images/portfolio-img-1.png'

const ProjectCard = ()=>{
    return(
        <Container>
            <CardContainer>
                <img src={Depression} alt="Depresion" />
                <Bk/>
                <LogoC>
                    <Myh6>渋い</Myh6>
                </LogoC>
                <Desc>
                    <p>informative website about depression a serious illness</p>
                </Desc>
                <Btn>
                    <a href="https://shibuidev.github.io/Depression/" target='_blank'>Learn more...</a>
                </Btn>
            </CardContainer>
            <CardContainer>
                <img src={Andres} alt="Andres" />
                <Bk/>
                <LogoC>
                    <Myh6>渋い</Myh6>
                </LogoC>
                <Desc>
                    <p>Artist Official Website with Music, Social Media and Blog features</p>
                </Desc>
                <Btn>
                    <a href="">Learn more...</a>
                </Btn>
            </CardContainer>
        </Container>
    )
}
export default ProjectCard