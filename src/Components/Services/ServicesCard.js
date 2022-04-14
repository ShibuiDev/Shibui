import React from 'react'
import { Box, Card, Myh5, Pr, P } from './SCards.Style'
import { CgWebsite } from "react-icons/cg";
import { FaCubes } from "react-icons/fa";

const SCards = ()=>{
    return(
        <Box>
            <Card>
                <CgWebsite/>
                <Myh5>Web Development</Myh5>
                <Pr>
                    <P>Product development at any stage and ongoing support after you launch</P>
                </Pr>
            </Card>
            <Card>
                <FaCubes/>
                <Myh5>Product Design</Myh5>
                <Pr>
                    <P>Establish your users' needs with Discovery Workshops. Fulfill them with award-winning UI/UX</P>
                </Pr>
            </Card>
        </Box>
    )
}
export default SCards