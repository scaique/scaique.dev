import Projetos from "./Projetos";

export default function GaleraDasOndas() {
    return (
        <Projetos
            nome={"Galera Das Ondas"}
            descricao={
                <>
                    Aplicativo mobile completo para gestão da loja&nbsp;
                    <a href="https://www.instagram.com/galeradasondas_2006" className="text-yellow-400 font-bold">
                        Galera Das Ondas
                    </a>
                    . A solução automatiza o controle de vendas, estoque e cadastro de produtos, 
                    registrando todas as transações em planilhas Excel categorizadas por forma de pagamento.
                    <br /><br />
                    O app permite consulta instantânea de disponibilidade por tamanho e produto, 
                    facilitando o atendimento aos clientes. Calcula totais diários e mensais, 
                    controla troco e retiradas, oferecendo uma gestão completa e eficiente para o dia a dia da loja.
                </>
            }
            imagens={[
                { name: "galeradasondas/galeradasondas_2.jpeg" },
                { name: "galeradasondas/galeradasondas_3.jpeg" },
                { name: "galeradasondas/galeradasondas_4.jpeg" },
                { name: "galeradasondas/galeradasondas_5.jpeg" },
                { name: "galeradasondas/galeradasondas_6.jpeg" },
                { name: "galeradasondas/galeradasondas_7.jpeg" },
                { name: "galeradasondas/galeradasondas_8.jpeg" },
                { name: "galeradasondas/galeradasondas_9.jpeg" },
                { name: "galeradasondas/galeradasondas_10.jpeg" },
                { name: "galeradasondas/galeradasondas_11.jpeg" },
            ]}
        />
    );
}