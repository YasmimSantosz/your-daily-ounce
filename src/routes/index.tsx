import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Crown, Sparkles, Upload, WandSparkles } from "lucide-react";
import modelExampleAsset from "@/assets/modelo-exemplo.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crie sua foto com inteligência artificial" },
      { name: "description", content: "Veja a demonstração e depois crie sua própria foto com inteligência artificial." },
      { property: "og:title", content: "Crie sua foto do seu jeito" },
      { property: "og:description", content: "Veja a demonstração e depois crie sua própria foto." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SalesPage,
});

type Msg = { from: "ai" | "user"; text: string; image?: string };
const sampleUpload = modelExampleAsset.url;
const sampleStudio = "/modelo-estudio.jpg";

function SalesPage() {
  const [demoStep, setDemoStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(true);
  const [introReady, setIntroReady] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [pose, setPose] = useState("Estúdio de foto");
  const [look, setLook] = useState("Body preto");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timers = [
      window.setTimeout(() => {
        setMessages([{ from: "ai", text: "Oi! Tudo bem? Vou te mostrar como funciona rapidinho." }]);
        setTyping(true);
      }, 900),
      window.setTimeout(() => {
        setTyping(false);
        setMessages(m => [...m, { from: "ai", text: "Você envia uma foto e a gente transforma a ideia em uma foto de estúdio." }]);
        setTyping(true);
      }, 2200),
      window.setTimeout(() => {
        setTyping(false);
        setMessages(m => [...m, { from: "ai", text: "Olha só esse exemplo para você entender. 👇" }]);
        setIntroReady(true);
      }, 3550),
    ];
    return () => timers.forEach(timer => window.clearTimeout(timer));
  }, []);

  useEffect(() => {
    if (!file) return setPreview("");
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);


  const creator = () => document.getElementById("criador")?.scrollIntoView({ behavior: "smooth" });

  const runDemo = () => {
    if (demoStep !== 0) return;
    setDemoStep(1);
    setTyping(true);
    setMessages(m => [...m, { from: "user", text: "Enviei a foto de exemplo.", image: sampleUpload }]);
    window.setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, { from: "ai", text: "Recebi! Agora estou preparando sua foto estúdio..." }]);
    }, 850);
    let n = 8;
    setProgress(n);
    const timer = window.setInterval(() => {
      n += 8;
      setProgress(Math.min(n, 100));
      if (n >= 100) {
        window.clearInterval(timer);
        setDemoStep(2);
        setMessages(m => [...m, { from: "ai", text: "Pronto. Veja a transformação da referência." }]);
      }
    }, 130);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#130912] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#ff4fa3]/20 blur-[150px]" />
        <div className="absolute -right-32 top-40 h-[500px] w-[500px] rounded-full bg-[#b516ff]/15 blur-[160px]" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-5 py-6">
        <div className="flex items-center gap-2"><span className="grid h-9 w-9 place-items-center rounded-xl border border-[#ff83bd]/30 bg-[#ff4fa3]/10"><Sparkles className="h-4 w-4 text-[#ff9bc9]" /></span><b>Crie sua foto</b></div>
        <button onClick={creator} className="rounded-full border border-[#ff74b7]/25 px-5 py-2 text-sm text-white/70">Criar minha foto</button>
      </nav>

      <section className="relative z-10 mx-auto max-w-5xl px-5 pb-10 pt-5 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ff73b6]/25 bg-[#ff4fa3]/10 px-4 py-2 text-xs uppercase tracking-[.2em] text-[#ff9bca]"><WandSparkles className="h-3.5 w-3.5" /> Simulação com IA</div>
        <h1 className="text-5xl font-semibold leading-none tracking-[-.04em] sm:text-6xl">Veja primeiro. <span className="bg-gradient-to-r from-[#ff9acb] via-[#ff4fa3] to-[#c36aff] bg-clip-text text-transparent">Crie depois.</span></h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">Veja a conversa acontecendo, acompanhe a transformação de uma modelo e depois crie a sua própria foto.</p>
      </section>

      <section id="simulador" className="relative z-10 px-5 pb-24 pt-4">
          <div className="mx-auto max-w-[410px]">
          <div className="mb-5 text-center"><span className="text-xs uppercase tracking-[.25em] text-[#ff83bd]">1 · Teste no chat</span><h2 className="mt-3 text-3xl font-semibold">Veja como funciona</h2></div>
          <div className="flex h-[calc(100svh-190px)] min-h-[520px] max-h-[680px] flex-col overflow-hidden rounded-[38px] border-[6px] border-[#2b2029] bg-[#171017]/95 shadow-[0_30px_100px_rgba(255,53,151,.1)] ring-1 ring-[#ff65ad]/20 sm:h-[min(680px,calc(100svh-32px))] sm:min-h-[560px]">
            <div className="mx-auto mt-2 h-5 w-24 shrink-0 rounded-full bg-black/70" aria-hidden="true" />
            <div className="flex shrink-0 items-center gap-3 border-b border-[#d8d2d0] bg-[#f7f5f4] px-5 py-3"><div className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-[#f4c7d9]"><span className="text-sm font-bold text-[#8d3c64]">FS</span></div><div><p className="text-sm font-semibold text-[#252025]">Fotos Studio</p><p className="text-[11px] text-[#21a05a]">● online agora</p></div></div>
            <div className="min-h-0 flex-1 space-y-2 overflow-hidden bg-[#eee9e7] bg-[radial-gradient(circle_at_center,rgba(105,74,91,.08)_1px,transparent_1px)] bg-[length:18px_18px] p-3 sm:p-4">
              {messages.map((m,i)=><div key={i} className={`flex ${m.from==="user"?"justify-end":"justify-start"}`}><div className="max-w-[86%]">{m.image&&<img src={m.image} alt="Foto enviada" className="mb-2 h-52 w-40 rounded-2xl border border-white/10 object-cover object-top" />}<div className={`rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${m.from==="user"?"rounded-br-md bg-[#d9fdd3] text-[#303030]":"rounded-bl-md bg-white text-[#533e49]"}`}>{m.text}</div></div></div>)}

              {typing&&<div className="flex justify-start"><div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-white px-4 py-4 shadow-sm" aria-label="Digitando"><span className="h-2 w-2 animate-bounce rounded-full bg-[#987d8b] [animation-delay:-.3s]"/><span className="h-2 w-2 animate-bounce rounded-full bg-[#987d8b] [animation-delay:-.15s]"/><span className="h-2 w-2 animate-bounce rounded-full bg-[#987d8b]"/></div></div>}

              {demoStep===0&&introReady&&<div className="pointer-events-auto ml-auto max-w-[78%] rounded-2xl rounded-br-md bg-[#d9fdd3] p-2 shadow-sm">
                <img src={sampleUpload} alt="Modelo de exemplo" className="max-h-[300px] w-full rounded-xl object-contain" />
                <p className="px-2 pb-1 pt-2 text-sm font-medium text-[#303030]">Essa é a foto de exemplo.</p>
                <button onClick={runDemo} className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25d366] px-4 py-3 text-xs font-bold text-white"><Upload className="h-4 w-4" /> Enviar foto de exemplo</button>
              </div>}

              {demoStep===1&&<div className="rounded-2xl border border-[#dca7c0] bg-white p-5 text-[#533e49] shadow-sm">
                <div className="flex items-center gap-3"><img src={sampleUpload} alt="" className="h-14 w-14 rounded-xl object-cover object-top" /><div><p className="text-sm font-medium">Foto recebida</p><p className="text-xs text-white/35">Preparando foto estúdio...</p></div></div>
                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/8"><div className="h-full rounded-full bg-gradient-to-r from-[#ff4fa3] to-[#a84cff] transition-all" style={{width:`${progress}%`}}/></div>
                <div className="mt-2 flex justify-between text-[11px] text-[#8d7581]"><span>Foto estúdio · IA trabalhando</span><span>{progress}%</span></div>
              </div>}

              {demoStep===2&&<div className="pointer-events-auto overflow-hidden rounded-2xl rounded-bl-md border border-[#dca7c0] bg-white p-2 text-[#533e49] shadow-sm"><div className="flex max-h-[360px] justify-center overflow-hidden rounded-xl bg-[#e5dce1]"><img src={sampleStudio} alt="Foto estúdio criada na demonstração" className="h-auto max-h-[360px] w-auto max-w-full object-contain" /></div><div className="px-2 pb-2 pt-3"><p className="text-sm font-semibold">Foto estúdio pronta ✨</p><p className="mt-1 text-xs leading-5 text-[#8d7581]">Agora você pode criar a sua própria versão.</p><button onClick={creator} className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff3e98] to-[#9e42e9] px-5 py-3 text-xs font-bold text-white">Criar minha foto <ArrowRight className="h-4 w-4"/></button></div></div>}
            </div>
          </div>
        </div>
      </section>

      <section id="criador" className="relative z-10 border-y border-white/10 bg-[#0d080d]/80 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center"><span className="text-xs uppercase tracking-[.25em] text-[#ff83bd]">2 · Agora é a sua vez</span><h2 className="mt-4 text-4xl font-semibold">Crie sua própria foto</h2><p className="mt-4 text-white/45">Envie sua foto e monte a proposta do seu jeito.</p></div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <label className="cursor-pointer rounded-[28px] border border-dashed border-[#ff65ad]/30 bg-[#171017] p-4">
              <input type="file" accept="image/*" className="hidden" onChange={e=>setFile(e.target.files?.[0]||null)}/>
              <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#4d1938] via-[#1f1020] to-[#0d090d]">{preview?<><img src={preview} alt="Sua foto" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute bottom-4 rounded-full bg-black/55 px-4 py-2 text-xs">Trocar foto</div></>:<div className="text-center"><div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#ff4fa3]/10 text-[#ff88be]"><Upload className="h-7 w-7"/></div><p className="mt-4 font-semibold">Enviar minha foto</p><p className="mt-2 text-xs text-white/35">JPG, PNG ou WEBP</p></div>}</div>
            </label>
            <div className="rounded-[28px] border border-white/8 bg-[#171017] p-6 sm:p-8">
              <div className="mb-7 rounded-2xl border border-[#ff65ad]/35 bg-[#ff4fa3]/10 px-4 py-4 text-center"><p className="text-base font-semibold text-[#ffc0dd]">Clique como você quer as fotos</p><p className="mt-1 text-xs text-white/45">Escolha uma pose e um visual</p></div>
              <Option title="Pose" values={["Estúdio de foto","Espelho","Sentada","Deitada"]} value={pose} setValue={setPose}/>
              <div className="mt-7"><Option title="Visual" values={["Biquíni","Manter roupa","Body preto","Lingerie"]} value={look} setValue={setLook}/></div>
              <div className="mt-7 rounded-2xl border border-white/8 bg-black/20 p-4"><p className="text-xs text-white/35">Sua criação</p><p className="mt-1 text-sm text-white/70">{pose} · {look}</p></div>
              <button disabled={!file} onClick={()=>setStarted(true)} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff4fa3] to-[#a846ee] px-6 py-4 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-35">{started?"Criação iniciada...":"CRIAR MINHA FOTO"} <ArrowRight className="h-4 w-4"/></button>
              {started&&<p className="mt-3 text-center text-xs text-[#ff9acb]">Sua configuração está pronta para conectar à geração de IA.</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-5 py-20"><div className="grid gap-4 md:grid-cols-3">{[["01","Veja a demonstração"],["02","Envie sua foto"],["03","Crie sua versão"]].map(([n,t])=><div key={n} className="rounded-3xl border border-white/8 bg-white/[.025] p-7"><span className="text-3xl font-semibold text-[#ff72b5]">{n}</span><h3 className="mt-8 font-semibold">{t}</h3><p className="mt-3 text-sm leading-6 text-white/40">Um fluxo simples, visual e feito para você entender a experiência antes de criar.</p></div>)}</div></section>
      <section className="px-5 py-16"><div className="mx-auto max-w-4xl rounded-[32px] border border-[#ff5ba9]/20 bg-gradient-to-br from-[#351526] to-[#160d16] p-10 text-center"><Crown className="mx-auto h-7 w-7 text-[#ff8fc3]"/><h2 className="mt-5 text-4xl font-semibold">Sua foto, do seu jeito.</h2><button onClick={creator} className="mt-7 rounded-full bg-gradient-to-r from-[#ff4fa3] to-[#a846ee] px-8 py-4 text-sm font-bold">CRIAR MINHA FOTO</button></div></section>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-xs text-white/25"><div className="flex justify-center gap-6"><a href="#">Termos de uso</a><a href="#">Privacidade</a></div><p className="mt-4">© 2026 · Experiência de criação de imagens com inteligência artificial.</p></footer>
    </main>
  );
}

function Option({title,values,value,setValue}:{title:string;values:string[];value:string;setValue:(v:string)=>void}) {
  return <div><p className="text-sm font-bold uppercase tracking-[.12em] text-[#ff9bc9]">{title}</p><div className="mt-3 grid grid-cols-2 gap-3">{values.map(v=><button key={v} onClick={()=>setValue(v)} className={`flex min-h-14 items-center rounded-xl border-2 px-4 py-3 text-left text-sm font-semibold transition ${value===v?"border-[#ff5ba9] bg-[#ff4fa3]/20 text-white shadow-[0_0_24px_rgba(255,79,163,.16)]":"border-white/15 bg-white/[.045] text-white/70 hover:border-[#ff5ba9]/55 hover:bg-[#ff4fa3]/10"}`}>{value===v&&<Check className="mr-2 h-4 w-4 shrink-0 text-[#ff8fc3]"/>}{v}</button>)}</div></div>;
}