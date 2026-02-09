import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { Chip } from './components/Chip';
import { Card } from './components/Card';
import { Atom, Briefcase, ChevronDown, Download, ExternalLink, Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ResumeTimeline, type ResumeTimelineItem } from './components/ResumeTimeline';
import heroRightImage from '@/Images/ChatGPT Image 9 feb 2026, 00_20_31.png';
import aboutImage from '@/Images/Captura de pantalla 2026-02-09 a la(s) 1.38.17 a.m..png';
import logoBridgestone from '@/Images/logos/Bridgestone_logo.svg.png';
import logoContinental from '@/Images/logos/continental-6.svg';
import logoLiquiMoly from '@/Images/logos/Liqui-moly.svg.png';
import logoRioPuelo from '@/Images/logos/rio-puelo-2018-logo-344x124.png';
import logoSumitomo from '@/Images/logos/Sumitomo-logo.png';
import logoLingLong from '@/Images/logos/Linglong-Tire-Logo-Vector.svg--300x202.png';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const isAutoScrollingRef = useRef(false);

  const experienceTimeline: ResumeTimelineItem[] = [
    { period: '2011–2014', year: '2011', role: 'Controller Interno', company: 'Flota Verschae' },
    {
      period: '2014–2018',
      year: '2014',
      role: 'Regional Sales Support & Field Engineer',
      company: 'Rio Puelo S.A',
      logoSrc: logoRioPuelo
    },
    {
      period: '2018–2019',
      year: '2018',
      role: 'Sales Executive',
      company: 'Sumitomo Rubber',
      logoSrc: logoSumitomo
    },
    {
      period: '2019–2020',
      year: '2019',
      role: 'Strategic Account Engineer',
      company: 'Bridgestone Mining Solutions',
      logoSrc: logoBridgestone
    },
    {
      period: '2020–2022',
      year: '2020',
      role: 'Regional Sales Manager',
      company: 'Liqui Moly',
      logoSrc: logoLiquiMoly
    },
    {
      period: '2022–2024',
      year: '2022',
      role: 'Sales Manager Chile & Bolivia',
      company: 'Continental Tire',
      logoSrc: logoContinental
    },
    {
      period: '2024–Actual',
      year: '2024',
      role: 'Country Manager LATAM',
      company: 'Ling Long Tires',
      logoSrc: logoLingLong
    }
  ];

  const NAVBAR_HEIGHT = 72;
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    const getSections = () =>
      Array.from(document.querySelectorAll<HTMLElement>('section'));

    const getActiveSection = (sections: HTMLElement[]) => {
      const anchorY = NAVBAR_HEIGHT + 1;
      const byContain = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= anchorY && rect.bottom > anchorY;
      });
      if (byContain) return byContain;

      return (
        sections
          .map((section) => ({
            section,
            dist: Math.abs(section.getBoundingClientRect().top - anchorY),
          }))
          .sort((a, b) => a.dist - b.dist)[0]?.section ?? null
      );
    };

    const scrollToSiblingSection = (direction: 1 | -1) => {
      const sections = getSections();
      const activeSection = getActiveSection(sections);
      if (!activeSection) return;

      const index = sections.indexOf(activeSection);
      const next = sections[index + direction];
      if (!next) return;

      next.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    };

    const onWheel = (event: WheelEvent) => {
      if (isAutoScrollingRef.current) return;
      if (event.ctrlKey || event.metaKey) return;

      const sections = getSections();
      const activeSection = getActiveSection(sections);
      if (!activeSection) return;

      const rect = activeSection.getBoundingClientRect();
      const atTop = rect.top >= NAVBAR_HEIGHT - 8 && rect.top <= NAVBAR_HEIGHT + 8;
      const atBottom = rect.bottom <= window.innerHeight + 8;

      const hasOverflowWithinSection = rect.height > window.innerHeight + 16;

      if (event.deltaY > 0) {
        if (hasOverflowWithinSection && !atBottom) return;
        event.preventDefault();
        isAutoScrollingRef.current = true;
        scrollToSiblingSection(1);
        window.setTimeout(() => {
          isAutoScrollingRef.current = false;
        }, prefersReducedMotion ? 0 : 700);
        return;
      }

      if (event.deltaY < 0) {
        if (hasOverflowWithinSection && !atTop) return;
        event.preventDefault();
        isAutoScrollingRef.current = true;
        scrollToSiblingSection(-1);
        window.setTimeout(() => {
          isAutoScrollingRef.current = false;
        }, prefersReducedMotion ? 0 : 700);
      }
    };

    const isLikelyTouchDevice =
      navigator.maxTouchPoints > 0 ||
      window.matchMedia?.('(pointer: coarse)')?.matches;

    if (isLikelyTouchDevice) return;

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', onWheel as EventListener);
    };
  }, []);

  const filters = ['All', 'Channel', 'Partnerships', 'Data'];

  const cases = [
    {
      title: 'Estrategia de canal y cobertura regional',
      subtitle: 'Diagnóstico → ejecución → resultado',
      tags: ['Channel', 'GTM', 'Pricing'],
      context: 'Redefinición de modelo de distribución en 4 mercados LATAM',
      action: 'Implementación de sistema de clasificación de distribuidores y estructura de incentivos',
      result: 'Incremento de X% en cobertura efectiva y reducción de conflictos de canal'
    },
    {
      title: 'Desarrollo de alianzas estratégicas B2B',
      subtitle: 'Partnerships → integración → escala',
      tags: ['Partnerships', 'GTM'],
      context: 'Identificación de gaps en propuesta de valor para cuentas estratégicas',
      action: 'Negociación y estructuración de acuerdos con fabricantes complementarios',
      result: 'X nuevas alianzas generando bundle solutions con adoption rate de X%'
    },
    {
      title: 'Dashboard comercial y automatización de reportes',
      subtitle: 'Data → insights → decisiones',
      tags: ['Data', 'BI'],
      context: 'Información dispersa en múltiples fuentes sin visibilidad consolidada',
      action: 'Diseño e implementación de dashboard Power BI integrado con CRM y ERP',
      result: 'Reducción de X% en tiempo de reporting y mejora en forecast accuracy'
    }
  ];

  const filteredCases = activeFilter === 'All' 
    ? cases 
    : cases.filter(c => c.tags.includes(activeFilter));

  return (
    <div className="bg-black text-[#E9EEF5] font-['Inter']" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          <div
            className="absolute inset-y-0 right-0 w-[46%] bg-no-repeat"
            style={{
              backgroundImage: `url(${heroRightImage})`,
              backgroundSize: '95% auto',
              backgroundPosition: 'right center'
            }}
          >
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-[120px] w-full">
          <div className="max-w-[700px]">
            <div className="text-[14px] leading-[20px] font-medium text-[#9AA6B2] mb-3">
              Commercial Growth Leader LATAM (B2B)
            </div>
            <h1 className="text-[56px] leading-[62px] sm:text-[64px] sm:leading-[72px] font-semibold tracking-tight text-[#E9EEF5] mb-3">
              Fabián Valenzuela
            </h1>
            <h2 className="text-[20px] leading-[28px] sm:text-[24px] sm:leading-[32px] font-medium text-[#C7D0DA] mb-5">
              Impulso crecimiento rentable combinando Key Accounts, desarrollo de canales y ejecución Go-to-Market.
            </h2>
            <p className="text-[14px] leading-[22px] sm:text-[15px] sm:leading-[24px] text-[#9AA6B2] max-w-[620px] mb-0">
              Especialista en pricing/mix, forecast (S&OP) y gestión con KPIs (Power BI) en minería, distribución industrial y aftermarket automotriz.
            </p>

            <div className="flex gap-4 mt-10 mb-8">
              <Button variant="primary">
                <Download className="w-4 h-4 inline mr-2" />
                Descargar CV (PDF)
              </Button>
              <Button variant="secondary">Ver casos</Button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => scrollToSection('about')}
          aria-label="Scroll to About section"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-[#9AA6B2]" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h2 className="text-[28px] leading-[36px] font-semibold text-[#E9EEF5] mb-6">
                Sobre mí
              </h2>
              <p className="text-[16px] leading-[26px] text-[#9AA6B2] mb-8">
                Líder comercial con trayectoria en crecimiento B2B en LATAM, impulsando expansión regional mediante estrategia de canales, gestión de cuentas clave y gobernanza comercial orientada a rentabilidad.
              </p>
              <p className="text-[16px] leading-[26px] text-[#9AA6B2] mb-8">
                Trabajo en la intersección entre go-to-market, partners y data, transformando información en decisiones: pricing/mix, forecast, KPIs y cadencia comercial, para mejorar conversión, productividad y consistencia de resultados en mercados dinámicos.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#4DA3FF] mt-3"></div>
                  <div>
                    <h3 className="font-semibold text-[#E9EEF5] mb-1">Channel Strategy &amp; Execution</h3>
                    <p className="text-sm text-[#9AA6B2]">Arquitectura de canal, cobertura, activación y performance con modelos de gestión por resultados.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#4DA3FF] mt-3"></div>
                  <div>
                    <h3 className="font-semibold text-[#E9EEF5] mb-1">Strategic Partnerships</h3>
                    <p className="text-sm text-[#9AA6B2]">Negociación de acuerdos, estructura comercial, métricas de éxito y relacionamiento C-level.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#4DA3FF] mt-3"></div>
                  <div>
                    <h3 className="font-semibold text-[#E9EEF5] mb-1">Performance Management (BI/CRM)</h3>
                    <p className="text-sm text-[#9AA6B2]">Tableros ejecutivos, automatización de reporting y disciplina comercial basada en indicadores.</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs font-medium uppercase tracking-[0.15em] text-[#9AA6B2] mb-3">Focus</div>
                <div className="flex flex-wrap gap-2">
                  <Chip>Aftermarket</Chip>
                  <Chip>Industrial</Chip>
                  <Chip>Retail</Chip>
                  <Chip>LATAM</Chip>
                </div>
              </div>
            </div>

            <div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={aboutImage}
                  alt="Fabián Valenzuela"
                  className="w-full h-full object-cover filter grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <h2 className="text-[28px] leading-[36px] font-semibold text-[#E9EEF5] mb-12">
            Resume
          </h2>

          <div className="w-full">
            <h3 className="font-semibold text-[#E9EEF5] mb-6 text-lg">Experience</h3>
            <ResumeTimeline items={experienceTimeline} defaultYear="2024" />
          </div>

          <div className="mt-24 grid grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold text-[#E9EEF5] mb-6 text-lg">Education</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4DA3FF]/10 flex items-center justify-center shrink-0">
                    <Atom className="w-5 h-5 text-[#4DA3FF]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[#E9EEF5] mb-1">
                      Licenciatura en Física — Universidad de Valparaíso
                    </h4>
                    <div className="text-sm text-[#9AA6B2]">2008–2012 · Incompleta</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4DA3FF]/10 flex items-center justify-center shrink-0">
                    <Briefcase className="w-5 h-5 text-[#4DA3FF]" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-[#E9EEF5] mb-1">
                      Ingeniería Civil Industrial — Universidad San Sebastián
                    </h4>
                    <div className="text-sm text-[#9AA6B2]">En curso · Executive (modalidad)</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-[#E9EEF5] mb-6 text-lg">Certifications</h3>
              <ul className="space-y-2 text-sm text-[#9AA6B2]">
                <li>• Strategic Negotiation</li>
                <li>• Data Analytics &amp; BI</li>
                <li>• Supply Chain Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-[#0F1621]">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <h2 className="text-[28px] leading-[36px] font-semibold text-[#E9EEF5] mb-8">
            Casos destacados
          </h2>

          <div className="flex gap-3 mb-12">
            {filters.map((filter) => (
              <Chip
                key={filter}
                active={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Chip>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8">
            {filteredCases.map((caseItem, index) => (
              <Card key={index} className="p-8">
                <div className="grid grid-cols-[1fr_2fr] gap-8">
                  <div className="aspect-video bg-gradient-to-br from-[#1A2030] to-[#0B0F14] rounded-lg flex items-center justify-center">
                    <div className="text-6xl text-[#4DA3FF]/20">#{index + 1}</div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#E9EEF5] mb-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-sm text-[#9AA6B2] mb-4">{caseItem.subtitle}</p>

                    <div className="flex gap-2 mb-6">
                      {caseItem.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-[#4DA3FF]/10 text-[#4DA3FF] text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="font-semibold text-[#E9EEF5]">Contexto: </span>
                        <span className="text-[#9AA6B2]">{caseItem.context}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#E9EEF5]">Acción: </span>
                        <span className="text-[#9AA6B2]">{caseItem.action}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[#E9EEF5]">Resultado: </span>
                        <span className="text-[#9AA6B2]">{caseItem.result}</span>
                      </div>
                    </div>

                    <button className="text-[#4DA3FF] hover:text-[#3D8FE6] transition-colors flex items-center gap-2 text-sm">
                      Ver detalle <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <div className="bg-gradient-to-r from-[#0F1621] to-[#1A2030] rounded-2xl p-16 text-center border border-[rgba(255,255,255,0.08)]">
            <h2 className="text-[28px] leading-[36px] font-semibold text-[#E9EEF5] mb-6">
              ¿Conversamos sobre expansión, canal o performance comercial?
            </h2>
            <p className="text-[#9AA6B2] mb-8 max-w-2xl mx-auto">
              Si estás evaluando estrategias de crecimiento regional, optimización de canal o mejoras en ejecución comercial basada en datos.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="primary">Agendar conversación</Button>
              <Button variant="secondary">
                <Mail className="w-4 h-4 inline mr-2" />
                Enviar email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0F1621]">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <h2 className="text-[28px] leading-[36px] font-semibold text-[#E9EEF5] mb-12">
            Contacto
          </h2>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 className="font-semibold text-[#E9EEF5] mb-6">Información de contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4DA3FF]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#4DA3FF]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#9AA6B2] mb-1">Email</div>
                    <a href="mailto:fabian@ejemplo.com" className="text-[#E9EEF5] hover:text-[#4DA3FF] transition-colors">
                      fabian@ejemplo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4DA3FF]/10 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-[#4DA3FF]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#9AA6B2] mb-1">LinkedIn</div>
                    <a href="#" className="text-[#E9EEF5] hover:text-[#4DA3FF] transition-colors">
                      /in/fabian-valenzuela
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4DA3FF]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#4DA3FF]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#9AA6B2] mb-1">WhatsApp Business</div>
                    <a href="#" className="text-[#E9EEF5] hover:text-[#4DA3FF] transition-colors">
                      +56 9 XXXX XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4DA3FF]/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#4DA3FF]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#9AA6B2] mb-1">Ubicación</div>
                    <div className="text-[#E9EEF5]">Chile | LATAM</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-[#E9EEF5] mb-6">Envíame un mensaje</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-[#9AA6B2] mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#0B0F14] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#E9EEF5] focus:outline-none focus:border-[#4DA3FF] transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#9AA6B2] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-[#0B0F14] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#E9EEF5] focus:outline-none focus:border-[#4DA3FF] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#9AA6B2] mb-2">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-[#0B0F14] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#E9EEF5] focus:outline-none focus:border-[#4DA3FF] transition-colors resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <Button variant="primary" className="w-full">Enviar mensaje</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[rgba(255,255,255,0.08)]">
        <div className="max-w-[1440px] mx-auto px-[120px] flex justify-between items-center">
          <div className="text-sm text-[#9AA6B2]">
            © 2026 Fabián Valenzuela
          </div>
          <div className="flex gap-6 text-sm text-[#9AA6B2]">
            <a href="#" className="hover:text-[#E9EEF5] transition-colors">Privacidad</a>
            <a href="#" className="hover:text-[#E9EEF5] transition-colors">Términos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
