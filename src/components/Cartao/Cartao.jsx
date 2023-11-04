import { CartaoContainer, Titulo } from "./style";

const Cartao = ( props ) => (
    <CartaoContainer>
        <Titulo>{props.titulo}</Titulo>
        <p>{props.letra}</p>
    </CartaoContainer>
);

export default Cartao;