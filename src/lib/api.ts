export type ConsultationForm = {
  name: string;
  project_type: string;
  script: string;
  voice_style: string;
  language: string;
  duration: string;
  requirements: string;
};

export type Recommendation = {
  voice_style: string;
  tone: string;
  pacing: string;
  delivery: string;
  recording_tip: string;
};

export type ConsultationResponse = {
  success: boolean;
  recommendation: Recommendation;
};

const API_BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

export async function getServices(): Promise<string[]> {
  const response = await fetch(`${API_BASE_URL}/api/services`);
  if (!response.ok) throw new Error("Unable to load services");
  const data = (await response.json()) as { services: string[] };
  return data.services;
}

export async function createConsultation(
  form: ConsultationForm,
): Promise<ConsultationResponse> {
  const response = await fetch(`${API_BASE_URL}/api/consultation`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });

  if (!response.ok) throw new Error("Unable to generate consultation");
  return (await response.json()) as ConsultationResponse;
}