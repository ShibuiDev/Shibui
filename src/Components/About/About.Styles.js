import styled from "styled-components";

export const SectionAbout = styled.section`
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    height: auto;
    padding: 60px 0;
    background: #191919;
    border-radius: 40px;
`;

export const ArticleMain = styled.article`
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 1050px){
        flex-direction: column;
        justify-content: center;
        align-items: space-evenly;
    }
`;

export const ImgContainer = styled.div`
    img{
        height: 400px;
        width: 250px;
    }
        @media (max-width: 1050px){
            margin: 40px 0;
        }
`;

export const Divider = styled.hr`
    width: 250px;
    height: 2px;
    box-shadow: 0 10px 20px #aa00ee;
`;

export const AboutText = styled.div`
    display: flex;    
    width: 400px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    @media (max-width: 420px){
        width: 80%;
    }
`;

export const Myh2 = styled.h2`
    color: #fff;
    font-size: 65px;
    margin-bottom: 15px;
    font-family: sans-serif;
`;

export const Myh5 = styled.h5`
    color: #fff;
    letter-spacing: 2px;
    font-size: 22px;
    margin-bottom: 25px;
    text-align: center;
    span{
        color: #aa00ee;
        margin-left: 5px;
    }
`;

export const MyP = styled.p`
    color: #fff;
    letter-spacing: 1px;
    line-height: 28px;
    font-size: 18px;
    margin-bottom: 45px;
    text-align: center;
`;

export const Button = styled.a`
    background: #7700ad;
    color: #fff;
    text-decoration: none;
    border: 2px solid transparent;
    font-weight: bold;
    width: 150px;
    text-align: center;
    padding: 13px 30px;
    border-radius: 30px;
    transition: .4s;
    &:hover{
        background-color: transparent;
        border: 2px solid #aa00ee;
        cursor: pointer;
    }
`;