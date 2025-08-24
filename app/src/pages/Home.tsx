import FeatureCard from '../components/FeatureCard'
import { appOverview, features, endpoints, setupSteps } from '../data/askmate'

function Home() {
  return (
    <div className="space-y-12">
      <section className="hero min-h-[40svh] bg-gradient-to-br from-primary/20 via-secondary/10 to-base-200 rounded-box">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {appOverview.name}
            </h1>
            <p className="py-6 opacity-90">
              {appOverview.summary}
            </p>
            <div className="join">
              <input className="input input-bordered join-item w-72" placeholder="Ask a question (mock)" />
              <button className="btn btn-primary join-item">Ask</button>
              <button className="btn join-item">🎤</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.id} feature={f} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">API Endpoints (from README)</h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {endpoints.map((e) => (
              <li key={e.id}>
                <div className="timeline-middle">⬤</div>
                <div className="timeline-start md:text-end mb-4">
                  <time className="font-mono text-sm opacity-70">{e.method}</time>
                  <div className="text-lg font-semibold">{e.path}</div>
                </div>
                <div className="timeline-end timeline-box bg-base-200">{e.description}</div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Setup Steps</h2>
          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Backend (Node)</div>
            <div className="collapse-content">
              <pre className="mockup-code text-sm whitespace-pre-wrap"><code>{setupSteps.backend.join('\n')}</code></pre>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">Frontend (React)</div>
            <div className="collapse-content">
              <pre className="mockup-code text-sm whitespace-pre-wrap"><code>{setupSteps.frontend.join('\n')}</code></pre>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Frontend</div>
              <div className="stat-value">React + Vite</div>
              <div className="stat-desc">Tailwind v4 + daisyUI</div>
            </div>
            <div className="stat">
              <div className="stat-title">Backend</div>
              <div className="stat-value">Node</div>
              <div className="stat-desc">Express + TS</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

