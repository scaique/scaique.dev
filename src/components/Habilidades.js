"use client";
import { useEffect, useRef } from "react";

export default function Habilidades() {
  const sectionRef = useRef(null);

  const habilidades = [
    { name: "React Native", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "NestJS", icon: "nestjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Python", icon: "python" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const skills = sectionRef.current?.querySelectorAll(".skill");
    skills?.forEach((skill) => observer.observe(skill));

    return () => {
      skills?.forEach((skill) => observer.unobserve(skill));
    };
  }, []);

  return (
    <section id="habilidades" className="flex-1 flex justify-center">
      <div className="w-full max-w-6xl rounded-lg">
        <div className="p-8 flex flex-col">
          {/* Título */}
          <p className="text-4xl max-sm:text-2xl font-bold text-start uppercase">
            Habilidades
          </p>
          {/* Linha decorativa */}
          <div className="w-24 h-1 bg-secundario mb-6 self-start"></div>
          
          <div
            ref={sectionRef}
            className="w-full text-sm grid grid-cols-3 max-sm:grid-cols-3 gap-8 place-items-start max-sm:place-items-center"
          >
            {habilidades.map(({ name, icon }, index) => (
              <div key={index} className="skills w-full flex flex-col items-center">
                <img
                  className="skill w-12 h-12 p-1.5 opacity-0 transform scale-0 transition-all duration-700 self-center"
                  src={`https://skillicons.dev/icons?i=${icon}`}
                  alt={`Ícone de ${name}`}
                  loading="lazy"
                />
                <p className="text-center mt-2 w-full">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
