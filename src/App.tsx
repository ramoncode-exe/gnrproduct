/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle, AlertTriangle, ShieldCheck, ArrowRight, Timer, ListChecks, Target, Users, ChevronDown, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

function FAQItem({ q, a, index }: { q: string, a: string, index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-[2rem] border-2 border-slate-100 overflow-hidden shadow-sm"
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-8 flex justify-between items-center bg-white transition-colors group"
      >
        <span className="font-black text-slate-950 text-xl tracking-tight">{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-green-600 shrink-0"
        >
          <ChevronDown size={28} className="group-hover:translate-y-0.5 transition-transform" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-8 pt-0 text-slate-600 text-lg font-medium leading-relaxed border-t border-slate-50">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function App() {
  const checkoutUrl = "https://buy.stripe.com/5kQaEXacp7Grd9B7r30Ba01";

  const testimonials = [
    {
      name: "João Silva",
      status: "Candidato Aprovado",
      quote: "Finalmente percebi como me preparar para o psicológico. O GNR 360 deu-me a confiança que precisava.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Maria Santos",
      status: "Fase de Formação",
      quote: "A checklist ajudou-me imenso a organizar os documentos. Não falhei um único prazo.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Ricardo Pereira",
      status: "Militar da GNR",
      quote: "Depois de falhar no ano passado, este método mostrou-me exatamente onde eu estava a errar.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Ana Costa",
      status: "Aprovada 2025",
      quote: "O bónus dos 7 erros foi o que me salvou na entrevista. Estava a cometer falhas básicas.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Pedro Lima",
      status: "Candidato",
      quote: "Material direto ao ponto. Sem enrolação. Perfeito para quem tem pouco tempo para estudar.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
      name: "Carla Matos",
      status: "Aprovada",
      quote: "Senti-me muito mais tranquila nos testes físicos seguindo o cronograma do guia.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-green-100 selection:text-green-900">
      {/* Navbar Simple */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-center">
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-green-500">GNR<span className="text-white">360</span></span>
        </div>
      </nav>

      {/* Hero Section - Maximum Contrast */}
      <section className="relative pt-28 pb-16 md:pt-48 lg:pt-64 lg:pb-48 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#020402]"></div>
          {/* Subtle grid with strong contrast lines */}
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]"></div>
          {/* Controlled radial light */}
          <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] opacity-20 bg-green-500 blur-[60px] md:blur-[150px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 md:gap-3 py-2 px-4 md:py-2.5 md:px-6 rounded-full bg-green-600 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-12 shadow-[0_0_30px_rgba(34,197,94,0.4)] border border-white/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Atualizado: Concurso 2026
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-6 md:mb-12 leading-[1] md:leading-[0.85] drop-shadow-[0_10px_30px_rgba(0,0,0,1)]">
                Garante a Tua Farda <br />
                <span className="text-green-500 block mt-2 md:mt-4 drop-shadow-[0_0_40px_rgba(34,197,94,0.6)]">em 2026.</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-slate-100 mb-10 md:mb-16 max-w-xl mx-auto lg:mx-0 leading-tight font-black drop-shadow-[0_5px_15px_rgba(0,0,0,1)]">
                O Guia Digital <span className="bg-white text-black px-2 py-0.5 md:px-3 md:py-1 ml-1 rounded-md md:rounded-lg">PDF</span> que simplifica o caminho da aprovação. 
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-10 mb-10 md:mb-12">
                <a href={checkoutUrl} className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white px-8 py-6 md:px-12 md:py-8 rounded-2xl md:rounded-3xl text-lg md:text-xl font-black transition-all flex items-center justify-center gap-3 md:gap-4 group shadow-[0_20px_50px_-15px_rgba(34,197,94,0.8)] hover:-translate-y-1 md:hover:-translate-y-2 active:scale-95">
                  BAIXAR GUIA <ArrowRight size={28} className="md:size-[36px] group-hover:translate-x-3 transition-transform" />
                </a>
                <div className="flex flex-col items-center sm:items-start">
                  <div className="flex items-center gap-3 md:gap-4 font-black text-3xl md:text-5xl text-white">
                    <span className="text-slate-600 line-through text-lg md:text-2xl decoration-red-500 decoration-2">45€</span>
                    19,90€
                  </div>
                  <span className="text-green-400 text-[10px] md:text-sm uppercase font-black tracking-[0.15em] md:tracking-[0.2em] mt-1 md:mt-2">Últimas Horas Nesta Oferta</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10 text-[10px] md:text-xs uppercase font-black tracking-[0.1em] md:tracking-[0.15em] text-slate-400 border-t border-white/10 pt-8 md:pt-10">
                <div className="flex items-center gap-2 md:gap-3">
                  <ShieldCheck size={16} className="md:size-[20px] text-green-500" /> FORMATO PDF DIGITAL
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <ShieldCheck size={16} className="md:size-[20px] text-green-500" /> ACESSO IMEDIATO
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative hidden lg:block perspective-1000"
            >
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-[450px] mx-auto drop-shadow-[0_50px_80px_rgba(34,197,94,0.3)] transform rotate-2 hover:rotate-0 transition-all duration-1000"
              >
                <img 
                  src="/3.png" 
                  alt="Guia GNR 360" 
                  className="w-full h-auto rounded-[2rem] border-8 border-black shadow-2xl"
                />
                {/* Visual accent */}
                <div className="absolute -inset-4 bg-green-500/10 blur-3xl -z-10 rounded-full"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section - Scroll Reveal */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-950 mb-6 md:mb-10 leading-none tracking-tighter">
                Estás aqui porque <br />
                <span className="text-red-600">estás a falhar sozinho.</span>
              </h2>
              <div className="space-y-6 md:space-y-8 text-lg md:text-2xl text-slate-700 leading-relaxed font-medium">
                <p>O tempo é o teu inimigo. Estudar sem estratégia é o caminho mais curto para a reprovação. Já viste centenas de fóruns, mas a dúvida continua lá.</p>
                <div className="bg-red-50 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border-2 border-red-100 shadow-xl shadow-red-100/30">
                   <p className="italic font-black text-slate-900 text-xl md:text-3xl">"E se eu for eliminado na entrevista psicológica por uma falha básica?"</p>
                </div>
                <p className="font-black text-slate-950 text-xl md:text-3xl">Reprovar em 2026 é adiar a tua estabilidade por mais 1 ano.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {[
                { icon: <AlertTriangle className="size-[24px] md:size-[32px]" />, title: "Confusão", text: "Excesso de informação irrelevante." },
                { icon: <Timer className="size-[24px] md:size-[32px]" />, title: "Tempo", text: "Ficas para trás todos os dias." },
                { icon: <Users className="size-[24px] md:size-[32px]" />, title: "Exclusão", text: "80% falha no psicológico." },
                { icon: <Target className="size-[24px] md:size-[32px]" />, title: "Estratégia", text: "Estudar sem foco é inútil." }
              ].map((item, i) => (
                <div key={i} className="p-6 md:p-10 bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-slate-100 hover:border-red-200 transition-all md:hover:-translate-y-3 group">
                  <div className="text-red-600 mb-4 md:mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="font-black text-slate-950 text-lg md:text-xl mb-2 md:mb-3 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-sm md:text-base text-slate-500 font-bold leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Comparison Section - High Impact Contrast */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 md:py-40 bg-slate-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-slate-950 mb-6 tracking-tighter uppercase leading-none italic">
              A Decisão que <span className="text-green-600 block sm:inline">Define o teu Futuro</span>
            </h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs md:text-base">Escolhe o caminho da tua farda</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 relative">
            {/* The "VS" circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-white border-8 border-slate-50 text-slate-900 rounded-full flex items-center justify-center font-black text-2xl md:text-4xl z-10 shadow-xl hidden md:flex">
              VS
            </div>

            {/* Without GNR 360 */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-16 rounded-[3rem] border-2 border-slate-100 shadow-xl relative"
            >
              <div className="absolute -top-4 left-10 bg-red-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                SEM GNR 360
              </div>
              <ul className="space-y-8 mt-4">
                {[
                  "Estudo sem foco e desorganizado",
                  "Incerteza total sobre os critérios",
                  "Risco altíssimo de falhar no psicológico",
                  "Perda de tempo com material inútil",
                  "Ansiedade e falta de preparação física",
                  "Um ano de espera em caso de falha"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-slate-400 font-bold text-lg md:text-xl">
                    <span className="text-red-500 mt-1 shrink-0">✕</span>
                    <span className="line-through">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* With GNR 360 */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-slate-950 p-10 md:p-16 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(34,197,94,0.3)] relative border-4 border-green-500/30"
            >
              <div className="absolute -top-4 left-10 bg-green-500 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                COM O GNR 360
              </div>
              <ul className="space-y-8 mt-4">
                {[
                  "Plano direto ao ponto e focado",
                  "Clareza total sobre cada etapa",
                  "Preparação específica para o psicológico",
                  "Acesso a estratégias de entrevista",
                  "Checklists e planos de treino reais",
                  "Caminho seguro rumo à tua vaga"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start text-white font-black text-lg md:text-xl transform hover:translate-x-2 transition-transform">
                    <CheckCircle className="text-green-500 mt-1 shrink-0" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="mt-20 text-center">
            <a href={checkoutUrl} className="inline-flex items-center gap-4 bg-green-600 text-white px-10 py-6 rounded-full text-lg font-black hover:bg-green-500 transition-all transform hover:-translate-y-1 shadow-2xl">
              ESCOLHO A MINHA APROVAÇÃO AGORA <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Dynamic Testimonial Marquee */}
      <section className="py-20 md:py-24 bg-slate-950 overflow-hidden border-y border-white/5">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-none tracking-tight">O Que Dizem os <span className="text-green-500">Nossos Alunos</span></h2>
          <p className="text-slate-500 font-bold mt-4 uppercase tracking-[0.15em] md:tracking-[0.2em] text-[10px] md:text-sm">Histórias Reais de Aprovação</p>
        </div>
        
        <div className="relative flex gap-6 md:gap-10 py-6 md:py-10">
          <motion.div 
            animate={{ x: [0, -1920] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="flex gap-6 md:gap-10 shrink-0 px-4"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="w-[300px] md:w-[400px] bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shrink-0 hover:border-green-500/50 transition-all hover:bg-white/[0.08]">
                <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
                  <img src={t.img} alt={t.name} className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-green-500 shadow-lg shadow-green-500/20" />
                  <div>
                    <h4 className="text-white font-black text-lg md:text-xl mb-1">{t.name}</h4>
                    <p className="text-green-500 text-[10px] md:text-xs font-black uppercase tracking-widest">{t.status}</p>
                  </div>
                </div>
                <p className="text-slate-200 italic text-lg md:text-xl leading-relaxed font-medium">"{t.quote}"</p>
                <div className="flex gap-1 mt-6 md:mt-8 text-green-500">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-sm md:text-lg">★</span>)}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Method Section - Reveal */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-20 md:py-32 bg-[#050a05] text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-28">
             <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-10 tracking-tighter uppercase leading-none">O Mapa da <span className="text-green-500">Vaga 2026</span></h2>
             <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto font-black uppercase tracking-widest bg-white/5 py-3 px-6 md:py-4 md:px-10 rounded-full border border-white/10 inline-block">MÉTODO GNR 360</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            {[
              { icon: <ListChecks className="size-[32px] md:size-[48px]" />, title: "Mapeamento Estratégico", desc: "Deciframos o que realmente é valorizado no concurso deste ano. Não percas tempo com o inútil." },
              { icon: <ShieldCheck className="size-[32px] md:size-[48px]" />, title: "Protocolo Psicológico", desc: "Aprende a responder o que os psicólogos querem ouvir sem perder a tua autenticidade." },
              { icon: <Target className="size-[32px] md:size-[48px]" />, title: "Foco Letal", desc: "A estratégia de estudo 80/20. Estuda o que cai, ignora o que não cai." }
            ].map((box, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 border border-white/10 p-8 md:p-14 rounded-[2.5rem] md:rounded-[4rem] hover:bg-white/[0.08] transition-all group border-b-4 border-b-green-500/20"
              >
                <div className="text-green-500 mb-6 md:mb-10 group-hover:scale-125 transition-transform origin-left">{box.icon}</div>
                <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 uppercase tracking-tight leading-none">{box.title}</h3>
                <p className="text-base md:text-lg text-slate-400 font-bold leading-relaxed">{box.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Dedicated Offer Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 md:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
            <div className="grid lg:grid-cols-2">
              <div className="p-10 md:p-20 text-white">
                <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter leading-none">
                  Tudo o que recebes no <br/>
                  <span className="text-green-500">GNR 360</span>
                </h2>
                <div className="space-y-6 mb-12">
                  {[
                    "Guia Completo 'Aprovação GNR 2026' (PDF)",
                    "BÓNUS EXCLUSIVO: Checklist Documental 'Sem Falhas",
                    "BÓNUS EXCLUSIVO: Os 7 Erros Comuns na Entrevista",
                    "Pagamento Único + Atualizações Gratuitas"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-lg md:text-xl font-bold">
                      <div className="bg-green-600 rounded-full p-1 shrink-0">
                        <CheckCircle size={20} className="text-white" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-green-600 px-8 py-4 rounded-2xl transform -rotate-3">
                     <span className="block text-sm font-black uppercase text-green-200">Preço Especial</span>
                     <span className="text-4xl font-black">19,90€</span>
                  </div>
                  <div className="text-slate-500 line-through text-2xl font-black">45€</div>
                </div>
              </div>
              <div className="bg-slate-800 p-10 md:p-20 flex flex-col justify-center items-center text-center">
                {/* Visual Image Stack - Reorganized */}
                <div className="relative w-full max-w-md h-[300px] mb-12 flex items-center justify-center">
                  <div className="absolute left-0 transform -rotate-12 translate-y-4 opacity-80 scale-90 transition-all hover:translate-x-[-10px] hover:rotate-[-15deg] z-0">
                    <img src="/1.png" alt="Bónus 1" className="w-48 h-auto rounded-xl shadow-2xl border-4 border-slate-700" />
                  </div>
                  <div className="absolute right-0 transform rotate-12 translate-y-4 opacity-80 scale-90 transition-all hover:translate-x-[10px] hover:rotate-[15deg] z-0">
                    <img src="/2.png" alt="Bónus 2" className="w-48 h-auto rounded-xl shadow-2xl border-4 border-slate-700" />
                  </div>
                  <div className="absolute z-10 transform translate-y-[-10px] hover:scale-105 transition-all">
                    <img src="/3.png" alt="Ebook Principal" className="w-56 h-auto rounded-xl shadow-[0_30px_60px_rgba(34,197,94,0.5)] border-8 border-green-600" />
                  </div>
                </div>
                
                <p className="text-white text-2xl font-black mb-10 uppercase tracking-widest leading-tight">
                  Pronto para começares a tua <br/> jornada agora?
                </p>
                <a href={checkoutUrl} className="w-full bg-green-600 hover:bg-green-500 text-white py-8 rounded-3xl text-lg md:text-xl font-black transition-all flex items-center justify-center gap-4 group shadow-[0_20px_50px_rgba(34,197,94,0.4)]">
                   OBTER ACESSO <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
                </a>
                <p className="text-slate-400 mt-8 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck size={16} className="text-green-500" /> Pagamento 100% Seguro & Acesso Imediato
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final Urgency - Maximal Scale */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-32 md:py-48 bg-green-600 text-center text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10 font-black uppercase">
           <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8rem] font-black mb-8 md:mb-16 leading-[0.9] md:leading-[0.8] tracking-tighter drop-shadow-2xl">
             OU ENTRAS EM 2026, <br />
             <span className="text-black italic">OU VÊS OS OUTROS.</span>
           </h2>
           <div className="max-w-3xl mx-auto">
             <p className="text-xl md:text-4xl mb-10 md:mb-16 tracking-tight leading-none drop-shadow-md px-4">
               A oportunidade não bate duas vezes. Garante o teu futuro na GNR agora.
             </p>
             <div className="px-4">
              <a href={checkoutUrl} className="block w-full bg-black text-white py-8 md:py-12 rounded-[2.5rem] md:rounded-[4rem] text-lg md:text-2xl font-black shadow-2xl transform md:hover:-translate-y-5 transition-all border-4 border-white/10 active:scale-95">
                QUERO MINHA VAGA AGORA
              </a>
             </div>
             <div className="mt-12 md:mt-20 flex flex-col items-center gap-6 md:gap-8 px-4">
                <div className="bg-black/30 backdrop-blur-xl px-8 py-4 md:px-12 md:py-6 rounded-[1.5rem] md:rounded-[2rem] border border-white/20">
                  <div className="flex items-center gap-4 md:gap-6 text-xl md:text-2xl font-black">
                     <Timer className="size-[24px] md:size-[40px] text-yellow-400" /> BÓNUS DISPONÍVEIS: 08
                  </div>
                </div>
                <div className="h-4 md:h-6 w-full bg-black/20 rounded-full max-w-md overflow-hidden border border-white/10">
                   <motion.div initial={{ width: "0%" }} whileInView={{ width: "94%" }} className="h-full bg-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.5)]" transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }} />
                </div>
             </div>
           </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-24">
             <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 md:mb-6 tracking-tighter uppercase leading-none">Dúvidas? <br/> <span className="text-green-600">Resolvidas.</span></h2>
             <p className="text-slate-500 font-black uppercase tracking-widest text-[10px] md:text-xs">Informações Finais para a tua Decisão</p>
          </div>
          <div className="space-y-4 md:space-y-6">
            <FAQItem index={0} q="Como recebo o acesso ao Guia Digital?" a="O acesso é imediato. Recebes o Guia 360 em PDF no teu e-mail logo após a confirmação do pagamento (em segundos se for via Cartão/Paypal/MBWay)." />
            <FAQItem index={1} q="O material está atualizado para 2026?" a="Sim, este material foi especificamente preparado e totalmente revisto para as exigências do concurso de 2026." />
            <FAQItem index={2} q="Consigo ler no telemóvel?" a="Sim perfeitamente! O PDF é otimizado para ecrãs de smartphones, tablets e computadores. Podes estudar onde quiseres." />
            <FAQItem index={3} q="E se eu não ficar satisfeito?" a="Oferecemos 7 dias de garantia total e incondicional. Se achares que o guia não é para ti por qualquer motivo, devolvemos 100% do teu dinheiro." />
            <FAQItem index={4} q="Preciso de pagar mensalidades?" a="Não. O pagamento é único. Tens acesso vitalício ao material e a todas as atualizações que fizermos para este concurso." />
          </div>
        </div>
      </section>

      {/* Compact Footer */}
      <footer className="py-16 md:py-24 bg-black text-white text-center px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-14 text-3xl md:text-4xl font-black tracking-tighter text-white uppercase">GNR <span className="text-green-500">360</span></div>
          <p className="max-w-2xl mx-auto opacity-90 mb-10 md:mb-14 text-[10px] md:text-[12px] leading-relaxed font-black uppercase tracking-[0.15em] md:tracking-[0.2em] text-white">Isenção: Este guia é um material preparatório independente. Não possuímos vínculo oficial com a Guarda Nacional Republicana de Portugal ou o Ministério da Administração Interna.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 font-black uppercase tracking-[0.2em] mb-10 md:mb-14 text-white/80 text-[10px] md:text-xs">
             <a href="#" className="hover:text-green-500 transition-colors">Privacidade</a>
             <a href="#" className="hover:text-green-500 transition-colors">Termos de Uso</a>
             <a href="#" className="hover:text-green-500 transition-colors">Suporte</a>
          </div>
          <div className="text-[10px] md:text-[12px] font-black tracking-widest opacity-40 uppercase">&copy; 2026 GNR 360 - TODOS OS DIREITOS RESERVADOS.</div>
        </div>
      </footer>
    </div>
  );
}
