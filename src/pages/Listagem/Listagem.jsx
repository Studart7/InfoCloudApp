import Cartao from "../../components/Cartao/Cartao";
import { ContainerListagem, TituloListagem } from "./style";

const dados = [
    {
        'titulo' : 'casa',
        'letra': 'a'
    },
    {
        'titulo' : 'banana',
        'letra': 'b'
    },
    {
        'titulo' : 'testando',
        'letra': 'c'
    },
    {
        'titulo' : 'LALA',
        'letra': 'D'
    },
    {
        'titulo' : 'boneco',
        'letra': 'e'
    }
]

const elementos = dados.map( (el, i) => (
    <Cartao 
        key = {i}
        titulo={el.titulo}
        letra={el.letra}
    />
))

const Listagem = () => (
    <div>
    <TituloListagem>
        Listagem de elementos
    </TituloListagem>
    <ContainerListagem>
        {elementos}
    </ContainerListagem>
    </div>
);

export default Listagem;