import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    flex-wrap: wrap;
`;

export const Card = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 365px;
    width: 365px;
    padding: 20px 35px;
    background: #191919;
    border-radius: 20px;
    margin: 15px;
    position: relative;
    overflow: hidden;
    text-align: center;
    svg{
        font-size: 50px;
        display: block;
        text-align: center;
        margin: 25px 0;
        color: #7700ad
    }
    @media (max-width: 400px){
        height: 300px;
        width: 300px;
    }
    @media (max-width: 350px){
        height: 300px;
        width: 260px;
    }
`;

export const Myh5 = styled.h5`
    color: #fff;
    font-size: 20px;
    margin-bottom: 15px;
`;

export const Pr = styled.div`
    display: flex;
    height: 60%;
    align-items: center;
    text-align: center;
`;

export const P = styled.p`
    color: #fff;
    font-size: 14px;
    line-height: 27px;
    margin-bottom: 20px;
`;