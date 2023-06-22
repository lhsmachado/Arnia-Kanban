    import styled from "styled-components";
    import Modal from "react-modal";

    export const CardBox = styled.div`
    width: 95%;
    height: 26%;
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    margin-left: 2.5%;
    box-shadow: 2px 4px 3px rgba(0, 0, 0, 0.28);
    border-radius: 25px;
    color: #575757;
    margin-bottom: 15px;
    justify-content: space-between;
    gap: 6px;

    input {
        border: 1px solid #575757;
        border-radius: 25px;
        width: 90%;
        height: 15.21%;
        margin-top: 13px;
        font-size: 20px;
        font-weight: 700;
        padding-left: 15px;
        margin-left: 15px;
    }
    textarea {
        border: 1px solid #575757;
        border-radius: 25px;
        width: 90%;
        margin-top: 1%;
        height: 52%;
        font-size: 16px;
        font-weight: 400;
        padding-top: 15px;
        padding-left: 15px;
        margin-left: 15px;
    }

    button {
        border-style: none;
        background-color: transparent;
        width: fit-content;
        margin-top: 15px;
        margin-bottom: 20px;
    }

    h3 {
        font-family: "Poppins";
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #575757;
        margin: 10px;
    }

    p {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #575757;
        margin: 10px;
        overflow-y: auto;
    }
    `;
    export const ModalStyled = styled(Modal)`
    position: fixed;
    top: 35%;
    left: 35%;
    width: 535px;
    height: 238px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    text-align: center;
    flex-direction: column;
    div{
        display: flex;
        margin-top: 25px;
        gap: 35px;
        justify-content: center;
    }
    
    `;
export const TitleModal = styled.h2 `
    color: #575757;
    font-size: 20px;
    font-family: Poppins;
    font-weight: 700;
    margin-top: 75px;
`

export const BTNYes = styled.button`
        width: 184px;
        height: 59px; 
        border-radius: 25px;
        background: #0A2668;
        color: #FFF;
        text-align: center;
        font-size: 24px;
        font-family: Poppins;
        font-weight: 700;
        border: 1px solid #0A2668;
`
export const BTNNo = styled.button`
        width: 184px;
        height: 59px; 
        border-radius: 25px;
        background: #FCFCFC;
        color: #0A2668;
        text-align: center;
        font-size: 24px;
        font-family: Poppins;
        font-weight: 700;
        border: 1px solid #0A2668;
`

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`
export const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`
