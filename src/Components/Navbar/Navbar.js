import React, {useState, useEffect} from 'react'
import {Container, Wrapper, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon} from './Navbar.Elements'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from 'react-icons/io';

const NavBar = ()=>{
    const [nav, setNav] = useState(false)

    const handleClick = ()=>{
        setNav(!nav)

    }
 
    return(
        <Container open={nav}>
            <Wrapper>
                <LogoContainer>
                    <span>
                        渋い
                    </span>
                        Shi
                    <span>
                        bui
                    </span>        
                </LogoContainer>
                <MobileIcon onClick={handleClick}>
                {nav ? <IoMdClose/> : <FaBars/> }
                </MobileIcon>
                <Menu open={nav}>
                    <MenuItem>

                    <MenuItemLink href='#About'>About Us</MenuItemLink>

                    </MenuItem>
                    <MenuItem>

                    <MenuItemLink href='#Skills'>Skills</MenuItemLink>

                    </MenuItem>
                    <MenuItem>

                    <MenuItemLink href='#Projects'>Projects</MenuItemLink>

                    </MenuItem>
                    <MenuItem>

                    <MenuItemLink href='#Services'>Services</MenuItemLink>

                    </MenuItem>
                    <MenuItem>

                    <MenuItemLink href='#Contact'>Contact Us</MenuItemLink>

                    </MenuItem>
                </Menu>
            </Wrapper>
        </Container>
    )
}

export default NavBar