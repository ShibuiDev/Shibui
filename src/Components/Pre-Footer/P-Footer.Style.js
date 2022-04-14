import styled from "styled-components";

export const PFSection = styled.section`
    width: 100%;
    height: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const P = styled.p`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 25px;
`;

export const Button = styled.a`
    background: #7700ad;
    color: #fff;
    text-decoration: none;
    border: 2px solid transparent;
    font-weight: bold;
    padding: 13px 30px;
    border-radius: 30px;
    transition: .4s;

    &:hover{
        background: transparent;
        border: 2px solid #7700ad;
        cursor: pointer;
    }
`;
