from .models import ConsultationRequest, Recommendation


STYLE_GUIDANCE = {
    "Professional": {
        "tone": "Clear and confident",
        "pacing": "Moderate",
        "delivery": "Natural and authoritative",
    },
    "Friendly": {
        "tone": "Warm and approachable",
        "pacing": "Conversational",
        "delivery": "Open and welcoming",
    },
    "Energetic": {
        "tone": "Bright and enthusiastic",
        "pacing": "Upbeat",
        "delivery": "Dynamic and engaging",
    },
    "Calm": {
        "tone": "Steady and reassuring",
        "pacing": "Measured",
        "delivery": "Gentle and composed",
    },
    "Storytelling": {
        "tone": "Expressive and human",
        "pacing": "Varied",
        "delivery": "Narrative and immersive",
    },
}


def build_recommendation(request: ConsultationRequest) -> Recommendation:
    guidance = STYLE_GUIDANCE[request.voice_style]
    tip = "Use a quiet room and maintain consistent microphone distance."

    if request.project_type == "Advertisement":
        tip = "Keep the opening crisp, then let key brand words breathe."
    elif request.project_type == "Podcast":
        tip = "Record slightly off-axis from the microphone to soften plosive sounds."
    elif request.project_type == "E-learning":
        tip = "Use clear phrasing and short pauses so each idea lands comfortably."

    return Recommendation(
        voice_style=request.voice_style,
        tone=guidance["tone"],
        pacing=guidance["pacing"],
        delivery=guidance["delivery"],
        recording_tip=tip,
    )