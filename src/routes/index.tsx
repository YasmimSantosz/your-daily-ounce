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

const poses = [
  { id: "espelho", label: "Espelho", emoji: "🪞", description: "Foto espontânea no espelho" },
  { id: "sentada", label: "Sentada", emoji: "🖤", description: "Pose elegante e marcante" },
  { id: "perfil", label: "Perfil", emoji: "✨", description: "Ângulo lateral sofisticado" },
];

const outfits = [
  { id: "preto", label: "Preto elegante", emoji: "🖤" },
  { id: "vermelho", label: "Vermelho", emoji: "❤️" },
  { id: "dourado", label: "Dourado", emoji: "✨" },
];

function SalesPage() {
  const [pose, setPose] = useState("espelho");
  const [outfit, setOutfit] = useState("preto");
  const [uploaded, setUploaded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const preview = useMemo(() => {
    const poseText = poses.find((p) => p.id === pose)?.label;
    const outfitText = outfits.find((o) => o.id === outfit)?.label;
    return { poseText, outfitText };
  }, [pose, outfit]);

  const scrollToSimulator = () =>
    document.getElementById("simulador")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen overflow-hidden bg-[#080608] text-white selection:bg-[#d88b9f]/40">
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-[-15%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#b94c75]/20 blur-[140px]" />
        <div className="absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full bg-[#d7a85d]/12 blur-[150px]" />
      </div>

      <section className="relative z-10 border-b border-white/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl border border-[#e3b06a]/30 bg-white/5">
              <Sparkles className="h-4 w-4 text-[#e4b56f]" />
            </div>
            <span className="font-serif text-lg tracking-wide">Seu Estilo AI</span>
          </div>
          <button onClick={scrollToSimulator} className="hidden rounded-full border border-white/15 px-5 py-2 text-sm text-white/80 transition hover:border-[#dca66c]/50 hover:bg-white/5 sm:block">
            Ver como funciona
          </button>
        </nav>

        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-10 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pb-28 lg:pt-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dba66b]/25 bg-[#dba66b]/8 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#e9bd82]">
              <Sparkles className="h-3.5 w-3.5" />
              Crie sua versão mais marcante
            </div>
            <h1 className="max-w-2xl font-serif text-5xl leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
              Sua foto.
              <br />
              <span className="bg-gradient-to-r from-[#f1c4c9] via-[#d995a7] to-[#e4b66f] bg-clip-text text-transparent">
                Do seu jeito.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
              Escolha a pose, o estilo e o visual que combinam com você. A inteligência artificial transforma sua ideia em uma foto personalizada, com aparência natural e acabamento profissional.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={scrollToSimulator} className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c96f88] to-[#dca365] px-7 py-4 text-sm font-semibold text-[#160b0f] shadow-[0_15px_50px_rgba(207,117,139,.2)] transition hover:-translate-y-0.5">
                Testar a simulação
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <a href="#como-funciona" className="inline-flex items-center justify-center rounded-full border border-white/12 px-7 py-4 text-sm text-white/75 transition hover:bg-white/5">
                Entender primeiro
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/45">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#dca66c]" /> Privacidade e cuidado</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-[#dca66c]" /> Personalização por IA</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[510px]">
            <div className="absolute -inset-8 rounded-[45px] bg-[#c65e7f]/15 blur-3xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2b151e] via-[#151015] to-[#0c0b0c] shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(228,181,111,.25),transparent_25%),radial-gradient(circle_at_20%_80%,rgba(204,104,136,.3),transparent_35%)]" />
              <div className="absolute inset-x-7 bottom-7 rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur-xl">
                <div className="flex items-center justify-between text-xs text-white/45">
                  <span>Prévia do seu estilo</span>
                  <span className="text-[#dfae70]">IA</span>
                </div>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <p className="font-serif text-2xl">Sua próxima foto</p>
                    <p className="mt-1 text-xs text-white/45">{preview.poseText} · {preview.outfitText}</p>
                  </div>
                  <WandSparkles className="h-7 w-7 text-[#e3ae70]" />
                </div>
              </div>
              <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="mx-auto mb-4 grid h-24 w-24 place-items-center rounded-full border border-[#e4b16d]/30 bg-white/5 backdrop-blur">
                  <Sparkles className="h-9 w-9 text-[#e6b473]" />
                </div>
                <p className="font-serif text-3xl text-white/90">Imagine.</p>
                <p className="mt-1 text-sm text-white/40">A IA faz o resto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="relative z-10 mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#dca66c]">Simples assim</span>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Você escolhe. A IA cria.</h2>
          <p className="mt-5 text-white/55">Nada de ficar imaginando como vai ficar. Antes de comprar, você consegue visualizar exatamente a lógica do processo.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["01", "Envie sua referência", "Escolha uma foto sua para servir de referência e mantenha sua identidade visual."],
            ["02", "Monte seu estilo", "Selecione pose, roupa e estética para deixar o resultado com a sua cara."],
            ["03", "Receba sua criação", "A IA combina suas escolhas e gera a imagem personalizada para você."],
          ].map(([number, title, text]) => (
            <div key={number} className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition hover:-translate-y-1 hover:border-[#dca66c]/25">
              <span className="font-serif text-3xl text-[#dca66c]">{number}</span>
              <h3 className="mt-8 text-lg font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/45">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="simulador" className="relative z-10 border-y border-white/10 bg-[#0c090c]/90">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#dca66c]"><WandSparkles className="h-4 w-4" /> Simulação</span>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Monte uma prévia agora</h2>
            <p className="mt-4 text-white/50">Escolha as opções abaixo e veja como a experiência funciona antes de decidir.</p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-[.85fr_1.15fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
              <label className="mb-3 block text-sm font-medium">1. Sua foto de referência</label>
              <button onClick={() => setUploaded(!uploaded)} className="flex w-full items-center gap-4 rounded-2xl border border-dashed border-white/15 bg-black/20 p-5 text-left transition hover:border-[#dca66c]/50">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#dca66c]/10 text-[#e2af70]">
                  {uploaded ? <Check className="h-5 w-5" /> : <Upload className="h-5 w-5" />}
                </div>
                <div>
                  <p className="text-sm font-medium">{uploaded ? "Foto adicionada" : "Clique para simular o envio"}</p>
                  <p className="mt-1 text-xs text-white/35">{uploaded ? "Pronta para personalizar" : "JPG ou PNG · sua imagem fica apenas como referência"}</p>
                </div>
              </button>

              <div className="mt-8">
                <label className="mb-3 block text-sm font-medium">2. Escolha a pose</label>
                <div className="grid gap-2">
                  {poses.map((item) => (
                    <button key={item.id} onClick={() => setPose(item.id)} className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition ${pose === item.id ? "border-[#dca66c]/60 bg-[#dca66c]/10" : "border-white/8 bg-black/15 hover:border-white/20"}`}>
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-lg">{item.emoji}</span>
                      <span className="flex-1"><span className="block text-sm font-medium">{item.label}</span><span className="block text-xs text-white/35">{item.description}</span></span>
                      {pose === item.id && <Check className="h-4 w-4 text-[#dfae70]" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <label className="mb-3 block text-sm font-medium">3. Escolha o estilo</label>
                <div className="grid grid-cols-3 gap-2">
                  {outfits.map((item) => (
                    <button key={item.id} onClick={() => setOutfit(item.id)} className={`rounded-2xl border px-3 py-4 text-center transition ${outfit === item.id ? "border-[#dca66c]/60 bg-[#dca66c]/10" : "border-white/8 bg-black/15 hover:border-white/20"}`}>
                      <span className="block text-lg">{item.emoji}</span>
                      <span className="mt-2 block text-xs text-white/70">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#2a151d] via-[#171016] to-[#0b0a0c] p-6 sm:p-8">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#dca66c]/10 blur-3xl" />
              <div className="relative flex h-full min-h-[520px] flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/35">Sua simulação</p>
                    <p className="mt-2 font-serif text-2xl">Resultado personalizado</p>
                  </div>
                  <div className="rounded-full border border-[#dca66c]/25 bg-[#dca66c]/10 px-3 py-1 text-xs text-[#e2b274]">IA Preview</div>
                </div>

                <div className="mx-auto flex w-full max-w-[330px] flex-1 items-center justify-center py-8">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_50%_25%,rgba(220,166,108,.24),transparent_28%),linear-gradient(145deg,#4a2330,#191017_55%,#0d0b0e)] shadow-[0_30px_100px_rgba(0,0,0,.5)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_75%,rgba(205,102,137,.22),transparent_35%)]" />
                    <div className="absolute left-1/2 top-[35%] h-32 w-24 -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-[#b47d75]/50 to-[#5d3842]/20 blur-[1px]" />
                    <div className="absolute left-1/2 top-[29%] h-20 w-20 -translate-x-1/2 rounded-full bg-[#c9958b]/35 blur-[1px]" />
                    <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/35 p-4 backdrop-blur-xl">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/40">{uploaded ? "Referência adicionada" : "Modo demonstração"}</span>
                        <span className="text-[#e1b171]">● {preview.poseText}</span>
                      </div>
                      <p className="mt-2 text-sm text-white/75">{preview.outfitText}</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/8 bg-black/20 p-4 text-center backdrop-blur">
                  <p className="text-xs text-white/35">Na versão completa, você recebe a criação final personalizada.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dca66c]/20 bg-[#dca66c]/8 px-4 py-2 text-xs text-[#e1b171]"><Crown className="h-3.5 w-3.5" /> Para quem quer algo diferente</div>
            <h2 className="font-serif text-4xl leading-tight sm:text-5xl">Você não precisa esperar a foto perfeita acontecer.</h2>
            <p className="mt-5 max-w-lg leading-7 text-white/50">Você define a ideia. Escolhe o clima. Decide os detalhes. E deixa a tecnologia transformar isso em uma imagem que combina com você.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Escolha sua pose", "Defina seu look", "Personalize a estética", "Resultado feito para você", "Processo simples", "Experiência digital"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-4 text-sm text-white/70">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#dca66c]/10"><Check className="h-3.5 w-3.5 text-[#e1b171]" /></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-[#dca66c]/20 bg-gradient-to-br from-[#321721] to-[#151014] p-8 text-center shadow-[0_30px_100px_rgba(177,74,106,.12)] sm:p-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e1b171]">Pronta para criar?</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Comece pela sua ideia.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/45">Faça a simulação, escolha seus detalhes e descubra como sua próxima foto pode ficar.</p>
          <button onClick={scrollToSimulator} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d2839a] to-[#dfad68] px-8 py-4 text-sm font-semibold text-[#170c10] transition hover:-translate-y-0.5">
            Criar minha prévia <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#dca66c]">Dúvidas</span>
            <h2 className="mt-3 font-serif text-4xl">Perguntas frequentes</h2>
          </div>
          <div className="mt-10 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02] px-6">
            {[
              ["Preciso saber editar fotos?", "Não. Você só escolhe suas preferências. A criação é feita com inteligência artificial."],
              ["Posso escolher a pose e a roupa?", "Sim. A experiência foi pensada justamente para você controlar os principais elementos da criação."],
              ["A simulação já gera minha foto final?", "A simulação serve para você entender o processo e visualizar a experiência. A criação final é feita na etapa do pedido."],
              ["Minha foto é usada como referência?", "Sim, quando você envia uma imagem para a criação. Use apenas imagens suas ou que você tenha autorização para utilizar."],
            ].map(([q, a], index) => (
              <div key={q}>
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left text-sm font-medium">
                  {q}
                  <ChevronDown className={`h-4 w-4 shrink-0 text-white/40 transition ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                {openFaq === index && <p className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-white/45">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-xs text-white/25">
        <p>© 2026 Seu Estilo AI · Experiência de criação de imagens com inteligência artificial.</p>
      </footer>
    </main>
  );
}
