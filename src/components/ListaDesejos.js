import Projetos from "./Projetos";

export default function ListaDesejos() {
    return (
        <Projetos 
            nome={"Lista de Desejos"}
            descricao={"Este é um site pessoal para gerenciar minha coleção de quadrinhos desejados. Nele, posso adicionar novos títulos, visualizar minha lista, atualizar detalhes e remover itens conforme os adquiro. O objetivo é manter um controle organizado dos quadrinhos que pretendo comprar, evitando compras duplicadas e facilitando o acompanhamento dos lançamentos que me interessam."}
            imagens={[
                {name: "lista-desejos/listadesejos_1.png"},
                {name: "lista-desejos/listadesejos_2.png"},
                {name: "lista-desejos/listadesejos_3.png"},
                {name: "lista-desejos/listadesejos_4.png"},
                {name: "lista-desejos/listadesejos_5.png"},
            ]}
        />
    );
}