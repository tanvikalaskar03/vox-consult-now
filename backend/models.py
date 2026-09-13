from typing import Literal

from pydantic import BaseModel, Field


ProjectType = Literal[
    "Advertisement",
    "YouTube Video",
    "E-learning",
    "Podcast",
    "Corporate Video",
    "Other",
]
VoiceStyle = Literal["Professional", "Friendly", "Energetic", "Calm", "Storytelling"]
Language = Literal["English", "Hindi", "Telugu", "Tamil", "Other"]
Duration = Literal["Under 1 minute", "1-3 minutes", "3-5 minutes", "5+ minutes"]


class ConsultationRequest(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    project_type: ProjectType
    script: str = Field(min_length=10, max_length=5000)
    voice_style: VoiceStyle
    language: Language
    duration: Duration
    requirements: str = Field(default="", max_length=1000)


class Recommendation(BaseModel):
    voice_style: str
    tone: str
    pacing: str
    delivery: str
    recording_tip: str


class ConsultationResponse(BaseModel):
    success: bool
    recommendation: Recommendation