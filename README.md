<div align="center">

# Numair Iqbal — Portfolio & Live AI Agent

### Backend & AI Engineer · Personal brand website with a real, working AI agent shipped on it

<p>
  <img src="https://img.shields.io/badge/Status-Live-12B3A3?style=for-the-badge" alt="status">
  <img src="https://img.shields.io/badge/AI%20Agent-Groq%20LLaMA%203.3%2070B-5B4FE9?style=for-the-badge" alt="ai">
  <img src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel" alt="vercel">
</p>

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="html5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="css3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="js">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" alt="node">
  <img src="https://img.shields.io/badge/Vercel%20Functions-000000?style=flat-square&logo=vercel&logoColor=white" alt="vercel-fn">
  <img src="https://img.shields.io/badge/Groq%20API-F55036?style=flat-square" alt="groq">
</p>

**[🔗 Live Site](#)** &nbsp;·&nbsp; **[📬 Contact](#-contact)** &nbsp;·&nbsp; **[📂 GitHub](https://github.com/Numair-Iqbal)**

</div>

<br>

## 📌 Overview

This is my personal portfolio — built as the capstone project for FlyRank AI's **General AI Fluency · Impact Project**. It's not a template. It's a real, deployed website with a real, working AI agent embedded on the page, backed by a live serverless API.

The brief was simple: *master the AI stack, build a personal brand with a real website, ship a personal agent.* This repo is that, end to end — design, frontend, backend function, deployment.

<br>

## ✨ Features

<table>
<tr>
<td width="50%" valign="top">

### 🎨 Design
- Custom light-theme UI — no template, no page builder
- Indigo & teal accent palette, Sora + Inter typography
- Fully responsive — mobile, tablet, desktop
- Smooth hover states, floating skill-chip animation

</td>
<td width="50%" valign="top">

### 🤖 Live AI Agent
- Real conversational agent, not a mock chatbot
- Powered by **Groq's LLaMA 3.3 70B**
- Fixed system prompt — only answers questions about my work
- Rate-limited to prevent abuse

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🧱 Architecture
- Static frontend + Vercel serverless function
- API key never exposed client-side (server-only env var)
- Clean separation: `index.html` / `style.css` / `agent.js`

</td>
<td width="50%" valign="top">

### 🔒 Security & Reliability
- `.env.local` gitignored — secrets never committed
- Input validation (empty / oversized requests rejected)
- Per-visitor request throttling on the API route

</td>
</tr>
</table>

<br>

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology |
|:---|:---|
| **Frontend** | HTML5 · CSS3 · Vanilla JavaScript (ES6) |
| **Fonts** | Sora (display) · Inter (body) · JetBrains Mono (code accents) |
| **Backend** | Vercel Serverless Functions (Node.js) |
| **AI Model** | Groq API — `llama-3.3-70b-versatile` |
| **Hosting** | Vercel |
| **Version Control** | Git & GitHub |

</div>

<br>

## 📸 Screenshots

### 🖥️ Website Walkthrough

<div align="center">

<table>
<tr>
<td align="center" width="33%"><b>Hero Section</b></td>
<td align="center" width="33%"><b>About</b></td>
<td align="center" width="33%"><b>What I Build</b></td>
</tr>
<tr>
<td align="center"><img src="./screenshots/01-hero-section.png" width="100%" alt="Hero section"></td>
<td align="center"><img src="./screenshots/02-about-section.png" width="100%" alt="About section"></td>
<td align="center"><img src="./screenshots/03-services-section.png" width="100%" alt="Services section"></td>
</tr>
<tr>
<td align="center"><sub>Intro, role, live status badge, floating skill chips</sub></td>
<td align="center"><sub>Bio with tabbed skills — Main Skills / Currently Learning</sub></td>
<td align="center"><sub>Backend APIs · AI Agents · Data · Automation</sub></td>
</tr>
</table>

<table>
<tr>
<td align="center" width="50%"><b>Portfolio</b></td>
<td align="center" width="50%"><b>Contact & Footer</b></td>
</tr>
<tr>
<td align="center"><img src="./screenshots/04-portfolio-section.png" width="100%" alt="Portfolio section"></td>
<td align="center"><img src="./screenshots/05-contact-footer-section.png" width="100%" alt="Contact and footer section"></td>
</tr>
<tr>
<td align="center"><sub>Real projects — FlyRank capstone & MedBot</sub></td>
<td align="center"><sub>Get-in-touch panel and footer links</sub></td>
</tr>
</table>

</div>

<br>

### 🤖 Live Agent — Behaviour Tests

All four states below were captured from the deployed agent, not mocked. Screenshots confirm each response.

<table>
<tr>
<td width="50%" valign="top">

**💤 Idle State**

`Agent` → renders with no request sent

Default state before a visitor has typed anything — suggested questions ready to click.

<img src="./screenshots/agent-idle-state.png" width="100%" alt="Agent idle state">

</td>
<td width="50%" valign="top">

**🧠 Tech Stack Question**

`Agent` → *"What's his tech stack?"*

Answers correctly from the fixed system prompt, without inventing tools I don't use.

<img src="./screenshots/agent-techstack-question.png" width="100%" alt="Agent answering a tech stack question">

</td>
</tr>
<tr>
<td width="50%" valign="top">

**💼 Work Question**

`Agent` → *"What has Numair built?"*

Correctly summarizes real projects — the FlyRank capstone and MedBot.

<img src="./screenshots/agent-work-question.png" width="100%" alt="Agent answering a work question">

</td>
<td width="50%" valign="top">

**🔒 Safety Guardrail**

`Agent` → off-topic question

Politely declines and redirects — the system prompt keeps it scoped to my work only.

<img src="./screenshots/agent-safety-guardrail.png" width="100%" alt="Agent redirecting an off-topic question">

</td>
</tr>
</table>

<br>

## 📂 Project Structure

```
numair-portfolio/
├── public/
│   ├── index.html          → Page markup
│   └── style.css           → All styling
├── api/
│   └── agent.js             → Serverless function — connects the chat box to Groq
├── screenshots/             → README preview images
├── .env.example              → Template for the required API key
├── .gitignore
├── package.json
└── README.md
```

<br>

## 🚀 Getting Started

<table>
<tr><td width="40px" align="center"><b>1</b></td><td>

Clone the repo
```bash
git clone https://github.com/Numair-Iqbal/numair-portfolio.git
cd numair-portfolio
```

</td></tr>
<tr><td align="center"><b>2</b></td><td>

Add your Groq API key
```bash
cp .env.example .env.local
# then paste your key into .env.local
```

</td></tr>
<tr><td align="center"><b>3</b></td><td>

Run locally with Vercel
```bash
npm install -g vercel
vercel dev
```

</td></tr>
<tr><td align="center"><b>4</b></td><td>

Open **http://localhost:3000** and try the live agent

</td></tr>
</table>

<br>

## ☁️ Deployment

Deployed on **Vercel** — push to `main`, import the repo on [vercel.com](https://vercel.com), add `GROQ_API_KEY` under **Settings → Environment Variables**, and deploy. No build step required.

<br>

## 📬 Contact

<div align="center">

**Numair Iqbal**
Backend AI Engineering Intern @ FlyRank AI · BS Computer Science, University of Layyah

<a href="https://github.com/Numair-Iqbal"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"></a>
<a href="#"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white"></a>

</div>

<br>

<div align="center">
<sub>Built as the capstone for FlyRank AI's General AI Fluency · Impact Project — © 2026 Numair Iqbal</sub>
</div>
