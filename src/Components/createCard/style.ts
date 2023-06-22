import styled from "styled-components";

export const CardBox = styled.div`
    width: 95%;
    height: 26%;
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    margin-left: 2.5%;
    box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.28);
    border-radius: 25px;    
    color: #575757;
    justify-content: center;
    align-items: center;

    input{
        border: 1px solid #575757;
        border-radius: 25px;
        width: 90%;
        height: 15.21%;
        margin-top: 13px;
        font-size: 20px;
        font-weight: 700;
        padding-left: 15px;
    }
    textarea{
        border: 1px solid #575757;
        border-radius: 25px;
        width: 90%;
        margin-top: 1%;
        height: 52%;
        font-size: 16px;
        font-weight: 400;
        padding-top: 15px;
        padding-left: 15px;
    }

    button{
        border-style:none ;
        background-color: transparent;
        width: fit-content;
        margin-top: 15px;
        margin-bottom: 20px;
    }
`