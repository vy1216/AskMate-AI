import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">CreativeApp</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
          <li><NavLink to="/details/1" className={({ isActive }) => isActive ? 'active' : ''}>Details</NavLink></li>
          <li>
            <details>
              <summary>Theme</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                {['emerald', 'cupcake', 'corporate', 'dracula', 'synthwave'].map(theme => (
                  <li key={theme}>
                    <button onClick={() => document.documentElement.setAttribute('data-theme', theme)}>{theme}</button>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

