const { styled } = require("styled-components");


const CartaoContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px black solid;
    min-width: 8em;
    

    p {
        text-align: center;
    }
`;

const Titulo = styled.h3`
    color: coral;
`;

export {CartaoContainer, Titulo}