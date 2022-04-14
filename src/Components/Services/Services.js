import React from 'react'
import { ServicesSection, Title, Myh2 } from './Services.Style'
import SCards from './ServicesCard'
const Services = ()=>{
    return(
        <ServicesSection id='Services'>
            <Title>
                <Myh2>Services</Myh2>
            </Title>
            <SCards/>
        </ServicesSection>
    )
}
export default Services