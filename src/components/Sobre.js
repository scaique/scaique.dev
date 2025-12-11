'use client';

export default function Sobre() {
  return (
    <section id="sobre" className="flex-1 flex justify-center">
      <div className="w-full max-w-6xl rounded-lg">
        <div className="p-8 flex flex-col">
          {/* Título */}
          <p className="text-4xl max-sm:text-2xl font-bold text-start uppercase">
            meu nome é <span className="text-secundario">caique.</span>
          </p>
          {/* Linha decorativa */}
          <div className="w-24 h-1 bg-secundario mb-6 self-start"></div>
          {/* Texto */}
          <p className="text-lg max-sm:text-base text-justify leading-relaxed">
            Como desenvolvedor fullstack especializado no ecossistema React e soluções mobile, 
            trabalho com tecnologias como React Native, Next.js e NestJS para criar 
            aplicações completas desde interfaces web responsivas até aplicativos móveis.&nbsp;
            Meu foco está em desenvolver soluções eficientes e escaláveis, sempre utilizando 
            TypeScript e as melhores práticas do mercado.
          </p>
        </div>
      </div>
    </section>
  );
}