import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`;

export const CardContainer = styled.article`
    display: inline-block;
    position: relative;
    width: 350px;
    height: 350px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 5px 5px 30px rgba(0,0,0, 0.3);
    margin: 30px;
    img{
        height: 70%;
    }
    transition: all ease 1s;
    &:hover{
        transform: scale(1.1);
    }
    @media (max-width: 400px){
        height: 300px;
        width: 300px;
    }
    @media (max-width: 350px){
        height: 300px;
        min-width: 280px;
    }
`;

export const Bk = styled.div`
    background-image: linear-gradient(0deg, #60a, #508, #407, #306, #205, #103);
    border-radius: 30px;
    position: absolute;
    top: 55%;
    left: -5px;
    height: 65%;
    width: 108%;
    transform: skew(19deg, -9deg);
`;

export const LogoC = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 80px;
    border-radius: 20px;
    background: radial-gradient(circle, #888, #777,#666,#555,#444,#333,#222);
    position: absolute;
    bottom: 30%;
    left: 30px;
    overflow: hidden;
    box-shadow: 5px 5px 30px rgba(0,0,0, 0.7);
`;

export const Myh6 = styled.h6`
    font-size: 2rem;
    text-align: center;
    color: #000;
`;

export const Desc = styled.div`
    position: absolute;
    color: #fff;
    font-weight: 900;
    left: 150px;
    bottom: 26%;
    p{
        font-size: 0.8rem;
    }
`;

export const Btn = styled.div`
    display: flex;
    position: absolute;
    color: #fff;
    background: #191919;
    width: 120px;
    height: 40px;
    justify-content: center;
    align-items: center;
    right: 30px;
    bottom: 10%;
    padding: 10px 20px;
    border: 1px solid #fff;
    cursor: pointer;
    font-size: 0.8rem;
    opacity: .9;
    transition: all ease 1s;
    &:hover{
        transform: scale(1.1);
        opacity: .7;
    }
    a{
        color: #fff;
        text-decoration: none;
        text-align: center;
    }
`;
