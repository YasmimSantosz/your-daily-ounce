import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Crown,
  Sparkles,
  WandSparkles,
  ShieldCheck,
  Upload,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: SalesPage,
});



function SalesPage() {
  const [step, setStep] = useState(0);
  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const [messages, setMessages] = useState([
    { from: "ai", text: "Oi! ✨ Vou te mostrar como sua foto pode ganhar uma nova versão com IA." },
    { from: "ai", text: "Primeiro, envie uma foto sua. Depois eu cuido da transformação." },
  ]);

  const handleUpload = (file?: File) => {
    if (!file) return;
    setFileName(file.name);
    setStep(1);
    setMessages((m) => [...m, { from: "user", text: "Enviei minha foto 💗" }, { from: "ai", text: "Perfeito. Recebi sua foto! Agora vou preparar uma versão mais sofisticada e marcante." }]);
    setProgress(0);
    let value = 0;
    const timer = window.setInterval(() => {
      value += 10;
      setProgress(value);
      if (value >= 100) {
        window.clearInterval(timer);
        setStep(2);
        setMessages((m) => [...m, { from: "ai", text: "Prontinho! Sua prévia está logo abaixo. ✨" }]);
      }
    }, 180);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#130912] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-[-15%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[#ff4fa3]/20 blur-[150px]" />
        <div className="absolute right-[-15%] top-[15%] h-[600px] w-[600px] rounded-full bg-[#b516ff]/16 blur-[160px]" />
        <div className="absolute bottom-[-20%] left-[30%] h-[500px] w-[500px] rounded-full bg-[#ff9acb]/10 blur-[150px]" />
      </div>

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-5 py-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl border border-[#ff83bd]/30 bg-[#ff4fa3]/10">
            <Sparkles className="h-4 w-4 text-[#ff9bc9]" />
          </div>
          <span className="font-serif text-lg tracking-wide">Candy AI</span>
        </div>
        <a href="#simulador" className="rounded-full border border-[#ff74b7]/25 bg-[#ff4fa3]/5 px-5 py-2 text-sm text-white/75 transition hover:bg-[#ff4fa3]/10">Testar agora</a>
      </nav>

      <section className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-8 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ff73b6]/25 bg-[#ff4fa3]/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#ff9bca]">
            <WandSparkles className="h-3.5 w-3.5" /> Inteligência artificial
          </div>
          <h1 className="max-w-3xl font-serif text-5xl leading-[.96] tracking-[-.04em] sm:text-6xl lg:text-7xl">
            Transforme uma foto comum em uma versão
            <span className="bg-gradient-to-r from-[#ff9acb] via-[#ff4fa3] to-[#c36aff] bg-clip-text text-transparent"> mais marcante.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            Você envia sua foto e escolhe o estilo. A IA cria uma versão sofisticada, sensual e profissional, preservando a sua identidade.
          </p>
          <button onClick={() => document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" })} className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#ff4fa3] to-[#b84cff] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_60px_rgba(255,79,163,.3)] transition hover:-translate-y-0.5">
            Experimentar gratuitamente <ArrowRight className="h-4 w-4" />
          </button>
          <div className="mt-7 flex flex-wrap gap-5 text-xs text-white/40">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#ff82bc]" /> Privacidade</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#d174ff]" /> Resultado personalizado</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[480px]">
          <div className="absolute -inset-10 rounded-full bg-[#ff4fa3]/20 blur-[80px]" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-[#4b1737] via-[#1d1020] to-[#0d090d] shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(255,151,201,.4),transparent_27%),radial-gradient(circle_at_20%_80%,rgba(172,67,255,.25),transparent_35%)]" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[.2em] text-[#ff91c4]">Candy AI</p>
              <p className="mt-2 font-serif text-2xl">Sua nova versão começa aqui.</p>
              <p className="mt-2 text-xs text-white/40">Envie uma foto para experimentar.</p>
            </div>
            <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2">
              <div className="grid h-28 w-28 place-items-center rounded-full border border-[#ff8ac1]/30 bg-white/5 backdrop-blur-xl shadow-[0_0_70px_rgba(255,79,163,.25)]">
                <Sparkles className="h-10 w-10 text-[#ff9dca]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="simulador" className="relative z-10 border-y border-white/10 bg-[#0d080d]/80 px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs uppercase tracking-[.25em] text-[#ff83bd]">Experimente a tecnologia</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Converse com a IA</h2>
            <p className="mt-4 text-white/45">É como uma conversa: você envia, a IA processa e mostra uma prévia.</p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl overflow-hidden rounded-[30px] border border-[#ff65ad]/15 bg-[#171017]/90 shadow-[0_30px_100px_rgba(255,53,151,.08)]">
            <div className="flex items-center gap-3 border-b border-white/8 px-5 py-4">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#ff5ba9] to-[#8f3cff]"><Sparkles className="h-4 w-4" /></div>
              <div><p className="text-sm font-semibold">Candy AI</p><p className="text-[11px] text-[#ff86bb]">● online agora</p></div>
            </div>

            <div className="min-h-[430px] space-y-3 p-5 sm:p-7">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${msg.from === "user" ? "rounded-br-md bg-gradient-to-r from-[#d83e88] to-[#9e45df] text-white" : "rounded-bl-md border border-white/8 bg-white/[.045] text-white/70"}`}>{msg.text}</div>
                </div>
              ))}

              {step === 0 && (
                <label className="mt-5 block cursor-pointer rounded-2xl border border-dashed border-[#ff65ad]/30 bg-[#ff4fa3]/[.035] p-7 text-center transition hover:border-[#ff65ad]/60 hover:bg-[#ff4fa3]/[.06]">
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleUpload(e.target.files?.[0])} />
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#ff4fa3]/10 text-[#ff88be]"><Upload className="h-6 w-6" /></div>
                  <p className="mt-4 text-sm font-semibold">Enviar minha foto</p>
                  <p className="mt-1 text-xs text-white/35">Clique para adicionar uma imagem</p>
                </label>
              )}

              {step === 1 && (
                <div className="rounded-2xl border border-[#ff65ad]/15 bg-white/[.025] p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 overflow-hidden rounded-xl bg-gradient-to-br from-[#ff4fa3]/30 to-[#8d43ff]/30"><img src={URL.createObjectURL(new Blob())} className="hidden" /></div>
                    <div className="min-w-0"><p className="text-sm font-medium">Processando sua foto...</p><p className="truncate text-xs text-white/35">{fileName}</p></div>
                  </div>
                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/8"><div className="h-full rounded-full bg-gradient-to-r from-[#ff4fa3] to-[#a84cff] transition-all duration-200" style={{ width: progress + "%" }} /></div>
                  <div className="mt-2 flex justify-between text-[11px] text-white/30"><span>IA trabalhando</span><span>{progress}%</span></div>
                </div>
              )}

              {step === 2 && (
                <div className="relative mx-auto mt-5 max-w-sm overflow-hidden rounded-3xl border border-[#ff65ad]/20 bg-[#080609]">
                  <div className="aspect-[4/5] bg-gradient-to-br from-[#6e284e] via-[#261321] to-[#0b080c] blur-[14px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,168,210,.4),transparent_25%),linear-gradient(135deg,rgba(255,79,163,.25),transparent_50%)]" />
                  </div>
                  <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-7 text-center">
                    <div className="grid h-14 w-14 place-items-center rounded-full border border-[#ff87bd]/40 bg-black/45 backdrop-blur-xl"><Sparkles className="h-6 w-6 text-[#ff91c4]" /></div>
                    <p className="mt-5 font-serif text-2xl">Sua prévia está pronta</p>
                    <p className="mt-2 text-xs leading-5 text-white/50">Desbloqueie a versão em alta definição para visualizar todos os detalhes.</p>
                    <button className="mt-5 rounded-full bg-gradient-to-r from-[#ff3e98] to-[#9e42e9] px-6 py-3 text-xs font-bold shadow-[0_8px_35px_rgba(255,62,152,.35)]">DESBLOQUEAR VERSÃO HD</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[.25em] text-[#ff83bd]">Veja a diferença</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Uma nova versão da sua foto.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/45">As prévias abaixo ficam propositalmente protegidas para mostrar apenas a atmosfera do resultado.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {["Retrato", "Espelho", "Lifestyle"].map((label, i) => (
            <div key={label} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#171017]">
              <div className="grid aspect-[4/5] place-items-center bg-gradient-to-br from-[#56233e] via-[#241323] to-[#0d090d]">
                <div className="h-52 w-36 rounded-[50%] bg-[#d7899f]/20 blur-[25px]" />
              </div>
              <div className="absolute inset-0 bg-black/35 backdrop-blur-[7px]" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
                <p className="text-xs text-white/35">ESTILO {i + 1}</p>
                <p className="mt-1 font-serif text-xl">{label}</p>
                <button onClick={() => document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" })} className="mt-4 w-full rounded-xl bg-gradient-to-r from-[#ff3e98] to-[#9e42e9] py-3 text-xs font-bold">DESBLOQUEAR VERSÃO HD</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 border-y border-white/10 bg-[#0d080d]/70 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center"><span className="text-xs uppercase tracking-[.25em] text-[#ff83bd]">Como funciona</span><h2 className="mt-4 font-serif text-4xl sm:text-5xl">Três passos. Uma nova foto.</h2></div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Upload", "Envie uma foto sua para servir como referência."],
              ["02", "IA processa", "Nossa experiência simula o processamento e a criação da nova versão."],
              ["03", "Você recebe", "Depois de desbloquear, você acessa a criação final."],
            ].map(([n, title, text]) => (
              <div key={n} className="rounded-3xl border border-white/8 bg-white/[.025] p-7">
                <span className="font-serif text-3xl text-[#ff72b5]">{n}</span>
                <h3 className="mt-8 font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/40">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-[#ff5ba9]/20 bg-gradient-to-br from-[#351526] to-[#160d16] p-8 text-center shadow-[0_30px_100px_rgba(255,62,152,.1)] sm:p-12">
          <Crown className="mx-auto h-7 w-7 text-[#ff8fc3]" />
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl">Sua foto, do seu jeito.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/45">Faça sua simulação e descubra uma experiência criada para valorizar seu estilo.</p>
          <button onClick={() => document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" })} className="mt-8 rounded-full bg-gradient-to-r from-[#ff4fa3] to-[#a846ee] px-8 py-4 text-sm font-bold shadow-[0_10px_50px_rgba(255,79,163,.3)]">CRIAR MINHA PRÉVIA</button>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-xs text-white/25">
        <div className="flex justify-center gap-6"><a href="#" className="hover:text-white/50">Termos de uso</a><a href="#" className="hover:text-white/50">Privacidade</a></div>
        <p className="mt-4">© 2026 Candy AI · Experiência de criação de imagens com inteligência artificial.</p>
      </footer>
    </main>
  );
}
