import { Link } from 'react-router-dom'
import type { Feature } from '../data/askmate'

type Props = {
  feature: Feature
}

function FeatureCard({ feature }: Props) {
  return (
    <div className="card bg-base-200 hover:bg-base-300 transition shadow-md">
      <div className="card-body">
        <h3 className="card-title">{feature.title}</h3>
        <p className="opacity-80">{feature.description}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${feature.id}`} className="btn btn-primary">Explore</Link>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard

