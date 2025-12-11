import Projetos from "./Projetos";

export default function UnfollowersBluesky() {
    return (
        <Projetos 
            nome={"Unfollowers for Bluesky"}
            descricao={"Unfollowers for Bluesky é uma aplicação web que permite ao usuário visualizar quem não o segue de volta no Twitter. Com uma interface intuitiva e amigável, o usuário pode acessar facilmente a lista de seguidores e quem não o segue de volta, facilitando a interação e a gestão de contatos. Desenvolvido com Next.js e Tailwind, o projeto oferece uma experiência rápida e responsiva, garantindo uma navegação fluida e eficiente."}
            imagens={[
                { name: "unfollowers-for-bluesky/unfollowersbsky_1.png" },
                { name: "unfollowers-for-bluesky/unfollowersbsky_2.png" },
                { name: "unfollowers-for-bluesky/unfollowersbsky_3.png" },
            ]}
            unf_bsky={true}
            bsky_download={true}
        />
    );
}