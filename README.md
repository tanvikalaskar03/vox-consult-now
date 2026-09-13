# VoxFlow Consulting

Build a simple, professional Online Voiceover Consulting & Recording Platform.

The project must be designed as a quick MVP that can be completed and demonstrated within approximately 1 hour. Do NOT over-engineer it.

1. Technology Stack

Frontend

React

TypeScript

Tailwind CSS

Use clean, responsive components

Keep the UI simple and professional

Backend

Python

FastAPI

REST APIs

The backend should be stateless

Do NOT add a database

Use in-memory/static data wherever necessary

Important

The frontend should communicate with the Python FastAPI backend through REST API calls.

Keep the code structure clean enough that I can explain the architecture in an interview.

2. Website Purpose

The website is for users who want voiceover consulting and recording assistance.

A user should be able to:

Understand the voiceover consulting service

Enter their project requirements

Choose a voiceover style

Submit a consultation request

See a simulated consultation/voiceover result

This is a demonstration project, so actual payment processing, authentication, and persistent storage are NOT required.

3. Design

Use a minimal, modern professional design.

Do NOT make it flashy.

Design requirements:

White/light background

One subtle primary accent color

Clean typography

Plenty of whitespace

Rounded cards

Simple navigation bar

Professional buttons

Responsive layout

Mobile friendly

Avoid excessive animations

Avoid gradients everywhere

Avoid unnecessary decorative elements

The website should look like a real SaaS/consulting product rather than a college project.

4. Pages

Create the following sections/pages.

Home Page

Navigation bar:

Logo: "VoxConsult"

Home

Services

How It Works

Get Started

Hero section:

Heading:

Professional Voiceover Consulting, Simplified.

Subheading:

"Get guidance on voice selection, tone, delivery and recording for your next voiceover project."

Primary button:

Start a Consultation

Secondary button:

View Services

Include a simple visual/card representing a voiceover consultation rather than a large stock image.

Services Section

Display 3 simple service cards:

Voice Selection

"Find the right voice style and tone for your project."

Script & Delivery Guidance

"Get recommendations for pacing, pronunciation and delivery."

Recording Consultation

"Improve your recording setup and voiceover quality."

Do not add unnecessary services.

5. How It Works

Create a simple 3-step section:

01 — Tell Us About Your Project

Provide your script and requirements.

02 — Choose Your Voice Style

Select the tone and delivery style.

03 — Get Your Recommendation

Receive a simulated consultation recommendation.

Keep this section visually simple.

6. Consultation Form

Create a dedicated Get Started / Consultation page.

Form fields:

Name

Text input

Project Type

Dropdown:

Advertisement

YouTube Video

E-learning

Podcast

Corporate Video

Other

Script

Large textarea.

Voice Style

Radio buttons or selectable cards:

Professional

Friendly

Energetic

Calm

Storytelling

Language

Dropdown:

English

Hindi

Telugu

Tamil

Other

Target Duration

Dropdown:

Under 1 minute

1–3 minutes

3–5 minutes

5+ minutes

Additional Requirements

Optional textarea.

Button:

Get Voiceover Consultation

7. Backend API

Create a Python FastAPI backend with these endpoints:

GET /api/services

Returns the available consulting services.

POST /api/consultation

Accepts the consultation form data.

Example request:

{
"name": "John",
"project_type": "Advertisement",
"script": "Sample script...",
"voice_style": "Professional",
"language": "English",
"duration": "1-3 minutes",
"requirements": "Clear and confident delivery"
}

The backend should process the request and return a simulated recommendation.

Example response:

{
"success": true,
"recommendation": {
"voice_style": "Professional",
"tone": "Clear and confident",
"pacing": "Moderate",
"delivery": "Natural and authoritative",
"recording_tip": "Use a quiet room and maintain consistent microphone distance"
}
}

The recommendation can be generated using simple Python logic based on the selected voice style and project type.

Do NOT integrate an external AI API.

Do NOT create a database.

8. Results Page / Result Component

After submitting the consultation form, show a clean Consultation Recommendation card.

Display:

Recommended Voice Style

Tone

Pacing

Delivery

Recording Tip

Also show the submitted project type and language.

Include a button:

Start Another Consultation

The result should clearly demonstrate that the React frontend received data from the Python backend.

9. Loading & Error Handling

When submitting the form:

Show a loading state on the button

Disable the button while submitting

Display a simple loading indicator

If the backend request fails:

Show:

"Unable to generate your consultation right now. Please try again."

Do not expose technical errors to the user.

10. Backend Architecture

Use a simple structure similar to:

backend/
├── main.py
├── models.py
└── services.py

main.py

FastAPI application

CORS configuration

API routes

models.py

Pydantic request/response models

services.py

Consultation recommendation logic

Keep the backend small and easy to explain.

11. Frontend Architecture

Use a structure similar to:

frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── services/
│ ├── types/
│ └── App.tsx

Create a small API service file for communicating with FastAPI.

For example:

services/api.ts

It should contain the API calls rather than putting fetch logic throughout the components.

12. Important Demo Requirement

The most important user flow should be:

Home
→ Start a Consultation
→ Fill Form
→ Submit
→ React sends POST request to FastAPI
→ FastAPI generates recommendation
→ React displays recommendation

Make this flow work reliably.

13. Do NOT Add

Because this is a time-limited interview project, DO NOT add:

User authentication

Login/signup

Database

Payment gateway

Admin dashboard

Chat system

Real-time messaging

Complex booking system

Social login

Email integration

External AI APIs

Subscription system

Complex animations

Unnecessary dashboards

Complex state management

Microservices

Keep the implementation focused.

14. Interview-Friendly Details

Make the code easy to explain.

Use:

React components

React state/hooks

REST API

FastAPI

Pydantic models

CORS

Basic validation

Separation of frontend and backend responsibilities

Add clear comments only where they help explain important logic.

Do not generate excessive comments.

15. Final Quality Requirements

Before finishing:

Make sure the frontend builds successfully.

Make sure the FastAPI backend starts successfully.

Make sure CORS allows the React frontend to communicate with the backend.

Make sure the consultation form submits successfully.

Make sure the recommendation returned by FastAPI appears on the frontend.

Make sure validation works.

Make sure the UI is responsive.

Remove unnecessary placeholder features.

Keep the overall implementation simple.

Prioritize a working end-to-end demo over additional features.

The final result should feel like a small but professionally designed voiceover consulting MVP, with the main technical demonstration being React → FastAPI → recommendation → React UI.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://vox-consult-now.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a4a4fa32-8df7-423b-909a-1bf7b8c01c06).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
