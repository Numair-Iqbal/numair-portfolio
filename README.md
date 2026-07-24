# Numair Iqbal — Portfolio + AI Agent

Personal brand website with a live AI agent, built for the FlyRank AI Fluency
capstone ("General AI Fluency · Impact Project").

## What's inside

- `public/index.html` — the website (intro, projects, stack, live agent chat)
- `api/agent.js` — a Vercel serverless function that connects the chat box to
  the Claude API, with a fixed system prompt and basic rate limiting
- `.env.example` — template for the API key (never commit the real key)

## Deploy steps (Vercel, free)

1. **Get a Claude API key**
   Go to [console.anthropic.com](https://console.anthropic.com), sign up, and
   create an API key. This is separate from a normal claude.ai account.

2. **Push this folder to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Add portfolio site with live AI agent"
   git remote add origin <your-new-repo-url>
   git push -u origin main
   ```

3. **Import into Vercel**
   - Go to [vercel.com](https://vercel.com), sign in with GitHub
   - Click "Add New → Project", select this repo
   - Leave build settings as default (Vercel auto-detects the `api/` folder)

4. **Add your API key as an environment variable**
   - In the Vercel project → Settings → Environment Variables
   - Add: `ANTHROPIC_API_KEY` = your key from step 1
   - Redeploy after adding it

5. **Test**
   - Open the live URL Vercel gives you
   - Try the chat box under "Ask my agent" — it should reply about Numair's work

## Submitting

Paste the live Vercel URL into the capstone's **Deliverable links** box and
click **Save submission**. One link covers both the website and the agent,
since the agent is embedded on the same page.
