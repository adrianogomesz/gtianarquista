'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, Crosshair, Gem, Menu, Shield, Swords, Sparkles, X, Zap } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'A guild', href: '#a-guilda' },
  { label: 'Conteúdos', href: '#conteudos' },
  { label: 'Recrutamento', href: '#recrutamento' },
]

const contentNodes = [
  { icon: Swords, label: 'Guerra de Facções', detail: 'PVP Small Scale no Assalto de Bandidos pela Facção de Thetford.' },
  { icon: Crosshair, label: 'PvP', detail: 'Ganks, lutas Small Scale organizadas, bombsquads e briga de bar.' },
  { icon: Gem, label: 'Fame Farm', detail: 'Ancient Lands, The Depths, Dungeons Fixas e outros conteúdos para farmar fama.' },
  { icon: Sparkles, label: 'Avalon', detail: 'Baús Avalon, coleta de recursos, ganks e PVP Small Scale.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0b0a0f] text-[#f5f1e8] selection:bg-[#a855f7] selection:text-white">
      
      {/* 
        Efeitos de Tempestade Ajustados
        (Intervalo um pouco maior para não cansar a vista, mas mantendo a intensidade) 
      */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes flashA {
          0%, 82%, 88%, 94%, 100% { opacity: 0; }
          85%, 91%, 97% { opacity: 1; filter: drop-shadow(0 0 25px #e9d5ff); }
        }
        @keyframes flashB {
          0%, 85%, 91%, 97%, 100% { opacity: 0; }
          88%, 94% { opacity: 0.9; filter: drop-shadow(0 0 15px #d8a7ff); }
        }
        @keyframes flashC {
          0%, 88%, 94%, 100% { opacity: 0; }
          91%, 97% { opacity: 0.8; filter: drop-shadow(0 0 20px #c084fc); }
        }
        .bolt-1 { animation: flashA 3.8s infinite 0.2s; opacity: 0; }
        .bolt-2 { animation: flashB 4.5s infinite 1.5s; opacity: 0; }
        .bolt-3 { animation: flashC 5.2s infinite 0.8s; opacity: 0; }
        .bolt-4 { animation: flashA 6.0s infinite 2.5s; opacity: 0; }
      `}} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="GTI Anarquista - início">
            <span className="grid size-10 place-items-center border border-[#b96cff]/50 bg-[#251432] shadow-[0_0_25px_rgba(168,85,247,.18)]">
              <Image src="/thetford-emblem.png" alt="Símbolo de Thetford" width={40} height={40} className="size-8 object-cover" priority />
            </span>
            <span className="font-mono text-sm font-bold tracking-[0.2em]">GTI<span className="text-[#b96cff]">.</span>ANARQUISTA</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
            {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">{item.label}</a>)}
          </nav>
          <a href="#recrutamento" className="group relative hidden items-center gap-2 overflow-hidden border border-[#d8a7ff] bg-[#9b4de8] px-5 py-3 text-xs font-bold uppercase tracking-widest text-white shadow-[0_0_22px_rgba(168,85,247,.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#b46aff] hover:shadow-[0_0_38px_rgba(216,167,255,.7)] sm:flex">Entrar para a guilda <ArrowRight /></a>
          <button className="p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-1 border-t border-white/10 bg-[#0b0a0f] p-5 md:hidden">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="py-3 text-sm text-white/70">{item.label}</a>)}</nav>}
      </header>

      <section id="inicio" className="relative min-h-screen overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('/guild-hero.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_52%,rgba(116,55,164,.28),transparent_34%),linear-gradient(90deg,#0b0a0f_8%,rgba(11,10,15,.82)_42%,rgba(11,10,15,.28)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a0f] via-transparent to-[#0b0a0f]/30" />
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(216,167,255,.5)_1px,transparent_1px),radial-gradient(circle_at_80%_70%,rgba(168,85,247,.4)_1px,transparent_1px)] [background-size:46px_46px,72px_72px] animate-[drift_18s_linear_infinite]" />

        {/* --- INÍCIO DOS EFEITOS DE RAIOS --- */}
        
        {/* Clarões gerais de fundo no céu */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-[#d8a7ff]/20 mix-blend-color-dodge bolt-1" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-[#b96cff]/15 mix-blend-color-dodge bolt-2" />
        
        {/* Raio 1 (Principal - Direita do guerreiro) */}
        <div className="pointer-events-none absolute right-[2%] top-[-5%] z-10 h-[85%] w-24 bolt-1 sm:right-[8%] sm:w-36">
          <svg viewBox="0 0 100 500" fill="none" preserveAspectRatio="none" className="h-full w-full">
            <path d="M50 0 L30 100 L45 120 L20 250 L40 270 L10 400 L50 500 L40 400 L65 260 L45 240 L70 110 Z" fill="#ffffff" />
          </svg>
        </div>

        {/* Raio 2 (Esquerda do guerreiro) */}
        <div className="pointer-events-none absolute right-[15%] top-[5%] z-10 h-[65%] w-16 bolt-2 sm:right-[25%] sm:w-24">
          <svg viewBox="0 0 100 400" fill="none" preserveAspectRatio="none" className="h-full w-full">
            <path d="M60 0 L40 80 L55 90 L30 200 L45 210 L20 350 L50 400 L35 340 L55 200 L40 190 L65 80 Z" fill="#f3e8ff" />
          </svg>
        </div>

        {/* Raio 3 (Mais ao fundo/esquerda) */}
        <div className="pointer-events-none absolute right-[28%] top-[-10%] z-10 h-[55%] w-12 bolt-3 sm:right-[38%] sm:w-16">
          <svg viewBox="0 0 100 300" fill="none" preserveAspectRatio="none" className="h-full w-full">
            <path d="M40 0 L20 60 L35 70 L10 150 L25 160 L0 250 L30 300 L20 240 L40 150 L25 140 L50 60 Z" fill="#e9d5ff" />
          </svg>
        </div>

        {/* Raio 4 (Atrás da bandeira) */}
        <div className="pointer-events-none absolute right-[10%] top-[-2%] z-0 h-[75%] w-20 opacity-60 bolt-4 sm:right-[15%] sm:w-28">
          <svg viewBox="0 0 100 450" fill="none" preserveAspectRatio="none" className="h-full w-full">
            <path d="M70 0 L40 90 L60 100 L30 220 L50 230 L10 380 L60 450 L40 370 L70 210 L45 190 L80 90 Z" fill="#ffffff" />
          </svg>
        </div>
        
        {/* --- FIM DOS EFEITOS DE RAIOS --- */}

        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center px-5 py-20 lg:px-8">
          <div className="relative z-30 max-w-2xl lg:-mt-24">
            <p className="mb-6 flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#d8a7ff]"><span className="h-px w-10 bg-[#b96cff]" /> Thetford • Albion Online</p>
            <h1 className="font-serif text-6xl font-black leading-[.92] tracking-tight sm:text-8xl">NÃO SE<br /><span className="text-[#b96cff]">CURVE.</span></h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">Somos a <strong className="text-white">GTI Anarquista</strong>: uma guild independente de Thetford em crescimento. Prezamos pela estratégia, responsabilidade e diversão. Sem taxas e obrigações, você só será cobrado de participar!</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#recrutamento" className="group inline-flex items-center justify-center gap-3 bg-[#f5f1e8] px-7 py-4 text-sm font-black uppercase tracking-widest text-[#0b0a0f] shadow-[0_0_25px_rgba(216,167,255,.25)] transition duration-300 hover:-translate-y-1 hover:bg-[#d8a7ff] hover:shadow-[0_0_42px_rgba(216,167,255,.75)]">Quero fazer parte <ArrowRight /></a><a href="#conteudos" className="inline-flex items-center justify-center gap-3 border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_18px_rgba(168,85,247,.12)] transition duration-300 hover:-translate-y-1 hover:border-[#d8a7ff] hover:bg-[#b96cff]/10 hover:shadow-[0_0_30px_rgba(168,85,247,.45)]">Explore conteúdos <ChevronDown /></a></div>
          </div>
        </div>
      </section>

      <section id="conteudos" className="relative overflow-hidden border-y border-white/10 bg-[#0f0d14] py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          
          <div className="max-w-xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[.3em] text-[#b96cff]">Conteúdos da guild</p>
            <h2 className="font-serif text-5xl font-black leading-none sm:text-7xl">JOGUE.<br /><span className="text-white/35">EVOLUA.</span></h2>
            <p className="mt-6 text-lg leading-relaxed text-white/55">Passe o cursor pelos núcleos da GTI e descubra onde sua próxima aventura começa.</p>
          </div>
          
          <div className="relative flex min-h-[34rem] w-full items-center justify-center">
            <div className="absolute left-1/2 top-1/2 size-[19rem] -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite] sm:size-[27rem]">
              
              <div className="absolute inset-0 rounded-full border border-[#b96cff]/20" />
              <div className="absolute left-1/2 top-1/2 size-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:size-[19rem]" />

              {contentNodes.map(({ icon: Icon, label, detail }, index) => {
                const posClasses = [
                  'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
                  'top-1/2 right-0 translate-x-1/2 -translate-y-1/2',
                  'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
                  'top-1/2 left-0 -translate-x-1/2 -translate-y-1/2'
                ];

                return (
                  <div key={label} className={`absolute z-20 ${posClasses[index]}`}>
                    <div 
                      className="group relative flex w-32 flex-col items-center justify-center"
                      style={{ animation: 'spin 40s linear infinite reverse' }}
                    >
                      
                      <span className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[.2em] text-[#d8a7ff]">
                        {label}
                      </span>

                      <button type="button" aria-label={`Ver conteúdo ${label}`} className="relative grid size-16 place-items-center rounded-full border border-[#b96cff]/50 bg-[#17121d] text-[#d8a7ff] shadow-[0_0_28px_rgba(168,85,247,.15)] transition duration-500 group-hover:scale-110 group-hover:shadow-[0_0_42px_rgba(168,85,247,.3)] lg:size-20">
                        <Icon className="size-6 lg:size-7" />
                      </button>

                      <div className="pointer-events-none absolute left-1/2 top-[calc(100%+0.5rem)] w-52 -translate-x-1/2 rounded-lg border border-[#b96cff]/30 bg-[#17121d]/95 px-4 py-3 text-center text-xs font-semibold text-[#d8a7ff] shadow-2xl opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
                        <p className="font-mono font-bold tracking-widest">{label}</p>
                        <p className="mt-2 text-[11px] font-normal leading-relaxed text-white/60">{detail}</p>
                      </div>

                    </div>
                  </div>
                )
              })}
            </div>

            <div className="relative z-30 grid size-32 place-items-center rounded-full border border-[#d8a7ff]/50 bg-[#21152b]/90 text-center shadow-[0_0_55px_rgba(168,85,247,.28)] animate-[corePulse_4s_ease-in-out_infinite] lg:size-40">
              <div>
                <Image src="/thetford-emblem.png" alt="Símbolo de Thetford" width={96} height={96} className="mx-auto mb-2 size-14 rounded-full object-cover shadow-[0_0_24px_rgba(216,167,255,.55)]" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-white/80">GTI<br />Anarquista</span>
              </div>
            </div>

          </div>
          
        </div>
      </section>

      <section id="a-guilda" className="border-y border-white/10 bg-[#111016] py-24 lg:py-32"><div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[1fr_1.4fr] lg:px-8"><div><p className="mb-5 font-mono text-xs uppercase tracking-[.3em] text-[#b96cff]">Quem somos</p><h2 className="font-serif text-5xl font-black leading-none sm:text-7xl">CAOS COM<br /><span className="text-white/35">PROPÓSITO.</span></h2></div><div className="flex flex-col justify-end gap-7 text-lg leading-relaxed text-white/60"><p>Na GTI Anarquista, acreditamos que a melhor parte de Albion acontece quando a estratégia encontra a ousadia. Somos uma comunidade brasileira que valoriza presença, respeito e vontade de aprender.</p><p>Sem hierarquia engessada. Sem promessa vazia. Apenas jogadores construindo algo maior juntos — das estradas de Avalon aos campos de batalha.</p><div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-7"><div><strong className="block font-serif text-3xl text-white">24/7</strong><span className="text-xs uppercase tracking-widest">Comunidade ativa</span></div><div><strong className="block font-serif text-3xl text-white">BR</strong><span className="text-xs uppercase tracking-widest">Base brasileira</span></div><div><strong className="block font-serif text-3xl text-white">100%</strong><span className="text-xs uppercase tracking-widest">CLT-Friendly</span></div></div></div></div></section>

      <section id="recrutamento" className="relative overflow-hidden border-t border-white/10 bg-[#21152b] py-24 lg:py-32"><div className="absolute -right-24 -top-32 size-96 rounded-full bg-[#a855f7]/20 blur-3xl" /><div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8"><p className="mb-5 font-mono text-xs uppercase tracking-[.3em] text-[#d8a7ff]">Recrutamento aberto</p><h2 className="font-serif text-5xl font-black leading-none sm:text-8xl">SEU LUGAR<br />É AQUI.</h2><p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/60">Se você busca uma guild ativa, sem frescura e com vontade de crescer, a porta está aberta. Junte-se aos anarquistas de Thetford.</p><a href="https://discord.gg/HnBD5Ywh5K" target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-3 bg-[#f5f1e8] px-8 py-4 text-sm font-black uppercase tracking-widest text-[#0b0a0f] transition hover:bg-[#d8a7ff]">Falar no Discord <ArrowRight /></a></div></section>

      <footer className="border-t border-white/10 bg-[#0b0a0f] py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-5 text-center text-xs text-white/40 lg:px-8">
          <p>
            <strong>Aviso:</strong> Este é um site fictício pertencente a uma guild do jogo online Albion Online. Não possui afiliação oficial com a Sandbox Interactive ou os criadores do jogo.
          </p>
        </div>
      </footer>
    </main>
  )
}