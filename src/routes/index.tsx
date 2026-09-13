import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import {
  createConsultation,
  type ConsultationForm,
  type Recommendation,
} from "../lib/api";

const services = [
  ["01", "Voice Selection", "Find the right voice style and tone for your project."],
  ["02", "Script & Delivery", "Get recommendations for pacing, pronunciation and delivery."],
  ["03", "Recording Consultation", "Improve your recording setup and voiceover quality."],
];

const voiceStyles = ["Professional", "Friendly", "Energetic", "Calm", "Storytelling"];

const initialForm: ConsultationForm = {
  name: "",
  project_type: "Advertisement",
  script: "",
  voice_style: "Professional",
  language: "English",
  duration: "Under 1 minute",
  requirements: "",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VoxConsult — Professional Voiceover Consulting" },
      { name: "description", content: "Get practical guidance on voice selection, tone, delivery, and recording for your next project." },
      { property: "og:title", content: "VoxConsult — Professional Voiceover Consulting" },
      { property: "og:description", content: "Get practical guidance on voice selection, tone, delivery, and recording for your next project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [form, setForm] = useState<ConsultationForm>(initialForm);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [submittedProject, setSubmittedProject] = useState({ project_type: "Advertisement", language: "English" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  function updateField(field: keyof ConsultationForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setError(false);
    try {
      const result = await createConsultation(form);
      setRecommendation(result.recommendation);
      setSubmittedProject({ project_type: form.project_type, language: form.language });
    } catch {
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  function startAnother() {
    setRecommendation(null);
    setError(false);
    document.getElementById("consult")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-background font-sans text-ink antialiased">
      <header className="sticky top-0 z-10 border-b border-line bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight">VoxConsult<span className="text-accent">.</span></a>
          <nav className="hidden items-center gap-8 text-sm text-muted md:flex" aria-label="Main navigation">
            <a href="#top" className="transition-colors hover:text-ink">Home</a>
            <a href="#services" className="transition-colors hover:text-ink">Services</a>
            <a href="#how" className="transition-colors hover:text-ink">How It Works</a>
          </nav>
          <a href="#consult" className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-ink/80">Get Started</a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
          <div className="grid items-start gap-12 md:grid-cols-12">
            <div className="animate-rise md:col-span-5">
              <p className="font-mono text-xs tracking-[0.2em] text-accent">(A) CONSULTATION</p>
              <h1 className="mt-5 font-display text-[40px] leading-[1.05] tracking-tight md:text-[52px]">Professional voiceover consulting, simplified.</h1>
              <p className="mt-6 max-w-[42ch] text-lg text-muted">Guidance on voice selection, tone, delivery and recording for your next project — prepared carefully, and clearly.</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#consult" className="rounded-lg bg-accent px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent/90">Start a Consultation</a>
                <a href="#services" className="rounded-lg border border-line px-5 py-3 text-sm font-medium transition-colors hover:bg-surface">View Services</a>
              </div>
            </div>

            <div className="animate-rise-late md:col-span-7">
              <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-muted">CONSULTATION BRIEF</span>
                  <span className="font-mono text-[11px] text-accent">VOICEOVER · EN · 02:14</span>
                </div>
                <p className="mt-5 font-display text-2xl italic leading-snug">“Your opening line should sound like you already belong in the room.”</p>
                <div className="mt-6 flex h-10 items-end gap-1.5" aria-hidden="true">
                  {[3, 5, 8, 5, 10, 6, 4, 7, 5, 9, 4, 6, 3].map((height, index) => (
                    <span key={index} className={`w-1 rounded-full ${index % 3 === 0 ? "bg-accent/30" : index % 2 === 0 ? "bg-accent" : "bg-accent/50"}`} style={{ height: `${height * 10}%` }} />
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
                  {[["STYLE", "Professional"], ["TONE", "Confident"], ["PACING", "Moderate"], ["LENGTH", "1–3 min"]].map(([label, value]) => (
                    <div className="bg-surface p-3" key={label}><p className="font-mono text-[10px] tracking-[0.15em] text-muted">{label}</p><p className="mt-1 text-sm font-medium">{value}</p></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-3xl tracking-tight">Services</h2>
              <span className="font-mono text-right text-xs tracking-[0.2em] text-muted">(B) THREE FOCUS AREAS</span>
            </div>
            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
              {services.map(([number, title, description]) => (
                <div className="bg-surface p-6" key={number}><p className="font-mono text-xs text-accent">{number}</p><h3 className="mt-4 font-display text-xl font-medium">{title}</h3><p className="mt-2 text-sm text-muted">{description}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="border-t border-line">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <h2 className="font-display text-3xl tracking-tight">How it works</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {[["01", "Tell us about your project", "Provide your script and requirements."], ["02", "Choose your voice style", "Select the tone and delivery style."], ["03", "Get your recommendation", "Receive a simulated consultation recommendation."]].map(([number, title, description]) => (
                <div key={number}><p className="font-mono text-sm text-accent">{number}</p><h3 className="mt-3 text-base font-semibold">{title}</h3><p className="mt-1.5 text-sm text-muted">{description}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="consult" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="font-mono text-xs tracking-[0.2em] text-accent">(C) GET STARTED</p>
                <h2 className="mt-4 font-display text-3xl tracking-tight">Start a consultation</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">Share the essentials and receive a practical recommendation tailored to your project.</p>
                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <div><label className="mb-1.5 block text-sm font-medium" htmlFor="name">Name</label><input id="name" required minLength={2} value={form.name} onChange={(event) => updateField("name", event.target.value)} className="w-full rounded-lg border border-line bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-accent" placeholder="Your name" /></div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <SelectField id="project" label="Project type" value={form.project_type} onChange={(value) => updateField("project_type", value)} options={["Advertisement", "YouTube Video", "E-learning", "Podcast", "Corporate Video", "Other"]} />
                    <SelectField id="language" label="Language" value={form.language} onChange={(value) => updateField("language", value)} options={["English", "Hindi", "Telugu", "Tamil", "Other"]} />
                  </div>
                  <div><label className="mb-1.5 block text-sm font-medium" htmlFor="script">Script</label><textarea id="script" required minLength={10} rows={4} value={form.script} onChange={(event) => updateField("script", event.target.value)} className="w-full resize-y rounded-lg border border-line bg-background px-3 py-2 text-sm outline-none focus:border-accent" placeholder="Paste your script or a short excerpt" /></div>
                  <fieldset><legend className="mb-2 block text-sm font-medium">Voice style</legend><div className="flex flex-wrap gap-2">{voiceStyles.map((style) => <label key={style} className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm transition-colors ${form.voice_style === style ? "bg-accent text-background" : "border border-line text-muted hover:bg-background"}`}><input className="sr-only" type="radio" name="voice_style" value={style} checked={form.voice_style === style} onChange={(event) => updateField("voice_style", event.target.value)} />{style}</label>)}</div></fieldset>
                  <SelectField id="duration" label="Target duration" value={form.duration} onChange={(value) => updateField("duration", value)} options={["Under 1 minute", "1-3 minutes", "3-5 minutes", "5+ minutes"]} />
                  <div><label className="mb-1.5 block text-sm font-medium" htmlFor="requirements">Additional requirements <span className="font-normal text-muted">(optional)</span></label><textarea id="requirements" rows={3} value={form.requirements} onChange={(event) => updateField("requirements", event.target.value)} className="w-full resize-y rounded-lg border border-line bg-background px-3 py-2 text-sm outline-none focus:border-accent" placeholder="Any specific notes for the advisor" /></div>
                  {error && <p role="alert" className="text-sm text-destructive">Unable to generate your consultation right now. Please try again.</p>}
                  <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60">{isSubmitting && <span className="size-4 animate-spin rounded-full border-2 border-background/40 border-t-background" aria-hidden="true" />}{isSubmitting ? "Generating recommendation…" : "Get Voiceover Consultation"}</button>
                </form>
              </div>

              <div className="lg:pt-10">
                <div className="rounded-2xl border border-line bg-background p-6 md:p-8">
                  {recommendation ? <RecommendationCard recommendation={recommendation} project={submittedProject} onStartAnother={startAnother} /> : <EmptyRecommendation />}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted md:flex-row"><span className="font-display text-lg text-ink">VoxConsult<span className="text-accent">.</span></span><span className="font-mono text-xs tracking-[0.15em]">VOICEOVER CONSULTING · REACT + FASTAPI</span><span>© 2026 VoxConsult</span></div></footer>
    </div>
  );
}

function SelectField({ id, label, value, options, onChange }: { id: string; label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return <div><label className="mb-1.5 block text-sm font-medium" htmlFor={id}>{label}</label><select id={id} value={value} onChange={(event) => onChange(event.target.value)} className="w-full rounded-lg border border-line bg-background px-3 py-2 text-sm outline-none focus:border-accent">{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></div>;
}

function EmptyRecommendation() {
  return <><div className="flex items-center justify-between"><span className="font-mono text-[11px] tracking-[0.2em] text-muted">RECOMMENDATION</span><span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent">Awaiting brief</span></div><div className="mt-6 rounded-xl border border-dashed border-line p-8 text-center"><p className="font-display text-2xl">Your guidance will appear here.</p><p className="mt-3 text-sm leading-relaxed text-muted">Complete the short brief to receive a simulated recommendation from the VoxConsult service.</p></div></>;
}

function RecommendationCard({ recommendation, project, onStartAnother }: { recommendation: Recommendation; project: { project_type: string; language: string }; onStartAnother: () => void }) {
  const rows = [["Project type", project.project_type], ["Language", project.language], ["Voice style", recommendation.voice_style], ["Tone", recommendation.tone], ["Pacing", recommendation.pacing], ["Delivery", recommendation.delivery]];
  return <><div className="flex items-center justify-between"><span className="font-mono text-[11px] tracking-[0.2em] text-muted">RECOMMENDATION</span><span className="rounded-full bg-accent-soft px-2.5 py-1 font-mono text-[11px] text-accent">Received from FastAPI</span></div><div className="mt-6 space-y-px overflow-hidden rounded-xl border border-line bg-line">{rows.map(([label, value]) => <div className="flex items-center justify-between gap-4 bg-surface px-4 py-3" key={label}><span className="text-sm text-muted">{label}</span><span className="text-right text-sm font-medium">{value}</span></div>)}</div><div className="mt-5 rounded-xl bg-accent-soft p-4"><p className="font-mono text-[10px] tracking-[0.2em] text-accent">RECORDING TIP</p><p className="mt-2 text-sm leading-relaxed">{recommendation.recording_tip}</p></div><button type="button" onClick={onStartAnother} className="mt-5 w-full rounded-lg border border-line px-5 py-3 text-sm font-medium transition-colors hover:bg-surface">Start Another Consultation</button></>;
}
