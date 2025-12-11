import Projetos from "./Projetos";

export default function ConfrontSpaceMobile() {
    return (
        <>
            <Projetos
                nome={"Confront Space Mobile"}
                descricao={"Confront Space Mobile é um jogo 3D que oferece uma experiência arcade cheia de ação e adrenalina. Com jogabilidade fluida e combates desafiadores, o jogador deve eliminar ondas de inimigos em cenários dinâmicos. Desenvolvido por mim, o jogo exige foco e estratégia para avançar, garantindo uma experiência envolvente e desafiadora a cada fase. Prepare-se para testar suas habilidades em batalhas eletrizantes e explorar um universo repleto de perigos."}
                imagens={[
                    { name: "confront-space-mobile/confrontspacemobile_video.mp4" },
                    { name: "confront-space-mobile/confrontspacemobile_1.jpg" },
                    { name: "confront-space-mobile/confrontspacemobile_2.jpg" }, 
                    { name: "confront-space-mobile/confrontspacemobile_3.jpg" },
                    { name: "confront-space-mobile/confrontspacemobile_4.jpg" },
                    { name: "confront-space-mobile/confrontspacemobile_5.jpg" },
                    { name: "confront-space-mobile/confrontspacemobile_6.jpg" },
                    { name: "confront-space-mobile/confrontspacemobile_7.jpg" },
                    { name: "confront-space-mobile/confrontspacemobile_8.jpg" },
                ]} 
                csm={true}
            />
        </>
    );
}