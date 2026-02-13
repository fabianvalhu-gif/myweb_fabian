import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Button } from './components/Button';
import { Chip } from './components/Chip';
import { motion } from 'motion/react';
import { Atom, Briefcase, ChevronDown, Download, Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { ResumeTimeline, type ResumeTimelineItem } from './components/ResumeTimeline';
import heroRightImage from '@/Images/hero.png';
import aboutImage from '@/Images/Gemini_Generated_Image_jqu4t1jqu4t1jqu4.png';
import logoBridgestone from '@/Images/logos/Bridgestone_logo.svg.png';
import logoContinental from '@/Images/logos/continental-6.svg';
import logoLiquiMoly from '@/Images/logos/Liqui-moly.svg.png';
import logoRioPuelo from '@/Images/logos/rio-puelo-2018-logo-344x124.png';
import logoSumitomo from '@/Images/logos/Sumitomo-logo.png';
import logoLingLong from '@/Images/logos/Linglong-Tire-Logo-Vector.svg--300x202.png';
import cvPdf from '@/Images/Fabian_Valenzuela_CV_Industrial_Distribution_ES.pdf';
import gallery1 from '@/Images/galeria/IMG-20190315-WA0031.jpg';
import gallery2 from '@/Images/galeria/IMG-20211205-WA0012.jpg';
import gallery3 from '@/Images/galeria/IMG-20211205-WA0014.jpg';
import gallery4 from '@/Images/galeria/IMG_0170.JPG';
import gallery5 from '@/Images/galeria/IMG_20190308_221727_259.jpg';
import gallery6 from '@/Images/galeria/1770747942683.jpg';

export default function App() {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactCompany, setContactCompany] = useState('');
  const [contactMessage, setContactMessage] = useState('');

  const experienceTimeline: ResumeTimelineItem[] = [
    {
      period: '2011–2014',
      year: '2011',
      role: 'Controller Interno',
      company: 'Flota Verschae',
      responsibilities: [
        'Gestión de operación y logística del área de neumáticos para flota de transporte.',
        'Control y auditorías en terreno con planillas avanzadas de seguimiento (Excel).',
        'Mejoras en control de inventario y evaluación de trazabilidad (RFID).'
      ],
      coverage: 'Cobertura nacional (Chile)'
    },
    {
      period: '2014–2018',
      year: '2014',
      role: 'Regional Sales Support & Field Engineer',
      company: 'Rio Puelo S.A',
      logoSrc: logoRioPuelo,
      responsibilities: [
        'Análisis técnico–comercial de productos OTR y soporte en terreno para minería y puertos.',
        'Herramientas de análisis y contenidos técnicos para decisiones basadas en datos.',
        'Asesoría técnica a transporte (pasajeros/carga/industrial) en Truck & Bus y OTR.',
        'Capacitación interna y estandarización técnica con partners internacionales.'
      ],
      coverage: 'Grandes cuentas minería/puertos y transporte industrial (Chile)'
    },
    {
      period: '2018–2019',
      year: '2018',
      role: 'Sales Executive',
      company: 'Sumitomo Rubber',
      logoSrc: logoSumitomo,
      responsibilities: [
        'Crecimiento +10% en ventas para segmentos pasajeros, 4x4 y camiones.',
        'Iniciativas comerciales con +USD 2.5M en ingresos el primer año.',
        'Entrenamiento y mentoring a equipos de clientes (+15% performance).',
        'Gestión de cuentas clave y ejecución postventa para recurrencia.'
      ],
      coverage: 'Perú, Ecuador y Paraguay'
    },
    {
      period: '2019–2020',
      year: '2019',
      role: 'Strategic Account Engineer',
      company: 'Bridgestone Mining Solutions',
      logoSrc: logoBridgestone,
      responsibilities: [
        'Administración de cuentas mineras con foco en KPIs operacionales y SLA.',
        'Coordinación de proyectos con clientes y equipos internos.',
        'Visibilidad de performance y mejoras continuas para retención y crecimiento.'
      ],
      coverage: 'Chile, Argentina y Bolivia'
    },
    {
      period: '2020–2022',
      year: '2020',
      role: 'Regional Sales Manager',
      company: 'Liqui Moly',
      logoSrc: logoLiquiMoly,
      responsibilities: [
        'Liderazgo de equipo comercial (8–12 personas) en múltiples regiones.',
        'Alianzas estratégicas por canal y rutinas de Sales Operations.',
        'Expansión de cobertura, productividad comercial y control de condiciones.'
      ],
      coverage: 'Cobertura regional multi-país'
    },
    {
      period: '2022–2024',
      year: '2022',
      role: 'Sales Manager Chile & Bolivia',
      company: 'Continental Tire',
      logoSrc: logoContinental,
      responsibilities: [
        'Desarrollo B2B en CST (Earthmoving, Material Handling, Port Solutions).',
        'Business development y planificación comercial (pipeline, cuentas objetivo).',
        'Coordinación de stakeholders y ejecución de proyectos con clientes.',
        'Mejoras basadas en datos de uso para diferenciar propuesta de valor.'
      ],
      coverage: 'Chile y Bolivia'
    },
    {
      period: '2024–Actual',
      year: '2024',
      role: 'Country Manager LATAM',
      company: 'Ling Long Tires',
      logoSrc: logoLingLong,
      responsibilities: [
        'Estrategia comercial y ejecución multi-país LATAM con enfoque GTM.',
        'Gestión de canales, distribuidores y cuentas clave para crecimiento rentable.',
        'Disciplina de pricing/margen (políticas, descuentos, términos, mix).',
        'Integración S&OP/forecasting para alinear demanda y abastecimiento.',
        'Operación data-driven con tableros (Power BI/CRM) y control de KPIs.',
        'Iniciativas de capital de trabajo para optimizar cash conversion.'
      ],
      coverage: 'LATAM (6 mercados)'
    }
  ];

  const defaultExperienceIndex = experienceTimeline.findIndex((item) => item.year === '2024');
  const [activeExperienceIndex, setActiveExperienceIndex] = useState<number | null>(
    defaultExperienceIndex >= 0 ? defaultExperienceIndex : 0
  );
  const activeExperience =
    activeExperienceIndex === null
      ? null
      : experienceTimeline[activeExperienceIndex] ?? experienceTimeline[0];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };


  const galleryItems = [
    {
      title: 'Activación de marca en taller',
      subtitle: 'Equipo técnico y pilotos en punto de venta',
      image: gallery1
    },
    {
      title: 'Evento automotriz y clientes',
      subtitle: 'Experiencia de marca y relacionamiento',
      image: gallery2
    },
    {
      title: 'Entrevista en terreno',
      subtitle: 'Comunicación y vocería comercial',
      image: gallery3
    },
    {
      title: 'Relaciones con pilotos',
      subtitle: 'Alianzas, comunidad y fidelización',
      image: gallery4
    },
    {
      title: 'Feria internacional y partners',
      subtitle: 'Networking y oportunidades comerciales',
      image: gallery5
    },
    {
      title: 'Vitrina de marca',
      subtitle: 'Relaciones con clientes y experiencia comercial',
      image: gallery6
    }
  ];

  const faqs = [
    {
      question: '¿Cuál es tu enfoque profesional?',
      answer:
        'Liderazgo comercial B2B en LATAM con foco en crecimiento rentable. Combino estrategia de canal, gestión de cuentas clave y ejecución go-to-market, cuidando margen (pricing/mix) y disciplina comercial para convertir crecimiento en rentabilidad sostenida.'
    },
    {
      question: '¿En qué industrias tienes experiencia?',
      answer:
        'Minería, distribución industrial y aftermarket automotriz. He trabajado integrando gestión técnica–comercial, desarrollo de negocio y ejecución en terreno para acelerar adopción, mejorar performance y fortalecer relaciones con clientes estratégicos.'
    },
    {
      question: '¿Qué cobertura regional has tenido?',
      answer:
        'Cobertura LATAM con experiencia multi-país en Chile, Argentina, Bolivia, Perú, Ecuador y Paraguay, además de coordinación regional. Tengo práctica trabajando con equipos distribuidos, stakeholders regionales y clientes en distintos husos horarios.'
    },
    {
      question: '¿Qué resultados destacados has logrado?',
      answer:
        '+10% crecimiento en ventas en mercados andinos, +USD 2.5M en ingresos adicionales el primer año y mejoras sostenidas en productividad comercial mediante cadencias de pipeline, KPIs y foco en cuentas clave.'
    },
    {
      question: '¿Qué tipo de responsabilidades has liderado?',
      answer:
        'Gestión de canales, pricing/margen, S&OP/forecast, tableros de desempeño y desarrollo de cuentas estratégicas con equipos multi-región. He liderado equipos comerciales y coordinado con operaciones, finanzas y marketing para asegurar ejecución.'
    },
    {
      question: '¿Qué herramientas utilizas para gestión y análisis?',
      answer:
        'Power BI/CRM, tableros comerciales, cadencias de pipeline y análisis de performance por canal, mix y rentabilidad. Uso datos para priorizar cuentas, ajustar pricing y anticipar demanda con forecast.'
    },
    {
      question: '¿Qué tipo de rol estás buscando?',
      answer:
        'Roles de liderazgo comercial o desarrollo de negocio con foco regional LATAM: Country/Regional Manager, Sales Manager, KAM líder o roles que combinen estrategia y ejecución en mercados B2B.'
    },
    {
      question: '¿Cuál es tu disponibilidad?',
      answer:
        'Disponibilidad inmediata para iniciar procesos y comenzar funciones. Abierto a viajes frecuentes y trabajo híbrido o presencial según necesidades del rol.'
    },
    {
      question: '¿Estás abierto a relocalización?',
      answer:
        'Sí. Estoy abierto a relocalización dentro de LATAM o a esquemas con base en Chile y desplazamientos regionales.'
    }
  ];

  const skillLogos = [
    { name: 'Power BI', level: 'Avanzado', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/powerbi.svg' },
    { name: 'Amazon Web Services', level: 'Intermedio', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazonaws.svg' },
    { name: 'Microsoft', level: 'Avanzado', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg' },
    { name: 'SAP', level: 'Intermedio', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/sap.svg' },
    { name: 'Tableau', level: 'Intermedio', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tableau.svg' },
    { name: 'Excel', level: 'Avanzado', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftexcel.svg' },
    { name: 'React', level: 'Intermedio', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg' },
    { name: 'Adobe Suite', level: 'Intermedio', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobe.svg' },
    { name: 'AutoCAD', level: 'Intermedio', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/autocad.svg' }
  ];
  const repeatedSkillLogos = [...skillLogos, ...skillLogos];

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const lines = [
      `Hola Fabián, soy ${contactName || '...'}${contactCompany ? ` (${contactCompany})` : ''}.`,
      `Mi email es ${contactEmail || '...'}.`,
      contactMessage ? `Mensaje: ${contactMessage}` : 'Quiero conversar sobre una posible colaboración.'
    ];
    const text = lines.join('\n');
    const url = `https://wa.me/56973860648?text=${encodeURIComponent(text)}`;
    window.location.href = url;
  };

  return (
    <div className="bg-black text-[#E9EEF5] font-['Inter']" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          <div className="absolute inset-y-0 right-0 w-[46%] flex items-center justify-end pointer-events-none">
            <img
              src={heroRightImage}
              alt=""
              aria-hidden="true"
              decoding="async"
              className="w-[95%] h-auto max-h-[92vh]"
              style={{
                filter: 'brightness(1.40) contrast(1) saturate(1.04)'
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-[120px] w-full">
          <motion.div
            className="max-w-[700px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
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
              <a href={cvPdf} download>
                <Button variant="primary">
                  <Download className="w-4 h-4 inline mr-2" />
                  Descargar CV (PDF)
                </Button>
              </a>
            </div>
          </motion.div>
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
          <motion.div
            className="grid grid-cols-2 gap-16"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <h2 className="text-[28px] leading-[36px] font-semibold text-[#E9EEF5] mb-6">
                Sobre mí
              </h2>
              <p className="text-[16px] leading-[26px] text-[#9AA6B2] mb-8 text-justify">
                Líder comercial con trayectoria en crecimiento B2B en LATAM, impulsando expansión regional mediante estrategia de canales, gestión de cuentas clave y gobernanza comercial orientada a rentabilidad.
              </p>
              <p className="text-[16px] leading-[26px] text-[#9AA6B2] mb-8 text-justify">
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
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <h2 className="text-[28px] leading-[36px] font-semibold text-[#E9EEF5] mb-12">
            Resume
          </h2>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="font-semibold text-[#E9EEF5] mb-6 text-lg">Experience</h3>
            <div
              className={`grid grid-cols-1 items-start gap-10 ${
                activeExperienceIndex === null ? 'lg:grid-cols-1' : 'lg:grid-cols-[minmax(0,1fr)_320px]'
              }`}
            >
              <div className="min-w-0">
                <ResumeTimeline
                  items={experienceTimeline}
                  activeIndex={activeExperienceIndex}
                  onSelect={(index) =>
                    setActiveExperienceIndex((current) => (current === index ? null : index))
                  }
                />
              </div>
              {activeExperienceIndex !== null ? (
                <div className="relative">
                  <div className="lg:sticky lg:top-[96px] rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0F1621] p-6">
                    <div className="text-xs uppercase tracking-[0.14em] text-[#9AA6B2] mb-2">
                      Detalle del rol
                    </div>
                    <div className="text-lg font-semibold text-[#E9EEF5] mb-1">
                      {activeExperience?.role}
                    </div>
                    <div className="text-sm text-[#9AA6B2] mb-4">
                      {activeExperience?.company} · {activeExperience?.period}
                    </div>

                    {activeExperience?.responsibilities?.length ? (
                      <div className="mb-4">
                        <div className="text-xs uppercase tracking-[0.12em] text-[#9AA6B2] mb-2">
                          Funciones
                        </div>
                        <ul className="space-y-1 text-sm text-[#E9EEF5]">
                          {activeExperience.responsibilities.map((resp, index) => (
                            <li key={`resp-${activeExperience.year}-${index}`}>• {resp}</li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {activeExperience?.coverage ? (
                      <div className="text-sm text-[#9AA6B2]">
                        <span className="text-[#E9EEF5] font-semibold">Cobertura: </span>
                        {activeExperience.coverage}
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>

          <motion.div
            className="mt-24 grid grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
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

              <div className="mt-8">
                <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#9AA6B2] mb-3">
                  Idiomas
                </div>
                <ul className="space-y-2 text-sm text-[#9AA6B2]">
                  <li>🇬🇧 Inglés — Avanzado</li>
                  <li>🇪🇸 Español — Nativo</li>
                  <li>🇵🇹 Portugués — Básico</li>
                  <li>🇩🇪 Alemán — Básico</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-[#E9EEF5] text-lg">Herramientas &amp; Skills</h3>
            </div>

            <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
              <div className="overflow-hidden bg-black">
                <div className="marquee-track flex w-max items-center gap-6 py-6">
                  {repeatedSkillLogos.map((item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      className="group relative min-w-[140px] h-[82px] flex items-center justify-center focus:outline-none"
                      tabIndex={0}
                      aria-label={`${item.name} · ${item.level}`}
                    >
                      <ImageWithFallback
                        src={item.src}
                        alt={item.name}
                        className="h-8 w-auto opacity-90"
                        style={{ filter: 'invert(1) brightness(1.05)' }}
                      />
                      <div className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0B0F14] px-3 py-1 text-[11px] text-[#E9EEF5] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100">
                        {item.name} · {item.level}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#9AA6B2] mb-3">
                Galería
              </div>
              <h2 className="text-[28px] leading-[36px] font-semibold text-[#E9EEF5]">
                Experiencias en terreno y liderazgo comercial
              </h2>
            </div>
            <div className="hidden lg:block text-sm text-[#9AA6B2]">
              Reuniones · Operaciones · Partners
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0F1621]"
              >
                <div className="relative aspect-[4/3]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B111A] via-[#0B111A]/35 to-transparent" />
                </div>
                <div className="px-5 py-4">
                  <div className="text-base font-semibold text-[#E9EEF5]">{item.title}</div>
                  <div className="text-sm text-[#9AA6B2]">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <div>
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#9AA6B2] mb-3">
              FAQ
            </div>
            <h2 className="text-[24px] leading-[32px] font-semibold text-[#E9EEF5] mb-6">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0F1621] p-4"
                >
                  <summary className="cursor-pointer list-none text-sm font-semibold text-[#E9EEF5] flex items-center justify-between">
                    {item.question}
                    <span className="text-[#4DA3FF] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="text-sm text-[#9AA6B2] mt-3 leading-[22px]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-[1440px] mx-auto px-[120px]">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-[#9AA6B2] mb-3">
                Contacto
              </div>
              <h2 className="text-[32px] leading-[40px] font-semibold text-[#E9EEF5]">
                Conectemos para impulsar tu estrategia comercial
              </h2>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-sm text-[#9AA6B2]">
              <span className="inline-flex h-2 w-2 rounded-full bg-[#4DA3FF]" />
              Disponible para proyectos LATAM
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1.15fr] gap-10">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#4DA3FF]/30 via-transparent to-[#0F1621]/80 opacity-70 blur-lg" />
              <div className="relative rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0F1621] p-8">
                <div className="text-sm text-[#9AA6B2] mb-6">
                  Respondo rápido por email o WhatsApp. Si prefieres, agenda una llamada breve.
                </div>

                <div className="space-y-5">
                  <div className="flex items-center gap-4 rounded-xl bg-[#0B0F14] px-4 py-3 border border-[rgba(255,255,255,0.06)]">
                    <div className="w-11 h-11 rounded-lg bg-[#4DA3FF]/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#4DA3FF]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-[0.12em] text-[#9AA6B2]">Email</div>
                      <a
                        href="mailto:fabian.valenzuela.prof@gmail.com"
                        className="text-[#E9EEF5] hover:text-[#4DA3FF] transition-colors truncate block"
                      >
                        fabian.valenzuela.prof@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl bg-[#0B0F14] px-4 py-3 border border-[rgba(255,255,255,0.06)]">
                    <div className="w-11 h-11 rounded-lg bg-[#4DA3FF]/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#4DA3FF]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-[0.12em] text-[#9AA6B2]">WhatsApp</div>
                      <a
                        href="https://wa.me/56973860648"
                        className="text-[#E9EEF5] hover:text-[#4DA3FF] transition-colors"
                      >
                        +56 9 7386 0648
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl bg-[#0B0F14] px-4 py-3 border border-[rgba(255,255,255,0.06)]">
                    <div className="w-11 h-11 rounded-lg bg-[#4DA3FF]/10 flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-[#4DA3FF]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-[0.12em] text-[#9AA6B2]">LinkedIn</div>
                      <a
                        href="https://www.linkedin.com/in/fabianvalenzuela10/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#E9EEF5] hover:text-[#4DA3FF] transition-colors"
                      >
                        /in/fabianvalenzuela10
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-xl bg-[#0B0F14] px-4 py-3 border border-[rgba(255,255,255,0.06)]">
                    <div className="w-11 h-11 rounded-lg bg-[#4DA3FF]/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#4DA3FF]" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-[0.12em] text-[#9AA6B2]">Ubicación</div>
                      <div className="text-[#E9EEF5]">Chile · Latinoamérica</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-3 text-xs text-[#9AA6B2]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#38D39F]" />
                  Respuesta habitual dentro de 24-48 horas
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#0F1621] p-8">
              <h3 className="font-semibold text-[#E9EEF5] text-lg mb-2">Cuéntame sobre tu desafío</h3>
              <p className="text-sm text-[#9AA6B2] mb-6">
                Completa el formulario y te contacto con una propuesta concreta de próximos pasos.
              </p>

              <form className="space-y-5" onSubmit={handleContactSubmit}>
                <div>
                  <label className="block text-xs uppercase tracking-[0.12em] text-[#9AA6B2] mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-[#0B0F14] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#E9EEF5] focus:outline-none focus:border-[#4DA3FF] transition-colors"
                    placeholder="Tu nombre y apellido"
                    value={contactName}
                    onChange={(event) => setContactName(event.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.12em] text-[#9AA6B2] mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-[#0B0F14] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#E9EEF5] focus:outline-none focus:border-[#4DA3FF] transition-colors"
                      placeholder="tu@email.com"
                      value={contactEmail}
                      onChange={(event) => setContactEmail(event.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.12em] text-[#9AA6B2] mb-2">Empresa</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-[#0B0F14] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#E9EEF5] focus:outline-none focus:border-[#4DA3FF] transition-colors"
                      placeholder="Nombre de la empresa"
                      value={contactCompany}
                      onChange={(event) => setContactCompany(event.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.12em] text-[#9AA6B2] mb-2">Mensaje</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0B0F14] border border-[rgba(255,255,255,0.08)] rounded-lg text-[#E9EEF5] focus:outline-none focus:border-[#4DA3FF] transition-colors resize-none"
                    placeholder="Ej: expansión regional, optimización de canal, forecast, BI..."
                    value={contactMessage}
                    onChange={(event) => setContactMessage(event.target.value)}
                  />
                </div>

                <Button variant="primary" className="w-full" type="submit">
                  Enviar mensaje
                </Button>
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
