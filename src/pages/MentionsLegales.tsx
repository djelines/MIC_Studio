import React from "react";

const MentionsLegales = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* HERO SOBRE */}
      <div className="border-b border-slate-200 bg-[#233147] text-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Mentions légales
          </h1>
          <div className="w-16 h-[3px] mt-6 bg-[#49b4a7]" />
        </div>
      </div>

      {/* CONTENU */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-[#233147]">
          <div className="space-y-12 text-sm md:text-base leading-relaxed">

            <div>
              <h2 className="font-semibold uppercase tracking-wide mb-4 text-[#746ac8]">
                Éditeur du site
              </h2>
              <p><strong>Responsable de la publication :</strong> Matéis Bourlet</p>
              <p><strong>Contact :</strong> mateis.bourlet@edu.esiee-it.fr</p>
              <p className="mt-3">
                Le présent site constitue un site vitrine à vocation professionnelle.
                Il présente des projets réalisés dans un cadre académique et collaboratif.
              </p>
            </div>

            <div>
              <h2 className="font-semibold uppercase tracking-wide mb-4 text-[#746ac8]">
                Hébergement
              </h2>
              <p>
                Le site est hébergé sur une infrastructure privée (NAS personnel).
              </p>
            </div>

            <div>
              <h2 className="font-semibold uppercase tracking-wide mb-4 text-[#746ac8]">
                Propriété intellectuelle
              </h2>
              <p>
                L’ensemble des contenus présents sur ce site (textes, éléments graphiques,
                projets, code source et images) est protégé par le droit d’auteur.
              </p>
              <p className="mt-2">
                Les visuels utilisés sont soit des créations personnelles,
                soit issus de banques d’images libres de droit, notamment Freepik.
              </p>
              <p className="mt-2">
                Toute reproduction ou exploitation sans autorisation préalable est interdite.
              </p>
            </div>

            <div>
              <h2 className="font-semibold uppercase tracking-wide mb-4 text-[#746ac8]">
                Technologies utilisées
              </h2>
              <p>
                Le site a été développé avec les technologies suivantes :
                React, React Router, Tailwind CSS, Framer Motion,
                Radix UI et Lucide React.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default MentionsLegales;