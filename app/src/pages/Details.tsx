import { useParams, Link } from 'react-router-dom'
import { features, endpoints } from '../data/askmate'

function Details() {
  const { id } = useParams()
  const feature = features.find((f) => f.id === id)
  const endpoint = endpoints.find((e) => e.id === id)

  if (!feature && !endpoint) {
    return (
      <div className="prose">
        <h2>Not found</h2>
        <p>The item you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">Back Home</Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {feature && (
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">{feature.title}</h2>
            <p>{feature.description}</p>
            <div className="card-actions justify-end">
              <Link to="/" className="btn">Back</Link>
            </div>
          </div>
        </div>
      )}

      {endpoint && (
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title">{endpoint.method} {endpoint.path}</h2>
            <p>{endpoint.description}</p>
            <div className="divider">Example</div>
<pre className="mockup-code whitespace-pre-wrap text-sm"><code>{`curl -X ${endpoint.method} \\
  "$VITE_API_BASE${endpoint.path}" \\
  -H 'Content-Type: application/json' \\
  -d '{"query":"What is AskMate?"}'`}</code></pre>
            <div className="card-actions justify-end">
              <Link to="/" className="btn">Back</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Details