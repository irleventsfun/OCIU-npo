# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/2f8afc79-59cb-4ed5-a0fb-eb3af1338420

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/2f8afc79-59cb-4ed5-a0fb-eb3af1338420) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## CamoFlow OS

CamoFlow OS is a local-first AI operating system with Obsidian as the central brain.

### Features
- **Local-first**: Runs on CPU via Ollama (Qwen3 models).
- **Model Routing**: Auto-selects model size based on task complexity and RAM pressure.
- **Obsidian Brain**: Uses an Obsidian vault for memory, logs, and context.
- **Agentic Workflows**: Includes specialized agents for Code, Content, Voice, and Web Design.

### Stack
- **Backend**: FastAPI orchestration layer.
- **Frontend**: React + Tailwind + Shadcn UI.
- **Models**: Ollama (Qwen3-0.5B, 4B, 8B).
- **Deployment**: Docker Compose.

### Setup
1. Copy `.env.example` to `.env` and fill in API keys if needed (for fallback).
2. Install Ollama and pull required models:
   ```bash
   ollama pull qwen3:0.5b
   ollama pull qwen3:4b
   ollama pull qwen3:8b
   ```
3. Run with Docker Compose:
   ```bash
   docker-compose up --build
   ```

### Asset Configuration
For optimal performance of specialized agents:
- **Voice Studio**: Place 10–15 minutes of clean voice samples (.wav or .mp3) in `backend/assets/voice_samples/` for high-quality Coqui voice cloning.
- **3D Avatar**: Drop a clean front-facing photo in `backend/assets/avatar_faces/` (default: `user_face.jpg`).

### Business Suite Integration
The CamoFlow Business Suite is pre-configured to route through this OS. You can test the bridge using:
`POST /business-suite/content-studio` or `POST /business-suite/prospect-engine`.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- FastAPI
- Ollama

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/2f8afc79-59cb-4ed5-a0fb-eb3af1338420) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
