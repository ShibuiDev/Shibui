import styled, {keyframes} from 'styled-components'

export const Container = styled.div`

    width: 100%;
    height: 16vh;
    padding: 30px;
    margin-top: 20px;
    z-index: 10000;
    @media (max-width: 980px){
    display: flex;
    align-items: center;
    position: ${({open}) => open ? 'fixed' : ''};
    background: ${({open}) => open ? '#111' : ''};
    margin-top: 0;
    border-bottom: ${({open}) => open ? '2px solid #aaa' : ''};
    animation: ${({open}) => open ? 'opa 1s both': ''};
    }
    @keyframes opa{
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes opaa{
        100%{
            opacity:0;
        }
        50%{
            opacity:0;
        }
        30%{
            opacity:0;
        }
        20%{
            opacity:0;
        }
        0%{
            opacity: 1;
        }
    }
`;


export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: auto;

    @media (max-width: 980px){
        justify-content: space-between;

    }
`;


export const LogoContainer = styled.h2`
    margin-left: 0.5rem;
    display: flex;
    width: 200px;
    align-items: center;
    height: 40px;
    font-family: sans-serif;
    letter-spacing: 1px;
    cursor: pointer;
    font-size: 35px;
    color: #fff;
    z-index: 10000;
    span{
        color: #7700ad;
        &:nth-child(1){
            margin-right: 10px;
            color: #7700ad;
        }
        &:nth-child(2){
            height: 28px;
        }
    }
    @media (max-width: 980px){
        margin-left: 8%;
    }
    @media (max-width: 320px){
        font-size: 25px;
        margin: 0;
        margin-left: 0;
        width: 150px;
        span{
        &:nth-child(2){
            height: 20px;
        }
    }
    }
`;


export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    align-items: center;
    z-index: 800;
    @media (max-width: 980px){
        background-color: #111;
        position: absolute;
        top: 15.8vh;
        right: ${({open}) => open ? '0' : '-100%'};
        width: 60%;
        height: 85vh;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border-left: 2px solid #aaa;
        border-bottom-left-radius: 40%;
        transition: 1s all ease;
        animation: ${({open}) => open ? 'opa 1s both': 'opaa 1s both'};
    }
`;


export const MenuItem = styled.li`
    height: 100%;
    @media (max-width: 980px){
        height: 90px;
    }
`;


export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.3rem 2.5rem;
    color: #eee;
    font-family: 'Ramaraja', serif;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    transition: 0.5s all ease;

    &:hover{
        opacity: 0.8;
        transform: scale(1.1);
        color: #306;
        transition: 0.5s all ease;
    }

`;

export const MobileIcon = styled.div`
    display: none;

    @media (max-width: 980px){
        display: flex;
        align-items: center;
        cursor: pointer;

        svg{
            font-size: 2rem;
            fill: #fff;
            transition: all 1s ease;
            &:hover{
                fill: #aa00ee;
            }
        }
    }
`;
