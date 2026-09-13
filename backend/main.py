from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .models import ConsultationRequest, ConsultationResponse
from .services import build_recommendation


app = FastAPI(title="VoxConsult API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/api/services")
def list_services() -> dict[str, list[str]]:
    return {
        "services": [
            "Voice Selection",
            "Script & Delivery Guidance",
            "Recording Consultation",
        ]
    }


@app.post("/api/consultation", response_model=ConsultationResponse)
def create_consultation(request: ConsultationRequest) -> ConsultationResponse:
    return ConsultationResponse(
        success=True,
        recommendation=build_recommendation(request),
    )