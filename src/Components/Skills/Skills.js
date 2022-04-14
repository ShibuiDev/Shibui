import React from 'react'
import { SkillContainer, Title, Myh2} from './Skills.Style'
import Card from './Card'

const Skills = ()=>{
    return(
        <SkillContainer id='Skills'>
            <Title>
                <Myh2>Our Skills</Myh2>
            </Title>
            <Card/>
        </SkillContainer>
    )
}
export default Skills