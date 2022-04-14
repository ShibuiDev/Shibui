import styled from 'styled-components'

export const HomeSec = styled.section`
    width: 80%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 auto;

`;

export const Myh4 = styled.h4`
    color: #fff;
    font-size: 40px;
    letter-spacing: 2px;
    @media (max-width: 390px){
        font-size: 30px;
    }
`;

export const Myh1 = styled.h1`
    color: #fff;
    font-size: 35px;
    margin: 20px 0;
    span{
        color: #7700ad;
    }
    @media (max-width: 390px){
        font-size: 25px;
    }
`;

export const Myh3 = styled.h3`
    color: #fff;
    font-size: 35px;
    margin-bottom: 50px;
    span{
        color: #7700ad;
    }
    @media (max-width: 390px){
        font-size: 25px;
    }
    @media (max-width: 270px){
        font-size: 20px;
    }
`;

