import Projetos from "./Projetos";

export default function XequeMateStudio() {
    return (
        <Projetos 
            nome={"Xeque Mate Studio"}
            descricao={"XequeMateStudio consiste em uma plataforma online que apresenta uma galeria de flash tattoos, destacando os designs exclusivos criados pelo tatuador. Além disso, conta com um formulário de agendamento, proporcionando uma maneira prática e eficiente de marcar sessões. O site foi desenvolvido com foco na experiência do usuário, garantindo uma navegação intuitiva e uma integração harmoniosa com a identidade visual do estúdio."}
            imagens={[
                { name: "xequematestudio/xequematestudio_1.png" },
                { name: "xequematestudio/xequematestudio_2.png" },
                { name: "xequematestudio/xequematestudio_3.png" },
                { name: "xequematestudio/xequematestudio_4.png" },
            ]}
            xeque={true}
        />
    );
}