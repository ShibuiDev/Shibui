import styled from "styled-components";

export const FooterS = styled.footer`
    position: relative;
    width: 100%;
    height: 320px;
    background: #101010;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    p:nth-child(1){
        font-size: 30px;
        color: #fff;
        margin-bottom: 20px;
        font-weight: bold;
        font-family: 'Ramaraja', serif;
    }
    p:nth-child(2){
        color: #fff;
        font-size: 21px;
        width: 500px;
        text-align: center;
        line-height: 26px;
    }
    p:nth-child(4){
        position: absolute;
        color: #aa00ee;
        bottom: 35px;
        font-size: 16px;
        cursor: pointer;
    }
`;

export const Social = styled.div`
    display: flex;
`;

export const A = styled.a`
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;;
    justify-content: center;
    background: #7700ad;
    border: 2px solid transparent;
    border-radius: 50%;
    margin: 22px 10px;
    color: #fff;
    text-decoration: none;
    font-size: 25px;
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
        transform: scale(1.3);
        transition: all .3s ease;
    }
`;

