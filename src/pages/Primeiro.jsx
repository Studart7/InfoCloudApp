import LinkGenerico from "../components/LinkGenerico/LinkGenerico";
//import LinkSegundo from "../components/LinkSegundo";

const Primeiro = () => {
    const dados = [
        ["https://www.ibmec.br/", "ibmec"],
        ["https://estude.ibmec.br/ibmec-hubs", "ibmec-hubs"],
        ["https://flamengo.com.br/", "flamengo"],
    ];

    const elementos = dados.map(
        (item, i) => (
            <LinkGenerico 
                key={i}
                texto={item[1]}
                endereco={item[0]}
            />

        )
    );

    return (<div>
                <h5>Mini titulo</h5>
                <p>Meu Texto</p>
                {elementos}
            </div>);
};
export default Primeiro;
