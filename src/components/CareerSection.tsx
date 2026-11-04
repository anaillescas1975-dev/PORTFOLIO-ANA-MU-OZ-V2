import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, GraduationCap, Globe, Car, Building2, Tv, Award } from 'lucide-react';
import { PortfolioContent, ExperienceItem } from '../types';
import { SpotlightCard } from './SpotlightCard';

interface CareerSectionProps {
  content: PortfolioContent;
}

export const CareerSection: React.FC<CareerSectionProps> = ({ content }) => {
  const [expandedId, setExpandedId] = useState<string | null>('exp-vertize');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="trayectoria" className="py-24 bg-[#F5F2EB]/50 border-t border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C9828F] block mb-2">
            {content.careerSection.kicker}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E1B2E] tracking-tight text-balance">
            {content.careerSection.heading}
          </h2>
          <p className="text-base text-[#132238]/70 mt-3 font-light leading-relaxed">
            {content.careerSection.subheading}
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-[#E8E2D9] ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
          {content.careerSection.experiences.map((exp: ExperienceItem) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className="relative group">
                {/* Timeline node bullet */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-[#FAF8F5] border-2 border-[#0E1B2E] group-hover:border-[#C9828F] group-hover:scale-125 transition-all duration-200" />

                <SpotlightCard
                  spotlightColor="rgba(201, 130, 143, 0.16)"
                  className="p-6 sm:p-8 bg-white border border-[#E8E2D9] transition-shadow duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                    <div>
                      {/* Quiet unboxed metadata */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#C9828F] font-semibold uppercase tracking-wider mb-1.5">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        {exp.location && (
                          <>
                            <span aria-hidden="true" className="text-[#132238]/30">·</span>
                            <span className="flex items-center gap-1 text-[#132238]/60 font-normal">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </span>
                          </>
                        )}
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0E1B2E]">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm sm:text-base font-semibold text-[#132238]/80 mt-1 flex items-center gap-1.5">
                        <Building2 className="w-4 h-4 text-[#C9828F]" />
                        {exp.company}
                      </h4>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleExpand(exp.id)}
                      className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#0E1B2E] bg-[#FAF8F5] border border-[#E8E2D9] hover:bg-[#EFECE6] transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Ver menos' : 'Ver funciones'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <p className="text-sm text-[#132238]/80 font-light leading-relaxed mb-4">
                    {exp.summary}
                  </p>

                  {/* Expandable Responsibilities & Details */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-[#E8E2D9] space-y-4 animate-in fade-in duration-200">
                      <div>
                        <h5 className="text-xs font-bold uppercase tracking-wider text-[#C9828F] mb-2.5">
                          Responsabilidades & Tareas Desempeñadas:
                        </h5>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#132238]/85 font-normal">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#0E1B2E] mt-1.5 shrink-0" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* If programs are listed (e.g. TV programs) */}
                      {exp.programs && exp.programs.length > 0 && (
                        <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9]">
                          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#0E1B2E]">
                            <Tv className="w-4 h-4 text-[#C9828F]" />
                            <span>Programas y Magacines Destacados:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.programs.map((prog, pIdx) => (
                              <span
                                key={pIdx}
                                className="px-2.5 py-1 text-xs font-medium bg-white border border-[#E8E2D9] text-[#0E1B2E] rounded-md shadow-2xs"
                              >
                                {prog}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="mt-4 pt-3 border-t border-[#E8E2D9]/70 flex flex-wrap items-center gap-2 text-xs text-[#132238]/70">
                    {exp.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-medium text-[#132238]/80">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

        {/* Education, Languages & Additional Verified Info */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Higher Education */}
          <SpotlightCard className="p-6 bg-white border border-[#E8E2D9]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] text-[#C9828F]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C9828F] block">
                  Educación
                </span>
                <h4 className="font-serif font-bold text-[#0E1B2E] text-base">
                  Licenciatura Universitaria
                </h4>
              </div>
            </div>
            <p className="text-sm font-semibold text-[#0E1B2E] mb-1">
              Ciencias de la Información · Comunicación Audiovisual
            </p>
            <p className="text-xs text-[#132238]/70 font-light">
              Universidad Complutense de Madrid
            </p>
          </SpotlightCard>

          {/* Card 2: Languages */}
          <SpotlightCard className="p-6 bg-white border border-[#E8E2D9]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] text-[#C9828F]">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C9828F] block">
                  Idiomas
                </span>
                <h4 className="font-serif font-bold text-[#0E1B2E] text-base">
                  Español & Inglés
                </h4>
              </div>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#0E1B2E]">Español:</span>
                <span className="text-[#132238]/70">Nativo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#0E1B2E]">Inglés:</span>
                <span className="text-[#132238]/70">Nivel medio (B1 / FEDETO 2025)</span>
              </div>
            </div>
          </SpotlightCard>

          {/* Card 3: Mobility & Network */}
          <SpotlightCard className="p-6 bg-white border border-[#E8E2D9]">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] text-[#C9828F]">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C9828F] block">
                  Disponibilidad
                </span>
                <h4 className="font-serif font-bold text-[#0E1B2E] text-base">
                  Movilidad & Contactos
                </h4>
              </div>
            </div>
            <ul className="text-xs space-y-1.5 text-[#132238]/80 font-light">
              <li>· Carnet de conducir y vehículo propio.</li>
              <li>· Disponibilidad para desplazamientos.</li>
              <li>· Amplia red de contactos institucionales y de medios.</li>
            </ul>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
